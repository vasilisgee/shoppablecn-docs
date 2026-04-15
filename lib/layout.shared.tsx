import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared"

import { DocsNavTitle } from "@/components/docs-nav-title"

import { appName, gitConfig } from "./shared"

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: appName,
    },
    slots: {
      navTitle: DocsNavTitle,
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  }
}
