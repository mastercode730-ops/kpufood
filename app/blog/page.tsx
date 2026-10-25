import type { Metadata } from "next";
import Link from "next/link";
import { PostList } from "@/components/PostList";
import { getAllPosts } from "@/lib/blog";
import { site } from "@/lib/site";

const description =
  "Seasons, recipes, serving ideas and trade notes on Himalayan food products — pickles, jams, squash, chutney and murabba — from KPU FOOD in Kangra, Himachal Pradesh.";

export const metadata: Metadata = {
  title: "Blog — Himalayan food notes from Kangra",
  description,
  alternates: { canonical: "/blog" },
  openGraph: { url: "/blog", title: `Blog | ${site.name}`, description },
};

export default function BlogIndex() {
  const posts = getAllPosts();
  return (
    <>
      <section className="phead">
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span>Blog</span>
          </nav>
          <h1>
            Notes from the <em>preserving house</em>
          </h1>
          <p className="lede">{description}</p>
        </div>
      </section>

      <section className="sec">
        <div className="wrap ed">
          <div className="ed__side">
            <span className="label">All posts · {posts.length}</span>
            <p className="dim" style={{ fontSize: ".97rem" }}>
              Want a product you read about? Ask on WhatsApp and we will share pack sizes and prices.
            </p>
            <a className="btn btn--fill" href={site.whatsapp.productList} target="_blank" rel="noopener">
              Ask for the list
            </a>
          </div>
          <div>
            {posts.length > 0 ? (
              <PostList posts={posts} />
            ) : (
              <p className="empty">No posts yet — check back soon.</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
