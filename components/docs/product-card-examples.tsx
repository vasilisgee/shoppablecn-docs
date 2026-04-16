"use client"

import * as React from "react"

import { PreviewFrame } from "@/components/docs/preview-frame"
import { ProductCard } from "@/components/ui/product-card"
import {
  mockProductNew,
  mockProductLongTitle,
  mockProductWithImages,
  mockProductWithSale,
  mockProductWithVariants,
  mockSceneArtPrintProduct,
} from "@/lib/mock-data"

function reorderProductImages(startIndex: number) {
  return {
    ...mockProductWithImages,
    id: `${mockProductWithImages.id}-${startIndex}`,
    images: [
      ...mockProductWithImages.images.slice(startIndex),
      ...mockProductWithImages.images.slice(0, startIndex),
    ],
  }
}

export function ProductCardVerticalExample() {
  return (
    <PreviewFrame className="max-w-sm">
      <ProductCard
        layout="vertical"
        product={mockSceneArtPrintProduct}
        variants="none"
      />
    </PreviewFrame>
  )
}

export function ProductCardHorizontalExample() {
  return (
    <PreviewFrame className="max-w-3xl">
      <ProductCard
        layout="horizontal"
        product={mockProductNew}
        variants="none"
      />
    </PreviewFrame>
  )
}

export function ProductCardHorizontalDetailedExample() {
  return (
    <PreviewFrame className="max-w-4xl">
      <ProductCard
        layout="horizontal-detailed"
        product={mockProductWithSale}
        variants="none"
      />
    </PreviewFrame>
  )
}

export function ProductCardBadgeExample() {
  return (
    <PreviewFrame className="max-w-sm">
      <ProductCard product={mockProductWithSale} showRating={false} />
    </PreviewFrame>
  )
}

export function ProductCardRatingExample() {
  return (
    <PreviewFrame className="max-w-sm">
      <ProductCard product={mockProductLongTitle} showRating />
    </PreviewFrame>
  )
}

export function ProductCardCompareAtExample() {
  return (
    <PreviewFrame className="max-w-sm">
      <ProductCard product={mockProductWithSale} showRating={false} />
    </PreviewFrame>
  )
}

export function ProductCardOverlayExample() {
  const handleAddToCart = React.useCallback(() => {
    return
  }, [])

  return (
    <PreviewFrame className="max-w-sm">
      <ProductCard
        onAddToCart={handleAddToCart}
        product={mockProductWithVariants}
        variants="overlay"
      />
    </PreviewFrame>
  )
}

export function ProductCardSlideshowExample() {
  return (
    <PreviewFrame className="max-w-sm">
      <ProductCard product={mockProductWithImages} />
    </PreviewFrame>
  )
}

export function ProductCardSlideshowControlsExample() {
  const slideshowProducts = [
    reorderProductImages(0),
    reorderProductImages(1),
    reorderProductImages(2),
    reorderProductImages(3),
  ]

  return (
    <PreviewFrame>
      <div className="grid gap-4 lg:grid-cols-2">
        <ProductCard product={slideshowProducts[0]} slideshowControls="both" />
        <ProductCard product={slideshowProducts[1]} slideshowControls="arrows" />
        <ProductCard product={slideshowProducts[2]} slideshowControls="dots" />
        <ProductCard product={slideshowProducts[3]} slideshowControls="none" />
      </div>
    </PreviewFrame>
  )
}
