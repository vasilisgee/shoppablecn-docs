import Link from "next/link"
import {
  Accessibility,
  ArrowRight,
  Copy,
  Github,
  Puzzle,
  ShieldCheck,
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
              Shoppable UI blocks for shadcn.
            </h1>
            <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              Ship interactive product cards, quick-buy overlays, and
              shoppable scenes. Copy, paste, own the code.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              className={cn(buttonVariants({ size: "lg" }))}
              href="/docs/product-card"
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
              <Github aria-hidden="true" />
              Star on GitHub
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t bg-muted/20">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="max-w-2xl space-y-3">
            <p className="text-sm font-medium text-muted-foreground">
              Everything you need to ship
            </p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Built for teams that want to move fast without giving up control.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <Card className="h-full justify-between">
              <CardHeader className="space-y-4">
                <div className="flex size-10 items-center justify-center rounded-lg border bg-background">
                  <Copy aria-hidden="true" className="size-4" />
                </div>
                <div className="space-y-2">
                  <CardTitle>Copy &amp; Paste</CardTitle>
                  <CardDescription>
                    No npm install required. Install via shadcn CLI and own the
                    code forever.
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="pt-2">
                <InstallCommand command="npx shadcn@latest add @shoppablecn/product-card" />
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader className="space-y-4">
                <div className="flex size-10 items-center justify-center rounded-lg border bg-background">
                  <ShieldCheck aria-hidden="true" className="size-4" />
                </div>
                <div className="space-y-2">
                  <CardTitle>Type Safe</CardTitle>
                  <CardDescription>
                    Written in TypeScript with complete type definitions for
                    every prop and callback.
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>

            <Card className="h-full">
              <CardHeader className="space-y-4">
                <div className="flex size-10 items-center justify-center rounded-lg border bg-background">
                  <Accessibility aria-hidden="true" className="size-4" />
                </div>
                <div className="space-y-2">
                  <CardTitle>Accessible by Default</CardTitle>
                  <CardDescription>
                    WAI-ARIA compliant. Full keyboard navigation. Screen reader
                    tested.
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>

            <Card className="h-full">
              <CardHeader className="space-y-4">
                <div className="flex size-10 items-center justify-center rounded-lg border bg-background">
                  <Puzzle aria-hidden="true" className="size-4" />
                </div>
                <div className="space-y-2">
                  <CardTitle>Shadcn Native</CardTitle>
                  <CardDescription>
                    Built entirely on shadcn/ui primitives. Fits any shadcn
                    project instantly.
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
