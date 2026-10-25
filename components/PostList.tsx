import Link from "next/link";
import { formatDate, type PostMeta } from "@/lib/blog";

export function PostList({ posts, headingLevel = "h2" }: { posts: PostMeta[]; headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;
  return (
    <div className="posts">
      {posts.map((post) => (
        <Link className="prow rv" href={`/blog/${post.slug}`} key={post.slug}>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <div>
            <Heading>{post.title}</Heading>
            {post.description && <p>{post.description}</p>}
            {post.tags.length > 0 && (
              <ul className="tags">
                {post.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            )}
          </div>
          <span className="prow__go" aria-hidden="true">
            Read · {post.readingMinutes} min →
          </span>
        </Link>
      ))}
    </div>
  );
}
