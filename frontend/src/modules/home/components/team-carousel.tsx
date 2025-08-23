"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/core/ui/button";
import styles from "../styles/team-section.module.css";
import Image from "next/image";

const team = [
  {
    name: "Maxim Sarsekeyev",
    role: "Co-Founder, Gay",
    image: "/images/team-members/maxim-gay.jpg",
  },
  {
    name: "Daniyar Munsyzbayev",
    role: "Co-Founder, Gay",
    image: "/images/team-members/daniyar-gay.jpg",
  },
  {
    name: "Rasul Kerimzhanov",
    role: "Co-founder, Gay",
    image: "/images/team-members/rasul-gay.jpg",
  },
  {
    name: "Danis Tabachniy",
    role: "Co-Founder, Gay",
    image: "/images/team-members/danis-gay.jpg",
  },
];

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 75 : -75,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -75 : 75,
    opacity: 0,
  }),
};

const TeamCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % team.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + team.length) % team.length);
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.carousel_container}>
        <Button
          variant="secondary"
          onClick={handlePrev}
          className={styles.nav_btn}
          style={{ padding: "0.5rem", borderRadius: "0.5rem" }}
        >
          <ChevronLeft size={20} />
        </Button>

        <div className={styles.slider}>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.2 }}
              className={styles.card}
            >
              <div className="img-container">
                <Image
                  src={team[current].image}
                  alt={`${team[current].name}, ${team[current].role}`}
                  fill
                />
              </div>
              <h1 className={styles.member_name}>{team[current].name}</h1>
              <p className={styles.member_role}>{team[current].role}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <Button
          variant="secondary"
          onClick={handleNext}
          className={styles.nav_btn}
          style={{ padding: "0.5rem", borderRadius: "0.5rem" }}
        >
          <ChevronRight size={20} />
        </Button>
      </div>

      <div className={styles.dots}>
        {team.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={
              i === current ? `${styles.dot} ${styles.active}` : styles.dot
            }
          />
        ))}
      </div>
    </div>
  );
};

export default TeamCarousel;
