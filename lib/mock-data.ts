import type { Product } from "@/components/ui/types"

const mockProductImageSources = [
  "/mock/product-1.jpg",
  "/mock/product-2.jpg",
  "/mock/product-3.jpg",
] as const

function getMockImage(index: number, alt: string) {
  return {
    src: mockProductImageSources[index % mockProductImageSources.length],
    alt,
  }
}

function getMockImages(...alts: [string, ...string[]]) {
  return alts.map((alt, index) => getMockImage(index, alt))
}

export const mockProductSimple: Product = {
  id: "harbor-lounge-chair",
  title: "Harbor Lounge Chair",
  category: "Seating",
  images: [
    getMockImage(
      0,
      "Harbor Lounge Chair in ivory upholstery with warm oak legs"
    ),
  ],
  price: {
    amount: 42900,
    currency: "USD",
  },
}

export const mockProductNew: Product = {
  id: "solstice-accent-pillow",
  title: "Solstice Accent Pillow",
  category: "Decor",
  images: [
    getMockImage(
      1,
      "Solstice Accent Pillow with an abstract print in yellow, green, coral, and blush"
    ),
  ],
  price: {
    amount: 6800,
    currency: "USD",
  },
  rating: {
    value: 4.5,
    count: 128,
  },
  badge: {
    label: "New",
    variant: "new",
  },
}

export const mockProductWithSale: Product = {
  id: "arc-floor-lamp",
  title: "Arc Floor Lamp",
  category: "Lighting",
  description:
    "A brushed brass floor lamp with a linen shade and marble base that adds warm ambient light to living rooms and reading corners.",
  images: [
    getMockImage(
      2,
      "Arc Floor Lamp with a brushed brass stem, linen shade, and marble base"
    ),
  ],
  price: {
    amount: 18900,
    compareAt: 22900,
    currency: "USD",
  },
  rating: {
    value: 4,
    count: 84,
  },
  badge: {
    label: "Sale",
    variant: "sale",
  },
}

export const mockProductLongTitle: Product = {
  id: "harbor-lounge-chair-oversized",
  title:
    "Harbor Lounge Chair with Oversized Cushions, Tailored Upholstery, and Solid Oak Legs for Layered Living Rooms",
  category: "Seating",
  images: [
    getMockImage(
      0,
      "Harbor Lounge Chair with oversized cushions and tailored ivory upholstery"
    ),
  ],
  price: {
    amount: 54500,
    currency: "USD",
  },
  rating: {
    value: 4.5,
    count: 42,
  },
}

export const mockProductNoCategory: Product = {
  id: "solstice-accent-pillow-unlabeled",
  title: "Solstice Accent Pillow",
  images: [
    getMockImage(
      1,
      "Solstice Accent Pillow with oversized abstract shapes in warm tones"
    ),
  ],
  price: {
    amount: 6200,
    currency: "USD",
  },
  rating: {
    value: 4,
    count: 23,
  },
}

export const mockProductDetailed: Product = {
  id: "harbor-lounge-chair-signature",
  title: "Harbor Lounge Chair Signature Edition",
  category: "Seating",
  description:
    "A tailored lounge chair with deep cushioning, oak legs, and a supportive upright silhouette designed for living rooms and reading corners.",
  images: getMockImages(
    "Harbor Lounge Chair Signature Edition in ivory upholstery",
    "Harbor Lounge Chair Signature Edition styled with the Solstice Accent Pillow",
    "Harbor Lounge Chair Signature Edition staged beside the Arc Floor Lamp"
  ),
  price: {
    amount: 54900,
    compareAt: 62900,
    currency: "USD",
  },
  rating: {
    value: 5,
    count: 311,
  },
  badge: {
    label: "Best Seller",
    variant: "default",
  },
  href: "/products/harbor-lounge-chair-signature",
  variants: [
    {
      id: "upholstery",
      name: "Upholstery",
      type: "swatch",
      required: true,
      options: [
        { label: "Bone", value: "bone", swatch: "#e7e2d9" },
        { label: "Sand", value: "sand", swatch: "#d4c4b2" },
      ],
    },
  ],
}

export const mockProductBrokenImage: Product = {
  id: "drift-side-table",
  title: "Drift Side Table",
  category: "Tables",
  images: [
    {
      src: "/mock/does-not-exist.jpg",
      alt: "Drift Side Table with intentionally broken image source",
    },
  ],
  price: {
    amount: 15800,
    currency: "USD",
  },
  rating: {
    value: 3.5,
    count: 19,
  },
}

