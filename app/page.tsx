'use client'

import { AboutSection } from "@/components/Sections/AboutSection";
import GetInvolvedSection from "@/components/Sections/GetInvolved";
import HeroSection from "@/components/Sections/HeroSection";
import { ServicesSection } from "@/components/Sections/ServicesSection";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      {/* <GetInvolvedSection/> */}
    </main>
  );
}
