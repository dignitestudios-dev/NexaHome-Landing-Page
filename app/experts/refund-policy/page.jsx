import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export const metadata = {
  title: "Expert Refund Policy | NexaHome",
  description:
    "NexaHome Expert Refund Policy — understand our credit and refund terms for independent service professionals on our platform.",
};

export default function ExpertRefundPolicyPage() {
  return (
    <>
      <Navbar />
      {/* Hero Banner */}
      <div className="bg-primary text-white py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-white/60 font-medium mb-2">
            NexaHome, LLC
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Expert Refund Policy
          </h1>
          <p className="text-white/70 text-sm">Effective Date: July 1, 2026</p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 md:px-0 py-14">
        <section className="space-y-12 text-gray-600 leading-relaxed text-[15px]">

          {/* Credits Are Non-Refundable */}
          <div>
            <SectionTitle title="Credits Are Non-Refundable" />
            <div className="mb-5 bg-primary/10 border border-primary/20 text-primary font-semibold text-sm px-4 py-3 rounded-lg uppercase tracking-wide">
              All credit purchases are final and non-refundable. Credits have no cash value,
              cannot be redeemed for money, and do not expire.
            </div>
            <p>
              Experts purchase credits to access leads (Job Requests submitted by Users). Once
              purchased, credits are non-refundable, including credits consumed to purchase a lead,
              regardless of whether the lead results in a response, a job, or any revenue for you.
            </p>
          </div>

          <Divider />

          {/* Suspension and Termination */}
          <div>
            <SectionTitle title="Suspension and Termination" />
            <p>
              If your account is suspended or terminated for any reason — including based on User
              complaints, a violation of the Expert Terms and Conditions, or voluntary closure of your
              account — all remaining credits are immediately forfeited and non-refundable.
            </p>
          </div>

          <Divider />

          {/* Limited Exceptions */}
          <div>
            <SectionTitle title="Limited Exceptions" />
            <p>
              NexaHome may, in its sole discretion, issue a credit adjustment in the event of a verified
              technical error in lead delivery. Any such adjustment is provided as platform credit, not a
              cash refund, and is made solely at NexaHome&rsquo;s discretion. NexaHome is under no
              obligation to provide any adjustment.
            </p>
          </div>

          <Divider />

          {/* Payment Disputes */}
          <div>
            <SectionTitle title="Payment Disputes" />
            <p>
              Credit purchases are processed by Stripe. You agree not to initiate chargebacks or
              payment disputes for credit purchases except in cases of demonstrable fraud or
              unauthorized use of your payment method.
            </p>
          </div>

          <Divider />

          {/* Questions / Contact */}
          <div>
            <SectionTitle title="Questions" />
            <p className="mb-5">
              If you have questions about this Refund Policy, contact us at:
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-xl px-6 py-5 space-y-2 text-sm">
              <p className="font-semibold text-gray-900 text-base">NexaHome, LLC</p>
              <p>
                <span className="text-gray-500">Email: </span>
                <a
                  href="mailto:info@nexahomeapp.com"
                  className="text-primary underline underline-offset-2 hover:text-primary-dark transition-colors font-medium"
                >
                  info@nexahomeapp.com
                </a>
              </p>
              <p>
                <span className="text-gray-500">Website: </span>
                <a
                  href="https://www.nexahomeapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline underline-offset-2 hover:text-primary-dark transition-colors font-medium"
                >
                  www.nexahomeapp.com
                </a>
              </p>
            </div>
          </div>

          {/* Footer note */}
          <p className="text-xs text-gray-400 border-t border-gray-200 pt-8">
            © 2026 NexaHome, LLC. All rights reserved.
          </p>

        </section>
      </main>

      <Footer />
    </>
  );
}

/* ── Reusable micro-components ── */

function SectionTitle({ title }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="w-1 h-7 rounded-full bg-primary flex-shrink-0" />
      <h2 className="text-xl md:text-2xl font-bold text-primary">{title}</h2>
    </div>
  );
}

function Divider() {
  return <hr className="border-gray-100" />;
}
