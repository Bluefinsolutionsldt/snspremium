"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import BetaTesterModal from "./BetaTesterModel";
import WaitlistModal from "./WaitlistModal";

const contentArray = [
  {
    title: "Discover African Stories & Documentaries",
    subtitle: "Exclusive content celebrating our rich cultural heritage",
  },
  {
    title: "Authentic African Tales That Inspire",
    subtitle: "Stories that connect you to our roots and traditions",
  },
  {
    title: "Watch Original African Documentaries in HD",
    subtitle: "High-quality productions showcasing African excellence",
  },
  {
    title: "Biblical Stories Retold Through African Lens",
    subtitle: "Timeless narratives with unique cultural perspectives",
  },
  {
    title: "Engaging Podcasts From African Voices",
    subtitle: "Thought-provoking conversations with African thought leaders",
  },
  {
    title: "Experience Entertainment That Celebrates Africa",
    subtitle: "Curated content that showcases our diverse cultures",
  },
  {
    title: "Stream Anywhere, Anytime on Any Device",
    subtitle: "Access your favorite African content on the go",
  },
  {
    title: "Unlock Premium African Content with SNS Premium",
    subtitle: "Your gateway to authentic African digital experiences",
  },
];

interface LandingProps {
  onBetaClick: () => void;
  onWaitlistClick: () => void;
  onPricingClick: () => void;
}

export default function Landing({
  onBetaClick,
  onWaitlistClick,
  onPricingClick,
}: LandingProps) {
  const images = [
    "/50-cent--wide-cover---.jpg",
    "/ALNWICK-GARDEN-----wide-cover---.jpg",
    "/BENZEMA-----wide-cover---.jpg",
    "/DUME-SURUALI--wide-cover---.jpg",
    "/Gharama-KOMBE-LA-Dunia-wide-cover---.jpg",
    "/JACKIE-CHAN-----wide-cover---.jpg",
    "/KIMO--wide-cover---.jpg",
    "/MAAJABU-YA-BAHARI-YA-SHETANI--wide-cover---.jpg",
    "/Mpiganaji wide _ cover.jpg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isBetaModalOpen, setBetaModalOpen] = useState(false);
  const [isWaitlistModalOpen, setWaitlistModalOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contentArray.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        className="min-h-screen relative bg-cover bg-center transition-all duration-1000 ease-in-out"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black to-gray-900/30"></div>
        <div className="relative flex items-center px-8 sm:px-[10%] min-h-screen">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center">
                <img
                  src="/splash-icon-dark.png"
                  className="h-12 w-12 mx-1"
                  alt="laurel left"
                />
              </div>
            </div>
            <AnimatePresence mode="wait">
              <motion.h1
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="sm:text-7xl text-5xl font-bold text-white mb-6 leading-tight"
              >
                {contentArray[currentIndex]?.title}
              </motion.h1>
              <motion.p
                key={`p-${currentIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xl text-gray-300 mb-8"
              >
                {contentArray[currentIndex]?.subtitle}
              </motion.p>
            </AnimatePresence>
            <div className="flex flex-col sm:flex-row gap-6 mt-8">
              {/* Waitlist Button */}
              {/* <button
                onClick={onWaitlistClick}
                className="group relative inline-flex items-center justify-center"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-[#F27321] to-[#FF8F4D] rounded-xl blur-lg opacity-30 group-hover:opacity-75 transition duration-500 group-hover:duration-200"></div>

                <div className="relative flex items-center justify-center space-x-3 bg-black border border-[#F27321]/20 px-8 py-4 rounded-xl transition-all duration-300 hover:border-[#F27321]/50">
                  <span className="relative bg-gradient-to-r from-[#F27321] to-[#FF8F4D] bg-clip-text text-transparent font-semibold text-lg">
                    Join Waitlist
                  </span>
                  <svg
                    className="w-5 h-5 opacity-70 group-hover:translate-x-1 transition-transform duration-300"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="url(#gradient)"
                  >
                    <defs>
                      <linearGradient
                        id="gradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#F27321" />
                        <stop offset="100%" stopColor="#FF8F4D" />
                      </linearGradient>
                    </defs>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </div>
              </button> */}

              {/* Beta Tester Button */}
              <button
                onClick={onBetaClick}
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#F27321] to-[#FF8F4D] transition-all duration-300 group-hover:scale-[1.05]"></div>
                <div className="relative flex items-center justify-center space-x-3 bg-gradient-to-r from-[#F27321] to-[#FF8F4D] px-8 py-4 transition-all duration-300">
                  <span className="font-semibold text-lg text-white">
                    Subscribe
                  </span>
                  <svg
                    className="w-5 h-5 text-white/90 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>

                {/* Shine effect */}
                <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/25 to-transparent group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <BetaTesterModal
        isOpen={isBetaModalOpen}
        onClose={() => setBetaModalOpen(false)}
      />

      <WaitlistModal
        isOpen={isWaitlistModalOpen}
        onClose={() => setWaitlistModalOpen(false)}
      />
    </>
  );
}
