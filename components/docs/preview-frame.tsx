import type * as React from "react"

import { cn } from "@/lib/utils"

export type PreviewFrameProps = {
  children: React.ReactNode
  className?: string
}

export function PreviewFrame({ children, className }: PreviewFrameProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border bg-card p-6 text-card-foreground",
        className
      )}
    >
      {children}
    </div>
  )
}
