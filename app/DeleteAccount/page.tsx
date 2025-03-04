"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import {
  ExclamationTriangleIcon,
  TrashIcon,
  XCircleIcon,
  InformationCircleIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

type DeleteAccountFormData = {
  email: string;
  confirm: boolean;
};

export default function DeleteAccount() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [deletionStatus, setDeletionStatus] = useState<
    "deleting" | "success" | null
  >(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<DeleteAccountFormData>();

  const onSubmit = async (data: DeleteAccountFormData) => {
    try {
      setShowModal(true);
      setDeletionStatus("deleting");

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 3000));

      setDeletionStatus("success");

      // Redirect after showing success message
      setTimeout(() => {
        router.push("/");
      }, 2000);
    } catch (error) {
      console.error("Error deleting account:", error);
      setShowModal(false);
    }
  };

  // Modal Component
  const DeletionModal = () => (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-black/90 rounded-2xl p-8 max-w-sm w-full mx-4 border border-white/10">
        {deletionStatus === "deleting" ? (
          <div className="text-center space-y-4">
            <div className="relative w-16 h-16 mx-auto">
              {/* Spinning circle */}
              <div className="absolute inset-0 border-4 border-[#F27321]/20 rounded-full"></div>
              <div className="absolute inset-0 border-4 border-[#F27321] rounded-full border-t-transparent animate-spin"></div>
              {/* Trash icon */}
              <TrashIcon className="absolute inset-0 w-8 h-8 m-auto text-[#F27321]" />
            </div>
            <p className="text-lg font-medium text-white">
              Deleting Account...
            </p>
            <p className="text-sm text-gray-400">
              Please wait while we process your request
            </p>
          </div>
        ) : (
          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto bg-[#F27321]/20 rounded-full flex items-center justify-center">
              <CheckCircleIcon className="w-10 h-10 text-[#F27321]" />
            </div>
            <p className="text-lg font-medium text-white">Account Deleted</p>
            <p className="text-sm text-gray-400">
              Your account has been successfully deleted
            </p>
            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-[#F27321] rounded-full animate-progress"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <main className="bg-black min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Warning Card */}
        <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm space-y-6">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center p-3 rounded-full bg-[#F27321]/20">
              <ExclamationTriangleIcon className="w-8 h-8 text-[#F27321]" />
            </div>
            <h1 className="text-2xl font-bold text-white">
              Delete Your Account
            </h1>
            <p className="text-gray-400">
              This action cannot be undone. All your data will be permanently
              deleted.
            </p>
          </div>

          {/* Warning Messages */}
          <div className="bg-[#F27321]/10 border border-[#F27321]/20 rounded-xl p-4 space-y-3">
            <div className="flex items-start space-x-3">
              <XCircleIcon className="w-6 h-6 text-[#F27321] flex-shrink-0 mt-0.5" />
              <p className="text-sm text-[#F27321]/90">
                Your profile and all associated data will be permanently deleted
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <XCircleIcon className="w-6 h-6 text-[#F27321] flex-shrink-0 mt-0.5" />
              <p className="text-sm text-[#F27321]/90">
                Your subscription will be cancelled immediately
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <XCircleIcon className="w-6 h-6 text-[#F27321] flex-shrink-0 mt-0.5" />
              <p className="text-sm text-[#F27321]/90">
                You will lose access to all premium content
              </p>
            </div>
          </div>

          {/* Information Note */}
          <div className="flex items-start space-x-3 bg-white/5 rounded-xl p-4">
            <InformationCircleIcon className="w-6 h-6 text-[#F27321] flex-shrink-0 mt-0.5" />
            <p className="text-sm text-gray-300">
              Please enter your email address to confirm account deletion. This
              helps us ensure that you are the account owner.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Email Input */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300"
              >
                Confirm your email address
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
                id="email"
                placeholder="Enter your email address"
                className={`w-full bg-white/5 border ${
                  errors.email ? "border-[#F27321]" : "border-white/10"
                } rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#F27321] focus:border-transparent transition-colors`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-[#F27321]">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Checkbox Confirmation */}
            <div className="space-y-2">
              <div className="flex items-start space-x-3">
                <input
                  {...register("confirm", {
                    required: "You must confirm this action",
                  })}
                  type="checkbox"
                  id="confirm"
                  className="mt-1 h-4 w-4 rounded border-gray-600 text-[#F27321] focus:ring-[#F27321] bg-black"
                />
                <label htmlFor="confirm" className="text-sm text-gray-300">
                  I understand that this action is permanent and cannot be
                  undone
                </label>
              </div>
              {errors.confirm && (
                <p className="text-sm text-[#F27321]">
                  {errors.confirm.message}
                </p>
              )}
            </div>

            {/* Delete Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full group relative disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#F27321] to-[#FF8F4D] rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-200"></div>
              <div className="relative flex items-center justify-center space-x-2 bg-[#F27321] text-white px-6 py-3 rounded-xl hover:bg-[#FF8F4D] transition-colors duration-200">
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <TrashIcon className="w-5 h-5" />
                )}
                <span>
                  {isSubmitting
                    ? "Deleting Account..."
                    : "Delete Account Permanently"}
                </span>
              </div>
            </button>
          </form>

          {/* Cancel Link */}
          <div className="text-center">
            <button
              onClick={() => router.push("/dashboard")}
              className="text-sm text-gray-400 hover:text-[#F27321] transition-colors duration-200"
            >
              Cancel and return to dashboard
            </button>
          </div>
        </div>
      </div>

      {/* Show modal when needed */}
      {showModal && <DeletionModal />}
    </main>
  );
}
