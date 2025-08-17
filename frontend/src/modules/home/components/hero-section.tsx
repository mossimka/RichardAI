import React from "react";
import Image from "next/image";

import Styles from "../styles/hero-section.module.css";
import { Button } from "@/core/ui/button";

const HeroSection = () => {
  return (
    <section className={Styles.heroSection}>
      <video autoPlay loop muted className={Styles.video}>
        <source src="/vids/hero-video.mp4" type="video/mp4" />
      </video>
      <div className={Styles.content}>
        <div className={Styles.wrapper}>
          <h2>Become a man</h2>
          <h2>you&apos;ve always wanted to be</h2>
          <Button variant="primary" size="lg">
            Start now!
          </Button>
        </div>
        <div className={Styles.imageGroup}>
          <Image
            src="/images/parallelogram.png"
            alt="Image 1"
            width={120}
            height={480}
            className={Styles.heroImage1}
          />
          <Image
            src="/images/parallelogram.png"
            alt="Image 2"
            width={50}
            height={200}
            className={Styles.heroImage2}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
