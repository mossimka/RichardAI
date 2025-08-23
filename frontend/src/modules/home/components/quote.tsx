"use client";
import { motion, MotionValue, useScroll, useTransform } from "motion/react";

import { useRef } from "react";
import styles from "../styles/quote.module.css";
export default function Quote({
  text,
  author,
  direction,
}: {
  text: string;
  author: string;
  direction: "left" | "right";
}) {
  const words = text.split(" ");

  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.25"],
  });

  return (
    <div className={styles.quote}>
      <div className={styles.quote_container}>
        <motion.p
          className={styles.quote_text}
          ref={element}
          style={{
            justifyContent: direction === "right" ? "flex-end" : "flex-start",
          }}
        >
          {words.map((word, index) => {
            const start = index / words.length;
            const end = start + 1 / words.length;
            return (
              <Word
                word={word}
                key={index}
                range={[start, end]}
                progress={scrollYProgress}
              />
            );
          })}
        </motion.p>
        <p
          style={{ textAlign: direction === "right" ? "left" : "right" }}
          className={styles.quote_author}
        >
          — {author}
        </p>
      </div>
    </div>
  );
}

function Word({
  word,
  range,
  progress,
}: {
  word: string;
  range: number[];
  progress: MotionValue<number>;
}) {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className={styles.quote_word}>
      <span className={styles.shadow}>{word}</span>
      <motion.span style={{ opacity }}>{word}</motion.span>
    </span>
  );
}
