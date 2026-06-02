import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Rami Kanawati",
  description: "Privacy policy for ramikanawati.com",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen pt-32 pb-16">
      <div className="mx-auto max-w-3xl container-px">
        <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>

        <div className="prose prose-invert max-w-none space-y-6 text-white/70">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Introduction</h2>
            <p>
              This website (ramikanawati.com) respects your privacy. This Privacy Policy explains
              how we collect, use, and protect your information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Information We Collect</h2>
            <p>
              When you contact us through the contact form, we collect:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Your name</li>
              <li>Your email address</li>
              <li>Your message content</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">How We Use Your Information</h2>
            <p>
              We use the information you provide to respond to your inquiries and establish professional
              communication. We do not share your information with third parties without your consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Analytics</h2>
            <p>
              This website may use analytics tools to understand usage patterns. These tools collect
              anonymized data about how visitors interact with the site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information. However,
              no internet transmission is completely secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
            <p>
              If you have privacy concerns, please contact us through the contact form on our website.
            </p>
          </section>

          <p className="text-sm text-white/50 pt-4">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </main>
  );
}
