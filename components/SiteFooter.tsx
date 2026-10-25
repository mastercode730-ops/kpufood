import Link from "next/link";
import { footerProducts } from "@/lib/content";
import { nav, site } from "@/lib/site";

async function CurrentYear() {
  "use cache";
  return <>{new Date().getFullYear()}</>;
}

export function SiteFooter() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot__grid">
          <div>
            <span
              className="foot__mark"
              role="img"
              aria-label="KPU FOOD logo, Himalayan food products made in Nagrota Bagwan, Kangra"
            />
            <p>
              Authentic Himalayan food processing since 2021. Pickles, jams, squash, sharbat, chutneys, candy and
              murabba — Himalayan food products made in the Kangra valley.
            </p>
            <p className="foot__tag">Fresh ingredients · Authentic taste · Himalayan goodness</p>
          </div>
          <div>
            <h4>Sections</h4>
            <ul>
              <li>
                <Link href="/#top">Home</Link>
              </li>
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Products</h4>
            <ul>
              {footerProducts.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Reach us</h4>
            <ul>
              <li>VPO Hatwas, Nagrota Bagwan</li>
              <li>District Kangra, HP – 176047</li>
              <li>
                <a href={`tel:${site.phones[0].tel}`}>{site.phones[0].display}</a> ·{" "}
                <a href={`tel:${site.phones[1].tel}`}>{site.phones[1].display}</a>
              </li>
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>{site.hours.short}</li>
            </ul>
          </div>
        </div>
        <div className="foot__bar">
          <span>
            © <CurrentYear /> {site.name} · All rights reserved
          </span>
          <span>
            Powered by{" "}
            <a href={site.poweredBy.url} target="_blank" rel="noopener">
              {site.poweredBy.name}
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
