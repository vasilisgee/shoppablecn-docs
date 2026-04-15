"use client"

import * as React from "react"

import { PreviewFrame } from "@/components/docs/preview-frame"
import { HotspotImage } from "@/components/ui/hotspot-image"
import { HotspotLink } from "@/components/ui/hotspot-link"
import { HotspotPin } from "@/components/ui/hotspot-pin"
import { HotspotTooltip } from "@/components/ui/hotspot-tooltip"
import { ProductCard } from "@/components/ui/product-card"
import {
  mockProductSimple,
  mockProductWithImages,
  mockProductWithVariants,
  mockSceneLivingRoom,
  mockSceneMixedContent,
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
  overlay = false,
}: {
  overlay?: boolean
}) {
  const handleAddToCart = React.useCallback(() => {
    return
  }, [])

  return (
    <div className="w-[320px]">
      <ProductCard
        onAddToCart={handleAddToCart}
        product={overlay ? mockProductWithVariants : mockProductWithImages}
        variants={overlay ? "overlay" : "none"}
      />
    </div>
  )
}

export function HotspotBasicSceneExample() {
  return (
    <SceneFrame scene={mockSceneLivingRoom}>
      <HotspotPin label="Simple cap product hotspot" x={24} y={52}>
        <ProductPinCard />
      </HotspotPin>
      <HotspotPin label="Weekend bundle hotspot" x={56} y={60}>
        <ProductPinCard />
      </HotspotPin>
      <HotspotPin label="Side table tooltip hotspot" x={77} y={28}>
        <HotspotTooltip
          description="Solid oak table styling the scene with warm tonal contrast."
          title="Oak side table"
        />
      </HotspotPin>
    </SceneFrame>
  )
}

export function HotspotPinVariantsExample() {
  return (
    <SceneFrame scene={mockSceneProductHero}>
      <HotspotPin label="Plus pin example" variant="plus" x={36} y={28}>
        <HotspotTooltip
          description="Default plus pin with a small tooltip."
          title="Plus pin"
        />
      </HotspotPin>
      <HotspotPin label="Dot pin example" variant="dot" x={74} y={74}>
        <HotspotTooltip
          description="Compact dot pin for denser hotspot layouts."
          title="Dot pin"
        />
      </HotspotPin>
    </SceneFrame>
  )
}

export function HotspotContentTypesExample() {
  return (
    <SceneFrame scene={mockSceneMixedContent}>
      <HotspotPin label="Tooltip content hotspot" x={52} y={32}>
        <HotspotTooltip
          description="Soft-loop lining keeps warmth high without adding bulk to the silhouette."
          title="Brushed fleece interior"
        />
      </HotspotPin>
      <HotspotPin label="Link content hotspot" variant="dot" x={79} y={20}>
        <HotspotLink href="/docs/components/product-card" label="Open the lookbook" />
      </HotspotPin>
      <HotspotPin label="Product card content hotspot" x={22} y={64}>
        <div className="w-[320px]">
          <ProductCard product={mockProductSimple} variants="none" />
        </div>
      </HotspotPin>
    </SceneFrame>
  )
}

export function HotspotOverlayInPinExample() {
  return (
    <SceneFrame scene={mockSceneMixedContent}>
      <HotspotPin label="Overlay product card hotspot" x={22} y={64}>
        <ProductPinCard overlay />
      </HotspotPin>
      <HotspotPin label="Companion tooltip hotspot" x={52} y={32}>
        <HotspotTooltip
          description="Overlay mode still works when ProductCard is embedded inside a pin."
          title="Nested quick buy"
        />
      </HotspotPin>
    </SceneFrame>
  )
}

export function HotspotResponsiveExample() {
  return (
    <PreviewFrame>
      <div className="w-[375px] max-w-full rounded-lg border border-dashed p-3">
        <HotspotImage
          alt={mockSceneLivingRoom.alt}
          height={mockSceneLivingRoom.height}
          src={mockSceneLivingRoom.src}
          width={mockSceneLivingRoom.width}
        >
          <HotspotPin label="Responsive product hotspot" x={24} y={52}>
            <div className="w-[320px]">
              <ProductCard product={mockProductSimple} variants="none" />
            </div>
          </HotspotPin>
          <HotspotPin label="Responsive tooltip hotspot" variant="dot" x={77} y={28}>
            <HotspotTooltip
              description="Narrow containers keep the scene scrollable instead of squeezing the image."
              title="Horizontal overflow"
            />
          </HotspotPin>
        </HotspotImage>
      </div>
    </PreviewFrame>
  )
}

export function HotspotMultipleScenesExample() {
  return (
    <div className="grid gap-4 xl:grid-cols-2">
      <SceneFrame className="h-full" scene={mockSceneLivingRoom}>
        <HotspotPin label="Scene one hotspot" x={24} y={52}>
          <HotspotTooltip
            description="One scene can hold merch and editorial context together."
            title="Living room scene"
          />
        </HotspotPin>
      </SceneFrame>

      <SceneFrame className="h-full" scene={mockSceneProductHero}>
        <HotspotPin label="Scene two hotspot" x={55} y={54}>
          <div className="w-[320px]">
            <ProductCard product={mockProductWithImages} variants="none" />
          </div>
        </HotspotPin>
      </SceneFrame>
    </div>
  )
}
