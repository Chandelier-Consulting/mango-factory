export const site = {
  name: "Mango Factory",
  shortName: "MF",
  tagline: "Mango drinks, boba, and dessert runs in San Jose.",
  address: "326 Commercial St, San Jose, CA",
  phone: "(408) 555-0198",
  phoneHref: "tel:+14085550198",
  orderUrl: "https://www.doordash.com/store/mango-factory-san-jose-33771065/",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Mango+Factory+326+Commercial+St+San+Jose+CA",
};

export const navItems = [
  ["Menu", "/menu"],
  ["Marketing", "/marketing"],
  ["Directions", site.mapsUrl],
] as const;

export const signatures = [
  {
    name: "Mango Dreams Cup",
    category: "Mango Dreams Series",
    price: "$8.95",
    image: "/images/mango-hero.png",
    note: "Mango puree, mango cubes, cream, sago, and a cold spoon finish.",
  },
  {
    name: "Factory Boba",
    category: "Boba",
    price: "$6.95",
    image: "/images/mango-drinks.png",
    note: "Tea, milk, mango, and tapioca pearls built for the afternoon rush.",
  },
  {
    name: "Dreamy Mango Drink",
    category: "Dreamy Drinks",
    price: "$7.45",
    image: "/images/mango-tray.png",
    note: "A bright mango cooler with fruit, foam, and a glossy tropical finish.",
  },
  {
    name: "Mango Bagel",
    category: "Magical Bagel",
    price: "$9.25",
    image: "/images/mango-bagel.png",
    note: "Toasted bagel, mango cream, fruit, and a little crunch.",
  },
];

export const proof = [
  ["4.9", "early rating signal"],
  ["326", "Commercial St"],
  ["10+", "launch reviews"],
  ["7 days", "dessert-run energy"],
] as const;

export const trackerStats = [
  ["Leads", "184", "+22%", "From maps, DoorDash, and Instagram clicks"],
  ["Orders", "71", "+15%", "Tracked pickup and delivery conversions"],
  ["Campaigns", "5", "live", "Lunch, boba, bagel, catering, retargeting"],
  ["ROAS", "3.8x", "target", "Blended paid and organic estimate"],
] as const;

export const campaigns = [
  {
    name: "Mango Dreams launch",
    channel: "Instagram Reels",
    spend: "$420",
    leads: 58,
    status: "Scaling",
  },
  {
    name: "Boba after school",
    channel: "TikTok + Maps",
    spend: "$260",
    leads: 37,
    status: "Testing",
  },
  {
    name: "Commercial St lunch",
    channel: "Google Local",
    spend: "$310",
    leads: 49,
    status: "Active",
  },
  {
    name: "Party tray retargeting",
    channel: "Meta",
    spend: "$190",
    leads: 21,
    status: "New",
  },
];
