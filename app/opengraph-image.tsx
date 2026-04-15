import { ImageResponse } from "next/og"

export const alt = "shoppablecn - Shoppable UI blocks for shadcn"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "stretch",
          background: "white",
          color: "black",
          display: "flex",
          flexDirection: "column",
          fontFamily: "sans-serif",
          height: "100%",
          justifyContent: "space-between",
          padding: "64px",
          width: "100%",
        }}
      >
        <div
          style={{
            alignSelf: "flex-start",
            border: "1px solid black",
            borderRadius: "999px",
            display: "flex",
            fontSize: 24,
            padding: "10px 18px",
          }}
        >
          shoppablecn
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              letterSpacing: "-0.06em",
              lineHeight: 1,
              maxWidth: "900px",
            }}
          >
            Shoppable UI blocks for shadcn.
          </div>
          <div
            style={{
              color: "#444",
              fontSize: 30,
              lineHeight: 1.4,
              maxWidth: "860px",
            }}
          >
            Ship interactive product cards, quick-buy overlays, and shoppable
            scenes. Copy, paste, own the code.
          </div>
        </div>
      </div>
    ),
    size
  )
}
