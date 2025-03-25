import React from "react";

const CustomerSupport = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Customer Support</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p className="mb-4">
          Welcome to SNS Premium, your go-to platform for high-quality content
          in the form of videos, audio, and books. Our goal is to provide access
          to premium content through daily, monthly and yearly subscriptions. If
          you encounter any issues, our support team is here to help.
        </p>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p>
            <strong>Website:</strong> SNS Premium
          </p>
          <p>
            <strong>Support Email:</strong> support@snspremium.co.tz
          </p>
          <p>
            <strong>Phone Support:</strong> +255 785 413 163
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Creating an Account</h3>
          <ol className="list-decimal list-inside space-y-2">
            <li>Visit SNS Premium and click Sign Up.</li>
            <li>Enter your details (Name, Email, Password).</li>
            <li>Verify your email address.</li>
            <li>Log in and start enjoying content!</li>
          </ol>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Subscription Plans</h3>
          <p className="mb-2">SNS Premium offers:</p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Daily Subscription – Access content for 24 hours.</li>
            <li>Monthly Subscription – Unlimited access for a month.</li>
            <li>Yearly Subscription - Unlimited access for a year</li>
          </ul>
          <p className="mb-2">To subscribe:</p>
          <ol className="list-decimal list-inside space-y-2">
            <li>Log in to your account.</li>
            <li>Navigate to the Subscription page.</li>
            <li>Select your preferred plan and proceed with payment.</li>
          </ol>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Common Issues & Troubleshooting
        </h2>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Login Issues</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Forgot Password? Click Forgot Password on the login page and
              follow the instructions.
            </li>
            <li>
              Account Locked? Too many failed login attempts can lock your
              account. Contact support to unlock it.
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">
            Subscription & Payment Issues
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Payment Failed? Ensure your payment method has sufficient balance
              and is valid. Try again or use a different method.
            </li>
            <li>
              Subscription Not Activated? If payment is successful but the
              subscription isn't active, refresh the page or log out and back
              in. If the issue persists, contact support.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Content Not Loading</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Check your internet connection.</li>
            <li>Ensure your subscription is active.</li>
            <li>Try clearing your browser cache or restarting the app.</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Features & Usage Guide</h2>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Watching Videos</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Navigate to the Videos section.</li>
            <li>Select a video and click Play.</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Listening to Audio</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Go to the Audio section.</li>
            <li>Choose an audio file and click Play.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Reading Books</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Access the Books section.</li>
            <li>Select a book and start reading online.</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Account & Billing</h2>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">
            Managing Your Subscription
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Go to My Account {">"} Subscription to view or update your plan.
            </li>
            <li>Cancel anytime to avoid renewal charges.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Refund Policy</h3>
          <p>
            Refunds are only issued for duplicate charges or technical errors.
            Contact support for assistance.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Security & Privacy</h2>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">
            Keeping Your Account Secure
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Use a strong password and enable two-factor authentication (if
              available).
            </li>
            <li>Never share your login credentials.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Data Privacy</h3>
          <p>Your personal data is protected under our Privacy Policy.</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Reporting Issues & Getting Help
        </h2>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">How to Report an Issue</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Live Chat: Available on the website.</li>
            <li>Support Email: support@snspremium.co.tz</li>
            <li>Phone Support: +255 785 413 163</li>
          </ul>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="mb-2">
            We're committed to providing the best experience for our users. If
            you have any questions or need help, don't hesitate to reach out!
          </p>
          <p>Thank you for choosing SNS Premium!</p>
        </div>
      </section>
    </div>
  );
};

export default CustomerSupport;
