import { calendar, standards } from "@/lib/content";

const MONTHS = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];

export function Calendar() {
  return (
    <section className="sec sec--dark" id="calendar">
      <div className="wrap">
        <div className="ed rv" style={{ marginBottom: "1rem" }}>
          <div>
            <span className="label label--i">04 — The seasons</span>
          </div>
          <div>
            <h2>Nothing is made out of season</h2>
            <p className="lede" style={{ marginTop: "1.4rem" }}>
              Buransh flowers for three weeks. Amla comes after the first cold nights. Our Himalayan food products
              follow the valley&apos;s calendar, and stock is planned around it — useful if you are ordering for a
              festival counter.
            </p>
          </div>
        </div>
        <div className="cal rv">
          <div className="cal__grid">
            <div className="cal__head">
              <span>Product</span>
              {MONTHS.map((m, i) => (
                <span key={i}>{m}</span>
              ))}
            </div>
            {calendar.map((row) => (
              <div className="cal__row" key={row.name}>
                <b>{row.name}</b>
                {row.bars.map((bar, i) => (
                  <i
                    key={i}
                    className={bar.variant}
                    style={{ gridColumn: `${bar.from}/${bar.to}`, opacity: bar.opacity }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Standard() {
  return (
    <section className="sec sec--dark" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="rv" style={{ marginBottom: "2.4rem" }}>
          <span className="label label--i">05 — The standard</span>
          <h2 style={{ maxWidth: "20ch" }}>Why buyers trust our Himalayan food products</h2>
        </div>
        <div className="creed">
          {standards.map((s) => (
            <article className="rv" key={s.tag}>
              <span className="mono">{s.tag}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
