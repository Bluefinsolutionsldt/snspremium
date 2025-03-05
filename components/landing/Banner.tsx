"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const phoneImages = [
  "/50-Cent-POTRAIT-cover---.jpg",
  "/ALNWICK-GARDEN-----POTRAIT-cover---.jpg",
  "/ALNWICK-GARDEN-----POTRAIT-cover---.jpg",
  "/BENZEMA-----POTRAIT-cover---.jpg",
  "/Gharama-KOMBE-LA-dunia-POTRAIT-cover---.jpg",
];

const LaptopMockup = () => (
  <svg
    viewBox="0 0 1200 800"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-auto"
  >
    {/* Laptop Base */}
    <rect x="200" y="100" width="800" height="500" rx="20" fill="#1A1A1A" />
    {/* Screen */}
    <rect x="220" y="120" width="760" height="460" rx="8" fill="#000000" />
    {/* Screen Content */}
    <rect
      x="240"
      y="140"
      width="720"
      height="420"
      rx="4"
      className="fill-[#F27321]/10"
    />

    {/* App Interface Elements */}
    <rect
      x="260"
      y="160"
      width="200"
      height="40"
      rx="8"
      fill="#F27321"
      opacity="0.3"
    />
    <rect
      x="260"
      y="220"
      width="680"
      height="320"
      rx="8"
      className="fill-white/5"
    />

    {/* Laptop Stand */}
    <path d="M150 600 L1050 600 L1000 700 L200 700 Z" fill="#1A1A1A" />
  </svg>
);

const PhoneMockup = () => (
  <svg
    viewBox="0 0 400 800"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-auto"
  >
    {/* Phone Frame */}
    <rect x="40" y="20" width="320" height="760" rx="40" fill="#1A1A1A" />
    {/* Screen */}
    <rect x="50" y="30" width="300" height="740" rx="35" fill="#000000" />
    {/* Screen Content */}
    <rect
      x="60"
      y="40"
      width="280"
      height="720"
      rx="30"
      className="fill-[#F27321]/10"
    />

    {/* App Interface Elements */}
    <rect
      x="80"
      y="60"
      width="240"
      height="60"
      rx="8"
      fill="#F27321"
      opacity="0.3"
    />
    <rect
      x="80"
      y="140"
      width="240"
      height="400"
      rx="8"
      className="fill-white/5"
    />

    {/* Navigation Bar */}
    <rect
      x="80"
      y="660"
      width="240"
      height="60"
      rx="8"
      className="fill-white/10"
    />

    {/* Notch */}
    <rect x="160" y="35" width="80" height="20" rx="10" fill="#000000" />
  </svg>
);

export default function Download() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % phoneImages.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-black relative overflow-hidden">
      {/* Background Gradient Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-4 w-48 sm:w-72 h-48 sm:h-72 bg-[#F27321]/30 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 -right-4 w-48 sm:w-72 h-48 sm:h-72 bg-[#F27321]/30 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 relative">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-6 sm:space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Download SNS Mobile
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-lg mx-auto lg:mx-0">
              Connect with your community on the go. Available for iOS and
              Android devices.
            </p>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              {/* App Store Button */}
              <button className="group relative inline-flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-xl px-6 py-3 transition-all duration-200">
                <div className="flex items-center space-x-3">
                  <svg
                    className="w-8 h-8 text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <div className="flex flex-col items-start">
                    <span className="text-xs text-gray-300">
                      Download on the
                    </span>
                    <span className="text-white font-medium">App Store</span>
                  </div>
                </div>
              </button>

              {/* Play Store Button */}
              <button className="group relative inline-flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-xl px-6 py-3 transition-all duration-200">
                <div className="flex items-center space-x-3">
                  <svg
                    className="w-8 h-8 text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <div className="flex flex-col items-start">
                    <span className="text-xs text-gray-300">GET IT ON</span>
                    <span className="text-white font-medium">Google Play</span>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="relative mt-8 lg:mt-0">
            {/* Phone Frame */}
            <div className="relative w-[280px] sm:w-[320px] h-[570px] sm:h-[650px] mx-auto">
              {/* Phone Border */}
              <div className="absolute inset-0 bg-[#1A1A1A] rounded-[2.5rem] sm:rounded-[3rem] shadow-xl"></div>

              {/* Screen Content */}
              <div className="absolute inset-[6px] sm:inset-[8px] rounded-[2.2rem] sm:rounded-[2.5rem] overflow-hidden bg-black">
                {/* Dynamic Screen Content */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={phoneImages[currentIndex]}
                      alt="App Screen"
                      fill
                      className="object-cover"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Screen Glare Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none"></div>
              </div>

              {/* Notch */}
              <div className="absolute top-3 sm:top-4 left-1/2 -translate-x-1/2 w-24 sm:w-32 h-5 sm:h-6 bg-black rounded-full"></div>

              {/* Side Buttons */}
              <div className="absolute -right-1 top-20 sm:top-24 w-1 h-10 sm:h-12 bg-[#0F0F0F] rounded-l-lg"></div>
              <div className="absolute -left-1 top-20 sm:top-24 w-1 h-6 sm:h-8 bg-[#0F0F0F] rounded-r-lg"></div>
              <div className="absolute -left-1 top-32 sm:top-36 w-1 h-6 sm:h-8 bg-[#0F0F0F] rounded-r-lg"></div>
            </div>

            {/* Progress Indicators */}
            <div className="flex justify-center gap-2 mt-6 sm:mt-8">
              {phoneImages.map((_, index) => (
                <div
                  key={index}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-[#F27321] w-6 sm:w-8"
                      : "bg-white/20 w-1.5"
                  }`}
                />
              ))}
            </div>

            {/* Decorative Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#F27321]/20 via-[#FF8F4D]/20 to-transparent rounded-3xl filter blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
