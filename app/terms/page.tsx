import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Rami Kanawati",
  description: "Terms of service for ramikanawati.com",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen pt-32 pb-16">
      <div className="mx-auto max-w-3xl container-px">
        <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>

        <div className="prose prose-invert max-w-none space-y-6 text-white/70">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Agreement to Terms</h2>
            <p>
              By accessing and using this website (ramikanawati.com), you accept and agree to be bound
              by the terms and provision of this agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials (information or
              software) on this website for personal, non-commercial transitory viewing only. This is the
              grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to decompile or reverse engineer any software contained on the site</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any server</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Disclaimer</h2>
            <p>
              The materials on this website are provided on an 'as is' basis. We make no warranties,
              expressed or implied, and hereby disclaim and negate all other warranties including, without
              limitation, implied warranties or conditions of merchantability, fitness for a particular
              purpose, or non-infringement of intellectual property.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Limitations</h2>
            <p>
              In no event shall Rami Kanawati or its suppliers be liable for any damages (including,
              without limitation, damages for loss of data or profit, or due to business interruption)
              arising out of the use of or inability to use the materials on this website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Accuracy of Materials</h2>
            <p>
              The materials appearing on this website could include technical, typographical, or photographic
              errors. We do not warrant that any of the materials on this website are accurate, complete,
              or current.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Links</h2>
            <p>
              We have not reviewed all of the sites linked to our website and are not responsible for the
              contents of any such linked site. The inclusion of any link does not imply endorsement by us of
              the site. Use of any such linked website is at the user's own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Modifications</h2>
            <p>
              We may revise these terms of service for our website at any time without notice. By using this
              website, you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of the
              United Kingdom, and you irrevocably submit to the exclusive jurisdiction of the courts located
              in the United Kingdom.
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
