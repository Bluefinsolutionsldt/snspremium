"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { XMarkIcon, CheckCircleIcon } from "@heroicons/react/24/outline";

type WaitlistFormData = {
  name: string;
  email: string;
};

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [submissionStatus, setSubmissionStatus] = useState<
    "submitting" | "success" | null
  >(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<WaitlistFormData>();

  const onSubmit = async (data: WaitlistFormData) => {
    try {
      setSubmissionStatus("submitting");

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setSubmissionStatus("success");

      // Close modal after showing success message
      setTimeout(() => {
        onClose();
        setSubmissionStatus(null);
      }, 3000);
    } catch (error) {
      console.error("Error submitting waitlist form:", error);
      setSubmissionStatus(null);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-black/90 rounded-2xl p-8 max-w-md w-full border border-white/10 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <XMarkIcon className="w-6 h-6" />
        </button>

        {submissionStatus === "submitting" ? (
          <div className="text-center space-y-4 py-8">
            <div className="w-16 h-16 mx-auto relative">
              <div className="absolute inset-0 border-4 border-[#F27321]/20 rounded-full"></div>
              <div className="absolute inset-0 border-4 border-[#F27321] rounded-full border-t-transparent animate-spin"></div>
            </div>
            <p className="text-lg font-medium text-white">
              Joining Waitlist...
            </p>
            <p className="text-sm text-gray-400">
              Please wait while we process your request
            </p>
          </div>
        ) : submissionStatus === "success" ? (
          <div className="text-center space-y-4 py-8">
            <div className="w-16 h-16 mx-auto bg-[#F27321]/20 rounded-full flex items-center justify-center">
              <CheckCircleIcon className="w-10 h-10 text-[#F27321]" />
            </div>
            <p className="text-lg font-medium text-white">
              You're on the List!
            </p>
            <p className="text-sm text-gray-400">
              We'll notify you when SNS Premium launches.
            </p>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-white mb-6">
              Join the Waitlist
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name Input */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">
                  Full Name
                </label>
                <input
                  {...register("name", { required: "Name is required" })}
                  type="text"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#F27321] focus:border-transparent"
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <p className="text-sm text-[#F27321]">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email Input */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">
                  Email Address
                </label>
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  type="email"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#F27321] focus:border-transparent"
                  placeholder="Enter your email address"
                />
                {errors.email && (
                  <p className="text-sm text-[#F27321]">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#F27321] text-white rounded-xl px-6 py-3 hover:bg-[#FF8F4D] transition-colors duration-200"
              >
                Join Waitlist
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
