"use client";
import React from "react";
import styles from "../styles/hero-section.module.css";
import { Button } from "@/core/ui/button";
import { motion } from "motion/react";

const HeroSection = () => {
  return (
    <section className={styles.hero_section}>
      <video autoPlay loop muted className={styles.video}>
        <source src="/vids/hero-video.mp4" type="video/mp4" />
      </video>
      {/* <div className="content" style={{ width: "85vw" }}>
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className={styles.hero_title}
        >
          increase your
        </motion.h1>
        <motion.h2
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className={styles.hero_subtitle}
        >
          testosterone
        </motion.h2>
        <motion.div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "1rem 0",
          }}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <Button variant="secondary" size="lg" className={styles.cta_button}>
            Start now!
          </Button>
        </motion.div>
      </div> */}
      <div className="content" style={{ width: "85vw" }}>
        <h1 className={styles.hero_title}>increase your</h1>
        <h2 className={styles.hero_subtitle}>testosterone</h2>
        <div
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
