// Business details and site-wide settings. Edit here and every page updates.

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.kpufood.com").replace(/\/$/, "");

const WHATSAPP_NUMBER = "919816191501";

export const site = {
  name: "KPU FOOD",
  alternateName: "KPU Foods",
  tagline: "Kangra · Est. 2021",
  founded: "2021",
  title: "Best Himalayan Food Products in Kangra | KPU FOOD",
  description:
    "Himalayan food products in Kangra by KPU FOOD — pickles, jams, squash, chutneys, amla candy and murabba made in Nagrota Bagwan with natural ingredients and traditional Himachali recipes. B2B and retail supply. Call 9816191501.",
  ogDescription:
    "Himalayan food products in Kangra — pickles, jams, squash, chutneys, candy and murabba crafted by KPU FOOD in Nagrota Bagwan, Himachal Pradesh. Retail and wholesale supply.",
  twitterDescription:
    "Pickles, jams, squash, chutneys and candy — authentic Himalayan food products made in Kangra, Himachal Pradesh by KPU FOOD.",
  keywords: [
    "Himalayan food products",
    "Himalayan food products in Kangra",
    "pickle manufacturer Kangra",
    "jam manufacturer Himachal Pradesh",
    "rhododendron squash",
    "brahmi sharbat",
    "amla candy",
    "red chilli chukh",
    "murabba supplier",
    "food processing Nagrota Bagwan",
  ],
  themeColor: "#12321A",
  logo: "/images/kpu-food-logo.png",

  phones: [
    { display: "98161 91501", tel: "+919816191501" },
    { display: "93180 40800", tel: "+919318040800" },
  ],
  email: "kpufoods@gmail.com",
  address: {
    street: "VPO Hatwas, Tehsil Nagrota Bagwan",
    locality: "Kangra",
    region: "Himachal Pradesh",
    postalCode: "176047",
    country: "IN",
  },
  geo: { latitude: 32.105, longitude: 76.38 },
  hours: { days: "Monday – Sunday", short: "Mon – Sun · 8 AM – 8 PM", opens: "08:00", closes: "20:00" },
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Nagrota+Bagwan+Kangra+Himachal+Pradesh+176047",

  // Every WhatsApp button and the enquiry form send to this number (country code, no "+").
  whatsapp: {
    general: wa(WHATSAPP_NUMBER, "Hi KPU FOOD, I want to know more about your Himalayan food products."),
    productList: wa(WHATSAPP_NUMBER, "Hi KPU FOOD, please share the product list and pack sizes."),
    distributor: wa(WHATSAPP_NUMBER, "Hi KPU FOOD, I am interested in becoming a distributor."),
    enquiryNumber: WHATSAPP_NUMBER,
  },

  analyticsId: "G-8XYC60YKDM",
  poweredBy: { name: "MBG Card Pvt. Ltd.", url: "https://mbgcard.in" },
} as const;

export const nav = [
  { href: "/#about", label: "The house" },
  { href: "/#categories", label: "Range" },
  { href: "/#products", label: "Labels" },
  { href: "/#calendar", label: "Seasons" },
  { href: "/#process", label: "Method" },
  { href: "/#trade", label: "Trade" },
  { href: "/blog", label: "Blog" },
  { href: "/#contact", label: "Contact" },
] as const;

function wa(number: string, text: string) {
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}
