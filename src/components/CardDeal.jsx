import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Initial Funding Round Will<br className="sm:block hidden" /> Consist of 5,000 NFTs
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Only 5,000 NFTs will be available with a mint price of 250$. Only one round of funding will be done.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
