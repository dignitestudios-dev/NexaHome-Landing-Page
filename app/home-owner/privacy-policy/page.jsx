import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export const metadata = {
  title: "User Privacy Policy | NexaHome",
  description:
    "NexaHome User Privacy Policy — learn how we collect, use, disclose, and protect personal information for homeowners, renters, and property managers on our platform.",
};

export default function HomeOwnerPrivacyPolicyPage() {
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
            User Privacy Policy
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
              NexaHome, LLC (&ldquo;NexaHome,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your privacy. This Privacy
              Policy explains how we collect, use, disclose, and protect personal information about
              individuals seeking home services — including Users, renters, and property managers
              (&ldquo;Users&rdquo;) — who use the NexaHome platform, including our website and mobile
              applications (the &ldquo;Platform&rdquo;). By using the Platform, you agree to the practices described
              in this Policy.
            </p>
            <div className="mt-4 inline-block bg-primary/10 border border-primary/20 text-primary font-semibold text-sm px-4 py-2 rounded-lg">
              NexaHome does not sell your personal information.
            </div>
          </div>

          <Divider />

          {/* Section 2 */}
          <div>
            <SectionTitle number="2" title="Information We Collect" />

            <SubTitle>2.1 Information You Provide</SubTitle>
            <ul className="list-disc list-inside space-y-1 mb-6 pl-1">
              <li>Name, email address, and phone number;</li>
              <li>Service location (address or zip code) and project details in your Job Requests;</li>
              <li>Your preferred contact method (call/text or email);</li>
              <li>Account profile information and settings;</li>
              <li>Reviews, ratings, photos, and other content you submit;</li>
              <li>Communications with NexaHome, including support requests and complaint reports.</li>
            </ul>

            <SubTitle>2.2 Precise Location Data (With Your Permission)</SubTitle>
            <p className="mb-6">
              If you grant permission through your device settings, we collect precise (GPS-level)
              location data to identify nearby service providers and improve search results. Location
              collection is OFF by default and occurs only with your explicit consent. You may revoke
              permission at any time through your device settings. Precise geolocation may be
              considered &ldquo;sensitive&rdquo; personal data under certain state privacy laws, and we treat it
              accordingly: we collect it only with consent and use it only for the purposes described
              here.
            </p>

            <SubTitle>2.3 Information Collected Automatically</SubTitle>
            <ul className="list-disc list-inside space-y-1 mb-6 pl-1">
              <li>IP address and approximate (non-GPS) location;</li>
              <li>Device type, operating system, browser, and device identifiers;</li>
              <li>Usage data such as pages viewed, features used, and session activity;</li>
              <li>Cookies and similar technologies (see Section 7).</li>
            </ul>

            <SubTitle>2.4 Analytics</SubTitle>
            <p>
              We currently measure Platform usage through our own custom backend analytics rather
              than third-party advertising or analytics platforms. If we integrate third-party analytics or
              advertising tools in the future, we will update this Policy.
            </p>
          </div>

          <Divider />

          {/* Section 3 */}
          <div>
            <SectionTitle number="3" title="How We Use Your Information" />
            <ul className="space-y-2 pl-1">
              {[
                "To create and manage your account;",
                "To distribute your Job Request to the Experts you select or, if you choose \"Send to All,\" to make your job details visible to eligible Experts in your area — with your name and contact information revealed only to the Experts who purchase access (a maximum of five (5));",
                "To send transactional communications via in-app notifications, push notifications, email, and SMS (such as vendor response alerts and service updates);",
                "To display your reviews on Expert profiles;",
                "To identify nearby Experts using location data (with your permission);",
                "To review complaints, investigate misuse, and protect the safety and integrity of the Platform;",
                "To improve and develop the Platform;",
                "To comply with legal obligations;",
                "With your consent, to send promotional communications (you may opt out at any time).",
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
            <SectionTitle number="4" title="How We Share Your Information" />

            <SubTitle>4.1 With Experts</SubTitle>
            <p className="mb-6">
              Your Job Request details (project description and general service area) and your first
              name are visible to the Experts you select or, if you choose &ldquo;Send to All,&rdquo; to Experts
              offering the relevant service in your area. Your last name and contact information are
              revealed only to Experts who purchase access to your request — a maximum of five (5).
              Experts are independent businesses; once shared, their use of your information is
              governed by their own practices and applicable law. We contractually require Experts to
              use lead information only to respond to your Job Request and to honor your contact
              preferences, but we cannot guarantee their compliance.
            </p>

            <SubTitle>4.2 With Service Providers</SubTitle>
            <p className="mb-6">
              We share information with vendors who provide services on our behalf, including:
              Amazon Web Services (cloud hosting); Twilio (SMS delivery); SendGrid (email delivery);
              and Stripe (payment processing for Experts — note that Users are not charged and we
              do not collect payment information from Users). These providers are bound by
              contractual obligations to protect your information and may not use it for their own
              purposes.
            </p>

            <SubTitle>4.3 Legal and Safety</SubTitle>
            <p className="mb-6">
              We may disclose information when required by law, subpoena, or court order, or when
              we believe in good faith that disclosure is necessary to protect the rights, property, or
              safety of NexaHome, our users, or the public.
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
            <SectionTitle number="5" title="Text Messages" />
            <p>
              NexaHome sends transactional SMS messages (delivered via Twilio), such as vendor
              response alerts, appointment confirmations, and service-related updates. Message
              frequency varies; message and data rates may apply. Reply{" "}
              <span className="font-semibold text-gray-800">STOP</span> to opt out or{" "}
              <span className="font-semibold text-gray-800">HELP</span> for help. Opting out of
              NexaHome messages does not stop messages sent directly by Experts you have been
              connected with — to stop those, contact the Expert directly.
            </p>
          </div>

          <Divider />

          {/* Section 6 */}
          <div>
            <SectionTitle number="6" title="Data Storage and Security" />
            <p>
              Your data is hosted on Amazon Web Services infrastructure. We intend for user data to
              be stored within the United States; limited copies may exist outside the U.S. only if
              required by the hosting provider&rsquo;s redundancy or backup systems. We use commercially
              reasonable administrative, technical, and physical safeguards — including encryption in
              transit and access controls — to protect your information. No system is completely
              secure, and we cannot guarantee absolute security. Payment card information is never
              stored on NexaHome servers.
            </p>
          </div>

          <Divider />

          {/* Section 7 */}
          <div>
            <SectionTitle number="7" title="Cookies and Similar Technologies" />
            <p>
              We use cookies and similar technologies to keep you signed in, remember preferences,
              and understand Platform usage. You can manage cookies through your browser
              settings; disabling them may limit some features.
            </p>
          </div>

          <Divider />

          {/* Section 8 */}
          <div>
            <SectionTitle number="8" title="Your Choices and Rights" />

            <SubTitle>8.1 Account Access, Correction, and Deletion</SubTitle>
            <p className="mb-6">
              You may access and update your information through your account settings. You may
              delete your account at any time from the profile/settings section of the app or by
              contacting{" "}
              <a href="mailto:info@nexahomeapp.com" className="text-primary underline underline-offset-2 hover:text-primary-dark transition-colors">
                info@nexahomeapp.com
              </a>
              . Certain records may be retained as required by law or for legitimate business purposes
              such as fraud prevention and dispute resolution.
            </p>

            <SubTitle>8.2 Communications Choices</SubTitle>
            <p className="mb-6">
              You may opt out of promotional emails via the unsubscribe link, opt out of SMS by
              replying <span className="font-semibold text-gray-800">STOP</span>, manage push
              notifications through your device settings, and revoke location permission through your
              device settings.
            </p>

            <SubTitle>8.3 California Residents</SubTitle>
            <p className="mb-6">
              If you are a California resident, the California Consumer Privacy Act (as amended by the
              CPRA) gives you the right to know the categories and specific pieces of personal
              information we collect, the right to delete, the right to correct, the right to opt out of
              &ldquo;sale&rdquo; or &ldquo;sharing&rdquo; (we do not sell or share personal information as those terms are
              defined), the right to limit use of sensitive personal information, and the right to
              non-discrimination. Submit requests to{" "}
              <a href="mailto:info@nexahomeapp.com" className="text-primary underline underline-offset-2 hover:text-primary-dark transition-colors">
                info@nexahomeapp.com
              </a>
              ; we will verify your identity and respond within the time required by law.
            </p>

            <SubTitle>8.4 Other State Residents</SubTitle>
            <p>
              Residents of Virginia, Colorado, Connecticut, Texas, Oregon, and other states with
              comprehensive privacy laws may have similar rights, including rights of access,
              correction, deletion, and portability, and the right to appeal a denied request. Contact{" "}
              <a href="mailto:info@nexahomeapp.com" className="text-primary underline underline-offset-2 hover:text-primary-dark transition-colors">
                info@nexahomeapp.com
              </a>{" "}
              to exercise these rights.
            </p>
          </div>

          <Divider />

          {/* Section 9 */}
          <div>
            <SectionTitle number="9" title="Data Retention" />
            <p>
              We retain personal information for as long as your account is active and as needed to
              provide the Platform, comply with legal obligations, resolve disputes, and enforce
              agreements. When information is no longer needed, we delete or de-identify it.
            </p>
          </div>

          <Divider />

          {/* Section 10 */}
          <div>
            <SectionTitle number="10" title="Children's Privacy" />
            <p>
              The Platform is not directed to anyone under 18, and we do not knowingly collect
              personal information from minors. If we learn that a minor has provided personal
              information, we will delete it promptly.
            </p>
          </div>

          <Divider />

          {/* Section 11 */}
          <div>
            <SectionTitle number="11" title="Changes to This Policy" />
            <p>
              We may update this Policy from time to time. We will post the updated version with a
              revised Effective Date and, for material changes, provide notice through the Platform or
              by email.
            </p>
          </div>

          <Divider />

          {/* Section 12 */}
          <div>
            <SectionTitle number="12" title="Contact Us" />
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
