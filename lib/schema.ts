import type { Post } from "@/lib/blog";
import { categories, faqs } from "@/lib/content";
import { SITE_URL, site } from "@/lib/site";

const businessId = `${SITE_URL}/#business`;

// "Jams & preserves" -> "Jams and Preserves"
function catalogName(name: string) {
  return name
    .replace("&", "and")
    .split(" ")
    .map((w) => (w === "and" ? w : w[0].toUpperCase() + w.slice(1)))
    .join(" ");
}

export function homeSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "LocalBusiness"],
        "@id": businessId,
        name: site.name,
        alternateName: site.alternateName,
        description:
          "KPU FOOD is a Himalayan food products manufacturer in Nagrota Bagwan, Kangra, Himachal Pradesh, producing pickles, jams, squash, sharbat, chutneys, amla candy and murabba for retail customers and wholesale distribution partners.",
        url: `${SITE_URL}/`,
        logo: `${SITE_URL}${site.logo}`,
        image: `${SITE_URL}/opengraph-image`,
        telephone: site.phones[0].tel,
        email: site.email,
        foundingDate: site.founded,
        priceRange: "₹₹",
        address: {
          "@type": "PostalAddress",
          streetAddress: site.address.street,
          addressLocality: site.address.locality,
          addressRegion: site.address.region,
          postalCode: site.address.postalCode,
          addressCountry: site.address.country,
        },
        geo: { "@type": "GeoCoordinates", ...site.geo },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            opens: site.hours.opens,
            closes: site.hours.closes,
          },
        ],
        areaServed: [
          { "@type": "AdministrativeArea", name: "Kangra" },
          { "@type": "AdministrativeArea", name: "Himachal Pradesh" },
          { "@type": "Country", name: "India" },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Himalayan Food Products",
          itemListElement: categories.map((c) => ({
            "@type": "OfferCatalog",
            name: catalogName(c.name),
            description: c.schema,
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Himalayan Food Products in Kangra", item: `${SITE_URL}/#products` },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };
}

export function postSchema(post: Post) {
  const url = `${SITE_URL}/blog/${post.slug}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#post`,
        headline: post.title,
        description: post.description,
        datePublished: post.date,
        dateModified: post.updated ?? post.date,
        author: { "@type": "Organization", name: post.author, url: `${SITE_URL}/` },
        publisher: { "@id": businessId, "@type": "Organization", name: site.name, logo: `${SITE_URL}${site.logo}` },
        mainEntityOfPage: url,
        image: post.cover ? new URL(post.cover, SITE_URL).toString() : `${url}/opengraph-image`,
        keywords: post.tags.join(", "),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
          { "@type": "ListItem", position: 3, name: post.title, item: url },
        ],
      },
    ],
  };
}
