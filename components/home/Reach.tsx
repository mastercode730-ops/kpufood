import { areas, faqs } from "@/lib/content";
import { site } from "@/lib/site";

export function Areas() {
  return (
    <section className="sec" id="locations">
      <div className="wrap ed">
        <div className="ed__side rv">
          <span className="label">10 — Areas we serve</span>
          <h2>
            Across Kangra and <em>Himachal Pradesh</em>
          </h2>
        </div>
        <div className="ed__body rv">
          <p className="lede">
            Supplying Himalayan food products from our unit at VPO Hatwas, Nagrota Bagwan — central to the Kangra
            district, so local delivery is quick and outstation dispatch is straightforward.
          </p>
          <p>
            Retail customers can order Himalayan food products directly by phone or WhatsApp. Shops, hotels and
            distributors across the following areas are already served, and we take enquiries from towns beyond this
            list based on order volume.
          </p>
          <div className="areas">
            {areas.map((a) => (
              <span key={a}>{a}</span>
            ))}
          </div>
          <p style={{ marginTop: "1.8rem" }}>
            Outside Himachal Pradesh, we support distribution to Punjab, Haryana, Delhi NCR, Chandigarh and
            Uttarakhand for confirmed bulk orders, with transport arranged through regular parcel and freight services
            from Kangra.
          </p>
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section className="sec sec--paper2" id="faq">
      <div className="wrap ed">
        <div className="ed__side rv">
          <span className="label">11 — Questions</span>
          <h2>Frequently asked questions about our Himalayan food products</h2>
        </div>
        <div className="rv">
          <div className="faq">
            {faqs.map((f, i) => (
              <details key={f.q} open={i === 0}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section className="sec" id="contact">
      <div className="wrap">
        <div className="rv" style={{ marginBottom: "1.4rem" }}>
          <span className="label">12 — Contact</span>
          <h2 style={{ maxWidth: "24ch" }}>Order Himalayan food products from our Kangra unit</h2>
        </div>
        <div className="cxs">
          <div className="rv">
            <h3>Manufacturing unit</h3>
            <p>
              VPO Hatwas, Tehsil Nagrota Bagwan,
              <br />
              District Kangra,
              <br />
              Himachal Pradesh – 176047
            </p>
          </div>
          <div className="rv">
            <h3>Phone</h3>
            <p>
              {site.phones.map((p, i) => (
                <span key={p.tel}>
                  {i > 0 && <br />}
                  <a href={`tel:${p.tel}`}>{p.display}</a>
                </span>
              ))}
            </p>
          </div>
          <div className="rv">
            <h3>Email</h3>
            <p>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
          </div>
          <div className="rv">
            <h3>Hours</h3>
            <p>
              {site.hours.days}
              <br />
              8:00 AM – 8:00 PM
            </p>
          </div>
        </div>
        <div className="btns rv">
          <a className="btn btn--fill" href={`tel:${site.phones[0].tel}`}>
            Call now
          </a>
          <a className="btn" href={site.mapsUrl} target="_blank" rel="noopener">
            Get directions
          </a>
          <a className="btn" href={site.whatsapp.distributor} target="_blank" rel="noopener">
            Become a distributor
          </a>
        </div>
      </div>
    </section>
  );
}
