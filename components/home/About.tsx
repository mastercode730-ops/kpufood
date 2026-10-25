import { Ledger } from "@/components/Ledger";
import { aboutLedger } from "@/lib/content";

export function About() {
  return (
    <section className="sec" id="about">
      <div className="wrap ed">
        <div className="ed__side rv">
          <span className="label">01 — The house</span>
          <h2>
            Authentic taste,
            <br />
            <em>pure ingredients</em>
          </h2>
        </div>
        <div className="ed__body rv">
          <p className="first">
            Established in 2021 at VPO Hatwas, Tehsil Nagrota Bagwan in District Kangra, KPU FOOD was set up with a
            simple intention — to preserve the culinary heritage of Himachal Pradesh and make genuine Himalayan food
            products available beyond the hills.
          </p>
          <p>
            The valley around Kangra grows some of the finest mangoes, jamun, amla, wild bamboo shoots, rhododendron
            blossoms and hill herbs in the country. For generations these were turned into pickles, chutneys, sharbat
            and murabba in home kitchens, following recipes handed down without ever being written. We took those same
            recipes into a clean, well-organised processing unit and standardised them — so the flavour stays exactly
            as it should, batch after batch.
          </p>
          <p>
            Every jar we send out is prepared in small batches. Fruit is sorted by hand, spices are ground fresh, oil
            and sugar are measured to the recipe rather than to a cost target, and nothing leaves the unit without a
            tasting check. That discipline is why families keep re-ordering and why retailers across Himachal Pradesh
            find our Himalayan food products easy to sell.
          </p>
          <p>
            Sourcing happens within the Kangra belt wherever the season allows, which keeps the raw material fresh and
            supports growers in and around Nagrota Bagwan, Palampur and Dharamshala.
          </p>
          <Ledger rows={aboutLedger} />
        </div>
      </div>
    </section>
  );
}
