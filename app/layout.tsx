import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Sections/NavbarSection";
import Footer from "@/components/Sections/Footer";
import ContactUsSection from "@/components/Sections/ContactUsSection";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UNA Rwanda",
  description: "UNA Rwanda",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <ContactUsSection/>
        <Footer/>
      </body>
    </html>
  );
}
