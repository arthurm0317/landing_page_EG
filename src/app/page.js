"use client"

import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.page}>
      <header className={`${styles.header} ${isScrolled ? styles.headerVisible : ''}`}>
        <div className={styles.headerContent}>
          <h1 className={styles.headerLogo}>Effective Gain</h1>
          <nav className={styles.nav}>
            <a href="#home" className={styles.navLink}>Home</a>
            <a href="#sobre" className={styles.navLink}>Sobre</a>
            <a href="#servicos" className={styles.navLink}>Serviços</a>
            <a href="#contato" className={styles.navLink}>Contato</a>
          </nav>
        </div>
      </header>

      <main className={styles.main}>
        <h1 className={styles.modernHeading}>
          Effective Gain
        </h1>
        <p className={styles.subtitle}>
          Transforme a forma como você faz negócios com nosso CRM, aumentando sua eficiência e produtividade.
        </p>
      </main>

      <div className={`${styles.scrollIndicator} ${isScrolled ? styles.scrollIndicatorHidden : ''}`}>
        <div className={styles.scrollBall}>
          <div className={styles.scrollArrow}></div>
        </div>
      </div>

      <section id="sobre" className={styles.section}>
        <h2>Sobre Nós</h2>
        <p>Somos uma empresa focada em resultados e inovação.</p>
      </section>

      <section id="servicos" className={styles.section}>
        <h2>Nossos Serviços</h2>
        <p>Oferecemos soluções completas para seu negócio.</p>
      </section>

      <section id="contato" className={styles.section}>
        <h2>Entre em Contato</h2>
        <p>Estamos aqui para ajudar você a alcançar seus objetivos.</p>
      </section>
    </div>
  );
}
