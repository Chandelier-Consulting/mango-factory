import Image from "next/image";
import Link from "next/link";
import { MotionCard, MotionGroup, MotionItem, MotionLink } from "@/components/motion";
import { campaigns, proof, signatures, site, trackerStats } from "@/lib/site";

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="icon">
      <path d="M5 12h13m-5-5 5 5-5 5" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <section className="hero-section">
        <div className="hero-grid-overlay" />
        <MotionGroup className="section-shell hero-layout">
          <div className="hero-copy">
            <MotionItem>
              <h1 className="display-hero text-balance">Mango drinks, boba, and dessert runs in San Jose.</h1>
            </MotionItem>
            <MotionItem>
              <p className="hero-lede">
                Mango Factory turns fruit, tea, cream, pearls, and bagels into glossy
                late-afternoon cravings from 326 Commercial St, San Jose.
              </p>
            </MotionItem>
            <MotionItem className="action-row">
              <MotionLink className="button button-primary" href={site.orderUrl} target="_blank" rel="noreferrer">
                Order online <ArrowIcon />
              </MotionLink>
              <MotionLink className="button button-ghost" href={site.mapsUrl} target="_blank" rel="noreferrer">
                Get directions
              </MotionLink>
            </MotionItem>
          </div>
          <MotionItem className="hero-visual-wrap">
            <div className="hero-visual">
              <Image
                src="/images/mango-hero.png"
                alt="Mango Factory mango dessert cups with boba and fresh mango"
                width={1400}
                height={1000}
                priority
                quality={92}
                className="photo-grade"
              />
              <div className="hero-ticket">
                <span>Now serving</span>
                <strong>Mango Dreams</strong>
              </div>
            </div>
          </MotionItem>
        </MotionGroup>
      </section>

      <section className="proof-strip">
        <div className="section-shell proof-grid">
          {proof.map(([value, label]) => (
            <div key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="home-section cream-band" id="menu">
        <div className="section-shell section-heading">
          <div>
            <p className="label">Signatures</p>
            <h2 className="display-section text-balance">A short menu built for mango cravings.</h2>
          </div>
          <Link className="button button-secondary" href="/menu">
            View menu
          </Link>
        </div>
        <MotionGroup className="section-shell signature-grid">
          {signatures.map((item) => (
            <MotionCard className="signature-card" key={item.name}>
              <Image src={item.image} alt={item.name} width={760} height={540} quality={85} className="photo-grade" />
              <div>
                <p>{item.category}</p>
                <h3>{item.name}</h3>
                <span>{item.note}</span>
                <strong>{item.price}</strong>
              </div>
            </MotionCard>
          ))}
        </MotionGroup>
      </section>

      <section className="home-section order-section">
        <div className="section-shell order-grid">
          <MotionGroup className="order-copy">
            <MotionItem>
              <p className="label">Fast path</p>
              <h2 className="display-section text-balance">Make the site sell the next visit.</h2>
            </MotionItem>
            <MotionItem>
              <p>
                The homepage is direct: show the mango product, make ordering obvious,
                then move guests to menu, directions, or party tray planning without
                burying the action.
              </p>
            </MotionItem>
            <MotionItem className="step-list">
              {["Pick a craving", "Order pickup or delivery", "Send directions to the group"].map((step, index) => (
                <div key={step}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{step}</strong>
                </div>
              ))}
            </MotionItem>
          </MotionGroup>
          <MotionItem>
            <Image
              src="/images/mango-tray.png"
              alt="Mango Factory party tray with mango drinks and dessert cups"
              width={1100}
              height={850}
              quality={92}
              className="photo-panel photo-grade"
            />
          </MotionItem>
        </div>
      </section>

      <section className="home-section marketing-preview">
        <div className="section-shell marketing-grid">
          <div>
            <p className="label">Marketing tracker</p>
            <h2 className="display-section text-balance">Campaigns, leads, and offers in one place.</h2>
            <p>
              A lightweight dashboard for the marketing push: launch campaigns, track
              leads, watch orders, and see which Mango Factory offer is earning attention.
            </p>
            <div className="action-row">
              <MotionLink className="button button-primary" href="/marketing">
                Open tracker <ArrowIcon />
              </MotionLink>
              <MotionLink className="button button-ghost-dark" href={site.orderUrl} target="_blank" rel="noreferrer">
                DoorDash listing
              </MotionLink>
            </div>
          </div>
          <div className="dashboard-card">
            <div className="dashboard-topline">
              <strong>Marketing tracker</strong>
              <span>Live plan</span>
            </div>
            <div className="metric-grid">
              {trackerStats.map(([label, value, trend]) => (
                <div key={label}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                  <em>{trend}</em>
                </div>
              ))}
            </div>
            <div className="campaign-list">
              {campaigns.slice(0, 3).map((campaign) => (
                <div key={campaign.name}>
                  <span>{campaign.channel}</span>
                  <strong>{campaign.name}</strong>
                  <em>{campaign.status}</em>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
