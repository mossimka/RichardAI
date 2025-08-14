import React from "react";

import Styles from "../styles/hero-section.module.css";
import { Button } from "@/core/ui/button";

const HeroSection = () => {
  return (
    <section>
      <div className={Styles.wrapper}>
        <h2>Become a man</h2>
        <h2>you&apos;ve always wanted to be</h2>
        <Button variant="primary" size="lg">
          Start now!
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
