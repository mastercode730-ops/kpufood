// Homepage copy and lists. Each array below renders one section of the homepage.

export const heroSeasons = [
  { name: "Buransh squash", months: "Mar – Apr" },
  { name: "Mango pickle", months: "May – Jul" },
  { name: "Jamun chutney", months: "Jun – Aug" },
  { name: "Bamboo pickle", months: "Jul – Sep" },
  { name: "Chilli chukh", months: "Oct – Dec" },
  { name: "Amla candy", months: "Nov – Jan" },
];

export const rangeRail = ["Pickles", "Jams", "Squash", "Sharbat", "Chutney", "Candy", "Murabba"];

export const aboutLedger = [
  { label: "Established", value: "2021" },
  { label: "Products & variants", value: "20+" },
  { label: "Unit", value: "Nagrota Bagwan, Kangra" },
  { label: "Open", value: "Mon – Sun · 8 AM – 8 PM" },
  { label: "Supply", value: "Retail & wholesale" },
];

export const categories = [
  {
    no: "A",
    name: "Pickles",
    sub: "Achaar, sun-matured",
    text: "Cut and spiced by hand, matured in mustard oil, packed once the flavour has settled — never rushed to fill an order.",
    items: ["Mango pickle", "Bamboo shoot", "Mixed vegetable", "Regional Himachali"],
    schema: "Mango pickle, bamboo shoot pickle, mixed vegetable pickle and regional Himachali pickles, matured in mustard oil.",
  },
  {
    no: "B",
    name: "Jams & preserves",
    sub: "Open-kettle cooked",
    text: "Orchard fruit cooked down slowly until it sets on its own, so the jam spreads thick and tastes of the fruit rather than of sugar.",
    items: ["Mixed fruit jam", "Seasonal fruit", "Apple & plum", "Low-sugar on request"],
    schema: "Mixed fruit jam, seasonal fruit jam and apple and plum preserves, open-kettle cooked.",
  },
  {
    no: "C",
    name: "Squash & sharbat",
    sub: "Hill flower & herb",
    text: "Concentrates pressed in their short season and bottled for the year — one part squash to four parts chilled water.",
    items: ["Rhododendron (buransh)", "Brahmi sharbat", "Seasonal juices", "Bulk bottles"],
    schema: "Rhododendron (buransh) squash, brahmi sharbat and seasonal hill fruit juices.",
  },
  {
    no: "D",
    name: "Chutney & chukh",
    sub: "Sharp, table-side",
    text: "The condiments a Himachali plate is incomplete without — hot, tangy and made from produce grown within the district.",
    items: ["Red chilli chukh", "Jamun chutney", "Aelu (wild garlic)", "Sweet-sour table"],
    schema: "Red chilli chukh, jamun chutney and aelu wild garlic chutney.",
  },
  {
    no: "E",
    name: "Candy & murabba",
    sub: "Slow sugar-set",
    text: "Amla and apple cooked in syrup over days and dried in the winter air, the way it has always been done in the hills.",
    items: ["Amla candy", "Amla murabba", "Apple murabba", "Gift combinations"],
    schema: "Amla candy, amla murabba and apple murabba, slow sugar-set and sun-dried.",
  },
  {
    no: "F",
    name: "Himalayan specialities",
    sub: "Small runs",
    text: "Short production runs built around ingredients that only this region grows, made for gifting counters and curious kitchens.",
    items: ["Wild herb blends", "Festival packs", "Institutional packs", "Custom sizes"],
    schema: "Wild herb blends, festival gift packs and institutional bulk packs.",
  },
];

