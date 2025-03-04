import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import {
  StarIcon,
  SparklesIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/solid";

interface NextSubProps {
  onWaitlistClick: () => void;
}

export default function NextSub({ onWaitlistClick }: NextSubProps) {
  return (
    <section className="bg-black min-h-screen flex items-center py-20 px-4 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          {/* Premium Tag */}
          <div className="inline-block bg-black/30 backdrop-blur-sm border border-[#F27321]/20 rounded-full px-6 py-2">
            <span className="text-[#F27321] font-medium">SNS PREMIUM</span>
          </div>

          {/* Main Title */}
          <h1 className="text-white text-6xl font-bold leading-tight tracking-tight">
            Unlock Your
            <br />
            <span className="text-[#F27321]">Premium</span> Experience
          </h1>

          {/* Subtitle */}
          <div className="space-y-6">
            <h2 className="text-white text-3xl font-semibold">
              Enhanced Features & Benefits
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
              Take your social experience to the next level with exclusive
              features, ad-free browsing, and premium support.
            </p>
          </div>

          {/* Price Section */}
          <div className="space-y-4">
            <div className="flex items-baseline">
              <span className="text-[#F27321] text-5xl font-bold">
                TZS. 6999/=
              </span>
              <span className="text-gray-400 ml-2">/month</span>
            </div>
            <p className="text-gray-400">Cancel anytime. No commitments.</p>
          </div>

          {/* CTA Button */}
          <button
            onClick={onWaitlistClick}
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#F27321] to-[#FF8F4D] transition-all duration-300 group-hover:scale-[1.02]"></div>
            <div className="relative flex items-center justify-center space-x-3 bg-gradient-to-r from-[#F27321] to-[#FF8F4D] px-8 py-4 transition-all duration-300">
              <span className="font-medium text-white">Get Premium</span>
              <ArrowRightIcon className="w-5 h-5 text-white transition-transform duration-300 group-hover:translate-x-1" />
            </div>

            {/* Shine effect */}
            <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/25 to-transparent group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          </button>
        </div>

        {/* Right Content - Premium Features Preview */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[#F27321]/20 to-transparent rounded-3xl filter blur-3xl"></div>
          <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#F27321]/20">
            <div className="space-y-6">
              {/* Feature Cards */}
              <div className="space-y-4">
                {/* Ad-Free Experience */}
                <div className="group bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-[#F27321]/20 group-hover:bg-[#F27321]/30">
                      <StarIcon className="w-6 h-6 text-[#F27321]" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">
                        Ad-Free Experience
                      </h3>
                      <p className="text-gray-400">
                        Enjoy uninterrupted browsing without any advertisements
                      </p>
                    </div>
                  </div>
                </div>

                {/* Premium Features */}
                <div className="group bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-[#F27321]/20 group-hover:bg-[#F27321]/30">
                      <SparklesIcon className="w-6 h-6 text-[#F27321]" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">
                        Exclusive Features
                      </h3>
                      <p className="text-gray-400">
                        Access to premium themes, advanced analytics, and more
                      </p>
                    </div>
                  </div>
                </div>

                {/* Priority Support */}
                <div className="group bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-[#F27321]/20 group-hover:bg-[#F27321]/30">
                      <ShieldCheckIcon className="w-6 h-6 text-[#F27321]" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">
                        Priority Support
                      </h3>
                      <p className="text-gray-400">
                        24/7 dedicated support for premium members
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Premium Badge */}
              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-[#F27321]/20 to-transparent rounded-lg">
                <span className="text-white font-medium">Premium Status</span>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-[#F27321] animate-pulse"></div>
                  <span className="text-[#F27321]">Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
