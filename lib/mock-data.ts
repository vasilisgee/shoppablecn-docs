import type { Product } from "@/components/ui/types"

const mockProductImageSources = [
  "/mock/product-1.jpg",
  "/mock/product-2.jpg",
  "/mock/product-3.jpg",
  "/mock/product-4.jpg",
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
  id: "pixel-heart-accent-pillow",
  title: "Pixel Heart Accent Pillow",
  category: "Decor",
  images: [
    getMockImage(
      1,
      "Pixel Heart Accent Pillow with a retro rainbow heart graphic"
    ),
  ],
  price: {
    amount: 6400,
    currency: "USD",
  },
  rating: {
    value: 4.7,
    count: 182,
  },
  badge: {
    label: "New",
    variant: "new",
  },
}

export const mockProductWithSale: Product = {
  id: "retro-wireless-controller",
  title: "Retro Wireless Controller",
  category: "Gaming",
  description:
    "A rechargeable retro-style controller with tactile face buttons and a familiar classic layout for casual living-room gaming.",
  images: [
    getMockImage(
      2,
      "Retro Wireless Controller with colorful face buttons on a matte black body"
    ),
  ],
  price: {
    amount: 5900,
    compareAt: 7900,
    currency: "USD",
  },
  rating: {
    value: 4.4,
    count: 96,
  },
  badge: {
    label: "Sale",
    variant: "sale",
  },
}

export const mockProductLongTitle: Product = {
  id: "rocket-launch-art-print-framed",
  title:
    "Rocket Launch Framed Art Print with Oak Frame, Vintage Space Illustration, and Oversized Gallery Presence",
  category: "Wall Art",
  images: [
    getMockImage(
      3,
      "Rocket Launch Framed Art Print with an oak frame and vintage-inspired space illustration"
    ),
  ],
  price: {
    amount: 15900,
    currency: "USD",
  },
  rating: {
    value: 4.6,
    count: 42,
  },
}

export const mockProductNoCategory: Product = {
  id: "retro-wireless-controller-unlabeled",
  title: "Retro Wireless Controller",
  images: [
    getMockImage(
      2,
      "Retro Wireless Controller with a directional pad and bright face buttons"
    ),
  ],
  price: {
    amount: 5400,
    currency: "USD",
  },
  rating: {
    value: 4.1,
    count: 23,
  },
}

