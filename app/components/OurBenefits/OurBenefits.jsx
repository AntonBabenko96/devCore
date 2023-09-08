import styles from "./OurBenefits.module.css";
import Image from "next/image";
import Container from "../Container/Container";
import design from "@/public/design.png";
import development from "@/public/development.png";
import maintenance from "@/public/maintenance.png";

export default function OurBenifits() {
  return (
    <section className={styles.ourBenifits}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.decorationFirst}></div>
          <div className={styles.decorationSecond}></div>
          <h2 className={styles.title}>Our benifits</h2>
          <div className={styles.infoWrapper}>
            <div className={styles.itemInfo}>
              <h1 className={styles.secondTitle}>Design</h1>
              <Image
                src={design}
                width={100}
                height={100}
                className={styles.img}
              />
              <p className={styles.text}>
                We will create for you any design according to your preferences,
                so that the client has an unforgettable impression and desire to
                stay on your landing page, website, webservice or mobile app.
              </p>
            </div>
            <div className={styles.itemInfo}>
              <h1 className={styles.secondTitle}>Development</h1>
              <Image
                src={development}
                width={100}
                height={100}
                className={styles.img}
              />
              <p className={styles.text}>
                Your product will be developed by the latest technology for good
                device support. We will make this product not only convenient,
                but also fast.
              </p>
            </div>
            <div className={styles.itemInfo}>
              <h1 className={styles.secondTitle}>Maintenance</h1>
              <Image
                src={maintenance}
                width={100}
                height={100}
                className={styles.img}
              />
              <p className={styles.text}>
                After release we will stay with you to support your product,
                make it more functional and visible in search engines. If you
                want to change something or you will have a question, you can
                always contact us.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