export const products = [
  { name: "Mango Pickle", size: "400 g", image: "/images/labels/mango-pickle.svg", alt: "Mango pickle label — Himalayan food products made by KPU FOOD in Kangra" },
  { name: "Bamboo Pickle", size: "400 g", image: "/images/labels/bamboo-pickle.svg", alt: "Bamboo shoot pickle label — traditional Himalayan food products from Nagrota Bagwan, Kangra" },
  { name: "Mixed Fruit Jam", size: "500 g", image: "/images/labels/mixed-fruit-jam.svg", alt: "Mixed fruit jam label from KPU FOOD, a Himalayan food products manufacturer in Himachal Pradesh" },
  { name: "Buransh Squash", size: "750 ml", image: "/images/labels/buransh-squash.svg", alt: "Rhododendron buransh squash label — Himalayan food products from the Kangra valley" },
  { name: "Brahmi Sharbat", size: "750 ml", image: "/images/labels/brahmi-sharbat.svg", alt: "Brahmi sharbat label — herbal Himalayan food products made in Kangra, Himachal Pradesh" },
  { name: "Amla Candy", size: "250 g", image: "/images/labels/amla-candy.svg", alt: "Amla candy label — sweet Himalayan food products by KPU FOOD, Nagrota Bagwan" },
  { name: "Red Chilli Chukh", size: "250 g", image: "/images/labels/red-chilli-chukh.svg", alt: "Red chilli chukh label — spicy Himalayan food products from Kangra, Himachal Pradesh" },
  { name: "Jamun Chutney", size: "300 g", image: "/images/labels/jamun-chutney.svg", alt: "Jamun chutney label — seasonal Himalayan food products made by KPU FOOD in Kangra" },
];

// Bars use CSS grid columns: column 2 = January … column 13 = December (end column is exclusive).
type Bar = { from: number; to: number; variant?: "alt" | "long"; opacity?: number };
export const calendar: { name: string; bars: Bar[] }[] = [
  { name: "Buransh squash", bars: [{ from: 4, to: 6 }] },
  { name: "Mango pickle", bars: [{ from: 6, to: 9 }] },
  { name: "Jamun chutney", bars: [{ from: 7, to: 10 }] },
  { name: "Bamboo pickle", bars: [{ from: 8, to: 11, variant: "alt" }] },
  { name: "Mixed fruit jam", bars: [{ from: 5, to: 12, variant: "long" }] },
  { name: "Red chilli chukh", bars: [{ from: 11, to: 14 }] },
  { name: "Amla candy & murabba", bars: [{ from: 12, to: 14 }, { from: 2, to: 3 }] },
  { name: "Brahmi sharbat", bars: [{ from: 2, to: 14, variant: "alt", opacity: 0.45 }] },
];

export const standards = [
  { tag: "Sourcing", title: "Sorted, not blended", text: "Fruit and vegetables are graded before they reach the kettle. Anything bruised, under-ripe or off-season is rejected rather than mixed in to make up weight." },
  { tag: "Character", title: "Inspired by Himalayan flavours", text: "Buransh, bamboo shoot, aelu and jamun are not novelty add-ons here. They are what this region has always cooked with, and what makes the range worth stocking." },
  { tag: "Hygiene", title: "Clean line, every batch", text: "Sanitised equipment, covered handling, filtered water and a documented cleaning routine before and after each production run." },
  { tag: "Control", title: "Checked batch by batch", text: "Taste, texture, colour and seal are checked at packing. Batch and date coding lets us trace any jar back to the day it was made." },
  { tag: "Supply", title: "Planned, not improvised", text: "Seasonal Himalayan food products are produced in season and stocked, so distributors are not left waiting when demand peaks around festivals." },
  { tag: "Pricing", title: "Honest and steady", text: "Trade pricing stays stable through the year and margins are worked out so the shelf price remains realistic for a Himachali household." },
];

export const steps = [
  { title: "Ingredient selection", text: "Raw material for our Himalayan food products is procured from growers in and around the Kangra valley, then graded on arrival." },
  { title: "Cleaning & preparation", text: "Washing in filtered water, trimming, de-seeding and cutting to a uniform size so cooking is even across the batch." },
  { title: "Traditional cooking", text: "Fresh-ground spices, measured oil or sugar and slow open-kettle cooking, exactly to the family recipe each product came from." },
  { title: "Quality inspection", text: "Taste, consistency, colour and acidity are checked before packing. A batch that does not match the standard is not packed." },
  { title: "Hygienic packaging", text: "Filling into sanitised food-grade jars and bottles, sealing, capping, labelling with batch and date, then shrink-wrapping." },
  { title: "Storage & dispatch", text: "Finished Himalayan food products are cartoned and stored away from direct sunlight, with dispatch scheduled through the week." },
];

