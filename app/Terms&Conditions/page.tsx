import React from "react";
import Link from "next/link";
import {
  ArrowDownTrayIcon,
  DocumentTextIcon,
  UserGroupIcon,
  KeyIcon,
  UserCircleIcon,
  CreditCardIcon,
  FilmIcon,
  ShieldCheckIcon,
  ExclamationTriangleIcon,
  ScaleIcon,
  DocumentDuplicateIcon,
  GlobeAltIcon,
  EnvelopeIcon,
  BellAlertIcon,
  LockClosedIcon,
  HandThumbUpIcon,
} from "@heroicons/react/24/outline";

export default function TermsAndConditions() {
  const sections = [
    {
      title: "1. Definitions",
      icon: <DocumentTextIcon className="w-6 h-6" />,
      content: [
        "• 'Service' refers to the SNS Premium content streaming and subscription platform.",
        "• 'User' refers to anyone accessing or using the SNS Premium platform.",
        "• 'Subscription' refers to the paid plan that provides access to premium content.",
        "• 'Content' refers to all material available through SNS Premium, including but not limited to videos, images, text, and audio.",
        "• 'Platform' refers to the SNS Premium website, mobile applications, and related services.",
      ],
    },
    {
      title: "2. Eligibility",
      icon: <UserGroupIcon className="w-6 h-6" />,
      content: [
        "• Users must be at least 18 years old or have parental consent.",
        "• Valid identification may be required for age verification.",
        "• SNS Premium reserves the right to refuse service to anyone.",
        "• Users must have the legal capacity to enter into binding contracts.",
        "• Service availability may vary by region or jurisdiction.",
      ],
    },
    {
      title: "3. Account Registration",
      icon: <UserCircleIcon className="w-6 h-6" />,
      content: [
        "• Accurate personal information must be provided during registration.",
        "• Users are responsible for maintaining account security.",
        "• One account per user unless explicitly authorized.",
        "• Immediate notification required for unauthorized account access.",
        "• SNS Premium may suspend accounts for suspicious activity.",
      ],
    },
    {
      title: "4. Subscription Plans",
      icon: <CreditCardIcon className="w-6 h-6" />,
      content: [
        "• Multiple subscription tiers available with varying features.",
        "• Automatic renewal unless cancelled before billing date.",
        "• Prices subject to change with notice.",
        "• Special promotions may have additional terms.",
        "• Subscription sharing is prohibited unless specified.",
      ],
    },
    {
      title: "5. Content Usage",
      icon: <FilmIcon className="w-6 h-6" />,
      content: [
        "• Content is for personal, non-commercial use only.",
        "• No downloading, recording, or redistribution permitted.",
        "• Content availability may vary by region.",
        "• SNS Premium reserves the right to modify content.",
        "• Quality may vary based on internet connection and device.",
      ],
    },
    {
      title: "6. Payments and Billing",
      icon: <CreditCardIcon className="w-6 h-6" />,
      content: [
        "• Accepted payment methods include mobile money and bank cards.",
        "• Failed payments may result in service interruption.",
        "• Processing fees may apply to certain payment methods.",
        "• Currency conversion rates determined by payment providers.",
        "• Refunds processed according to Refund Policy.",
      ],
    },
    {
      title: "7. User Conduct",
      icon: <HandThumbUpIcon className="w-6 h-6" />,
      content: [
        "• No illegal or unauthorized platform use.",
        "• Respect intellectual property rights.",
        "• No harassment or abusive behavior.",
        "• No circumvention of platform security.",
        "• No distribution of malicious content.",
      ],
    },
    {
      title: "8. Privacy Policy",
      icon: <ShieldCheckIcon className="w-6 h-6" />,
      content: [
        "• Data collection and usage governed by Privacy Policy.",
        "• User information protected per applicable laws.",
        "• Cookies and tracking technologies used.",
        "• Third-party service providers may access data.",
        "• Users may request data deletion.",
      ],
    },
    {
      title: "9. Termination",
      icon: <ExclamationTriangleIcon className="w-6 h-6" />,
      content: [
        "• SNS Premium may terminate accounts for violations.",
        "• Users may cancel subscription at any time.",
        "• No refund for current billing period upon cancellation.",
        "• Content access ends with subscription termination.",
        "• Some obligations survive termination.",
      ],
    },
    {
      title: "10. Limitation of Liability",
      icon: <ScaleIcon className="w-6 h-6" />,
      content: [
        "• Service provided 'as is' without warranties.",
        "• No liability for service interruptions.",
        "• No responsibility for third-party content.",
        "• Limited liability for damages.",
        "• Force majeure events excluded from liability.",
      ],
    },
    {
      title: "11. Changes to Terms",
      icon: <DocumentDuplicateIcon className="w-6 h-6" />,
      content: [
        "• Terms may be updated periodically.",
        "• Users notified of significant changes.",
        "• Continued use implies acceptance of new terms.",
        "• Regular review of terms recommended.",
        "• Previous versions may be available upon request.",
      ],
    },
    {
      title: "12. Governing Law",
      icon: <GlobeAltIcon className="w-6 h-6" />,
      content: [
        "• Terms governed by laws of Tanzania.",
        "• Disputes resolved in Tanzanian courts.",
        "• Local laws may affect service availability.",
        "• International users subject to local regulations.",
        "• Language discrepancies resolved in favor of English version.",
      ],
    },
  ];

  return (
    <main className="bg-black min-h-screen">
      {/* Header Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-[#F27321]/20 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center space-y-6">
            <h1 className="text-5xl font-bold text-white">
              Terms & Conditions
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Please read these terms carefully before using SNS Premium
              services
            </p>
            {/* PDF Download Button */}
            <a
              href="/docs/SNS_Premium_Terms_Conditions.pdf"
              download
              className="inline-flex items-center space-x-2 bg-[#F27321] text-white px-6 py-3 rounded-full hover:bg-[#FF8F4D] transition-colors duration-300"
            >
              <ArrowDownTrayIcon className="w-5 h-5" />
              <span>Download PDF Version</span>
            </a>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">
          {/* Document Info */}
          <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <p className="text-gray-400">Effective Date</p>
                <p className="text-white">March 2025</p>
              </div>
              <div className="space-y-2">
                <p className="text-gray-400">Website</p>
                <a
                  href="https://snspremium.co.tz"
                  className="text-[#F27321] hover:text-[#FF8F4D]"
                >
                  snspremium.co.tz
                </a>
              </div>
              <div className="space-y-2">
                <p className="text-gray-400">Email</p>
                <a
                  href="mailto:info@snspremium.co.tz"
                  className="text-[#F27321] hover:text-[#FF8F4D]"
                >
                  info@snspremium.co.tz
                </a>
              </div>
            </div>
          </div>

          {/* Welcome Section */}
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-gray-300 leading-relaxed">
              Welcome to SNS Premium! These Terms and Conditions govern your
              access to and use of our content streaming and subscription
              service, including our website, mobile application, and all
              associated services. By accessing or using SNS Premium, you agree
              to be bound by these terms.
            </p>
          </div>

          {/* Terms Sections */}
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
              <div className="space-y-4">
                {section.content.map((item, i) => (
                  <p key={i} className="text-gray-300 leading-relaxed">
                    {item}
                  </p>
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
              <h2 className="text-2xl font-semibold text-white">Need Help?</h2>
            </div>
            <p className="text-gray-300 mb-4">
              For any questions or concerns about these terms, please contact
              our support team:
            </p>
            <a
              href="mailto:info@snspremium.co.tz"
              className="inline-flex items-center space-x-2 text-[#F27321] hover:text-[#FF8F4D] transition-colors duration-300"
            >
              <span>info@snspremium.co.tz</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
