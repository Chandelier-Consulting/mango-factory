import { mkdir, writeFile } from "node:fs/promises";
import sharp from "sharp";

const outDir = new URL("../public/images/", import.meta.url);
await mkdir(outDir, { recursive: true });

function svg({ title, subtitle, accent, seed }) {
  const circles = Array.from({ length: 22 }, (_, index) => {
    const x = (seed * 37 + index * 71) % 1180;
    const y = (seed * 83 + index * 47) % 820;
    const r = 18 + ((seed + index * 13) % 72);
    const opacity = 0.08 + (((seed + index) % 6) / 100);
    return `<circle cx="${x}" cy="${y}" r="${r}" fill="${accent}" opacity="${opacity}"/>`;
  }).join("");

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1400" height="1000" viewBox="0 0 1400 1000">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop stop-color="#150f0a"/>
      <stop offset="0.48" stop-color="#2a180b"/>
      <stop offset="1" stop-color="#f7b51b"/>
    </linearGradient>
    <linearGradient id="cup" x1="0" y1="0" x2="0" y2="1">
      <stop stop-color="#fff8ea"/>
      <stop offset="0.45" stop-color="#ffd36a"/>
      <stop offset="1" stop-color="#d87a13"/>
    </linearGradient>
    <filter id="shadow" x="-40%" y="-40%" width="180%" height="180%">
      <feDropShadow dx="0" dy="38" stdDeviation="34" flood-color="#000" flood-opacity="0.42"/>
    </filter>
  </defs>
  <rect width="1400" height="1000" fill="url(#bg)"/>
  ${circles}
  <path d="M0 760 C260 650 360 900 640 760 C850 650 1020 690 1400 520 L1400 1000 L0 1000 Z" fill="#fff8ea" opacity="0.1"/>
  <g filter="url(#shadow)" transform="translate(170 120)">
    <ellipse cx="490" cy="660" rx="430" ry="88" fill="#0b0806" opacity="0.38"/>
    <g transform="translate(140 10)">
      <path d="M145 90 H555 L505 790 Q500 840 455 850 H245 Q200 840 195 790 Z" fill="url(#cup)" opacity="0.96"/>
      <path d="M145 90 H555 L525 202 H175 Z" fill="#fff8ea" opacity="0.82"/>
      <path d="M198 245 C310 195 425 310 522 250 L482 655 C380 725 280 610 218 680 Z" fill="#f7b51b" opacity="0.74"/>
      <g fill="#25120a">
        <circle cx="250" cy="705" r="24"/><circle cx="318" cy="735" r="20"/><circle cx="390" cy="706" r="25"/><circle cx="450" cy="746" r="19"/>
      </g>
      <g fill="#ffcf4d">
        <rect x="230" y="190" width="82" height="70" rx="16" transform="rotate(-12 271 225)"/>
        <rect x="360" y="178" width="92" height="76" rx="18" transform="rotate(10 406 216)"/>
        <rect x="290" y="286" width="88" height="76" rx="18" transform="rotate(18 334 324)"/>
        <rect x="420" y="320" width="76" height="66" rx="16" transform="rotate(-16 458 353)"/>
      </g>
      <path d="M198 452 H502" stroke="#fff8ea" stroke-width="7" opacity="0.36"/>
      <text x="350" y="555" text-anchor="middle" font-family="Arial, sans-serif" font-size="42" font-weight="900" fill="#17100a">MANGO</text>
      <text x="350" y="604" text-anchor="middle" font-family="Arial, sans-serif" font-size="30" font-weight="900" fill="#17100a">FACTORY</text>
    </g>
    <g transform="translate(760 130)">
      <path d="M95 60 H330 L295 545 Q290 585 250 592 H175 Q135 585 130 545 Z" fill="#fff8ea" opacity="0.92"/>
      <path d="M130 280 H298 L282 535 Q214 570 145 535 Z" fill="#d87a13" opacity="0.88"/>
      <circle cx="170" cy="500" r="18" fill="#1b0d08"/><circle cx="225" cy="512" r="16" fill="#1b0d08"/><circle cx="262" cy="480" r="17" fill="#1b0d08"/>
      <rect x="164" y="178" width="66" height="58" rx="14" fill="#ffcf4d" transform="rotate(-10 197 207)"/>
      <rect x="235" y="198" width="62" height="54" rx="13" fill="#ffcf4d" transform="rotate(14 266 225)"/>
    </g>
  </g>
  <text x="84" y="112" font-family="Arial, sans-serif" font-size="34" font-weight="900" fill="#fff8ea">${title}</text>
  <text x="84" y="158" font-family="Arial, sans-serif" font-size="20" font-weight="700" fill="#fff8ea" opacity="0.72">${subtitle}</text>
</svg>`;
}

const assets = [
  ["mango-hero.png", svg({ title: "Mango Factory", subtitle: "Mango drinks, boba, dessert cups", accent: "#f7b51b", seed: 4 })],
  ["mango-drinks.png", svg({ title: "Factory Boba", subtitle: "Tea, mango, pearls, cold foam", accent: "#1d6b42", seed: 9 })],
  ["mango-tray.png", svg({ title: "Party tray", subtitle: "Dessert runs for teams and groups", accent: "#de4a31", seed: 15 })],
  ["mango-bagel.png", svg({ title: "Mango Bagel", subtitle: "Mango cream, fruit, crunch", accent: "#f7b51b", seed: 21 })],
];

for (const [name, source] of assets) {
  const png = await sharp(Buffer.from(source)).png().toBuffer();
  await writeFile(new URL(name, outDir), png);
}
