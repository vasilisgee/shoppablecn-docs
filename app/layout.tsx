import type { Metadata } from "next"
import { Geist, Inter } from "next/font/google"
import { RootProvider } from "fumadocs-ui/provider/next"

import { cn } from "@/lib/utils"

import "./global.css"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const inter = Inter({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://docs.shoppablecn.dev"),
  title: "shoppablecn - Shoppable UI blocks for shadcn",
  description:
    "Ship e-commerce UIs faster with pre-built product cards, quick-buy overlays, and shoppable hotspot images. Copy, paste, own the code.",
  icons: {
    icon: [
      { url: "/icons/fav/favicon.ico" },
      { type: "image/svg+xml", url: "/icons/fav/favicon.svg" },
      {
        sizes: "96x96",
        type: "image/png",
        url: "/icons/fav/favicon-96x96.png",
      },
    ],
    apple: "/icons/fav/apple-touch-icon.png",
    shortcut: "/icons/fav/favicon.ico",
  },
  openGraph: {
    title: "shoppablecn - Shoppable UI blocks for shadcn",
    description:
      "Ship e-commerce UIs faster with pre-built product cards, quick-buy overlays, and shoppable hotspot images. Copy, paste, own the code.",
    images: [
      {
        alt: "shoppablecn docs preview",
        url: "/img/og_image.jpg",
      },
    ],
    url: "https://docs.shoppablecn.dev",
    siteName: "shoppablecn",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "shoppablecn - Shoppable UI blocks for shadcn",
    description:
      "Ship e-commerce UIs faster with pre-built product cards, quick-buy overlays, and shoppable hotspot images. Copy, paste, own the code.",
    images: ["/img/og_image.jpg"],
  },
}

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn(inter.className, "font-sans", geist.variable)}
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  )
}
