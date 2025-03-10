import React from "react";
import {
  ArrowDownTrayIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
  UserGroupIcon,
  ChartBarIcon,
  ShareIcon,
  LockClosedIcon,
  UserIcon,
  CakeIcon,
  LinkIcon,
  DocumentDuplicateIcon,
  EnvelopeIcon,
  ComputerDesktopIcon,
  CreditCardIcon,
  FingerPrintIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";

export default function PrivacyPolicy() {
  const sections = [
    {
      title: "1. Information We Collect",
      icon: <DocumentTextIcon className="w-6 h-6" />,
      content: [
        {
          subtitle: "Personal Information",
          details: [
            "• Full name and contact details",
            "• Email address and phone number",
            "• Payment information",
            "• Profile preferences",
            "• Account credentials",
          ],
        },
        {
          subtitle: "Usage Data",
          details: [
            "• Viewing history and preferences",
            "• Platform interaction patterns",
            "• Feature usage statistics",
            "• Content engagement metrics",
            "• Time spent on platform",
          ],
        },
        {
          subtitle: "Device Information",
          details: [
            "• IP address and location data",
            "• Device type and model",
            "• Operating system version",
            "• Browser type and version",
            "• Network information",
          ],
        },
      ],
    },
    {
      title: "2. How We Use Your Information",
      icon: <ChartBarIcon className="w-6 h-6" />,
      content: [
        {
          subtitle: "Service Provision",
          details: [
            "• Account management and authentication",
            "• Content delivery and streaming",
            "• Payment processing",
            "• Customer support",
            "• Service optimization",
          ],
        },
        {
          subtitle: "Platform Improvement",
          details: [
            "• Feature development",
            "• Performance monitoring",
            "• User experience enhancement",
            "• Content recommendations",
            "• Technical troubleshooting",
          ],
        },
      ],
    },
    {
      title: "3. Data Sharing and Disclosure",
      icon: <ShareIcon className="w-6 h-6" />,
      content: [
        {
          subtitle: "Third-Party Services",
          details: [
            "• Payment processors",
            "• Analytics providers",
            "• Cloud storage services",
            "• Customer support tools",
            "• Marketing platforms (with consent)",
          ],
        },
      ],
    },
    {
      title: "4. Data Security",
      icon: <LockClosedIcon className="w-6 h-6" />,
      content: [
        {
          subtitle: "Security Measures",
          details: [
            "• Encryption of sensitive data",
            "• Regular security audits",
            "• Access control systems",
            "• Secure data storage",
            "• Incident response procedures",
          ],
        },
      ],
    },
    {
      title: "5. User Rights",
      icon: <UserIcon className="w-6 h-6" />,
      content: [
        {
          subtitle: "Your Rights",
          details: [
            "• Access your personal data",
            "• Request data correction",
            "• Delete your account",
            "• Export your data",
            "• Opt-out of marketing",
          ],
        },
      ],
    },
    {
      title: "6. Cookies",
      icon: <CakeIcon className="w-6 h-6" />,
      content: [
        {
          subtitle: "Cookie Usage",
          details: [
            "• Essential cookies for platform functionality",
            "• Analytics cookies for performance",
            "• Preference cookies for customization",
            "• Marketing cookies (optional)",
            "• Third-party cookies",
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
              <ShieldCheckIcon className="w-8 h-8 text-[#F27321]" />
            </div>
            <h1 className="text-5xl font-bold text-white">Privacy Policy</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We are committed to protecting your privacy and ensuring your data
              is handled securely
            </p>
            {/* PDF Download Button */}
            <a
              href="/docs/SNS_Premium_Privacy_Policy.pdf"
              download
              className="inline-flex items-center space-x-2 bg-[#F27321] text-white px-6 py-3 rounded-full hover:bg-[#FF8F4D] transition-colors duration-300"
            >
              <ArrowDownTrayIcon className="w-5 h-5" />
              <span>Download Privacy Policy PDF</span>
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
                <p className="text-gray-400">Privacy Contact</p>
                <a
                  href="mailto:privacy@snspremium.co.tz"
                  className="text-[#F27321] hover:text-[#FF8F4D]"
                >
                  privacy@snspremium.co.tz
                </a>
              </div>
            </div>
          </div>

          {/* Introduction */}
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-gray-300 leading-relaxed">
              SNS Premium is committed to protecting your privacy and ensuring
              that your personal data is handled securely and responsibly. This
              Privacy Policy explains how we collect, use, and protect your
              information when you use our website, mobile application, and
              associated services.
            </p>
          </div>

          {/* Privacy Sections */}
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
                Privacy Concerns?
              </h2>
            </div>
            <p className="text-gray-300 mb-4">
              If you have any questions or concerns about our Privacy Policy,
              please contact our privacy team:
            </p>
            <a
              href="mailto:privacy@snspremium.co.tz"
              className="inline-flex items-center space-x-2 text-[#F27321] hover:text-[#FF8F4D] transition-colors duration-300"
            >
              <span>privacy@snspremium.co.tz</span>
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
