"use client";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Landing from "@/components/landing/Landing";
import SubLanding from "@/components/landing/SubLanding";
import NextSub from "@/components/landing/NextSub";
import Pricing from "@/components/landing/Pricing";
import Banner from "@/components/landing/Banner";
import BetaTesterModal from "@/components/landing/BetaTesterModel";
import WaitlistModal from "@/components/landing/WaitlistModal";

export default function Home() {
  const [isBetaModalOpen, setBetaModalOpen] = useState(false);
  const [isWaitlistModalOpen, setWaitlistModalOpen] = useState(false);

  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing");
    pricingSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      <Navigation
        onPricingClick={scrollToPricing}
        onBetaClick={() => setBetaModalOpen(true)}
      />
      <Landing
        onBetaClick={() => setBetaModalOpen(true)}
        onWaitlistClick={() => setWaitlistModalOpen(true)}
        onPricingClick={scrollToPricing}
      />
      <SubLanding />
      <NextSub onWaitlistClick={() => setWaitlistModalOpen(true)} />
      <div id="pricing">
        <Pricing />
      </div>
      <Banner />

      {/* Modals */}
      <BetaTesterModal
        isOpen={isBetaModalOpen}
        onClose={() => setBetaModalOpen(false)}
      />
      <WaitlistModal
        isOpen={isWaitlistModalOpen}
        onClose={() => setWaitlistModalOpen(false)}
      />
    </main>
  );
}
