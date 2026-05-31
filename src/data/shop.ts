export type CurrencyCode = "CNY" | "GBP" | "EUR";

export type StringItem = {
  id: string;
  brand: string;
  name: string;
  gauge: string;
  features: string;
  colorOptions: Array<{
    name: string;
    basePriceCny: number;
  }>;
  badge?: string;
  hot?: boolean;
  serviceOnly?: boolean;
};

export const shopConfig = {
  name: "Jimmy's Badminton Shop",
  plainName: "Jimmy's Badminton Shop",
  stringerName: "Jimmy Xie",
  wechatId: "JIMMY2334",
  xHandle: "JimmyXuan2334",
  paymentTarget: "#付款:HarveySpecter(NOKOJ333)/收款/001",
  profileImages: {
    heroBackgroundSrc: "./assets/jimmy-hero-bg.jpg?v=20260528b",
    heroPersonSrc: "./assets/jimmy-hero-person.webp?v=20260529a",
    heroSourceSrc: "./assets/jimmy-hero-source.jpg",
    galleryImages: [
      { src: "./assets/jimmy-gallery-03.jpg?v=20260528b", alt: "Jimmy Xie campus selfie" },
      { src: "./assets/jimmy-gallery-01.webp?v=20260529a", alt: "Jimmy Xie with badminton player" },
      { src: "./assets/jimmy-gallery-05.jpg?v=20260528a", alt: "Jimmy Xie with friend holding cards" },
      { src: "./assets/jimmy-gallery-02.webp?v=20260529a", alt: "Jimmy Xie with badminton partner" },
      { src: "./assets/jimmy-gallery-04.webp?v=20260529a", alt: "Jimmy Xie with badminton player at restaurant" }
    ]
  },
  brandLogos: {
    YONEX: "./assets/brand-yonex.webp?v=20260529a",
    VICTOR: "./assets/brand-victor.webp?v=20260529a"
  },
  teamImages: [
    "./assets/team-avatar-01.jpg?v=20260528a",
    "./assets/team-avatar-02.jpg?v=20260528a",
    "./assets/team-avatar-03.webp?v=20260528a",
    "./assets/team-avatar-04.jpg?v=20260528a"
  ],
  promise: "48-hour racket return",
  credential: "Competition-level stringing experience"
};

export const stringCatalog: StringItem[] = [
  {
    id: "yonex-bg65",
    brand: "YONEX",
    name: "Yonex BG65",
    gauge: "0.70 mm",
    features: "Durable string, very hard-wearing.",
    badge: "Durability",
    colorOptions: [
      { name: "White", basePriceCny: 58 },
      { name: "Yellow", basePriceCny: 58 },
      { name: "Fluorescent Yellow", basePriceCny: 58 }
    ]
  },
  {
    id: "yonex-bg65ti",
    brand: "YONEX",
    name: "Yonex BG65TI",
    gauge: "0.70 mm",
    features: "Durable string with a firm hitting feel.",
    badge: "Firm",
    colorOptions: [{ name: "Red", basePriceCny: 60 }]
  },
  {
    id: "yonex-bg66u",
    brand: "YONEX",
    name: "Yonex BG66U",
    gauge: "0.65 mm",
    features: "High-repulsion string with a crisp sound.",
    badge: "Repulsion",
    colorOptions: [
      { name: "Bright Pink", basePriceCny: 70 },
      { name: "Fluorescent Yellow", basePriceCny: 65 },
      { name: "Pink", basePriceCny: 65 },
      { name: "White", basePriceCny: 65 }
    ]
  },
  {
    id: "yonex-bg66f",
    brand: "YONEX",
    name: "Yonex BG66F",
    gauge: "0.65 mm",
    features: "High-repulsion string with excellent feel.",
    badge: "Feel",
    colorOptions: [{ name: "Fluorescent Yellow", basePriceCny: 70 }]
  },
  {
    id: "yonex-bg80",
    brand: "YONEX",
    name: "Yonex BG80",
    gauge: "0.68 mm",
    features: "Medium-repulsion string with a firm hitting feel.",
    badge: "Power",
    hot: true,
    colorOptions: [
      { name: "White", basePriceCny: 75 },
      { name: "Fluorescent Yellow", basePriceCny: 75 },
      { name: "Light Blue", basePriceCny: 80 }
    ]
  },
  {
    id: "yonex-bg80p",
    brand: "YONEX",
    name: "Yonex BG80P",
    gauge: "0.68 mm",
    features: "High-repulsion string with a firm hitting feel.",
    badge: "Repulsion",
    colorOptions: [{ name: "White", basePriceCny: 80 }]
  },
  {
    id: "yonex-bgxb68",
    brand: "YONEX",
    name: "Yonex BGXB68",
    gauge: "0.68 mm",
    features: "Durable hard string with excellent tension retention.",
    badge: "Retention",
    colorOptions: [{ name: "Fluorescent Yellow", basePriceCny: 60 }]
  },
  {
    id: "yonex-bgxb63",
    brand: "YONEX",
    name: "Yonex BGXB63",
    gauge: "0.63 mm",
    features: "Super-repulsion string, firm feel, crisp sound, and very slow tension loss.",
    badge: "Repulsion",
    hot: true,
    colorOptions: [
      { name: "White", basePriceCny: 80 },
      { name: "Bright Pink", basePriceCny: 85 },
      { name: "Aqua Blue", basePriceCny: 85 },
      { name: "Lavender Purple", basePriceCny: 85 },
      { name: "Fluorescent Yellow", basePriceCny: 80 },
      { name: "Black", basePriceCny: 80 }
    ]
  },
  {
    id: "yonex-bgab",
    brand: "YONEX",
    name: "Yonex BGAB",
    gauge: "0.67 / 0.61 mm",
    features: "Super-repulsion string with a polished, premium feel.",
    badge: "AeroBite",
    colorOptions: [
      { name: "White / Red", basePriceCny: 85 },
      { name: "White / Blue", basePriceCny: 90 }
    ]
  },
  {
    id: "victor-vbs-66n",
    brand: "VICTOR",
    name: "Victor VBS-66 Nano",
    gauge: "0.66 mm",
    features: "High-repulsion string with a crisp hitting feel.",
    badge: "Control",
    colorOptions: [
      { name: "Fluorescent Yellow", basePriceCny: 58 },
      { name: "White", basePriceCny: 58 },
      { name: "Mint Green", basePriceCny: 58 },
      { name: "Light Pink", basePriceCny: 58 },
      { name: "Bright Pink", basePriceCny: 58 },
      { name: "Orange", basePriceCny: 58 },
      { name: "Light Blue", basePriceCny: 58 }
    ]
  },
  {
    id: "bring-your-own-string",
    brand: "SERVICE",
    name: "Bring your own string",
    gauge: "",
    features: "",
    serviceOnly: true,
    colorOptions: [{ name: "Own string", basePriceCny: 30 }]
  }
];
