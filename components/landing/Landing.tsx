"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const contentArray = [
  {
    title: "Premium Podcasts & Shows That Move You Forward",
    subtitle: "Exclusive content from thought leaders and innovators",
  },
  {
    title: "Stories That Inspire, Knowledge That Empowers",
    subtitle: "Access our curated library of books and audiobooks",
  },
  {
    title: "Watch Original Series & Documentaries in 4K",
    subtitle: "High-quality video content that matters",
  },
];

export default function Landing() {
  const images = ["/trace.jpeg", "/kendrick.jpeg", "/trace.jpg"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="min-h-screen relative bg-cover bg-center transition-all duration-1000 ease-in-out"
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black to-gray-900/30"></div>
      <div className="relative flex items-center px-8 sm:px-[10%] min-h-screen">
        <div className="max-w-4xl">
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center border border-gray-500 rounded-full px-3 py-1">
              <img
                src="/splash-icon-dark.png"
                className="h-4 w-4 mx-1"
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
              className="text-7xl font-bold text-white mb-6 leading-tight"
            >
              {contentArray[currentIndex].title}
            </motion.h1>
            <motion.p
              key={`p-${currentIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-300 mb-8"
            >
              {contentArray[currentIndex].subtitle}
            </motion.p>
          </AnimatePresence>
          <div className="flex gap-4 mt-6">
            <Link
              href="/waitlist"
              className="px-6 py-3 bg-[#F27321] text-white rounded-full hover:bg-[#d65d0f] transition-colors font-medium"
            >
              Join the Waitlist
            </Link>
            <Link
              href="/beta"
              className="px-6 py-3 bg-black border border-gray-400 text-white rounded-full hover:bg-[#F27321] transition-colors font-medium"
            >
              Become a Beta Tester
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
