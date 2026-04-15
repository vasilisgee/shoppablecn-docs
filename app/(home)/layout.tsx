import { HomeLayout } from "fumadocs-ui/layouts/home"

import { HomeHeader } from "@/components/home-header"
import { HomeNavTitle } from "@/components/home-nav-title"

const libraryRepoUrl = "https://github.com/vasilisgee/shoppablecn"

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <HomeLayout
      links={[
        {
          text: "Docs",
          url: "/docs",
        },
        {
          text: "GitHub",
          url: libraryRepoUrl,
          external: true,
        },
      ]}
      nav={{
        title: "shoppablecn",
        transparentMode: "top",
      }}
      searchToggle={{
        enabled: false,
      }}
      slots={{
        header: HomeHeader,
        navTitle: HomeNavTitle,
      }}
      themeSwitch={{
        enabled: true,
      }}
    >
      {children}
    </HomeLayout>
  )
}
