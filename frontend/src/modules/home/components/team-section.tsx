import React from "react";

import styles from "../styles/team-section.module.css";
import TeamCarousel from "./team-carousel";

export default function TeamSection() {
  return (
    <section>
      <div className={styles.content}>
        <h2 className={styles.team_title}>Meet Our Team</h2>
        <p className={styles.team_description}>
          Our team is composed of experts in various fields, dedicated to
          helping you achieve your goals.
        </p>
        <TeamCarousel />
      </div>
    </section>
  );
}
