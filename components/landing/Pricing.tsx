import React from "react";
import { CheckIcon } from "@heroicons/react/24/solid";

export default function Pricing() {
  return (
    <main className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            Choose Your <span className="text-[#F27321]">Premium</span> Plan
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Select the perfect plan to enhance your social networking experience
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Basic Plan */}
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-[#F27321]/50 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white">Fremium</h3>
            <p className="text-gray-400 mt-2">
              Essential features to get started
            </p>
            <div className="mt-4">
              <span className="text-4xl font-bold text-white">Free</span>
            </div>
            <ul className="mt-6 space-y-4">
              {[
                "Basic Profile Customization",
                "Standard Feed Access",
                "Limited Posts per Day",
                "Community Support",
              ].map((feature) => (
                <li key={feature} className="flex items-center">
                  <CheckIcon className="h-5 w-5 text-[#F27321]" />
                  <span className="ml-3 text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
            <button className="mt-8 w-full bg-white/10 text-white py-2 px-4 rounded-xl hover:bg-white/20 transition-colors">
              Fremium Plan
            </button>
          </div>

          {/* Premium Plan */}
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border-2 border-[#F27321] relative transform scale-105 hover:scale-[1.07] transition-transform duration-300">
            <div className="absolute top-0 right-0 bg-[#F27321] text-white px-3 py-1 rounded-bl-lg rounded-tr-lg text-sm">
              Popular
            </div>
            <h3 className="text-xl font-semibold text-white">Tausi</h3>
            <p className="text-gray-400 mt-2">Enhanced features & benefits</p>
            <div className="mt-4">
              <span className="text-4xl font-bold text-white">TZS 25,000</span>
              <span className="text-gray-400">/month</span>
            </div>
            <ul className="mt-6 space-y-4">
              {[
                "Ad-Free Experience",
                "Unlimited Posts",
                "Premium Themes",
                "Advanced Analytics",
                "Priority Support",
                "Custom Profile URL",
              ].map((feature) => (
                <li key={feature} className="flex items-center">
                  <CheckIcon className="h-5 w-5 text-[#F27321]" />
                  <span className="ml-3 text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
            <button className="mt-8 w-full bg-[#F27321] text-white py-2 px-4 rounded-xl hover:bg-[#FF8F4D] transition-colors">
              Get Tausi
            </button>
          </div>

          {/* Business Plan */}
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-[#F27321]/50 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white">Twiga</h3>
            <p className="text-gray-400 mt-2">More features & benefits</p>
            <div className="mt-4">
              <span className="text-4xl font-bold text-white">TZS 60,000</span>
              <span className="text-gray-400">/month</span>
            </div>
            <ul className="mt-6 space-y-4">
              {[
                "All Premium Features",
                "Team Management",
                "API Access",
                "Dedicated Manager",
                "Custom Integration",
                "SLA Agreement",
                "Team Analytics",
              ].map((feature) => (
                <li key={feature} className="flex items-center">
                  <CheckIcon className="h-5 w-5 text-[#F27321]" />
                  <span className="ml-3 text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
            <button className="mt-8 w-full bg-white/10 text-white py-2 px-4 rounded-xl hover:bg-white/20 transition-colors">
              Get Twiga
            </button>
          </div>
        </div>

        {/* Additional Note */}
        <p className="text-center text-sm text-gray-400 mt-8">
          All prices are in Tanzanian Shillings (TZS). Prices include VAT where
          applicable.
        </p>
      </div>
    </main>
  );
}