export const mockProductLowRating: Product = {
  id: "gallery-accent-pillow",
  title: "Gallery Accent Pillow",
  category: "Decor",
  images: [
    getMockImage(
      1,
      "Gallery Accent Pillow with an abstract print and relaxed brushed texture"
    ),
  ],
  price: {
    amount: 2800,
    currency: "USD",
  },
  rating: {
    value: 1.5,
    count: 1248,
  },
}

export const mockProductWithImages: Product = {
  id: "living-room-styling-set",
  title: "Living Room Styling Set",
  category: "Bundles",
  images: [
    getMockImage(
      0,
      "Living Room Styling Set including the Harbor Lounge Chair"
    ),
    getMockImage(
      1,
      "Living Room Styling Set including the Solstice Accent Pillow"
    ),
    getMockImage(
      2,
      "Living Room Styling Set including the Arc Floor Lamp"
    ),
  ],
  price: {
    amount: 58900,
    currency: "USD",
  },
  rating: {
    value: 4.2,
    count: 56,
  },
}

export const mockProductWithVariants: Product = {
  id: "harbor-lounge-chair-custom",
  title: "Harbor Lounge Chair Custom",
  category: "Seating",
  description:
    "A configurable lounge chair setup with upholstery, finish, and delivery options for building a polished living-room corner.",
  images: [
    getMockImage(
      0,
      "Harbor Lounge Chair Custom front view in ivory upholstery"
    ),
    getMockImage(
      1,
      "Harbor Lounge Chair Custom styled with the Solstice Accent Pillow"
    ),
    getMockImage(
      2,
      "Harbor Lounge Chair Custom staged beside the Arc Floor Lamp"
    ),
  ],
  price: {
    amount: 48900,
    compareAt: 54900,
    currency: "USD",
  },
  rating: {
    value: 4.7,
    count: 214,
  },
  badge: {
    label: "Made to Order",
    variant: "default",
  },
  variants: [
    {
      id: "upholstery",
      name: "Upholstery",
      type: "swatch",
      required: true,
      options: [
        { label: "Ivory", value: "ivory", swatch: "#e7e2d9" },
        { label: "Sand", value: "sand", swatch: "#d4c4b2" },
        { label: "Olive", value: "olive", swatch: "#7e8b72" },
        { label: "Charcoal", value: "charcoal", swatch: "#50545a" },
      ],
    },
    {
      id: "leg-finish",
      name: "Leg finish",
      type: "pills",
      required: true,
      options: [
        { label: "Oak", value: "oak" },
        { label: "Walnut", value: "walnut" },
        { label: "Black", value: "black" },
        { label: "Brass", value: "brass", disabled: true },
      ],
    },
    {
      id: "accent-pillow",
      name: "Accent pillow",
      type: "select",
      options: [
        { label: "None", value: "none" },
        { label: "Solstice", value: "solstice" },
        { label: "Gallery", value: "gallery" },
      ],
    },
    {
      id: "seat-depth",
      name: "Seat depth",
      type: "slider",
      sliderConfig: {
        min: 32,
        max: 40,
        step: 1,
        unit: "in",
      },
      options: [],
    },
    {
      id: "add-ons",
      name: "Add-ons",
      type: "checkbox",
      options: [
        { label: "Matching ottoman", value: "matching-ottoman" },
        { label: "Fabric protector", value: "fabric-protector" },
        { label: "Assembly service", value: "assembly-service" },
      ],
    },
    {
      id: "delivery",
      name: "Delivery",
      type: "radio",
      required: true,
      options: [
        { label: "Standard", value: "standard" },
        { label: "Room of choice", value: "room-of-choice" },
        { label: "White glove", value: "white-glove" },
      ],
    },
  ],
}

export const mockSceneChairProduct: Product = {
  id: "harbor-lounge-chair",
  title: "Harbor Lounge Chair",
  category: "Seating",
  description:
    "A soft ivory lounge chair with squared arms, plush cushioning, and warm oak legs for relaxed living rooms.",
  images: [
    getMockImage(
      0,
      "Harbor Lounge Chair in ivory upholstery with warm oak legs"
    ),
  ],
  price: {
    amount: 42900,
    currency: "USD",
  },
  rating: {
    value: 4.8,
    count: 94,
  },
}

