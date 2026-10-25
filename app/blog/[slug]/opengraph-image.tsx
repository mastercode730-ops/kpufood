import { getAllPosts, getPost } from "@/lib/blog";
import { renderOg } from "@/lib/og";

export const alt = "KPU FOOD blog post";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  return renderOg({
    kicker: "FROM THE KPU FOOD BLOG",
    title: post?.title ?? "Notes from the preserving house",
    footer: "Himalayan food products from Nagrota Bagwan, Kangra",
  });
}
