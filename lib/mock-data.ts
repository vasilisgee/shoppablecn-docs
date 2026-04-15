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
  id: "linden-trail-cap",
  title: "Linden Trail Cap",
  category: "Accessories",
  images: [
    getMockImage(
      0,
      "Linden Trail Cap in mustard yellow with a charcoal brim"
    ),
  ],
  price: {
    amount: 6800,
    currency: "USD",
  },
}

export const mockProductNew: Product = {
  id: "meridian-resort-shirt",
  title: "Meridian Resort Shirt",
  category: "Menswear",
  images: [
    getMockImage(
      1,
      "Meridian Resort Shirt with an abstract multicolor print"
    ),
  ],
  price: {
    amount: 9200,
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
  id: "alto-fleece-hoodie",
  title: "Alto Fleece Hoodie",
  category: "Outerwear",
  description:
    "A heavyweight fleece hoodie with contrast sleeves, a roomy kangaroo pocket, and a soft brushed interior for cooler days.",
  images: getMockImages(
    "Alto Fleece Hoodie in black and bright blue",
    "Alto Fleece Hoodie alternate product angle using the local shirt mock image",
    "Alto Fleece Hoodie alternate product angle using the local cap mock image"
  ),
  price: {
    amount: 11900,
    compareAt: 15900,
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
  id: "atelier-field-cap",
  title:
    "Atelier Field Cap with Contrast Brim, Embroidered Front Logo, and Structured Crown for Everyday Wear",
  category: "Accessories",
  images: [
    getMockImage(
      0,
      "Atelier Field Cap with a structured crown and contrast charcoal brim"
    ),
  ],
  price: {
    amount: 14500,
    currency: "USD",
  },
  rating: {
    value: 4.5,
    count: 42,
  },
}

export const mockProductNoCategory: Product = {
  id: "cove-camp-shirt",
  title: "Cove Camp Shirt",
  images: [
    getMockImage(1, "Cove Camp Shirt with oversized abstract shapes"),
  ],
  price: {
    amount: 5400,
    currency: "USD",
  },
  rating: {
    value: 4,
    count: 23,
  },
}

export const mockProductDetailed: Product = {
  id: "studio-colorblock-hoodie",
  title: "Studio Colorblock Hoodie",
  category: "Outerwear",
  description:
    "A colorblocked hoodie with a structured hood, ribbed trims, and athletic paneling designed for standout casual layering.",
  images: getMockImages(
    "Studio Colorblock Hoodie styled against a neutral backdrop",
    "Studio Colorblock Hoodie alternate catalog image using the local shirt mock image",
    "Studio Colorblock Hoodie alternate catalog image using the local cap mock image"
  ),
  price: {
    amount: 13200,
    compareAt: 16800,
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
  href: "/products/studio-colorblock-hoodie",
  variants: [
    {
      id: "color",
      name: "Color",
      type: "swatch",
      required: true,
      options: [
        { label: "Bone", value: "bone", swatch: "#e7e2d9" },
        { label: "Olive", value: "olive", swatch: "#5d6b4d" },
      ],
    },
  ],
}

export const mockProductBrokenImage: Product = {
  id: "nomad-weekender",
  title: "Nomad Weekender",
  category: "Travel",
  images: [
    {
      src: "/mock/does-not-exist.jpg",
      alt: "Nomad Weekender bag with intentionally broken image source",
    },
  ],
  price: {
    amount: 18800,
    currency: "USD",
  },
  rating: {
    value: 3.5,
    count: 19,
  },
}

export const mockProductLowRating: Product = {
  id: "atlas-print-shirt",
  title: "Atlas Print Shirt",
  category: "Menswear",
  images: [getMockImage(1, "Atlas Print Shirt with a relaxed camp collar")],
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
  id: "capsule-weekend-set",
  title: "Capsule Weekend Set",
  category: "Bundles",
  images: [
    getMockImage(
      0,
      "Capsule Weekend Set including a mustard cap with a charcoal brim"
    ),
    getMockImage(
      1,
      "Capsule Weekend Set including an abstract-print resort shirt"
    ),
    getMockImage(
      2,
      "Capsule Weekend Set including a bright blue and black hoodie"
    ),
  ],
  price: {
    amount: 14900,
    currency: "USD",
  },
  rating: {
    value: 4.2,
    count: 56,
  },
}

export const mockProductWithVariants: Product = {
  id: "custom-weekend-bundle",
  title: "Custom Weekend Bundle",
  category: "Bundles",
  description:
    "A build-your-own weekend bundle pairing a cap, a printed shirt, and a heavyweight hoodie with customizable styling options.",
  images: [
    getMockImage(
      0,
      "Custom Weekend Bundle cap view with a mustard crown and charcoal brim"
    ),
    getMockImage(
      1,
      "Custom Weekend Bundle shirt view with an oversized abstract print"
    ),
    getMockImage(
      2,
      "Custom Weekend Bundle hoodie view with bright blue sleeves"
    ),
  ],
  price: {
    amount: 18900,
    compareAt: 22900,
    currency: "USD",
  },
  rating: {
    value: 4.7,
    count: 214,
  },
  badge: {
    label: "Sale",
    variant: "sale",
  },
  variants: [
    {
      id: "colorway",
      name: "Colorway",
      type: "swatch",
      required: true,
      options: [
        { label: "Sunset", value: "sunset", swatch: "#f59e0b" },
        { label: "Oat", value: "oat", swatch: "#e7e2d9" },
        { label: "Forest", value: "forest", swatch: "#355e3b" },
        { label: "Night", value: "night", swatch: "#172554" },
      ],
    },
    {
      id: "size",
      name: "Size",
      type: "pills",
      required: true,
      options: [
        { label: "S", value: "s" },
        { label: "M", value: "m" },
        { label: "L", value: "l" },
        { label: "XL", value: "xl", disabled: true },
      ],
    },
    {
      id: "shirt-fit",
      name: "Shirt fit",
      type: "select",
      options: [
        { label: "Regular", value: "regular" },
        { label: "Relaxed", value: "relaxed" },
        { label: "Oversized", value: "oversized" },
      ],
    },
    {
      id: "embroidery-width",
      name: "Embroidery width",
      type: "slider",
      sliderConfig: {
        min: 6,
        max: 14,
        step: 1,
        unit: "cm",
      },
      options: [],
    },
    {
      id: "extras",
      name: "Add-ons",
      type: "checkbox",
      options: [
        { label: "Gift wrap", value: "gift-wrap" },
        { label: "Spare drawcord", value: "spare-drawcord" },
        { label: "Dust bag", value: "dust-bag" },
      ],
    },
    {
      id: "hoodie-weight",
      name: "Hoodie weight",
      type: "radio",
      required: true,
      options: [
        { label: "Midweight", value: "midweight" },
        { label: "Heavyweight", value: "heavyweight" },
        { label: "Brushed fleece", value: "brushed-fleece" },
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
          option.value === "night" || option.value === "forest"
            ? { ...option, disabled: true }
            : option
        ),
      }
    : undefined,
  pillsVariant
    ? {
        ...pillsVariant,
        options: pillsVariant.options.map((option) =>
          option.value === "l" || option.value === "xl"
            ? { ...option, disabled: true }
            : option
        ),
      }
    : undefined,
  selectVariant
    ? {
        ...selectVariant,
        options: selectVariant.options.map((option) =>
          option.value === "oversized" ? { ...option, disabled: true } : option
        ),
      }
    : undefined,
  checkboxVariant
    ? {
        ...checkboxVariant,
        options: checkboxVariant.options.map((option) =>
          option.value === "dust-bag" ? { ...option, disabled: true } : option
        ),
      }
    : undefined,
  radioVariant
    ? {
        ...radioVariant,
        options: radioVariant.options.map((option) =>
          option.value === "brushed-fleece"
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
  width: 1440,
  height: 960,
} as const

export const mockSceneLivingRoom: MockScene = {
  id: "living-room",
  src: "/mock/scene-living-room.jpg",
  alt: "Living room lifestyle scene for hotspot demos",
  ...defaultSceneSize,
  pins: [
    {
      id: "living-room-product-simple",
      x: 24,
      y: 52,
      content: { kind: "product", product: mockProductSimple },
    },
    {
      id: "living-room-product-bundle",
      x: 56,
      y: 60,
      content: { kind: "product", product: mockProductWithImages },
    },
    {
      id: "living-room-tooltip",
      x: 77,
      y: 28,
      content: {
        kind: "tooltip",
        title: "Oak side table",
        description: "Solid oak table styling the scene with warm tonal contrast.",
      },
    },
  ],
}

export const mockSceneProductHero: MockScene = {
  id: "product-hero",
  src: "/mock/scene-product-hero.jpg",
  alt: "Editorial product hero scene for hotspot demos",
  ...defaultSceneSize,
  pins: [
    {
      id: "product-hero-fit",
      x: 36,
      y: 28,
      content: {
        kind: "tooltip",
        title: "Relaxed fit",
        description:
          "Cut with extra ease through the shoulders and body for casual layering.",
      },
    },
    {
      id: "product-hero-fabric",
      x: 55,
      y: 54,
      content: {
        kind: "tooltip",
        title: "Printed poplin",
        description:
          "Lightweight cotton poplin with a washed finish and a soft handfeel.",
      },
    },
    {
      id: "product-hero-link",
      x: 74,
      y: 74,
      content: {
        kind: "link",
        label: "See fabric details",
        href: "/docs/components/product-card",
      },
    },
  ],
}

export const mockSceneMixedContent: MockScene = {
  id: "mixed-content",
  src: "/mock/scene-mixed-content.jpg",
  alt: "Mixed editorial scene for product, tooltip, and link hotspot demos",
  ...defaultSceneSize,
  pins: [
    {
      id: "mixed-product",
      x: 22,
      y: 64,
      content: { kind: "product", product: mockProductWithVariants },
    },
    {
      id: "mixed-tooltip",
      x: 52,
      y: 32,
      content: {
        kind: "tooltip",
        title: "Brushed fleece interior",
        description:
          "Soft-loop lining keeps warmth high without adding bulk to the silhouette.",
      },
    },
    {
      id: "mixed-link",
      x: 79,
      y: 20,
      content: {
        kind: "link",
        label: "Open the lookbook",
        href: "/docs/components/hotspot-image",
      },
    },
  ],
}
