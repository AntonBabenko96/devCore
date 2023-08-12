"use client";
import styles from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";
import Container from "../Container/Container";

export default function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerWrapper}>
          <div className={styles.logoWrapper}>
            <Image src={logo} alt="Logo" width={85} height={50} />
          </div>
          <div className={styles.linkBtnWrapper}>
            <Link className={styles.link} href="/">
              About
            </Link>
            <Link className={styles.link} href="/">
              Portfolio
            </Link>
            <Link className={styles.link} href="/">
              Prices
            </Link>
            <Link className={styles.link} href="/">
              Contacts
            </Link>
          </div>
          <div className={styles.langBtnWrapper}>
            <button className={styles.langBtn}>EN</button>
            <button className={styles.langBtn}>UA</button>
          </div>
        </div>
      </Container>
    </header>
  );
}
