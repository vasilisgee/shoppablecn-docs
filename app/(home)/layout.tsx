import { HomeLayout } from "fumadocs-ui/layouts/home"

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
      themeSwitch={{
        enabled: true,
      }}
    >
      {children}
    </HomeLayout>
  )
}
