import styles from "./Hero.module.css";
import Container from "../Container/Container";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <Container>
        <div className={styles.wrapperAnimation}>
          <div className={styles.arrowLeft}></div>
          <div className={styles.square}></div>
          <div className={styles.arrowRight}></div>
        </div>
        <div className={styles.wrapperContent}>
          <h1 className={styles.title}>DevCore</h1>
          <p className={styles.text}>
            Transform your online presence into a lead-generating machine with
            our expert website development
          </p>
          <button className={styles.btn}>Contact us</button>
        </div>
      </Container>
    </div>
  );
}
