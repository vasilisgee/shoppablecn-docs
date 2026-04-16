import Link from "next/link"
import {
  Accessibility,
  ArrowRight,
  MousePointerClick,
  Puzzle,
  CopyCheck,
  PanelBottomOpen,
  SquareEqual,
} from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { InstallCommand } from "@/components/install-command"
import { SiteLogo } from "@/components/site-logo"
import { cn } from "@/lib/utils"

const libraryRepoUrl = "https://github.com/vasilisgee/shoppablecn"

export default function HomePage() {
  return (
    <main className="flex-1">
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="flex max-w-3xl flex-col gap-6">
          <div className="inline-flex w-fit items-center rounded-full border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
            v1.0
          </div>
          <div className="space-y-4">
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl">
              Shoppable UI components for{" "}
              <span className="inline-flex items-center gap-2 md:gap-3">
                shadcn
                <SiteLogo className="size-9 sm:size-11 md:size-13" />
              </span>
            </h1>
            <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              Ship interactive product cards, quick-buy overlays, and
              shoppable scenes.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              className={cn(buttonVariants({ size: "lg" }))}
              href="/docs/components/product-card"
            >
              Browse Components
              <ArrowRight aria-hidden="true" />
            </Link>
            <Link
              className={cn(
                buttonVariants({
                  size: "lg",
                  variant: "outline",
                })
              )}
              href={libraryRepoUrl}
              rel="noreferrer"
              target="_blank"
            >
              View on GitHub
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t bg-muted/40">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="max-w-2xl space-y-3">
            <p className="text-sm font-medium text-muted-foreground">
              Everything you need to ship
            </p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
             Your shadcn commerce UI toolkit
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card className="h-full justify-between md:col-span-2 lg:col-span-2 bg-muted">
              <CardHeader className="space-y-3">
                <div className="space-y-2">
                  <CardTitle className="inline-flex items-center gap-2 mb-4">
                    <CopyCheck aria-hidden="true" className="size-4" /> Copy &amp; Paste</CardTitle>
                  <CardDescription>
                    No npm install required. Install via shadcn CLI.
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <InstallCommand command="npx shadcn@latest add https://shoppablecn.dev/r/product-card.json" />
              </CardContent>
            </Card>

            <Card className="h-full justify-between">
              <CardHeader className="space-y-3">
                <div className="space-y-2">
                  <CardTitle className="inline-flex items-center gap-2 mb-4"><Puzzle aria-hidden="true" className="size-4" /> Native UI</CardTitle>
                  <CardDescription>
                    Built entirely on shadcn/ui primitives. Fits any shadcn
                    project instantly.
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>

            <Card className="h-full justify-between">
              <CardHeader className="space-y-3">
                <div className="space-y-2">
                  <CardTitle className="inline-flex items-center gap-2 mb-4"><Accessibility aria-hidden="true" className="size-4" /> Accessibility Ready</CardTitle>
                  <CardDescription>
                    WAI-ARIA compliant. Full keyboard navigation. Screen reader
                    tested.
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section className="border-t">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="max-w-2xl space-y-3">
            <p className="text-sm font-medium text-muted-foreground">
              Three components, infinite scenes
            </p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Mix, match, and extend the three primitives that power the
              library.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <Link
              className="block focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
              href="/docs/components/product-card"
            >
              <Card className="h-full justify-between transition-colors hover:bg-muted/30">
                <CardHeader className="space-y-4">
                  <div className="flex size-10 items-center justify-center rounded-lg border bg-muted">
                    <SquareEqual aria-hidden="true" className="size-6" />
                  </div>
                  <div className="space-y-2">
                    <CardTitle>Product Card</CardTitle>
                    <CardDescription>
                      Flexible product cards with three layouts and three
                      variant modes. 
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="pt-2 text-sm font-medium">
                  <span className="inline-flex items-center gap-2">
                    Learn more
                    <ArrowRight aria-hidden="true" className="size-4" />
                  </span>
                </CardContent>
              </Card>
            </Link>

            <Link
              className="block focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
              href="/docs/components/quick-options"
            >
              <Card className="h-full justify-between transition-colors hover:bg-muted/30">
                <CardHeader className="space-y-4">
                  <div className="flex size-10 items-center justify-center rounded-lg border bg-muted">
                    <PanelBottomOpen aria-hidden="true" className="size-6" />
                  </div>
                  <div className="space-y-2">
                    <CardTitle>Quick Options</CardTitle>
                    <CardDescription>
                      Slide-up overlay for variant selection. Swatches, pills,
                      sliders, dropdowns, and more.
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="pt-2 text-sm font-medium">
                  <span className="inline-flex items-center gap-2">
                    Learn more
                    <ArrowRight aria-hidden="true" className="size-4" />
                  </span>
                </CardContent>
              </Card>
            </Link>

            <Link
              className="block focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
              href="/docs/components/hotspot-image"
            >
              <Card className="h-full justify-between transition-colors hover:bg-muted/30">
                <CardHeader className="space-y-4">
                  <div className="flex size-10 items-center justify-center rounded-lg border bg-muted">
                    <MousePointerClick aria-hidden="true" className="size-6" />
                  </div>
                  <div className="space-y-2">
                    <CardTitle>Hotspot Image</CardTitle>
                    <CardDescription>
                      Shoppable scenes with pin-based product cards, tooltips, or any custom content.
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="pt-2 text-sm font-medium">
                  <span className="inline-flex items-center gap-2">
                    Learn more
                    <ArrowRight aria-hidden="true" className="size-4" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t bg-muted/40">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-4 py-20 text-center sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Ready to build shoppable interfaces?
            </h2>
            <p className="text-base leading-7 text-muted-foreground sm:text-lg">
              Ship your next ecommerce project today.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
         
            <Link
              className={cn(buttonVariants({ size: "lg" }))}
              href="/docs/"
            >
              Get Started
              <ArrowRight aria-hidden="true" />
            </Link>
            {/* <Link
              className={cn(
                buttonVariants({
                  size: "lg",
                  variant: "outline",
                })
              )}
              href={libraryRepoUrl}
              rel="noreferrer"
              target="_blank"
            >
              View on GitHub
            </Link> */}
          </div>
        </div>
      </section>

      <footer className="border-t">
        <div className="mx-auto flex w-full max-w-6xl justify-center px-4 py-6 text-center text-sm text-muted-foreground sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} shoppablecn - Ecommerce UI Components - View project on <Link
              className="underline"
              href={libraryRepoUrl}
              rel="noreferrer"
              target="_blank"
            >
              GitHub
            </Link>
          </p>
        </div>
      </footer>
    </main>
  )
}
