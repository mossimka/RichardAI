import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/core/ui/header";
import HeroSection from "@/modules/home/components/hero-sectoin";
import Footer from "@/core/ui/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
      </main>
      <Footer />
    </>
  );
}
