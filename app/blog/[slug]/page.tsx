import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { JsonLd } from "@/components/JsonLd";
import { formatDate, getAllPosts, getPost } from "@/lib/blog";
import { postSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export function generateStaticParams() {
  const slugs = getAllPosts().map((p) => ({ slug: p.slug }));
  // Cache Components requires at least one param; the placeholder renders a 404.
  return slugs.length > 0 ? slugs : [{ slug: "__no-posts__" }];
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      url: `/blog/${post.slug}`,
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: { title: post.title, description: post.description },
  };
}

// The post depends on the URL, so it renders inside Suspense: client-side navigation
// shows the skeleton header instantly. Direct visits get the fully prerendered page.
export default function BlogPost({ params }: PageProps<"/blog/[slug]">) {
  return (
    <Suspense fallback={<PostSkeleton />}>
      <PostContent params={params} />
    </Suspense>
  );
}

function PostSkeleton() {
  return (
    <section className="phead" aria-busy="true">
      <div className="wrap">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <Link href="/blog">Blog</Link>
        </nav>
        <div className="skel skel--title" />
        <div className="skel skel--line" />
      </div>
    </section>
  );
}

async function PostContent({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <JsonLd data={postSchema(post)} />
      <section className="phead">
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/blog">Blog</Link>
          </nav>
          <h1>{post.title}</h1>
          {post.description && <p className="lede">{post.description}</p>}
          <div className="postmeta">
            <span>
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </span>
            <span>{post.readingMinutes} min read</span>
            <span>By {post.author}</span>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap ed">
          <aside className="ed__side">
            <span className="label">Filed under</span>
            {post.tags.length > 0 && (
              <ul className="tags" style={{ marginTop: 0 }}>
                {post.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            )}
            {post.updated && (
              <p className="dim" style={{ fontSize: ".9rem", marginTop: "1.2rem" }}>
                Updated <time dateTime={post.updated}>{formatDate(post.updated)}</time>
              </p>
            )}
            <div className="aside-cta">
              <p>Order these Himalayan food products for your home, shop or hotel.</p>
              <a className="btn btn--fill" href={site.whatsapp.productList} target="_blank" rel="noopener">
                Ask on WhatsApp
              </a>
              <a className="btn" href={`tel:${site.phones[0].tel}`}>
                Call {site.phones[0].display}
              </a>
            </div>
          </aside>
          <article>
            {post.cover && (
              <figure className="cover">
                {/* eslint-disable-next-line @next/next/no-img-element -- covers can be any size/format an editor uploads */}
                <img src={post.cover} alt={post.coverAlt ?? ""} />
              </figure>
            )}
            <div className="prose" dangerouslySetInnerHTML={{ __html: post.html }} />
            <Link className="backlink" href="/blog">
              ← All posts
            </Link>
          </article>
        </div>
      </section>
    </>
  );
}
