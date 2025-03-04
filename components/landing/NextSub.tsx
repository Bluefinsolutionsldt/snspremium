import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function CaseStudy() {
  return (
    <section className="bg-black min-h-screen flex items-center py-20 px-4 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          {/* Premium Tag */}
          <div className="inline-block bg-black/30 backdrop-blur-sm border border-[#F27321]/20 rounded-full px-6 py-2">
            <span className="text-[#F27321] font-medium">PREMIUM INSIGHTS</span>
          </div>

          {/* Main Title */}
          <h1 className="text-white text-6xl font-bold leading-tight tracking-tight">
            ELEVATE YOUR
            <br />
            PRESENCE
          </h1>

          {/* Subtitle */}
          <div className="space-y-6">
            <h2 className="text-white text-3xl font-semibold">
              Premium Analytics Dashboard
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
              Unlock powerful insights with our advanced analytics suite. Track
              engagement, monitor growth, and understand your audience with
              detailed metrics that matter to your success.
            </p>
          </div>

          {/* Features Section */}
          <div className="space-y-4">
            <h3 className="text-white text-2xl font-semibold">
              Performance Metrics
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
              Access comprehensive performance data, engagement rates, and
              audience insights. Make data-driven decisions to optimize your
              content strategy and grow your influence.
            </p>
          </div>

          {/* CTA Button */}
          <button className="group flex items-center space-x-2 bg-[#F27321] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:bg-[#FF8F4D] hover:scale-105">
            <span>Try Beta Access</span>
            <ArrowRightIcon className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

        {/* Right Content - Design Preview */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[#F27321]/20 to-transparent rounded-3xl filter blur-3xl"></div>
          <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#F27321]/20">
            <div className="space-y-6">
              {/* Profile Design Preview */}
              <div className="space-y-4">
                {/* Profile Header */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#F27321] to-[#FF8F4D] animate-pulse"></div>
                  <div className="space-y-1">
                    <div className="h-4 w-32 bg-white/20 rounded animate-pulse"></div>
                    <div className="h-3 w-24 bg-white/10 rounded animate-pulse"></div>
                  </div>
                </div>

                {/* Content Preview */}
                <div className="space-y-3">
                  <div className="h-40 w-full rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md p-4 group hover:from-white/15 hover:to-white/10 transition-all duration-300">
                    <div className="flex justify-between items-start">
                      <div className="space-y-2">
                        <div className="h-3 w-24 bg-white/20 rounded"></div>
                        <div className="h-2 w-40 bg-white/10 rounded"></div>
                      </div>
                      <div className="flex space-x-2">
                        <div className="w-8 h-8 rounded-full bg-[#F27321]/20 flex items-center justify-center group-hover:bg-[#F27321]/30 transition-colors">
                          <span className="text-[#F27321] text-xs">✦</span>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-[#F27321]/20 flex items-center justify-center group-hover:bg-[#F27321]/30 transition-colors">
                          <span className="text-[#F27321] text-xs">⋮</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Interactive Elements */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="h-24 rounded-xl bg-gradient-to-br from-[#F27321]/20 to-transparent p-4 hover:from-[#F27321]/30 transition-all duration-300 cursor-pointer">
                      <div className="space-y-2">
                        <div className="h-3 w-16 bg-white/20 rounded"></div>
                        <div className="h-2 w-20 bg-white/10 rounded"></div>
                      </div>
                    </div>
                    <div className="h-24 rounded-xl bg-gradient-to-bl from-[#F27321]/20 to-transparent p-4 hover:from-[#F27321]/30 transition-all duration-300 cursor-pointer">
                      <div className="space-y-2">
                        <div className="h-3 w-16 bg-white/20 rounded"></div>
                        <div className="h-2 w-20 bg-white/10 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Design Elements */}
                <div className="flex items-center justify-between space-x-4">
                  <div className="flex space-x-2">
                    {["#F27321", "#FF8F4D", "#FFFFFF"].map((color, i) => (
                      <div
                        key={i}
                        className="w-6 h-6 rounded-full border border-white/20"
                        style={{ backgroundColor: color }}
                      ></div>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 transition-colors cursor-pointer flex items-center justify-center">
                      <span className="text-[#F27321] text-xs">Aa</span>
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 transition-colors cursor-pointer flex items-center justify-center">
                      <span className="text-[#F27321] text-xs">⚡</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Theme Selector */}
              <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                <span className="text-white text-sm">Premium Theme</span>
                <div className="flex space-x-2">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#F27321] to-[#FF8F4D]"></div>
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
