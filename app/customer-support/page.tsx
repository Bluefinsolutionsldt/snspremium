import React from "react";
import {
  ArrowDownTrayIcon,
  QuestionMarkCircleIcon,
  UserGroupIcon,
  CreditCardIcon,
  PlayCircleIcon,
  MusicalNoteIcon,
  BookOpenIcon,
  ShieldCheckIcon,
  EnvelopeIcon,
  PhoneIcon,
  ChatBubbleLeftRightIcon,
  ExclamationTriangleIcon,
  DocumentTextIcon,
  UserCircleIcon,
  KeyIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

export default function CustomerSupport() {
  const sections = [
    {
      title: "1. Getting Started",
      icon: <UserCircleIcon className="w-6 h-6" />,
      content: [
        {
          subtitle: "Creating an Account",
          details: [
            "• Visit SNS Premium and click Sign Up",
            "• Enter your details (Name, Email, Password)",
            "• Verify your email address",
            "• Log in and start enjoying content",
          ],
        },
        {
          subtitle: "Subscription Plans",
          details: [
            "• Daily Subscription – Access content for 24 hours",
            "• Monthly Subscription – Unlimited access for a month",
            "• Yearly Subscription - Unlimited access for a year",
            "• Log in to your account to subscribe",
            "• Navigate to the Subscription page",
            "• Select your preferred plan and proceed with payment",
          ],
        },
      ],
    },
    {
      title: "2. Content Access",
      icon: <PlayCircleIcon className="w-6 h-6" />,
      content: [
        {
          subtitle: "Video Content",
          details: [
            "• Navigate to the Videos section",
            "• Select a video and click Play",
            "• Adjust quality settings as needed",
            "• Use playback controls for navigation",
          ],
        },
        {
          subtitle: "Audio Content",
          details: [
            "• Go to the Audio section",
            "• Choose an audio file and click Play",
            "• Use playback controls for navigation",
            "• Download for offline listening",
          ],
        },
        {
          subtitle: "Books",
          details: [
            "• Access the Books section",
            "• Select a book and start reading online",
            "• Use bookmark feature for saving progress",
            "• Adjust text size and theme",
          ],
        },
      ],
    },
    {
      title: "3. Account Management",
      icon: <KeyIcon className="w-6 h-6" />,
      content: [
        {
          subtitle: "Subscription Management",
          details: [
            "• View current plan details",
            "• Upgrade or downgrade subscription",
            "• Cancel subscription anytime",
            "• View billing history",
            "• Update payment methods",
          ],
        },
        {
          subtitle: "Account Security",
          details: [
            "• Use strong password",
            "• Enable two-factor authentication",
            "• Never share login credentials",
            "• Regular password updates",
            "• Monitor account activity",
          ],
        },
      ],
    },
    {
      title: "4. Troubleshooting",
      icon: <ExclamationTriangleIcon className="w-6 h-6" />,
      content: [
        {
          subtitle: "Common Issues",
          details: [
            "• Check internet connection",
            "• Clear browser cache",
            "• Update app to latest version",
            "• Check subscription status",
            "• Verify device compatibility",
          ],
        },
        {
          subtitle: "Payment Issues",
          details: [
            "• Verify payment method",
            "• Check subscription status",
            "• Contact support for assistance",
            "• Review billing history",
            "• Update payment information",
          ],
        },
      ],
    },
  ];

  return (
    <main className="bg-black min-h-screen">
      {/* Header Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-[#F27321]/20 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center justify-center p-3 rounded-full bg-[#F27321]/20 mb-4">
              <QuestionMarkCircleIcon className="w-8 h-8 text-[#F27321]" />
            </div>
            <h1 className="text-5xl font-bold text-white">Customer Support</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We're here to help you get the most out of SNS Premium
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">
          {/* Contact Info */}
          <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <p className="text-gray-400">Support Email</p>
                <a
                  href="mailto:support@snspremium.co.tz"
                  className="text-[#F27321] hover:text-[#FF8F4D]"
                >
                  support@snspremium.co.tz
                </a>
              </div>
              <div className="space-y-2">
                <p className="text-gray-400">Phone Support</p>
                <a
                  href="tel:+255785413163"
                  className="text-[#F27321] hover:text-[#FF8F4D]"
                >
                  +255 785 413 163
                </a>
              </div>
              <div className="space-y-2">
                <p className="text-gray-400">Live Chat</p>
                <p className="text-white">Available 24/7</p>
              </div>
            </div>
          </div>

          {/* Introduction */}
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-gray-300 leading-relaxed">
              Welcome to SNS Premium's Customer Support. We're dedicated to
              providing you with the best possible experience. Whether you're
              just getting started or need help with a specific issue, our
              support team is here to assist you.
            </p>
          </div>

          {/* Support Sections */}
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 rounded-full bg-[#F27321]/20">
                  <span className="text-[#F27321]">{section.icon}</span>
                </div>
                <h2 className="text-2xl font-semibold text-white">
                  {section.title}
                </h2>
              </div>
              <div className="space-y-8">
                {section.content.map((subsection, i) => (
                  <div key={i} className="space-y-4">
                    <h3 className="text-lg font-medium text-[#F27321]">
                      {subsection.subtitle}
                    </h3>
                    <div className="space-y-2">
                      {subsection.details.map((detail, j) => (
                        <p key={j} className="text-gray-300 leading-relaxed">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Contact Section */}
          <div className="bg-gradient-to-r from-[#F27321]/20 to-transparent rounded-2xl p-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 rounded-full bg-[#F27321]/20">
                <EnvelopeIcon className="w-6 h-6 text-[#F27321]" />
              </div>
              <h2 className="text-2xl font-semibold text-white">
                Need More Help?
              </h2>
            </div>
            <p className="text-gray-300 mb-4">
              Our support team is available 24/7 to assist you with any
              questions or concerns. Contact us through any of the following
              channels:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <a
                href="mailto:support@snspremium.co.tz"
                className="flex items-center space-x-2 text-[#F27321] hover:text-[#FF8F4D] transition-colors duration-300"
              >
                <EnvelopeIcon className="w-5 h-5" />
                <span>Email Support</span>
              </a>
              <a
                href="tel:+255785413163"
                className="flex items-center space-x-2 text-[#F27321] hover:text-[#FF8F4D] transition-colors duration-300"
              >
                <PhoneIcon className="w-5 h-5" />
                <span>Phone Support</span>
              </a>
              <button className="flex items-center space-x-2 text-[#F27321] hover:text-[#FF8F4D] transition-colors duration-300">
                <ChatBubbleLeftRightIcon className="w-5 h-5" />
                <span>Live Chat</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
