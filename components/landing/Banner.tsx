import React from "react";
import Image from "next/image";

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
  return (
    <section className="bg-black relative overflow-hidden">
      {/* Background Gradient Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-[#F27321]/30 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 -right-4 w-72 h-72 bg-[#F27321]/30 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-6xl font-bold text-white leading-tight">
              Download SNS Mobile
            </h1>
            <p className="text-xl text-gray-400 max-w-lg">
              Connect with your community on the go. Available for iOS and
              Android devices.
            </p>

            {/* Download Buttons */}
            <div className="flex flex-wrap gap-4">
              {/* Google Play Button */}
              <a href="#" className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#F27321] to-[#FF8F4D] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
                <button className="relative bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/10 rounded-xl px-6 py-3 flex items-center space-x-4 transition-all duration-300">
                  <svg
                    className="w-6 h-6 text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <div className="text-left">
                    <p className="text-gray-400 text-xs">GET IT ON</p>
                    <p className="text-white font-medium">Google Play</p>
                  </div>
                </button>
              </a>

              {/* App Store Button */}
              <a href="#" className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#F27321] to-[#FF8F4D] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
                <button className="relative bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/10 rounded-xl px-6 py-3 flex items-center space-x-4 transition-all duration-300">
                  <svg
                    className="w-6 h-6 text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                  </svg>
                  <div className="text-left">
                    <p className="text-gray-400 text-xs">Download on the</p>
                    <p className="text-white font-medium">App Store</p>
                  </div>
                </button>
              </a>
            </div>
          </div>

          {/* Right Content - Device Mockups */}
          <div className="relative">
            {/* Laptop Mockup */}
            <div className="relative z-20 transform hover:scale-105 transition-transform duration-300">
              <LaptopMockup />
            </div>

            {/* Phone Mockup */}
            <div className="absolute -left-12 bottom-0 z-30 w-1/3 transform hover:scale-105 transition-transform duration-300">
              <PhoneMockup />
            </div>

            {/* Decorative Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#F27321]/20 via-[#FF8F4D]/20 to-transparent rounded-3xl filter blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
