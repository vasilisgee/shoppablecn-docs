"use client"

import Link from "next/link"

import { SiteLogo } from "@/components/site-logo"
import { cn } from "@/lib/utils"

export type DocsNavTitleProps = {
  className?: string
  href?: string
}

export function DocsNavTitle({ className, href = "/" }: DocsNavTitleProps) {
  return (
    <Link
      className={cn(
        className,
        "inline-flex items-center gap-1 font-semibold tracking-tight"
      )}
      href={href}
    >
      <SiteLogo className="size-5" />
      <span>shoppablecn</span>
    </Link>
  )
}
