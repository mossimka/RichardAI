import React from "react";

import styles from "../styles/team-section.module.css";
import TeamCarousel from "./team-carousel";

export default function TeamSection() {
  return (
    <section>
      <div className="content">
        <h2 className={styles.team_title}>Meet Our Team</h2>
        <TeamCarousel />
      </div>
    </section>
  );
}
