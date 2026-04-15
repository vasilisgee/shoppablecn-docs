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
  mockSceneChairProduct,
  mockSceneChairWithVariants,
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

function SceneFrame({ scene, children, className }: SceneFrameProps) {
  return (
    <PreviewFrame className={className}>
      <HotspotImage
        alt={scene.alt}
        height={scene.height}
        src={scene.src}
        width={scene.width}
      >
        {children}
      </HotspotImage>
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
      <HotspotPin label="Lounge chair product hotspot" x={51} y={67}>
        <ProductPinCard product={mockSceneChairProduct} />
      </HotspotPin>
      <HotspotPin label="Accent pillow product hotspot" x={51} y={53}>
        <ProductPinCard product={mockScenePillowProduct} />
      </HotspotPin>
      <HotspotPin label="Floor lamp tooltip hotspot" x={24} y={18}>
        <HotspotTooltip
          description="Brushed brass floor lamp with a linen shade and a weighted marble base."
          title="Arc floor lamp"
        />
      </HotspotPin>
    </SceneFrame>
  )
}

export function HotspotPinVariantsExample() {
  return (
    <SceneFrame scene={mockSceneProductHero}>
      <HotspotPin label="Plus pin on lounge chair" variant="plus" x={51} y={67}>
        <HotspotTooltip
          description="The plus pin works well for larger focal products like the upholstered chair."
          title="Harbor lounge chair"
        />
      </HotspotPin>
      <HotspotPin label="Dot pin on floor lamp" variant="dot" x={24} y={18}>
        <HotspotTooltip
          description="The compact dot pin is a lighter touch for secondary decor details like the lamp."
          title="Arc floor lamp"
        />
      </HotspotPin>
    </SceneFrame>
  )
}

export function HotspotContentTypesExample() {
  return (
    <SceneFrame scene={mockSceneMixedContent}>
      <HotspotPin label="Tooltip content hotspot for the floor lamp" x={24} y={18}>
        <HotspotTooltip
          description="Brushed brass and linen bring a softer, editorial feel to the seating corner."
          title="Arc floor lamp"
        />
      </HotspotPin>
      <HotspotPin label="Link content hotspot on the wall art" variant="dot" x={82} y={24}>
        <HotspotLink href="/docs/components/product-card" label="See the full room edit" />
      </HotspotPin>
      <HotspotPin label="Product card content hotspot on the chair" x={51} y={67}>
        <ProductPinCard product={mockSceneChairProduct} />
      </HotspotPin>
    </SceneFrame>
  )
}

export function HotspotOverlayInPinExample() {
  return (
    <SceneFrame scene={mockSceneMixedContent}>
      <HotspotPin label="Overlay product card hotspot on the chair" x={51} y={67}>
        <ProductPinCard overlay product={mockSceneChairWithVariants} />
      </HotspotPin>
      <HotspotPin label="Companion tooltip hotspot on the pillow" x={51} y={53}>
        <HotspotTooltip
          description="The printed pillow layers warmth and color into the otherwise neutral chair."
          title="Solstice accent pillow"
        />
      </HotspotPin>
    </SceneFrame>
  )
}
