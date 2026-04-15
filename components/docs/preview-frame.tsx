import type * as React from "react"

import { cn } from "@/lib/utils"

export type PreviewFrameProps = {
  children: React.ReactNode
  className?: string
}

export function PreviewFrame({ children, className }: PreviewFrameProps) {
  return (
    <div className="flex w-full justify-center px-4 py-4 sm:px-6 sm:py-6">
      <div className={cn("w-full", className)}>{children}</div>
    </div>
  )
}
