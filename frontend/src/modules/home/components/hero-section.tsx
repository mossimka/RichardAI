import React from "react";
import styles from "../styles/hero-section.module.css";
import { Button } from "@/core/ui/button";

const HeroSection = () => {
  return (
    <section className={styles.hero_section}>
      <video autoPlay loop muted className={styles.video}>
        <source src="/vids/hero-video.mp4" type="video/mp4" />
      </video>
      <div className="content">
        <h1 className={styles.hero_title}>increase your</h1>
        <h2 className={styles.hero_subtitle}>testosterone</h2>
        <div
          className=""
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "1rem 0",
          }}
        >
          <Button variant="secondary" size="lg" className={styles.cta_button}>
            Start now!
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
