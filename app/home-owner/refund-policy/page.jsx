import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export const metadata = {
  title: "User Refund Policy | NexaHome",
  description:
    "NexaHome User Refund Policy — NexaHome is free for homeowners, renters, and property managers. Learn about payments and service arrangements.",
};

export default function HomeOwnerRefundPolicyPage() {
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
            User Refund Policy
          </h1>
          <p className="text-white/70 text-sm">Effective Date: July 1, 2026</p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 md:px-0 py-14">
        <section className="space-y-12 text-gray-600 leading-relaxed text-[15px]">

          {/* Overview */}
          <div>
            <SectionTitle title="Overview" />
            <p>
              NexaHome is free to use for Users (homeowners, renters, and property managers). We
              do not charge Users to create an account, submit a Job Request, or connect with service
              providers (&ldquo;Experts&rdquo;). Because we do not collect payments from Users, there is nothing
              for NexaHome to refund to you.
            </p>
          </div>

          <Divider />

          {/* Payments section */}
          <div>
            <SectionTitle title="Payments for Services Are Between You and the Expert" />
            <p className="mb-5">
              NexaHome is a technology platform that connects you with independent Experts. We do
              not process, hold, or facilitate payments for any services. Any payment you make for a
              service is arranged directly between you and the Expert.
            </p>

            <div className="bg-primary/10 border border-primary/20 text-primary font-semibold text-sm px-4 py-3 rounded-lg uppercase tracking-wide mb-5">
              All refunds, cancellations, disputes, and payment arrangements for services are solely
              between you and the vendor. NexaHome is not a party to those transactions and has no
              obligation or ability to issue refunds for them.
            </div>

            <p>
              If you have a concern about a payment or a service, you should contact the Expert
              directly to resolve it. You may also report an issue with an Expert through the report
              feature in the app; however, reporting an issue does not entitle you to a refund from
              NexaHome.
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
