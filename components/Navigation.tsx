"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserCircleIcon } from "@heroicons/react/24/outline";

interface NavigationProps {
  onPricingClick?: () => void;
  onBetaClick?: () => void;
}

export default function Navigation({
  onPricingClick,
  onBetaClick,
}: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    {
      name: "Pricing",
      href: "#pricing",
      onClick: onPricingClick,
    },
    {
      name: "Subscribe",
      href: "#",
      onClick: onBetaClick,
    },
  ];

  function setMobileMenuOpen(open: boolean): void {
    setIsOpen(open);
  }

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/95 backdrop-blur-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="/splash-icon-dark.png"
              alt="Logo"
              className="h-14 w-auto"
            />
            <h1 className="text-white text-2xl font-bold">SNS Premium</h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={link.onClick}
                className={`text-sm font-medium transition-colors hover:text-[#F27321] relative group ${
                  pathname === link.href ? "text-[#F27321]" : "text-white"
                }`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F27321] transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}

            {/* Login Button */}
            {/* <Link
              href="/login"
              className="flex items-center space-x-2 px-4 py-2 rounded-full bg-[#F27321] hover:bg-[#F27321]/80 hover:scale-105 hover:text-white transition-all duration-200"
            >
              <UserCircleIcon className="h-5 w-5" />
              <span>Login</span>
            </Link> */}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => {
                link.onClick?.();
                setMobileMenuOpen(false);
              }}
              className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                pathname === link.href
                  ? "text-[#F27321]"
                  : "text-white hover:text-[#F27321]"
              }`}
            >
              {link.name}
            </button>
          ))}
          {/* <Link
            href="/login"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-[#F27321]"
          >
            Login
          </Link> */}
        </div>
      </div>
    </nav>
  );
}
