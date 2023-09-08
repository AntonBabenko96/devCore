import styles from "./Footer.module.css";
import Container from "../Container/Container";
import logo from "@/public/logoMini.svg";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <Container>
        <div className={styles.footerWrapper}>
          <div className={styles.headInfo}>
            <div className={styles.titleWrapper}>
              <Image
                src={logo}
                width={40}
                height={34}
                className={styles.logo}
              />
              <p className={styles.title}>DevCore</p>
            </div>
            <div className={styles.textWrapper}>
              <p className={styles.text}>
                We appreciate your interest in our company. Please, do not
                hesitate to contact us.
              </p>
            </div>
          </div>

          <div className={styles.linkWrapper}>
            <h3 className={styles.secondTitle}>Company</h3>
            <div className={styles.links}>
              <Link className={styles.link} href="/">
                About
              </Link>
              <Link className={styles.link} href="/">
                Our works
              </Link>
              <Link className={styles.link} href="/">
                Prices
              </Link>
              <Link className={styles.link} href="/">
                Contact form
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