export const mockScenePillowProduct: Product = {
  id: "solstice-accent-pillow",
  title: "Solstice Accent Pillow",
  category: "Decor",
  description:
    "An abstract printed accent pillow with warm earth tones and a soft brushed cover.",
  images: [
    getMockImage(
      1,
      "Solstice Accent Pillow with an abstract print in yellow, green, coral, and blush"
    ),
  ],
  price: {
    amount: 6800,
    currency: "USD",
  },
  rating: {
    value: 4.6,
    count: 58,
  },
  badge: {
    label: "New",
    variant: "new",
  },
}

export const mockSceneChairWithVariants: Product = {
  id: "harbor-lounge-chair-custom",
  title: "Harbor Lounge Chair",
  category: "Seating",
  description:
    "Customize the Harbor Lounge Chair with upholstery, finish, and delivery options for your living room.",
  images: [
    getMockImage(
      0,
      "Harbor Lounge Chair in ivory upholstery with warm oak legs"
    ),
    getMockImage(
      1,
      "Harbor Lounge Chair styled with the Solstice Accent Pillow"
    ),
    getMockImage(
      2,
      "Harbor Lounge Chair staged beside a brass floor lamp"
    ),
  ],
  price: {
    amount: 48900,
    compareAt: 54900,
    currency: "USD",
  },
  rating: {
    value: 4.9,
    count: 126,
  },
  badge: {
    label: "Best Seller",
    variant: "default",
  },
  variants: [
    {
      id: "upholstery",
      name: "Upholstery",
      type: "swatch",
      required: true,
      options: [
        { label: "Ivory", value: "ivory", swatch: "#e6ddd3" },
        { label: "Sand", value: "sand", swatch: "#d4c4b2" },
        { label: "Olive", value: "olive", swatch: "#7e8b72" },
        { label: "Charcoal", value: "charcoal", swatch: "#50545a" },
      ],
    },
    {
      id: "leg-finish",
      name: "Leg finish",
      type: "pills",
      required: true,
      options: [
        { label: "Oak", value: "oak" },
        { label: "Walnut", value: "walnut" },
        { label: "Black", value: "black" },
      ],
    },
    {
      id: "cushion-fill",
      name: "Cushion fill",
      type: "select",
      options: [
        { label: "Standard foam", value: "foam" },
        { label: "Feather blend", value: "feather-blend" },
        { label: "Performance fill", value: "performance-fill" },
      ],
    },
    {
      id: "seat-depth",
      name: "Seat depth",
      type: "slider",
      sliderConfig: {
        min: 32,
        max: 40,
        step: 1,
        unit: "in",
      },
      options: [],
    },
    {
      id: "add-ons",
      name: "Add-ons",
      type: "checkbox",
      options: [
        { label: "Matching ottoman", value: "ottoman" },
        { label: "Fabric protector", value: "fabric-protector" },
        { label: "White glove assembly", value: "white-glove" },
      ],
    },
    {
      id: "delivery",
      name: "Delivery",
      type: "radio",
      required: true,
      options: [
        { label: "Standard", value: "standard" },
        { label: "Room of choice", value: "room-of-choice" },
        { label: "White glove", value: "white-glove" },
      ],
    },
  ],
}

export const mockProducts: Product[] = [
  mockProductNew,
  mockProductWithSale,
  mockProductSimple,
  mockProductLongTitle,
  mockProductNoCategory,
  mockProductDetailed,
  mockProductBrokenImage,
  mockProductLowRating,
]

type VariantSet = NonNullable<Product["variants"]>

const allQuickOptionVariants = mockProductWithVariants.variants ?? []
const swatchVariant = allQuickOptionVariants[0]
const pillsVariant = allQuickOptionVariants[1]
const selectVariant = allQuickOptionVariants[2]
const sliderVariant = allQuickOptionVariants[3]
const checkboxVariant = allQuickOptionVariants[4]
const radioVariant = allQuickOptionVariants[5]

export const mockSwatchOnlyVariants: VariantSet = swatchVariant
  ? [swatchVariant]
  : []

export const mockPillsOnlyVariants: VariantSet = pillsVariant
  ? [pillsVariant]
  : []

export const mockSelectOnlyVariants: VariantSet = selectVariant
  ? [selectVariant]
  : []

export const mockSliderOnlyVariants: VariantSet = sliderVariant
  ? [sliderVariant]
  : []

export const mockCheckboxOnlyVariants: VariantSet = checkboxVariant
  ? [checkboxVariant]
  : []

export const mockRadioOnlyVariants: VariantSet = radioVariant
  ? [radioVariant]
  : []

