"use client"

import * as React from "react"

import { PreviewFrame } from "@/components/docs/preview-frame"
import { HotspotImage } from "@/components/ui/hotspot-image"
import { HotspotLink } from "@/components/ui/hotspot-link"
import { HotspotPin } from "@/components/ui/hotspot-pin"
import { HotspotTooltip } from "@/components/ui/hotspot-tooltip"
import { ProductCard } from "@/components/ui/product-card"
import type { Product } from "@/components/ui/types"
import {
  mockSceneArtPrintProduct,
  mockSceneChairProduct,
  mockSceneChairWithVariants,
  mockSceneControllerProduct,
  mockSceneLivingRoom,
  mockSceneMixedContent,
  mockScenePillowProduct,
  mockSceneProductHero,
  type MockScene,
} from "@/lib/mock-data"

type SceneFrameProps = {
  scene: MockScene
  children: React.ReactNode
  className?: string
}

const HOTSPOT_PREVIEW_WIDTH = 680

function SceneFrame({ scene, children, className }: SceneFrameProps) {
  const previewWidth = Math.min(HOTSPOT_PREVIEW_WIDTH, scene.width)
  const previewHeight = Math.round((scene.height * previewWidth) / scene.width)

  return (
    <PreviewFrame className={className}>
      <div className="mx-auto overflow-hidden" style={{ width: `${previewWidth}px` }}>
        <HotspotImage
          alt={scene.alt}
          height={previewHeight}
          src={scene.src}
          width={previewWidth}
        >
          {children}
        </HotspotImage>
      </div>
    </PreviewFrame>
  )
}

function ProductPinCard({
  product,
  overlay = false,
}: {
  product: Product
  overlay?: boolean
}) {
  const handleAddToCart = React.useCallback(() => {
    return
  }, [])

  return (
    <div className="w-[320px]">
      {overlay ? (
        <ProductCard
          onAddToCart={handleAddToCart}
          product={product}
          variants="overlay"
        />
      ) : (
        <ProductCard product={product} variants="none" />
      )}
    </div>
  )
}

export function HotspotBasicSceneExample() {
  return (
    <SceneFrame scene={mockSceneLivingRoom}>
      <HotspotPin label="Lounge chair product hotspot" x={40} y={58}>
        <ProductPinCard product={mockSceneChairProduct} />
      </HotspotPin>
      <HotspotPin label="Accent pillow product hotspot" x={40} y={43}>
        <ProductPinCard product={mockScenePillowProduct} />
      </HotspotPin>
      <HotspotPin label="Floor lamp tooltip hotspot" variant="dot" x={16} y={11}>
        <HotspotTooltip
          description="A matte black floor lamp that pools warm ambient light over the chair and desk side of the room."
          title="Arc floor lamp"
        />
      </HotspotPin>
      <HotspotPin label="Retro controller product hotspot" variant="dot" x={33} y={88}>
        <ProductPinCard product={mockSceneControllerProduct} />
      </HotspotPin>
      <HotspotPin label="Rocket art print product hotspot" x={71} y={18}>
        <ProductPinCard product={mockSceneArtPrintProduct} />
      </HotspotPin>
    </SceneFrame>
  )
}

export function HotspotPinVariantsExample() {
  return (
    <SceneFrame scene={mockSceneProductHero}>
      <HotspotPin label="Plus pin on lounge chair" variant="plus" x={40} y={58}>
        <HotspotTooltip
          description="The plus pin works well for larger focal products like the upholstered chair."
          title="Harbor lounge chair"
        />
      </HotspotPin>
      <HotspotPin label="Plus pin on wall art" variant="plus" x={71} y={18}>
        <HotspotTooltip
          description="A plus pin also works well for larger decorative pieces like the framed wall art."
          title="Rocket Launch Art Print"
        />
      </HotspotPin>
      <HotspotPin label="Dot pin on controller" variant="dot" x={33} y={88}>
        <HotspotTooltip
          description="The compact dot pin is a lighter touch for smaller accessories like the retro controller."
          title="Retro Wireless Controller"
        />
      </HotspotPin>
    </SceneFrame>
  )
}

export function HotspotContentTypesExample() {
  return (
    <SceneFrame scene={mockSceneMixedContent}>
      <HotspotPin label="Tooltip content hotspot for the floor lamp" variant="dot" x={16} y={11}>
        <HotspotTooltip
          description="The oversized lamp softens the gaming setup with warm light and gives the corner a more editorial feel."
          title="Arc floor lamp"
        />
      </HotspotPin>
      <HotspotPin label="Link content hotspot on the wall art" variant="dot" x={71} y={18}>
        <HotspotLink href="/docs/components/product-card" label="See the full room edit" />
      </HotspotPin>
      <HotspotPin label="Product card content hotspot on the controller" x={33} y={88}>
        <ProductPinCard product={mockSceneControllerProduct} />
      </HotspotPin>
      <HotspotPin label="Product card content hotspot on the chair" x={40} y={58}>
        <ProductPinCard product={mockSceneChairProduct} />
      </HotspotPin>
    </SceneFrame>
  )
}

export function HotspotOverlayInPinExample() {
  return (
    <SceneFrame scene={mockSceneMixedContent}>
      <HotspotPin label="Overlay product card hotspot on the chair" x={40} y={58}>
        <ProductPinCard overlay product={mockSceneChairWithVariants} />
      </HotspotPin>
      <HotspotPin label="Companion tooltip hotspot on the pillow" variant="dot" x={40} y={43}>
        <HotspotTooltip
          description="The pixel heart pillow brings the strongest hit of color into the otherwise neutral chair."
          title="Pixel Heart Accent Pillow"
        />
      </HotspotPin>
      <HotspotPin label="Companion link hotspot on the wall art" variant="dot" x={71} y={18}>
        <HotspotLink href="/docs/components/hotspot-image" label="Open the room guide" />
      </HotspotPin>
      <HotspotPin label="Companion tooltip hotspot on the controller" variant="dot" x={33} y={88}>
        <HotspotTooltip
          description="The controller pin keeps the media setup feeling shoppable without overwhelming the main chair overlay."
          title="Retro Wireless Controller"
        />
      </HotspotPin>
    </SceneFrame>
  )
}
