"use client"

import * as React from "react"

import { PreviewFrame } from "@/components/docs/preview-frame"
import { ProductCard } from "@/components/ui/product-card"
import type { Product, ProductVariant } from "@/components/ui/types"

const verticalProduct: Product = {
  id: "art-print-001",
  title: "Rocket Launch Art Print",
  category: "Wall Art",
  images: [
    {
      src: "/mock/product-4.jpg",
      alt: "Rocket Launch Framed Art Print in an oak frame",
    },
  ],
  price: { amount: 14900, currency: "USD" },
}

const horizontalProduct: Product = {
  id: "pillow-001",
  title: "Pixel Heart Accent Pillow",
  category: "Decor",
  images: [
    {
      src: "/mock/product-2.jpg",
      alt: "Pixel Heart Accent Pillow with a retro rainbow heart graphic",
    },
  ],
  price: { amount: 5900, currency: "USD" },
}

const horizontalDetailedProduct: Product = {
  id: "controller-001",
  title: "Retro Wireless Controller",
  category: "Gaming",
  description:
    "A rechargeable retro-style controller with tactile face buttons and a familiar classic layout.",
  images: [
    {
      src: "/mock/product-3.jpg",
      alt: "Retro Wireless Controller with colorful face buttons",
    },
  ],
  price: { amount: 5900, currency: "USD" },
}

const badgeProduct: Product = {
  id: "pillow-001",
  title: "Pixel Heart Accent Pillow",
  images: [
    {
      src: "/mock/product-2.jpg",
      alt: "Pixel Heart Accent Pillow with a retro rainbow heart graphic",
    },
  ],
  price: { amount: 5900, currency: "USD" },
  badge: { label: "New", variant: "new" },
}

const ratingProduct: Product = {
  id: "art-print-001",
  title: "Rocket Launch Art Print",
  images: [
    {
      src: "/mock/product-4.jpg",
      alt: "Rocket Launch Framed Art Print in an oak frame",
    },
  ],
  price: { amount: 14900, currency: "USD" },
  rating: { value: 3.5, count: 41 },
}

const compareAtProduct: Product = {
  id: "controller-001",
  title: "Retro Wireless Controller",
  images: [
    {
      src: "/mock/product-3.jpg",
      alt: "Retro Wireless Controller with colorful face buttons",
    },
  ],
  price: { amount: 5900, compareAt: 7900, currency: "USD" },
}

const overlayVariants = [
  {
    id: "upholstery",
    name: "Upholstery",
    type: "swatch",
    required: true,
    options: [
      { label: "Oat", value: "oat", swatch: "#e6ddd1" },
      { label: "Pebble", value: "pebble", swatch: "#b8b0a4" },
      { label: "Charcoal", value: "charcoal", swatch: "#44403c" },
    ],
  },
  {
    id: "delivery",
    name: "Delivery",
    type: "radio",
    required: true,
    options: [
      { label: "Standard", value: "standard" },
      { label: "White Glove", value: "white-glove" },
    ],
  },
] satisfies ProductVariant[]

const overlayProduct: Product = {
  id: "chair-001",
  title: "Harbor Lounge Chair",
  images: [
    {
      src: "/mock/product-1.jpg",
      alt: "Harbor Lounge Chair in oat boucle",
    },
  ],
  price: { amount: 64900, currency: "USD" },
  variants: overlayVariants,
}

const slideshowProduct: Product = {
  id: "room-set-001",
  title: "Gaming Lounge Styling Set",
  images: [
    {
      src: "/mock/product-1.jpg",
      alt: "Harbor Lounge Chair in ivory upholstery",
    },
    {
      src: "/mock/product-2.jpg",
      alt: "Pixel Heart Accent Pillow with a retro rainbow heart graphic",
    },
    {
      src: "/mock/product-3.jpg",
      alt: "Retro Wireless Controller with colorful face buttons",
    },
    {
      src: "/mock/product-4.jpg",
      alt: "Rocket Launch Framed Art Print in an oak frame",
    },
  ],
  price: { amount: 72900, currency: "USD" },
}

function reorderProductImages(startIndex: number): Product {
  return {
    ...slideshowProduct,
    id: `${slideshowProduct.id}-${startIndex}`,
    images: [
      ...slideshowProduct.images.slice(startIndex),
      ...slideshowProduct.images.slice(0, startIndex),
    ],
  }
}

export function ProductCardVerticalExample() {
  return (
    <PreviewFrame className="max-w-sm">
      <ProductCard
        layout="vertical"
        product={verticalProduct}
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
        product={horizontalProduct}
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
        product={horizontalDetailedProduct}
        variants="none"
      />
    </PreviewFrame>
  )
}

export function ProductCardBadgeExample() {
  return (
    <PreviewFrame className="max-w-sm">
      <ProductCard product={badgeProduct} showRating={false} />
    </PreviewFrame>
  )
}

export function ProductCardRatingExample() {
  return (
    <PreviewFrame className="max-w-sm">
      <ProductCard product={ratingProduct} showRating />
    </PreviewFrame>
  )
}

export function ProductCardCompareAtExample() {
  return (
    <PreviewFrame className="max-w-sm">
      <ProductCard product={compareAtProduct} showRating={false} />
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
        product={overlayProduct}
        variants="overlay"
      />
    </PreviewFrame>
  )
}

export function ProductCardSlideshowExample() {
  return (
    <PreviewFrame className="max-w-sm">
      <ProductCard product={slideshowProduct} />
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