export const mockAllQuickOptionVariants: VariantSet = allQuickOptionVariants

export const mockDisabledQuickOptionVariants: VariantSet = [
  swatchVariant
    ? {
        ...swatchVariant,
        options: swatchVariant.options.map((option) =>
          option.value === "charcoal" || option.value === "olive"
            ? { ...option, disabled: true }
            : option
        ),
      }
    : undefined,
  pillsVariant
    ? {
        ...pillsVariant,
        options: pillsVariant.options.map((option) =>
          option.value === "black" || option.value === "brass"
            ? { ...option, disabled: true }
            : option
        ),
      }
    : undefined,
  selectVariant
    ? {
        ...selectVariant,
        options: selectVariant.options.map((option) =>
          option.value === "gallery" ? { ...option, disabled: true } : option
        ),
      }
    : undefined,
  checkboxVariant
    ? {
        ...checkboxVariant,
        options: checkboxVariant.options.map((option) =>
          option.value === "assembly-service"
            ? { ...option, disabled: true }
            : option
        ),
      }
    : undefined,
  radioVariant
    ? {
        ...radioVariant,
        options: radioVariant.options.map((option) =>
          option.value === "white-glove"
            ? { ...option, disabled: true }
            : option
        ),
      }
    : undefined,
].filter((variant): variant is VariantSet[number] => Boolean(variant))

type MockSceneContent =
  | { kind: "product"; product: Product }
  | { kind: "tooltip"; title: string; description: string }
  | { kind: "link"; label: string; href: string }

export type MockScene = {
  id: string
  src: string
  alt: string
  width: number
  height: number
  pins: Array<{
    id: string
    x: number
    y: number
    content: MockSceneContent
  }>
}

const defaultSceneSize = {
  width: 640,
  height: 960,
} as const

export const mockSceneLivingRoom: MockScene = {
  id: "living-room",
  src: "/mock/product-scene.jpg",
  alt: "Living room scene with a lounge chair, accent pillow, floor lamp, and framed wall art",
  ...defaultSceneSize,
  pins: [
    {
      id: "living-room-chair",
      x: 51,
      y: 67,
      content: { kind: "product", product: mockSceneChairProduct },
    },
    {
      id: "living-room-pillow",
      x: 51,
      y: 53,
      content: { kind: "product", product: mockScenePillowProduct },
    },
    {
      id: "living-room-lamp",
      x: 24,
      y: 18,
      content: {
        kind: "tooltip",
        title: "Arc floor lamp",
        description:
          "Brushed brass floor lamp with a linen shade and a weighted marble base.",
      },
    },
  ],
}

export const mockSceneProductHero: MockScene = {
  id: "product-hero",
  src: "/mock/product-scene.jpg",
  alt: "Living room scene with a lounge chair, accent pillow, floor lamp, and framed wall art",
  ...defaultSceneSize,
  pins: [
    {
      id: "product-hero-chair",
      x: 51,
      y: 67,
      content: {
        kind: "tooltip",
        title: "Harbor lounge chair",
        description:
          "Squared arms and deep cushioning make the chair the focal point of the room.",
      },
    },
    {
      id: "product-hero-lamp",
      x: 24,
      y: 18,
      content: {
        kind: "tooltip",
        title: "Arc floor lamp",
        description:
          "A slim brass silhouette adds warm task lighting without taking over the scene.",
      },
    },
    {
      id: "product-hero-link",
      x: 82,
      y: 24,
      content: {
        kind: "link",
        label: "See the full room edit",
        href: "/docs/components/product-card",
      },
    },
  ],
}

export const mockSceneMixedContent: MockScene = {
  id: "mixed-content",
  src: "/mock/product-scene.jpg",
  alt: "Living room scene with a lounge chair, accent pillow, floor lamp, and framed wall art",
  ...defaultSceneSize,
  pins: [
    {
      id: "mixed-product",
      x: 51,
      y: 67,
      content: { kind: "product", product: mockSceneChairWithVariants },
    },
    {
      id: "mixed-tooltip",
      x: 24,
      y: 18,
      content: {
        kind: "tooltip",
        title: "Arc floor lamp",
        description:
          "Brushed brass and linen bring a softer, editorial feel to the seating corner.",
      },
    },
    {
      id: "mixed-link",
      x: 82,
      y: 24,
      content: {
        kind: "link",
        label: "Open the room guide",
        href: "/docs/components/hotspot-image",
      },
    },
  ],
}
