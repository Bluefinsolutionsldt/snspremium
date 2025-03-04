import React from "react";
import {
  ArrowDownTrayIcon,
  DocumentTextIcon,
  ScaleIcon,
  CheckBadgeIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  LockClosedIcon,
  ExclamationTriangleIcon,
  GlobeAltIcon,
  EnvelopeIcon,
  DocumentDuplicateIcon,
  DocumentMagnifyingGlassIcon,
  NoSymbolIcon,
  HandThumbUpIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/outline";

export default function Copyright() {
  const sections = [
    {
      title: "1. Copyright Ownership",
      icon: <DocumentTextIcon className="w-6 h-6" />,
      content: [
        {
          subtitle: "Intellectual Property Rights",
          details: [
            "• All content is exclusive property of SNS Premium",
            "• Protected by Tanzanian and international copyright laws",
            "• Includes text, graphics, logos, and software",
            "• Covers user interfaces and digital downloads",
            "• Extends to all associated platform content",
          ],
        },
        {
          subtitle: "Trademark Protection",
          details: [
            "• Service marks and logos are protected",
            "• Brand identity elements are proprietary",
            "• Visual assets are copyright protected",
            "• Domain names and brand assets included",
            "• Marketing materials fully protected",
          ],
        },
      ],
    },
    {
      title: "2. Permitted Use",
      icon: <HandThumbUpIcon className="w-6 h-6" />,
      content: [
        {
          subtitle: "License Terms",
          details: [
            "• Limited, non-exclusive usage rights",
            "• Personal, non-commercial use only",
            "• Streaming access permission",
            "• No download or redistribution rights",
            "• Time-limited access based on subscription",
          ],
        },
        {
          subtitle: "Usage Restrictions",
          details: [
            "• No unauthorized reproduction",
            "• No content modification allowed",
            "• No commercial exploitation",
            "• No public performance rights",
            "• No content redistribution",
          ],
        },
      ],
    },
    {
      title: "3. User-Generated Content",
      icon: <UserGroupIcon className="w-6 h-6" />,
      content: [
        {
          subtitle: "Content License",
          details: [
            "• Non-exclusive license granted to SNS Premium",
            "• Worldwide usage rights",
            "• Royalty-free terms",
            "• Right to display and distribute",
            "• Original ownership retained by users",
          ],
        },
        {
          subtitle: "Content Guidelines",
          details: [
            "• Must respect third-party rights",
            "• No illegal or harmful content",
            "• Original content requirements",
            "• Quality standards compliance",
            "• Content moderation policies",
          ],
        },
      ],
    },
    {
      title: "4. Digital Content Protection",
      icon: <ShieldCheckIcon className="w-6 h-6" />,
      content: [
        {
          subtitle: "DRM Technologies",
          details: [
            "• Advanced encryption systems",
            "• Secure streaming protocols",
            "• Access control mechanisms",
            "• Copy protection measures",
            "• Watermarking technology",
          ],
        },
        {
          subtitle: "Security Measures",
          details: [
            "• Anti-piracy protection",
            "• Session monitoring",
            "• Device authentication",
            "• Geographic restrictions",
            "• Concurrent stream limitations",
          ],
        },
      ],
    },
    {
      title: "5. Copyright Infringement Policy",
      icon: <ExclamationTriangleIcon className="w-6 h-6" />,
      content: [
        {
          subtitle: "Reporting Process",
          details: [
            "• Written notice requirements",
            "• Contact information needed",
            "• Work description mandatory",
            "• URL/location specification",
            "• Good faith statement required",
          ],
        },
        {
          subtitle: "Investigation Procedure",
          details: [
            "• Prompt investigation of claims",
            "• Content removal if warranted",
            "• Notification to affected parties",
            "• Appeal process available",
            "• Documentation requirements",
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
              <ClipboardDocumentCheckIcon className="w-8 h-8 text-[#F27321]" />
            </div>
            <h1 className="text-5xl font-bold text-white">Copyright Notice</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              All rights reserved © 2025 SNS Premium
            </p>
            {/* PDF Download Button */}
            <a
              href="/docs/SNS_Premium_Copyright_Notice.pdf"
              download
              className="inline-flex items-center space-x-2 bg-[#F27321] text-white px-6 py-3 rounded-full hover:bg-[#FF8F4D] transition-colors duration-300"
            >
              <ArrowDownTrayIcon className="w-5 h-5" />
              <span>Download Copyright Notice PDF</span>
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
                <p className="text-gray-400">Copyright Year</p>
                <p className="text-white">© 2025</p>
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
                <p className="text-gray-400">Copyright Contact</p>
                <a
                  href="mailto:copyright@snspremium.co.tz"
                  className="text-[#F27321] hover:text-[#FF8F4D]"
                >
                  copyright@snspremium.co.tz
                </a>
              </div>
            </div>
          </div>

          {/* Introduction */}
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-gray-300 leading-relaxed">
              This website, mobile application, and all associated content are
              protected by copyright laws and international treaties.
              Unauthorized use or reproduction of any materials is strictly
              prohibited.
            </p>
          </div>

          {/* Copyright Sections */}
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
                Copyright Inquiries
              </h2>
            </div>
            <p className="text-gray-300 mb-4">
              For any copyright-related questions or concerns, please contact
              our copyright team:
            </p>
            <a
              href="mailto:copyright@snspremium.co.tz"
              className="inline-flex items-center space-x-2 text-[#F27321] hover:text-[#FF8F4D] transition-colors duration-300"
            >
              <span>copyright@snspremium.co.tz</span>
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
