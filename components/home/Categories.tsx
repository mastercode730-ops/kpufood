import { categories } from "@/lib/content";

export function Categories() {
  return (
    <section className="sec sec--paper2" id="categories">
      <div className="wrap">
        <div className="ed rv" style={{ marginBottom: "clamp(2rem,4vw,3.4rem)" }}>
          <div>
            <span className="label">02 — The range</span>
          </div>
          <div>
            <h2>Six categories of Himalayan food products, all made at our own unit</h2>
            <p className="lede" style={{ marginTop: "1.4rem" }}>
              Our Himalayan food products run from everyday table pickles to seasonal hill specialities you will not
              find in a regular grocery aisle.
            </p>
          </div>
        </div>
        <div className="cats">
          {categories.map((c) => (
            <article className="cat rv" key={c.no}>
              <span className="cat__no">{c.no}</span>
              <div>
                <h3>{c.name}</h3>
                <span className="cat__sub">{c.sub}</span>
              </div>
              <div>
                <p>{c.text}</p>
                <ul>
                  {c.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
