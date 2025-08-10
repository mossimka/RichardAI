import { Button } from "@/core/ui/button";
import React from "react";

const HeroSection = () => {
  return (
    <section>
      <div className="wrapper">
        <h1>Welcome to Our Website</h1>
        <p>Your journey to excellence starts here.</p>
        <Button variant="primary" size="lg">
          Get Started
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
