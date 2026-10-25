import Image from "next/image";
import { products } from "@/lib/content";
import { site } from "@/lib/site";

export function Labels() {
  return (
    <section className="sec" id="products">
      <div className="wrap">
        <div className="ed rv" style={{ marginBottom: "clamp(2.2rem,4vw,3.6rem)" }}>
          <div>
            <span className="label">03 — The labels</span>
          </div>
          <div>
            <h2>Bestselling Himalayan food products</h2>
            <p className="lede" style={{ marginTop: "1.4rem" }}>
              The eight Himalayan food products that move fastest across households and retail counters. Pack sizes,
              MRP and trade margins are shared on enquiry.
            </p>
          </div>
        </div>
        <div className="crop">
          <div className="sheet">
            {products.map((p) => (
              <figure className="lbl rv" key={p.name}>
                <Image src={p.image} width={700} height={900} alt={p.alt} />
                <figcaption className="lbl__meta">
                  <b>{p.name}</b>
                  <span>{p.size}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
        <div className="btns rv">
          <a className="btn btn--fill" href={site.whatsapp.productList} target="_blank" rel="noopener">
            Ask for the full list
          </a>
          <a className="btn" href="#calendar">
            When each one is made
          </a>
        </div>
      </div>
    </section>
  );
}
