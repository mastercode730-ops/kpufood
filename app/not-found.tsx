import Link from "next/link";

export default function NotFound() {
  return (
    <section className="phead" style={{ minHeight: "70vh" }}>
      <div className="wrap">
        <span className="label label--i">404 — Not found</span>
        <h1>
          This jar is <em>empty</em>.
        </h1>
        <p className="lede">The page you were looking for has moved or never existed.</p>
        <div className="btns">
          <Link className="btn btn--amber" href="/">
            Back to home
          </Link>
          <Link className="btn btn--i" href="/blog">
            Read the blog
          </Link>
        </div>
      </div>
    </section>
  );
}