export const servingNotes = [
  { name: "Red chilli chukh", text: "A spoon stirred into curd, or spread thin on a paratha. It also lifts a plain dal." },
  { name: "Buransh squash", text: "One part squash to four parts chilled water, ice, and a squeeze of lemon." },
  { name: "Mixed fruit jam", text: "Beyond toast — folded into curd, on pancakes, or as a filling for hill-style buns." },
  { name: "Amla candy", text: "An after-meal digestive, and a genuinely good snack for a long hill journey." },
  { name: "Bamboo pickle", text: "Pair with rice and rajma. A little goes a long way." },
  { name: "Jamun chutney", text: "Serve alongside grilled or tandoori dishes to cut the richness." },
];

export const tradeLedger = [
  { label: "Territory", value: "Appointed area-wise" },
  { label: "Packs", value: "Retail, bulk, institutional" },
  { label: "Gifting", value: "Festival combinations" },
  { label: "Private label", value: "On confirmed volume" },
];

export const enquiryTypes = [
  "Distributor / wholesale",
  "Retail store supply",
  "Hotel / restaurant bulk",
  "Retail purchase (home use)",
  "Gift & festival packs",
];

export const testimonials = [
  { quote: "Delicious flavours that remind us of homemade recipes. The bamboo pickle in particular tastes exactly like my grandmother's.", who: "Household customer · Dharamshala" },
  { quote: "Excellent quality and beautifully packed. The jars sit well on the shelf and customers come back for the buransh squash.", who: "Retail store owner · Palampur" },
  { quote: "Reliable supplier with authentic regional specialities. Dispatch is on time and the taste stays consistent order after order.", who: "Wholesale distributor · Kangra" },
];

export const areas = [
  "Nagrota Bagwan", "Kangra town", "Dharamshala", "McLeod Ganj", "Palampur",
  "Baijnath", "Jawali", "Dehra", "Nurpur", "Shahpur",
  "Jaisinghpur", "Bhawarna", "Rait", "Sidhbari", "Yol",
  "Una", "Hamirpur", "Mandi", "Chamba", "Shimla",
];

export const faqs = [
  {
    q: "Are your Himalayan food products available for both retail and wholesale?",
    a: "Yes. KPU FOOD supplies Himalayan food products to individual households as well as to grocery stores, supermarkets, hotels, restaurants, cafés and wholesale distributors across Kangra and the rest of Himachal Pradesh.",
  },
  {
    q: "Do you use natural ingredients in your Himalayan food products?",
    a: "Our Himalayan food products are made using carefully selected fruits, vegetables, herbs and spices sourced from the Kangra valley and nearby Himachal orchards, with a focus on authentic taste and consistent quality.",
  },
  {
    q: "How can I become a KPU FOOD distributor in Kangra or Himachal Pradesh?",
    a: "Call 9816051770 or 9318040800, or send an enquiry through the website form. Share your city, current product lines and monthly volume and our team will respond with pack sizes, margins and dispatch schedules.",
  },
  {
    q: "Which regions does KPU FOOD serve?",
    a: "We serve Nagrota Bagwan, Palampur, Dharamshala, Kangra town, Jawali, Dehra, Baijnath and surrounding areas, and support outstation distribution across Himachal Pradesh and other states based on order volume.",
  },
  {
    q: "What is the shelf life and packaging of your Himalayan food products?",
    a: "Pickles, chutneys and murabba are packed in food-grade jars and typically carry a 9 to 12 month shelf life, while squash, sharbat and juices are bottled for 6 to 9 months when stored in a cool, dry place away from direct sunlight.",
  },
  {
    q: "Do you offer bulk packs and private label options for your Himalayan food products?",
    a: "Yes. Bulk packs for hotels, restaurants and institutional kitchens are available, and private label or custom pack sizes can be discussed for confirmed volume orders.",
  },
];

export const footerProducts = [
  "Mango & bamboo pickle",
  "Mixed fruit jam",
  "Rhododendron squash",
  "Brahmi sharbat",
  "Amla candy & murabba",
  "Red chilli chukh",
  "Jamun & aelu chutney",
];
