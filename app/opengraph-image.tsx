import { ImageResponse } from "next/og";

export const alt = "BEMXC — The Zero-Fake Signal Protocol";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0A0D12",
          padding: 72,
          color: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: 8,
            color: "#10B981",
          }}
        >
          BEMXC
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 72,
              fontWeight: 600,
              letterSpacing: -2,
              lineHeight: 1.05,
            }}
          >
            <div style={{ display: "flex" }}>The Zero-Fake</div>
            <div style={{ display: "flex" }}>Signal Protocol</div>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 24,
              fontSize: 28,
              color: "rgba(255,255,255,0.55)",
            }}
          >
            Verified forex signals. Non-custodial. No profit guarantee.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
