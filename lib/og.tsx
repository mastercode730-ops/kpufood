import { readFileSync } from "node:fs";
import path from "node:path";
import { ImageResponse } from "next/og";

// Shared layout for the generated social-share (Open Graph) images.
const logo = `data:image/png;base64,${readFileSync(
  path.join(process.cwd(), "public", "images", "kpu-food-logo.png"),
).toString("base64")}`;

export function renderOg({ kicker, title, footer }: { kicker: string; title: string; footer: string }) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#12321A",
          backgroundImage: "radial-gradient(120% 90% at 12% 0%, rgba(245,158,11,.22), transparent 55%)",
          color: "#F4EFE2",
          padding: "64px 80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          {/* eslint-disable-next-line @next/next/no-img-element -- next/og renders plain <img> */}
          <img src={logo} width={104} height={104} alt="" />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 40, letterSpacing: 8 }}>KPU FOOD</div>
            <div style={{ fontSize: 20, letterSpacing: 5, color: "rgba(244,239,226,.6)" }}>KANGRA · EST. 2021</div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 22, letterSpacing: 6, color: "#F59E0B", marginBottom: 22 }}>{kicker}</div>
          <div style={{ fontSize: title.length > 60 ? 56 : 70, lineHeight: 1.08, maxWidth: 1000 }}>{title}</div>
        </div>
        <div
          style={{
            display: "flex",
            borderTop: "1px solid rgba(244,239,226,.22)",
            paddingTop: 22,
            fontSize: 22,
            color: "rgba(244,239,226,.6)",
          }}
        >
          {footer}
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