export const mockProductDetailed: Product = {
  id: "cozy-gamer-lounge-bundle",
  title: "Cozy Gamer Lounge Bundle",
  category: "Bundles",
  description:
    "A styled living-room setup that pairs the Harbor Lounge Chair with a rainbow heart pillow, a retro controller, and a framed rocket print.",
  images: getMockImages(
    "Harbor Lounge Chair in ivory upholstery with warm oak legs",
    "Pixel Heart Accent Pillow styled on the Harbor Lounge Chair",
    "Retro Wireless Controller staged in the gaming lounge setup",
    "Rocket Launch Framed Art Print displayed above the gaming desk"
  ),
  price: {
    amount: 69900,
    compareAt: 78900,
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
  href: "/products/cozy-gamer-lounge-bundle",
  variants: [
    {
      id: "chair-fabric",
      name: "Chair fabric",
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
  id: "budget-gamepad",
  title: "Budget Gamepad",
  category: "Gaming",
  images: [
    getMockImage(
      2,
      "Budget Gamepad with a retro silhouette and bright face buttons"
    ),
  ],
  price: {
    amount: 2400,
    currency: "USD",
  },
  rating: {
    value: 1.5,
    count: 1248,
  },
}

export const mockProductWithImages: Product = {
  id: "gaming-lounge-styling-set",
  title: "Gaming Lounge Styling Set",
  category: "Bundles",
  images: [
    getMockImage(
      0,
      "Gaming Lounge Styling Set including the Harbor Lounge Chair"
    ),
    getMockImage(
      1,
      "Gaming Lounge Styling Set including the Pixel Heart Accent Pillow"
    ),
    getMockImage(
      2,
      "Gaming Lounge Styling Set including the Retro Wireless Controller"
    ),
    getMockImage(
      3,
      "Gaming Lounge Styling Set including the Rocket Launch Framed Art Print"
    ),
  ],
  price: {
    amount: 61900,
    currency: "USD",
  },
  rating: {
    value: 4.5,
    count: 73,
  },
}

export const mockProductWithVariants: Product = {
  id: "harbor-lounge-chair-setup",
  title: "Harbor Lounge Chair Setup",
  category: "Seating",
  description:
    "A configurable chair setup with upholstery, styling, and delivery options for building a cozy gaming corner.",
  images: [
    getMockImage(
      0,
      "Harbor Lounge Chair Setup front view in ivory upholstery"
    ),
    getMockImage(
      1,
      "Harbor Lounge Chair Setup styled with the Pixel Heart Accent Pillow"
    ),
    getMockImage(
      2,
      "Harbor Lounge Chair Setup paired with a Retro Wireless Controller"
    ),
    getMockImage(
      3,
      "Harbor Lounge Chair Setup styled beneath the Rocket Launch Framed Art Print"
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
        { label: "Pixel Heart", value: "pixel-heart" },
        { label: "Cream Boucle", value: "cream-boucle" },
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
  id: "pixel-heart-accent-pillow",
  title: "Pixel Heart Accent Pillow",
  category: "Decor",
  description:
    "A retro-inspired accent pillow with a pixel heart motif and rainbow stripe detail.",
  images: [
    getMockImage(
      1,
      "Pixel Heart Accent Pillow with a retro rainbow heart graphic"
    ),
  ],
  price: {
    amount: 6400,
    currency: "USD",
  },
  rating: {
    value: 4.8,
    count: 58,
  },
  badge: {
    label: "New",
    variant: "new",
  },
}

export const mockSceneControllerProduct: Product = {
  id: "retro-wireless-controller",
  title: "Retro Wireless Controller",
  category: "Gaming",
  description:
    "A rechargeable controller with a familiar retro layout for couch gaming and media setups.",
  images: [
    getMockImage(
      2,
      "Retro Wireless Controller with colorful face buttons on a matte black body"
    ),
  ],
  price: {
    amount: 5900,
    currency: "USD",
  },
  rating: {
    value: 4.4,
    count: 96,
  },
  badge: {
    label: "Sale",
    variant: "sale",
  },
}

export const mockSceneArtPrintProduct: Product = {
  id: "rocket-launch-art-print",
  title: "Rocket Launch Art Print",
  category: "Wall Art",
  description:
    "A framed rocket illustration that adds a playful space-age focal point to reading corners and gaming rooms.",
  images: [
    getMockImage(
      3,
      "Rocket Launch Framed Art Print with an oak frame and vintage-inspired space illustration"
    ),
  ],
  price: {
    amount: 14900,
    currency: "USD",
  },
  rating: {
    value: 4.9,
    count: 41,
  },
}

export const mockSceneChairWithVariants: Product = {
  id: "harbor-lounge-chair-setup",
  title: "Harbor Lounge Chair",
  category: "Seating",
  description:
    "Customize the Harbor Lounge Chair with upholstery, styling, and delivery options for your gaming lounge.",
  images: [
    getMockImage(
      0,
      "Harbor Lounge Chair in ivory upholstery with warm oak legs"
    ),
    getMockImage(
      1,
      "Harbor Lounge Chair styled with the Pixel Heart Accent Pillow"
    ),
    getMockImage(
      2,
      "Harbor Lounge Chair setup paired with a Retro Wireless Controller"
    ),
    getMockImage(
      3,
      "Harbor Lounge Chair staged beneath the Rocket Launch Framed Art Print"
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
          option.value === "cream-boucle"
            ? { ...option, disabled: true }
            : option
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
  width: 964,
  height: 1277,
} as const

export const mockSceneLivingRoom: MockScene = {
  id: "living-room",
  src: "/mock/product-scene.jpg",
  alt: "Gaming lounge scene with an ivory chair, pixel heart pillow, floor lamp, retro controllers, and rocket wall art",
  ...defaultSceneSize,
  pins: [
    {
      id: "living-room-chair",
      x: 40,
      y: 58,
      content: { kind: "product", product: mockSceneChairProduct },
    },
    {
      id: "living-room-pillow",
      x: 40,
      y: 43,
      content: { kind: "product", product: mockScenePillowProduct },
    },
    {
      id: "living-room-lamp",
      x: 16,
      y: 11,
      content: {
        kind: "tooltip",
        title: "Arc floor lamp",
        description:
          "A matte black floor lamp that pools warm ambient light over the chair and side of the room.",
      },
    },
    {
      id: "living-room-controller",
      x: 33,
      y: 88,
      content: { kind: "product", product: mockSceneControllerProduct },
    },
    {
      id: "living-room-art-print",
      x: 71,
      y: 18,
      content: { kind: "product", product: mockSceneArtPrintProduct },
    },
    {
      id: "living-room-monitor",
      x: 57,
      y: 31,
      content: {
        kind: "tooltip",
        title: "Desk display",
        description:
          "An ultrawide monitor and compact speakers complete the gaming nook behind the chair.",
      },
    },
  ],
}

export const mockSceneProductHero: MockScene = {
  id: "product-hero",
  src: "/mock/product-scene.jpg",
  alt: "Gaming lounge scene with an ivory chair, pixel heart pillow, floor lamp, retro controllers, and rocket wall art",
  ...defaultSceneSize,
  pins: [
    {
      id: "product-hero-chair",
      x: 40,
      y: 58,
      content: {
        kind: "tooltip",
        title: "Harbor lounge chair",
        description:
          "Squared arms and deep cushioning make the chair the focal point of the setup.",
      },
    },
    {
      id: "product-hero-art-print",
      x: 71,
      y: 18,
      content: {
        kind: "tooltip",
        title: "Rocket Launch Art Print",
        description:
          "The framed space illustration adds height and a playful story beat above the desk.",
      },
    },
    {
      id: "product-hero-controller",
      x: 33,
      y: 88,
      content: {
        kind: "tooltip",
        title: "Retro Wireless Controller",
        description:
          "A compact retro gamepad brings color and personality to the coffee-table surface.",
      },
    },
  ],
}

export const mockSceneMixedContent: MockScene = {
  id: "mixed-content",
  src: "/mock/product-scene.jpg",
  alt: "Gaming lounge scene with an ivory chair, pixel heart pillow, floor lamp, retro controllers, and rocket wall art",
  ...defaultSceneSize,
  pins: [
    {
      id: "mixed-chair-product",
      x: 40,
      y: 58,
      content: { kind: "product", product: mockSceneChairWithVariants },
    },
    {
      id: "mixed-controller-product",
      x: 33,
      y: 88,
      content: { kind: "product", product: mockSceneControllerProduct },
    },
    {
      id: "mixed-tooltip",
      x: 16,
      y: 11,
      content: {
        kind: "tooltip",
        title: "Arc floor lamp",
        description:
          "The oversized lamp anchors the left side of the room and softens the gaming setup with warm light.",
      },
    },
    {
      id: "mixed-link",
      x: 71,
      y: 18,
      content: {
        kind: "link",
        label: "Open the room guide",
        href: "/docs/components/product-card",
      },
    },
  ],
}
