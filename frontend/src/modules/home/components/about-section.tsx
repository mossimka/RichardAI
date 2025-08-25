"use client";
import React, { useRef } from "react";
import styles from "../styles/about-section.module.css";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
export default function AboutSection() {
  const element = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start end", "center center"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);

  return (
    <section>
      <motion.div
        style={{ opacity: scrollYProgress, y }}
        ref={element}
        className={`content ${styles.aboutContent}`}
      >
        <div className={styles.text}>
          <h2 className={styles.title}>
            What is <span className={styles.highlight}>RichardAI?</span>
          </h2>
          <p className={styles.description}>
            We’re building a men’s health startup while living like the final
            boss of bad habits — fueled by caffeine, hunched over code, and
            skipping the gym so hard it counts as cardio. We’re not just solving
            the problem, we are the problem.
          </p>
        </div>
        <Image
          src="/images/team-members/guys.png"
          alt="Team members"
          width={0}
          height={0}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={styles.members_image}
        />
      </motion.div>
    </section>
  );
}
