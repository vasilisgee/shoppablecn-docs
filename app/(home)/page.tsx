import Link from "next/link"
import { ArrowRight, Github } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
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
    </main>
  )
}
