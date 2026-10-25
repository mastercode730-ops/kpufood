import { servingNotes, steps } from "@/lib/content";

export function Process() {
  return (
    <section className="sec" id="process">
      <div className="wrap">
        <div className="ed rv" style={{ marginBottom: "clamp(2rem,3.6vw,3rem)" }}>
          <div>
            <span className="label">06 — The method</span>
          </div>
          <div>
            <h2>How our Himalayan food products are made</h2>
            <p className="lede" style={{ marginTop: "1.4rem" }}>
              Six controlled stages, in order, for every batch that leaves the Nagrota Bagwan unit.
            </p>
          </div>
        </div>
        <div className="steps">
          {steps.map((s, i) => (
            <div className="step rv" key={s.title}>
              <span className="step__no">STAGE {String(i + 1).padStart(2, "0")}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Heritage() {
  return (
    <section className="sec sec--dark" id="heritage">
      <div className="wrap ed">
        <div className="ed__side rv">
          <span className="label label--i">07 — The inheritance</span>
          <p className="pull">
            In Himachal, preserving food was never a business idea first. It was how a household got through winter.
          </p>
        </div>
        <div className="ed__body rv">
          <p>
            Every one of our Himalayan food products starts in a season. Mangoes were cut and salted in early summer.
            Bamboo shoots were pickled when the monsoon pushed them up. Amla was boiled into murabba after the first
            cold nights, and buransh flowers were pressed into squash in spring.
          </p>
          <p>
            KPU FOOD grew out of exactly that habit. What changed is the scale and the discipline: stainless steel
            instead of open courtyards, measured recipes instead of a handful, sealed jars instead of cloth-tied
            matkas. What did not change is the taste of the Himalayan food products themselves. When someone from
            Kangra opens a jar of our chukh or bamboo pickle, it should remind them of a kitchen they already know.
          </p>
          <span className="label label--i" style={{ marginTop: "2.6rem" }}>
            Serving notes
          </span>
          <div className="notes">
            {servingNotes.map((n) => (
              <div key={n.name}>
                <b>{n.name}</b>
                <p>{n.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
