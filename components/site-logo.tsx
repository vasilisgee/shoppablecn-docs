import { cn } from "@/lib/utils"

export type SiteLogoProps = {
  className?: string
}

export function SiteLogo({ className }: SiteLogoProps) {
  return (
    <span
      aria-hidden="true"
      className={cn("inline-block size-7 bg-foreground", className)}
      style={{
        WebkitMaskImage: "url(/icons/logo.svg)",
        WebkitMaskPosition: "center",
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskSize: "contain",
        maskImage: "url(/icons/logo.svg)",
        maskPosition: "center",
        maskRepeat: "no-repeat",
        maskSize: "contain",
      }}
    />
  )
}
