import Navbar from "../components/NavBar";
import Hero from "../components/Hero";
import About from "../components/About";
import PortfolioSection from "../components/PortfolioSection";
import Contact from "../components/Contact";
import React from "react";

export default function PublicPortfolio() {
  return (
    <div className="w-full overflow-x-hidden bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors">
      <Navbar />
      <Hero />
      <About />
      <PortfolioSection />
      <Contact />
    </div>
  );
}
