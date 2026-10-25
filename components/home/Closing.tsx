import Link from "next/link";
import { PostList } from "@/components/PostList";
import { getAllPosts } from "@/lib/blog";

// Not on the original site: surfaces the newest blog posts on the homepage.
export function LatestPosts() {
  const posts = getAllPosts().slice(0, 3);
  if (posts.length === 0) return null;
  return (
    <section className="sec sec--paper2" id="blog">
      <div className="wrap">
        <div className="ed rv" style={{ marginBottom: "clamp(2rem,4vw,3rem)" }}>
          <div>
            <span className="label">13 — From the blog</span>
          </div>
          <div>
            <h2>Notes from the preserving house</h2>
            <p className="lede" style={{ marginTop: "1.4rem" }}>
              Seasons, recipes and serving ideas for Himalayan food products — written at our unit in Nagrota Bagwan.
            </p>
          </div>
        </div>
        <PostList posts={posts} headingLevel="h3" />
        <div className="btns rv">
          <Link className="btn btn--fill" href="/blog">
            Read all posts
          </Link>
        </div>
      </div>
    </section>
  );
}

export function Closing() {
  return (
    <section className="sec sec--dark sec--tight">
      <div className="wrap close rv">
        <span
          className="close__mark"
          role="img"
          aria-label="KPU FOOD brand mark — Himalayan food products from the Kangra valley"
        />
        <span className="label label--i" style={{ marginInline: "auto" }}>
          KPU FOOD · Kangra valley
        </span>
        <h2>
          Taste the authentic flavours of the <em>Himalayas</em>
        </h2>
        <p className="lede" style={{ margin: "1.6rem auto 0" }}>
          Premium pickles, traditional chutneys, refreshing squash or wholesome fruit preserves — our range of
          Himalayan food products brings genuine recipes and honest ingredients together in every jar that leaves
          Kangra.
        </p>
        <div className="btns">
          <Link className="btn btn--amber" href="/#products">
            Explore the range
          </Link>
          <Link className="btn btn--i" href="/#trade">
            Partner with us
          </Link>
        </div>
      </div>
    </section>
  );
}
