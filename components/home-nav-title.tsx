"use client"

import Link from "next/link"

import { SiteLogo } from "@/components/site-logo"
import { cn } from "@/lib/utils"

export type HomeNavTitleProps = {
  className?: string
  href?: string
}

export function HomeNavTitle({ className, href = "/" }: HomeNavTitleProps) {
  return (
    <Link className={cn(className, "text-sm font-semibold tracking-tight")} href={href}>
      <SiteLogo />
      <span>shoppablecn</span>
    </Link>
  )
}
