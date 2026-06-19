import Image from "next/image";
import { MotionGroup, MotionItem, MotionLink } from "@/components/motion";
import { signatures, site } from "@/lib/site";

export const metadata = {
  title: "Menu | Mango Factory",
  description: "Mango Factory menu highlights for mango drinks, boba, bagels, and dessert cups.",
};

export default function MenuPage() {
  return (
    <main className="subpage-main">
      <section className="subpage-hero">
        <MotionGroup className="section-shell subpage-hero-grid">
          <MotionItem>
            <h1 className="display-section text-balance">Menu built around mango, boba, cream, and crunch.</h1>
            <p>
              Use this page as the polished customer-facing menu while the full delivery
              menu remains on DoorDash.
            </p>
            <MotionLink className="button button-primary" href={site.orderUrl} target="_blank" rel="noreferrer">
              Order online
            </MotionLink>
          </MotionItem>
          <MotionItem>
            <Image src="/images/mango-drinks.png" alt="Mango Factory drinks" width={1000} height={760} quality={92} className="photo-panel photo-grade" />
          </MotionItem>
        </MotionGroup>
      </section>
      <section className="home-section cream-band">
        <div className="section-shell menu-list">
          {signatures.map((item) => (
            <article key={item.name}>
              <Image src={item.image} alt={item.name} width={420} height={300} quality={85} className="photo-grade" />
              <div>
                <p className="label">{item.category}</p>
                <h2>{item.name}</h2>
                <span>{item.note}</span>
              </div>
              <strong>{item.price}</strong>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
