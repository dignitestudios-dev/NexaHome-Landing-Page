import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export const metadata = {
  title: "Expert Privacy Policy | NexaHome",
  description:
    "NexaHome Expert Privacy Policy — learn how we collect, use, disclose, and protect information from independent service professionals on our platform.",
};

export default function ExpertPrivacyPolicyPage() {
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
            Expert Privacy Policy
          </h1>
          <p className="text-white/70 text-sm">Effective Date: July 1, 2026</p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 md:px-0 py-14">
        <section className="space-y-12 text-gray-600 leading-relaxed text-[15px]">

          {/* Section 1 */}
          <div>
            <SectionTitle number="1" title="Introduction" />
            <p>
              NexaHome, LLC (&ldquo;NexaHome,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects the privacy of the
              independent service professionals (&ldquo;Experts&rdquo;) who use our Platform. This Expert Privacy
              Policy explains how we collect, use, disclose, and protect Expert information. It is
              separate from our User Privacy Policy because the information we collect from Experts
              — and how we use it — differs meaningfully from how we handle User data. This Policy
              should be read together with the Expert Terms and Conditions.
            </p>
            <div className="mt-4 inline-block bg-primary/10 border border-primary/20 text-primary font-semibold text-sm px-4 py-2 rounded-lg">
              NexaHome does not sell your personal information.
            </div>
          </div>

          <Divider />

          {/* Section 2 */}
          <div>
            <SectionTitle number="2" title="Information We Collect" />

            <SubTitle>2.1 Registration and Profile Information</SubTitle>
            <ul className="list-disc list-inside space-y-1 mb-6 pl-1">
              <li>Full name and business name;</li>
              <li>Email address and phone number;</li>
              <li>Business address and service area(s);</li>
              <li>Service categories, descriptions, and pricing information you choose to display;</li>
              <li>Company logo, photos, and business profile content.</li>
            </ul>

            <SubTitle>2.2 Verification Documentation</SubTitle>
            <p className="mb-6">
              Depending on your service category, we collect documentation you submit for
              verification, which may include government-issued photo identification, professional
              licenses or certifications, business registration documentation, and proof of insurance.
              This documentation is processed through a third-party automated identity verification
              service acting on our behalf and is also subject to administrative review by authorized
              NexaHome personnel. Verification documents are not displayed publicly and are not
              shared with Users.
            </p>

            <SubTitle>2.3 Payment and Transaction Information</SubTitle>
            <p className="mb-6">
              Credit purchases are processed by Stripe. Your payment card information is transmitted
              directly to Stripe&rsquo;s PCI-compliant infrastructure and is never stored on NexaHome
              servers. We retain transaction records such as purchase amounts, dates, and truncated
              card identifiers.
            </p>

            <SubTitle>2.4 Credit and Lead Activity</SubTitle>
            <p className="mb-6">
              We maintain records of your credit balance, purchases, Leads purchased, and related
              account activity.
            </p>

            <SubTitle>2.5 Communications and Complaint Records</SubTitle>
            <p className="mb-6">
              We retain communications you send to NexaHome and records of User complaints
              submitted about your services, which we use for internal review and account decisions.
            </p>

            <SubTitle>2.6 Automatically Collected Information</SubTitle>
            <ul className="list-disc list-inside space-y-1 mb-3 pl-1">
              <li>IP address and approximate location;</li>
              <li>Device type, operating system, and identifiers;</li>
              <li>Session activity and feature usage;</li>
              <li>Cookies and similar technologies.</li>
            </ul>
            <p>
              We currently measure usage through custom backend analytics rather than third-party
              advertising or analytics platforms.
            </p>
          </div>

          <Divider />

          {/* Section 3 */}
          <div>
            <SectionTitle number="3" title="How We Use Expert Information" />
            <ul className="space-y-2 pl-1">
              {[
                "To create, manage, verify, and authenticate your account;",
                "To process credit purchases and maintain transaction records;",
                "To deliver purchased Leads and connect you with Users;",
                "To display your business profile, service areas, and User reviews publicly on the Platform;",
                "To send transactional communications via web platform notifications, email (via SendGrid), and SMS (via Twilio);",
                "To review complaints and make account decisions, including suspension or termination;",
                "To detect and prevent fraud, misuse, and policy violations;",
                "To improve and develop the Platform;",
                "To comply with legal obligations.",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <Divider />

          {/* Section 4 */}
          <div>
            <SectionTitle number="4" title="How We Share Expert Information" />

            <SubTitle>4.1 With Users and the Public</SubTitle>
            <p className="mb-6">
              When you purchase a Lead, your business name, profile, contact information, and
              reviews may be visible to the associated User. Your public profile — business name,
              services, service area, and reviews — may be visible to the general public and indexed
              by search engines. Verification documents are never shared with Users or the public.
            </p>

            <SubTitle>4.2 With Service Providers</SubTitle>
            <p className="mb-6">
              We share information with providers acting on our behalf: a third-party identity
              verification service (to process your verification documents); Stripe (payment
              processing); Amazon Web Services (hosting); Twilio (SMS); and SendGrid (email). These
              providers are contractually bound to protect your information and may not use it for their
              own purposes.
            </p>

            <SubTitle>4.3 Legal and Safety</SubTitle>
            <p className="mb-6">
              We may disclose information when required by law, subpoena, or court order, or to
              protect the rights, property, or safety of NexaHome, Users, or the public, including
              disclosure to law enforcement or licensing authorities where we believe it is appropriate.
            </p>

            <SubTitle>4.4 Business Transfers</SubTitle>
            <p className="mb-6">
              If NexaHome is involved in a merger, acquisition, financing, or sale of assets, your
              information may be transferred as part of that transaction, subject to this Policy&rsquo;s
              protections.
            </p>

            <SubTitle>4.5 No Sale of Personal Information</SubTitle>
            <p>
              We do not sell, rent, or trade your personal information to third parties for their own
              marketing or commercial purposes.
            </p>
          </div>

          <Divider />

          {/* Section 5 */}
          <div>
            <SectionTitle number="5" title="Verification Document Handling and Retention" />
            <p>
              Verification documents are used solely to confirm your identity, business existence, and
              category eligibility. Access is restricted to our third-party verification provider and
              authorized NexaHome personnel for review, fraud prevention, and compliance. We retain
              verification documents for the life of your account and for a reasonable period thereafter
              as needed for legal, audit, and compliance purposes.
            </p>
          </div>

          <Divider />

          {/* Section 6 */}
          <div>
            <SectionTitle number="6" title="Data Storage and Security" />
            <p>
              Expert data is hosted on Amazon Web Services infrastructure, with the intent that data
              be stored within the United States; limited copies may exist outside the U.S. only if
              required by the hosting provider&rsquo;s redundancy or backup systems. We use commercially
              reasonable safeguards, including encryption in transit and access controls. No system is
              completely secure. If you suspect unauthorized access to your account, contact{" "}
              <a href="mailto:info@nexahomeapp.com" className="text-primary underline underline-offset-2 hover:text-primary-dark transition-colors">
                info@nexahomeapp.com
              </a>{" "}
              immediately.
            </p>
          </div>

          <Divider />

          {/* Section 7 */}
          <div>
            <SectionTitle number="7" title="Text Messages" />
            <p>
              NexaHome sends transactional SMS messages (via Twilio) related to your account and
              Leads. Message frequency varies; message and data rates may apply. Reply{" "}
              <span className="font-semibold text-gray-800">STOP</span> to opt out or{" "}
              <span className="font-semibold text-gray-800">HELP</span> for help. Note that opting
              out of SMS may delay your awareness of new Leads and User responses.
            </p>
          </div>

          <Divider />

          {/* Section 8 */}
          <div>
            <SectionTitle number="8" title="Your Choices and Rights" />

            <SubTitle>8.1 Access, Correction, and Deletion</SubTitle>
            <p className="mb-6">
              You may review and update your information through your Expert dashboard on the web
              platform. You may request account deletion through your account settings or by
              contacting{" "}
              <a href="mailto:info@nexahomeapp.com" className="text-primary underline underline-offset-2 hover:text-primary-dark transition-colors">
                info@nexahomeapp.com
              </a>
              . We may retain certain records — including transaction records, complaint records, and
              verification documents — as required by law or for legitimate business purposes such as
              fraud prevention, dispute resolution, and tax compliance.
            </p>

            <SubTitle>8.2 California Residents</SubTitle>
            <p className="mb-6">
              If you are a California resident, you have rights under the CCPA/CPRA, including the
              right to know, delete, correct, and opt out of sale or sharing (we do not sell or share
              personal information as those terms are defined), and the right to non-discrimination.
              Note that information collected in a purely business-to-business capacity may be subject
              to different treatment under applicable law. Submit requests to{" "}
              <a href="mailto:info@nexahomeapp.com" className="text-primary underline underline-offset-2 hover:text-primary-dark transition-colors">
                info@nexahomeapp.com
              </a>
              .
            </p>

            <SubTitle>8.3 Other State Residents</SubTitle>
            <p>
              Experts in Virginia, Colorado, Connecticut, Texas, Oregon, and other states with
              comprehensive privacy laws may have similar rights. Contact{" "}
              <a href="mailto:info@nexahomeapp.com" className="text-primary underline underline-offset-2 hover:text-primary-dark transition-colors">
                info@nexahomeapp.com
              </a>{" "}
              to exercise them.
            </p>
          </div>

          <Divider />

          {/* Section 9 */}
          <div>
            <SectionTitle number="9" title="Children's Privacy" />
            <p>
              The Expert platform is intended for adults 18 years of age or older. We do not knowingly
              collect personal information from minors.
            </p>
          </div>

          <Divider />

          {/* Section 10 */}
          <div>
            <SectionTitle number="10" title="Changes to This Policy" />
            <p>
              We may update this Policy from time to time. We will post the updated version with a
              revised Effective Date and, for material changes, provide notice through the Platform or
              by email.
            </p>
          </div>

          <Divider />

          {/* Section 11 */}
          <div>
            <SectionTitle number="11" title="Contact Us" />
            <div className="bg-gray-50 border border-gray-200 rounded-xl px-6 py-5 space-y-2 text-sm">
              <p className="font-semibold text-gray-900 text-base">NexaHome, LLC</p>
              <p>
                <span className="text-gray-500">Email: </span>
                <a href="mailto:info@nexahomeapp.com" className="text-primary underline underline-offset-2 hover:text-primary-dark transition-colors font-medium">
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

function SectionTitle({ number, title }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center">
        {number}
      </span>
      <h2 className="text-xl md:text-2xl font-bold text-primary">{title}</h2>
    </div>
  );
}

function SubTitle({ children }) {
  return (
    <h3 className="text-[15px] font-semibold text-gray-900 mb-2 mt-4 pl-11">
      {children}
    </h3>
  );
}

function Divider() {
  return <hr className="border-gray-100" />;
}
