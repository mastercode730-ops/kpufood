import { Ledger } from "@/components/Ledger";
import { TradeForm } from "@/components/TradeForm";
import { testimonials, tradeLedger } from "@/lib/content";
import { site } from "@/lib/site";

export function Trade() {
  const [primary, secondary] = site.phones;
  return (
    <section className="sec" id="trade">
      <div className="wrap ed ed--split">
        <div className="ed__side rv">
          <span className="label">08 — Trade</span>
          <h2>
            Distribute <em>Himalayan food products</em> across your territory
          </h2>
          <p className="lede" style={{ marginTop: "1.4rem" }}>
            We are appointing distributors, super-stockists and retail partners across Himachal Pradesh and
            neighbouring states.
          </p>
          <Ledger rows={tradeLedger} />
          <p style={{ marginTop: "1.8rem" }} className="dim">
            Direct line —{" "}
            <a href={`tel:${primary.tel}`} style={{ borderBottom: "1px solid var(--amber)" }}>
              {primary.display}
            </a>{" "}
            ·{" "}
            <a href={`tel:${secondary.tel}`} style={{ borderBottom: "1px solid var(--amber)" }}>
              {secondary.display}
            </a>
          </p>
          <p className="dim" style={{ fontSize: ".97rem" }}>
            If you already move FMCG, food or gifting lines, this range sits well beside them — regional specialities
            carry a story, and stories sell faster than another generic label. Hotels, homestays and restaurants
            across Dharamshala, Palampur and McLeod Ganj also buy our Himalayan food products directly from us in bulk
            packs.
          </p>
        </div>
        <div className="rv">
          <div className="panel">
            <span className="label">Partner enquiry</span>
            <h3 style={{ marginBottom: ".6rem" }}>Tell us which Himalayan food products you need</h3>
            <p className="dim" style={{ fontSize: ".94rem" }}>
              Sending this opens a ready WhatsApp message to our team.
            </p>
            <TradeForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="sec sec--paper2">
      <div className="wrap">
        <div className="rv" style={{ marginBottom: "2rem" }}>
          <span className="label">09 — Word of mouth</span>
          <h2 style={{ maxWidth: "18ch" }}>What buyers say</h2>
          <p className="lede" style={{ marginTop: "1.2rem" }}>
            From households and trade partners buying our Himalayan food products.
          </p>
        </div>
        <div className="says">
          {testimonials.map((t) => (
            <article className="rv" key={t.who}>
              <div className="stars" aria-label="5 out of 5 stars">
                ★★★★★
              </div>
              <blockquote>{t.quote}</blockquote>
              <span className="mono">{t.who}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
