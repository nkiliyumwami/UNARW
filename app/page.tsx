'use client'

import { AboutSection } from "@/components/Sections/AboutSection";
import ContactUsSection from "@/components/Sections/ContactUsSection";
import Footer from "@/components/Sections/Footer";
import HeroSection from "@/components/Sections/HeroSection";
import Navbar from "@/components/Sections/NavbarSection";
import { ServicesSection } from "@/components/Sections/ServicesSection";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactUsSection />
      <Footer/>
    </main>
  );
}
