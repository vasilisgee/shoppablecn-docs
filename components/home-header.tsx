"use client"

import { LinkItem } from "fumadocs-ui/layouts/shared"
import { useHomeLayout } from "fumadocs-ui/layouts/home"

import { cn } from "@/lib/utils"

export function HomeHeader() {
  const {
    navItems,
    slots,
    props: { nav },
  } = useHomeLayout()

  if (nav?.component) {
    return nav.component
  }

  const linkItems = navItems.filter(
    (item): item is Exclude<(typeof navItems)[number], { type: "custom" | "menu" }> =>
      item.type !== "custom" && item.type !== "menu"
  )

  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center gap-4 px-4 sm:px-6 lg:px-8">
        {slots.navTitle ? (
          <slots.navTitle className="inline-flex shrink-0 items-center gap-2.5 font-semibold" />
        ) : null}

        <div className="ml-auto flex items-center gap-1 sm:gap-2">
          <nav className="flex items-center gap-1 sm:gap-2">
            {linkItems.map((item, index) => (
              <LinkItem
                className={cn(
                  "inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground data-[active=true]:text-foreground"
                )}
                item={item}
                key={`${index}-${item.url}`}
              >
                {item.type === "icon" ? item.icon : item.text}
              </LinkItem>
            ))}
          </nav>

          {slots.themeSwitch ? <slots.themeSwitch /> : null}
        </div>
      </div>
    </header>
  )
}
