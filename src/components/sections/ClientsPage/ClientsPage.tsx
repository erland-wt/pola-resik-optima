import Image from "next/image";
import cardsClients, { type CardClient } from "./CardClients";
import styles from "./ClientsPage.module.css";

const splitIntoTwoRows = (items: CardClient[]): [CardClient[], CardClient[]] => {
  const firstRow: CardClient[] = [];
  const secondRow: CardClient[] = [];

  items.forEach((item, index) => {
    if (index % 2 === 0) {
      firstRow.push(item);
      return;
    }
    secondRow.push(item);
  });

  return [firstRow, secondRow];
};

const buildLoopItems = (items: CardClient[]): CardClient[] => items.concat(items);

const ClientsPage = () => {
  const [topRow, bottomRow] = splitIntoTwoRows(cardsClients);
  const topLoop = buildLoopItems(topRow);
  const bottomLoop = buildLoopItems(bottomRow);

  return (
    <section className={`${styles.section} bg-white py-10 sm:py-12 lg:py-16`} aria-label="Our Clients">
      <h2 className={styles.title}>Kemitraan Strategis & Kepercayaan Mitra</h2>

      <div className={styles.rows}>
        <div className={styles.viewport} aria-hidden="true">
          <div className={styles.track + " " + styles.trackLeft}>
            {topLoop.map((card, index) => (
              <article key={card.id + "-top-" + index} className={styles.card}>
                <Image
                  src={card.image}
                  alt={"Logo klien " + card.id}
                  fill
                  sizes="(max-width: 640px) 38vw, (max-width: 1024px) 24vw, 16vw"
                  className={styles.logo}
                />
              </article>
            ))}
          </div>
        </div>

        <div className={styles.viewport} aria-hidden="true">
          <div className={styles.track + " " + styles.trackRight}>
            {bottomLoop.map((card, index) => (
              <article key={card.id + "-bottom-" + index} className={styles.card}>
                <Image
                  src={card.image}
                  alt={"Logo klien " + card.id}
                  fill
                  sizes="(max-width: 640px) 38vw, (max-width: 1024px) 24vw, 16vw"
                  className={styles.logo}
                />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsPage;