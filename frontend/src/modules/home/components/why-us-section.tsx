"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "motion/react";
import styles from "../styles/why-us-section.module.css";

const advantages = [
  {
    title: "Tailored for you",
    description:
      "Every man’s health journey is different. Our app adapts to your goals and lifestyle, giving you personalized plans for fitness, nutrition, and mental well-being that actually fit into your routine.",
    image: "/images/finn/finn1.png",
  },
  {
    title: "Backed by Expertise",
    description:
      "All recommendations are based on trusted medical research and guided by proven methods. You can rely on information that’s accurate, practical, and easy to follow — no guesswork or fads.",
    image: "/images/finn/finn2.png",
  },
  {
    title: "Smarter with AI",
    description:
      "AI enhances your experience by learning from your progress, spotting patterns, and giving timely suggestions. It’s like having a coach that adjusts with you, keeping you consistent and motivated.",
    image: "/images/finn/finn3.png",
  },
];

export default function WhyUsSection() {
  const advantagesRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: advantagesRef,
    offset: ["start center", "end center"],
  });

  const imageIndex = useTransform(
    scrollYProgress,
    [0, 0.33, 0.66, 1],
    [0, 0, 1, 2]
  );

  useMotionValueEvent(imageIndex, "change", (latest) => {
    setCurrentImageIndex(Math.round(latest));
  });

  const finnImages = [
    "/images/finn/finn1.png",
    "/images/finn/finn2.png",
    "/images/finn/finn3.png",
  ];

  return (
    <section className={styles.why_us_section}>
      <h1 className={styles.title_mobile}>Why choose us?</h1>
      <div className={`${styles.container} content`}>
        <div className={styles.finn_container}>
          <div className={styles.finn}>
            <h1>Why choose us?</h1>
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: 1, scale: 1.05 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src={finnImages[currentImageIndex]}
                alt="Finn character"
                width={0}
                height={0}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className={styles.finn_image}
              />
            </motion.div>
          </div>
        </div>
        <div className={styles.advantages} ref={advantagesRef}>
          {advantages.map((advantage, index) => (
            <div className={styles.advantage} key={index}>
              <h2>{advantage.title}</h2>
              <p>{advantage.description}</p>
              <Image
                src={advantage.image}
                alt={advantage.title}
                width={0}
                height={0}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className={styles.finn_image_mobile}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
