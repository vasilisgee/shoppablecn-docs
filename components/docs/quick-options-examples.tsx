"use client"

import * as React from "react"

import { PreviewFrame } from "@/components/docs/preview-frame"
import { Button, buttonVariants } from "@/components/ui/button"
import { QuickOptions } from "@/components/ui/quick-options"
import type { ProductVariant } from "@/components/ui/types"
import {
  mockAllQuickOptionVariants,
  mockCheckboxOnlyVariants,
  mockDisabledQuickOptionVariants,
  mockPillsOnlyVariants,
  mockProductWithVariants,
  mockRadioOnlyVariants,
  mockSelectOnlyVariants,
  mockSliderOnlyVariants,
  mockSwatchOnlyVariants,
} from "@/lib/mock-data"
import { cn } from "@/lib/utils"

type QuickOptionsSandboxProps = {
  title: string
  description: string
  variants: ProductVariant[]
  triggerLabel?: string
  triggerVariant?: "default" | "outline" | "link"
  className?: string
  children?: React.ReactNode
}

function QuickOptionsSandbox({
  title,
  description,
  variants,
  triggerLabel = "Open quick options",
  triggerVariant = "default",
  className,
  children,
}: QuickOptionsSandboxProps) {
  const [open, setOpen] = React.useState(false)

  return (
    <PreviewFrame className={cn("max-w-md", className)}>
      <div className="relative min-h-[420px] overflow-hidden rounded-lg border bg-background">
        <div className="flex h-full min-h-[420px] flex-col justify-between p-6">
          <div className="space-y-3">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="max-w-md text-sm text-muted-foreground">
                {description}
              </p>
            </div>
          </div>

          {children ? (
            children
          ) : (
            <div className="flex items-center justify-start">
              <button
                className={cn(
                  buttonVariants({
                    variant: triggerVariant === "link" ? "link" : triggerVariant,
                  })
                )}
                onClick={() => setOpen(true)}
                type="button"
              >
                {triggerLabel}
              </button>
            </div>
          )}
        </div>

        <QuickOptions
          onAddToCart={() => {
            setOpen(false)
          }}
          onOpenChange={setOpen}
          open={open}
          variants={variants}
        />
      </div>
    </PreviewFrame>
  )
}

export function QuickOptionsSwatchExample() {
  return (
    <QuickOptionsSandbox
      description="Single swatch selector for picking a colorway."
      title="Swatch options"
      variants={mockSwatchOnlyVariants}
    />
  )
}

export function QuickOptionsPillsExample() {
  return (
    <QuickOptionsSandbox
      description="Pill buttons for compact size selection."
      title="Pill options"
      variants={mockPillsOnlyVariants}
    />
  )
}

export function QuickOptionsSelectExample() {
  return (
    <QuickOptionsSandbox
      description="Select input for longer or more descriptive option labels."
      title="Select options"
      variants={mockSelectOnlyVariants}
    />
  )
}

export function QuickOptionsSliderExample() {
  return (
    <QuickOptionsSandbox
      description="Slider input for numeric customization like measurements."
      title="Slider options"
      variants={mockSliderOnlyVariants}
    />
  )
}

export function QuickOptionsCheckboxExample() {
  return (
    <QuickOptionsSandbox
      description="Checkbox group for optional add-ons and multi-select extras."
      title="Checkbox options"
      variants={mockCheckboxOnlyVariants}
    />
  )
}

export function QuickOptionsRadioExample() {
  return (
    <QuickOptionsSandbox
      description="Radio group for mutually exclusive choices with clear labels."
      title="Radio options"
      variants={mockRadioOnlyVariants}
    />
  )
}

export function QuickOptionsAllVariantsExample() {
  return (
    <QuickOptionsSandbox
      description="Full quick-buy flow with every supported option type in one overlay."
      title={mockProductWithVariants.title}
      variants={mockAllQuickOptionVariants}
    />
  )
}

export function QuickOptionsRequiredValidationExample() {
  return (
    <QuickOptionsSandbox
      description="Required fields keep the Add to cart button disabled until each required option is chosen."
      title="Required validation"
      variants={mockAllQuickOptionVariants}
    />
  )
}

export function QuickOptionsDisabledOptionsExample() {
  return (
    <QuickOptionsSandbox
      description="Disabled options remain visible, but cannot be selected."
      title="Disabled options"
      variants={mockDisabledQuickOptionVariants}
    />
  )
}

export function QuickOptionsTriggerPatternsExample() {
  const [open, setOpen] = React.useState(false)

  return (
    <PreviewFrame className="max-w-md">
      <div className="relative min-h-[420px] overflow-hidden rounded-lg border bg-background">
        <div className="flex h-full min-h-[420px] flex-col justify-between p-6">
          <div className="space-y-3">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Trigger patterns
            </p>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Open from any UI</h3>
              <p className="max-w-md text-sm text-muted-foreground">
                QuickOptions only needs controlled open state, so it can open
                from buttons, inline links, or card actions.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button onClick={() => setOpen(true)} type="button">
              Quick Buy
            </Button>
            <Button
              onClick={() => setOpen(true)}
              type="button"
              variant="outline"
            >
              Choose Options
            </Button>
            <button
              className={cn(buttonVariants({ variant: "link" }))}
              onClick={() => setOpen(true)}
              type="button"
            >
              Open as text link
            </button>
          </div>
        </div>

        <QuickOptions
          onAddToCart={() => {
            setOpen(false)
          }}
          onOpenChange={setOpen}
          open={open}
          variants={mockAllQuickOptionVariants}
        />
      </div>
    </PreviewFrame>
  )
}
