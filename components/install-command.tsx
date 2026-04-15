"use client"

import * as React from "react"
import { Check, Copy } from "lucide-react"

import { Button } from "@/components/ui/button"

export type InstallCommandProps = {
  command: string
}

export function InstallCommand({ command }: InstallCommandProps) {
  const [copied, setCopied] = React.useState(false)

  React.useEffect(() => {
    if (!copied) {
      return
    }

    const timeout = window.setTimeout(() => {
      setCopied(false)
    }, 1500)

    return () => {
      window.clearTimeout(timeout)
    }
  }, [copied])

  const handleCopy = React.useCallback(async () => {
    await navigator.clipboard.writeText(command)
    setCopied(true)
  }, [command])

  return (
    <div className="flex items-center gap-2 rounded-lg border bg-background p-2">
      <code className="min-w-0 flex-1 overflow-x-auto whitespace-nowrap px-2 py-1 text-xs text-foreground">
        {command}
      </code>
      <Button
        aria-label="Copy install command"
        onClick={handleCopy}
        size="icon-sm"
        type="button"
        variant="ghost"
      >
        {copied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
      </Button>
    </div>
  )
}
