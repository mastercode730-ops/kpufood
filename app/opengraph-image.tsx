import { renderOg } from "@/lib/og";

export const alt = "KPU FOOD — Himalayan food products made in Kangra, Himachal Pradesh";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return renderOg({
    kicker: "PICKLES · JAMS · SQUASH · CHUTNEY · MURABBA",
    title: "Himalayan food products, made in Kangra.",
    footer: "Nagrota Bagwan, Himachal Pradesh  ·  Retail & wholesale  ·  98161 91501",
  });
}
