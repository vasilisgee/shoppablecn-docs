"use client"

import * as React from "react"

import { PreviewFrame } from "@/components/docs/preview-frame"
import { ProductCard } from "@/components/ui/product-card"
import {
  mockProductNew,
  mockProductSimple,
  mockProductWithImages,
  mockProductWithSale,
  mockProductWithVariants,
} from "@/lib/mock-data"

export function ProductCardLeadExample() {
  return (
    <PreviewFrame className="max-w-sm">
      <ProductCard product={mockProductSimple} />
    </PreviewFrame>
  )
}

export function ProductCardVerticalExample() {
  return (
    <PreviewFrame className="max-w-sm">
      <ProductCard layout="vertical" product={mockProductSimple} variants="none" />
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
      <ProductCard product={mockProductNew} showRating />
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
  return (
    <PreviewFrame>
      <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-4">
        <ProductCard product={mockProductWithImages} slideshowControls="both" />
        <ProductCard
          product={mockProductWithImages}
          slideshowControls="arrows"
        />
        <ProductCard product={mockProductWithImages} slideshowControls="dots" />
        <ProductCard product={mockProductWithImages} slideshowControls="none" />
      </div>
    </PreviewFrame>
  )
}
