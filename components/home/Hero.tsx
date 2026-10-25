import { heroSeasons, rangeRail } from "@/lib/content";

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero__in">
        <div className="rv">
          <p className="hero__kicker">VPO Hatwas · Nagrota Bagwan · Kangra 176047</p>
          <h1>
            Best <em>Himalayan food products</em>, in Kangra.
          </h1>
          <p className="lede">
            Pickles, jams, squash, sharbat, chutney, candy and murabba — Himalayan food products made in small batches
            from hill fruit, in the season it ripens, to recipes this valley has cooked for generations.
          </p>
          <div className="btns">
            <a className="btn btn--amber" href="#products">
              See the range
            </a>
            <a className="btn btn--i" href="#trade">
              Trade enquiry
            </a>
          </div>
        </div>
        <aside className="docket rv">
          <span className="mono">The preserving year</span>
          <h3>What the season decides</h3>
          <dl>
            {heroSeasons.map((s) => (
              <SeasonRow key={s.name} {...s} />
            ))}
          </dl>
          <p>
            Our Himalayan food products are put up when the fruit ripens, then stocked for the year — so what you order
            in March was made when it should have been.
          </p>
        </aside>
      </div>
      <div className="wrap rail">
        <span>The range</span>
        {rangeRail.map((r) => (
          <span key={r}>{r}</span>
        ))}
      </div>
    </section>
  );
}

function SeasonRow({ name, months }: { name: string; months: string }) {
  return (
    <>
      <dt>{name}</dt>
      <dd>{months}</dd>
    </>
  );
}
