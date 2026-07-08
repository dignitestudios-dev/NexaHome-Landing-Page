import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export const metadata = {
  title: "User Terms & Conditions | NexaHome",
  description:
    "NexaHome User Terms & Conditions — the legally binding agreement governing your access to and use of the NexaHome platform as a homeowner, renter, or property manager.",
};

export default function HomeOwnerTermsAndConditionsPage() {
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
            User Terms &amp; Conditions
          </h1>
          <p className="text-white/70 text-sm">Effective Date: July 1, 2026</p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 md:px-0 py-14">
        <section className="space-y-12 text-gray-600 leading-relaxed text-[15px]">

          {/* Section 1 */}
          <div>
            <SectionTitle number="1" title="Agreement to Terms" />
            <p className="mb-4">
              These Terms and Conditions (&ldquo;Terms&rdquo;) are a legally binding agreement between you
              (&ldquo;User,&rdquo; &ldquo;you,&rdquo; or &ldquo;your&rdquo;) and NexaHome, LLC (&ldquo;NexaHome,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;),
              governing your access to and use of the NexaHome platform, including our website,
              mobile applications, and related services (collectively, the &ldquo;Platform&rdquo;).
            </p>
            <div className="bg-primary/10 border border-primary/20 text-primary font-semibold text-sm px-4 py-3 rounded-lg uppercase tracking-wide mb-4">
              By creating an account or using the Platform, you acknowledge that you have read,
              understood, and agree to be bound by these Terms and our Privacy Policy, which is
              incorporated by reference. If you do not agree, do not use the Platform.
            </div>
            <p>
              You must be at least 18 years of age and reside in the United States to use the Platform.
            </p>
          </div>

          <Divider />

          {/* Section 2 */}
          <div>
            <SectionTitle number="2" title="Description of Services" />
            <p className="mb-4">
              NexaHome is an online marketplace that connects individuals seeking home services —
              including Users, renters, and property managers (&ldquo;Users&rdquo;) — with independent home
              service providers (&ldquo;Experts&rdquo;). Users may submit project requests (&ldquo;Job Requests&rdquo;),
              which are made available to Experts in the relevant service category and geographic
              area. Up to five (5) Experts may purchase access to any single Job Request.
            </p>
            <p className="mb-4">
              The Platform is provided free of charge to Users. NexaHome generates revenue from
              Experts, who purchase credits to access Job Requests.
            </p>
            <p>
              NexaHome is a technology platform only. We do not provide, perform, guarantee,
              supervise, schedule, or control any home services, and we do not process payments for
              services between Users and Experts. We are not a party to any agreement between you
              and an Expert.
            </p>
          </div>

          <Divider />

          {/* Section 3 */}
          <div>
            <SectionTitle number="3" title="User Accounts" />

            <SubTitle>3.1 Registration</SubTitle>
            <p className="mb-4">
              To access certain features, you must register for an account and provide accurate,
              current, and complete information, and keep it up to date.
            </p>

            <SubTitle>3.2 Account Security</SubTitle>
            <p className="mb-4">
              You are responsible for safeguarding your login credentials and for all activity under
              your account. Notify us immediately at{" "}
              <a href="mailto:info@nexahomeapp.com" className="text-primary underline underline-offset-2 hover:text-primary-dark transition-colors">
                info@nexahomeapp.com
              </a>{" "}
              if you suspect unauthorized use.
            </p>

            <SubTitle>3.3 Account Deletion</SubTitle>
            <p className="mb-4">
              You may delete your account at any time through the profile/settings section of the app
              or by contacting{" "}
              <a href="mailto:info@nexahomeapp.com" className="text-primary underline underline-offset-2 hover:text-primary-dark transition-colors">
                info@nexahomeapp.com
              </a>
              . Deletion of your account is subject to our data retention practices described in the
              Privacy Policy.
            </p>

            <SubTitle>3.4 Suspension and Termination by NexaHome</SubTitle>
            <p>
              We reserve the right to suspend or terminate your account at any time, with or without
              notice, for violation of these Terms or for any other reason in our sole discretion.
            </p>
          </div>

          <Divider />

          {/* Section 4 */}
          <div>
            <SectionTitle number="4" title="Job Requests and Expert Contact" />

            <SubTitle>4.1 Submitting a Job Request</SubTitle>
            <p className="mb-4">
              When you submit a Job Request, you may either select up to five (5) Experts to receive
              it, or choose &ldquo;Send to All,&rdquo; in which case your Job Request is made visible to Experts
              offering the relevant service in your area. Before purchase, eligible Experts can see your
              job details (such as project description and general location) and your first name only;
              your last name and contact information are revealed only to Experts who purchase
              access to your Job Request — a maximum of five (5). You are solely responsible for the
              accuracy of the information you submit.
            </p>

            <SubTitle>4.2 Consent to Be Contacted</SubTitle>
            <div className="bg-primary/10 border border-primary/20 text-primary font-semibold text-sm px-4 py-3 rounded-lg uppercase tracking-wide mb-4">
              By submitting a Job Request and providing your contact information, you provide your
              express written consent to be contacted by NexaHome and by up to five (5) Experts who
              purchase your Job Request, at the telephone number and/or email address you provide,
              regarding your Job Request. This contact may include telephone calls and text (SMS)
              messages, including calls and messages placed using automated telephone dialing
              systems or prerecorded voice messages, and email.
            </div>
            <p className="mb-4">
              Your consent to be contacted is not a condition of using the Platform, and is provided
              each time you submit a Job Request through the consent acknowledgment presented at
              submission. You may indicate your preferred contact method (call/text or email) when
              submitting a Job Request; however, NexaHome cannot and does not control the
              methods by which independent Experts ultimately choose to contact you. Standard
              message and data rates may apply to text messages. You may revoke consent to text
              messages from any sender by replying{" "}
              <span className="font-semibold text-gray-800">STOP</span>, and you may request that
              any Expert cease contacting you by communicating that request directly to the Expert.
            </p>

            <SubTitle>4.3 SMS Notifications from NexaHome</SubTitle>
            <p>
              NexaHome may send you transactional text messages related to your use of the
              Platform, such as expert response alerts, appointment confirmations, and service-related
              updates. Message frequency varies. Message and data rates may apply. Reply{" "}
              <span className="font-semibold text-gray-800">STOP</span> to opt out of NexaHome text
              messages or <span className="font-semibold text-gray-800">HELP</span> for assistance.
              Opting out of NexaHome messages does not affect communications sent directly by
              Experts.
            </p>
          </div>

          <Divider />

          {/* Section 5 */}
          <div>
            <SectionTitle number="5" title="Expert Relationship Disclaimer" />
            <div className="bg-primary/10 border border-primary/20 text-primary font-semibold text-sm px-4 py-3 rounded-lg uppercase tracking-wide mb-4">
              Experts are independent third parties. NexaHome does not employ, endorse,
              recommend, or guarantee any Expert, and no Expert is an agent or employee of
              NexaHome.
            </div>
            <p className="mb-4">
              NexaHome requires Experts to submit certain identification and business documentation
              during registration, which may include government-issued identification, professional
              licenses or certifications, business registration, and proof of insurance, depending on
              the Expert&rsquo;s service category. Submitted documentation is reviewed through an
              automated third-party verification service and administrative review. However,
              NexaHome does not guarantee the accuracy, validity, or currency of any Expert&rsquo;s
              credentials, and verification does not constitute an endorsement of any Expert or a
              guarantee of the quality or legality of their work. You are solely responsible for
              evaluating, selecting, and contracting with any Expert, including independently
              confirming licensure and insurance.
            </p>
            <p className="mb-3">NexaHome does not:</p>
            <ul className="space-y-2 pl-1 mb-4">
              {[
                "Control or supervise the work performed by any Expert;",
                "Guarantee the quality, safety, legality, timeliness, or outcome of any services;",
                "Handle or process payment for services between Users and Experts;",
                "Schedule or coordinate services;",
                "Guarantee that any Expert will respond to or accept your Job Request.",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              Any contract for services is solely between you and the Expert. NexaHome is not a party
              to that contract and bears no responsibility for its performance or breach.
            </p>
          </div>

          <Divider />

          {/* Section 6 */}
          <div>
            <SectionTitle number="6" title="Reporting a Complaint" />
            <p>
              If you experience a problem with an Expert, you may report the issue through the
              Platform&rsquo;s report feature. NexaHome reviews reports in its sole discretion and may take
              action against an Expert, up to and including suspension or removal from the Platform.
              NexaHome is not obligated to take any particular action, to disclose the outcome of any
              review, or to mediate or resolve disputes between Users and Experts.
            </p>
          </div>

          <Divider />

          {/* Section 7 */}
          <div>
            <SectionTitle number="7" title="Payments Between Users and Experts" />
            <p>
              NexaHome does not process, hold, or guarantee payments for home services. All
              payment terms, invoicing, and payment arrangements are made directly between you
              and your chosen Expert, and NexaHome has no liability for any payment dispute,
              overcharge, refund, or nonperformance arising from those arrangements.
            </p>
          </div>

          <Divider />

          {/* Section 8 */}
          <div>
            <SectionTitle number="8" title="Reviews and User Content" />

            <SubTitle>8.1 License to NexaHome</SubTitle>
            <p className="mb-4">
              You may post reviews, ratings, photos, and other content (&ldquo;User Content&rdquo;). By posting
              User Content, you grant NexaHome a non-exclusive, royalty-free, perpetual, irrevocable,
              worldwide, sublicensable license to use, display, reproduce, modify, and distribute that
              content in connection with operating and promoting the Platform.
            </p>

            <SubTitle>8.2 Standards</SubTitle>
            <p className="mb-4">
              Reviews must be honest and based on your genuine, first-hand experience. You may not
              post content that is false, misleading, defamatory, harassing, obscene, or that violates
              any law or third-party right, and you may not accept anything of value in exchange for a
              review.
            </p>

            <SubTitle>8.3 Removal</SubTitle>
            <p>
              NexaHome may remove or decline to display any User Content at any time in its sole
              discretion.
            </p>
          </div>

          <Divider />

          {/* Section 9 */}
          <div>
            <SectionTitle number="9" title="Prohibited Conduct" />
            <p className="mb-3">You agree not to:</p>
            <ul className="space-y-2 pl-1">
              {[
                "Use the Platform for any unlawful purpose;",
                "Submit false, fraudulent, or misleading Job Requests;",
                "Impersonate any person or entity;",
                "Interfere with or circumvent Platform systems, security, or access controls;",
                "Scrape, harvest, or collect data about other users;",
                "Use the Platform to send spam or unsolicited communications;",
                "Reverse engineer or copy any portion of the Platform.",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <Divider />

          {/* Section 10 */}
          <div>
            <SectionTitle number="10" title="Location Data" />
            <p>
              With your permission, the Platform may collect precise (GPS-level) location data from
              your device to identify nearby Experts and improve search results. Location access is off
              by default and is collected only if you grant permission through your device settings.
              You may revoke location permission at any time through your device settings; doing so
              may limit certain Platform features. See our Privacy Policy for details.
            </p>
          </div>

          <Divider />

          {/* Section 11 */}
          <div>
            <SectionTitle number="11" title="Intellectual Property; DMCA" />
            <p className="mb-4">
              All content, software, trademarks, and intellectual property on the Platform are owned by
              or licensed to NexaHome. You may not reproduce, distribute, or create derivative works
              without our express written permission.
            </p>
            <p>
              If you believe content on the Platform infringes your copyright, send a notice compliant
              with the Digital Millennium Copyright Act (17 U.S.C. § 512) to our designated agent at{" "}
              <a href="mailto:info@nexahomeapp.com" className="text-primary underline underline-offset-2 hover:text-primary-dark transition-colors">
                info@nexahomeapp.com
              </a>
              , including: identification of the copyrighted work; identification and location of the
              allegedly infringing material; your contact information; a statement of good-faith belief
              that the use is unauthorized; a statement, under penalty of perjury, that the notice is
              accurate and you are authorized to act; and your physical or electronic signature.
            </p>
          </div>

          <Divider />

          {/* Section 12 */}
          <div>
            <SectionTitle number="12" title="Mobile Application Terms (Apple and Google)" />
            <p className="mb-4">
              If you download the Platform from the Apple App Store: these Terms are between you
              and NexaHome only, not Apple Inc. (&ldquo;Apple&rdquo;). Apple has no obligation to provide
              maintenance or support for the app and is not responsible for any product warranties,
              claims relating to the app, or third-party intellectual property claims. Apple and its
              subsidiaries are third-party beneficiaries of these Terms and may enforce them against
              you. You represent that you are not located in a country subject to a U.S. Government
              embargo and are not on any U.S. Government restricted-party list.
            </p>
            <p>
              If you download the Platform from Google Play, you acknowledge that these Terms are
              between you and NexaHome only, and that Google LLC has no responsibility or liability
              for the app or these Terms.
            </p>
          </div>

          <Divider />

          {/* Section 13 */}
          <div>
            <SectionTitle number="13" title="Disclaimer of Warranties" />
            <div className="bg-primary/10 border border-primary/20 text-primary font-semibold text-sm px-4 py-3 rounded-lg uppercase tracking-wide">
              The Platform is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without warranties of
              any kind, express or implied, including warranties of merchantability, fitness for a
              particular purpose, and non-infringement. NexaHome does not warrant that the Platform
              will be uninterrupted, secure, or error-free, or that any Expert will respond to, accept,
              or satisfactorily complete any Job Request.
            </div>
          </div>

          <Divider />

          {/* Section 14 */}
          <div>
            <SectionTitle number="14" title="Limitation of Liability" />
            <div className="bg-primary/10 border border-primary/20 text-primary font-semibold text-sm px-4 py-3 rounded-lg uppercase tracking-wide">
              To the fullest extent permitted by law, NexaHome and its officers, directors, members,
              employees, and agents shall not be liable for any indirect, incidental, special,
              consequential, exemplary, or punitive damages, or for any property damage, personal
              injury, or financial loss arising from or relating to services performed or not performed by
              any Expert, even if NexaHome has been advised of the possibility of such damages. In
              no event shall NexaHome&rsquo;s aggregate liability to you exceed one hundred dollars
              ($100.00). Some jurisdictions do not allow certain limitations, so some of these
              limitations may not apply to you.
            </div>
          </div>

          <Divider />

          {/* Section 15 */}
          <div>
            <SectionTitle number="15" title="Indemnification" />
            <p>
              You agree to indemnify, defend, and hold harmless NexaHome and its officers, directors,
              members, employees, and agents from and against any claims, liabilities, damages,
              losses, and expenses (including reasonable attorneys&rsquo; fees) arising out of or related to:
              (a) your use of the Platform; (b) your User Content; (c) your violation of these Terms or
              any law; or (d) your interactions, agreements, or disputes with any Expert.
            </p>
          </div>

          <Divider />

          {/* Section 16 */}
          <div>
            <SectionTitle number="16" title="Governing Law; Jurisdiction; Class Action Waiver" />

            <SubTitle>16.1 Governing Law</SubTitle>
            <p className="mb-4">
              These Terms are governed by the laws of the State of Louisiana, without regard to
              conflict-of-law principles.
            </p>

            <SubTitle>16.2 Informal Resolution First</SubTitle>
            <p className="mb-4">
              Before filing any claim, you agree to first contact us at{" "}
              <a href="mailto:info@nexahomeapp.com" className="text-primary underline underline-offset-2 hover:text-primary-dark transition-colors">
                info@nexahomeapp.com
              </a>{" "}
              and attempt in good faith to resolve the dispute informally for at least thirty (30) days.
            </p>

            <SubTitle>16.3 Jurisdiction; Class Action Waiver</SubTitle>
            <p className="mb-4">
              Any dispute arising out of or relating to these Terms or the Platform that is not resolved
              informally shall be brought exclusively in the state or federal courts located in Louisiana,
              and you and NexaHome each consent to the personal jurisdiction and venue of those
              courts.
            </p>
            <div className="bg-primary/10 border border-primary/20 text-primary font-semibold text-sm px-4 py-3 rounded-lg uppercase tracking-wide">
              You and NexaHome each waive the right to a jury trial and the right to participate in a
              class, collective, or representative action.
            </div>
          </div>

          <Divider />

          {/* Section 17 */}
          <div>
            <SectionTitle number="17" title="Changes to These Terms" />
            <p>
              We may modify these Terms at any time by posting the updated version on the Platform
              and updating the Effective Date, and, for material changes, providing notice through the
              Platform or by email. Your continued use of the Platform after changes take effect
              constitutes acceptance.
            </p>
          </div>

          <Divider />

          {/* Section 18 */}
          <div>
            <SectionTitle number="18" title="Miscellaneous" />
            <p>
              If any provision of these Terms is held unenforceable, the remaining provisions remain in
              full force. NexaHome&rsquo;s failure to enforce any provision is not a waiver. You may not
              assign these Terms; NexaHome may assign them in connection with a merger,
              acquisition, or sale of assets. These Terms, together with the Privacy Policy, are the
              entire agreement between you and NexaHome regarding the Platform.
            </p>
          </div>

          <Divider />

          {/* Section 19 */}
          <div>
            <SectionTitle number="19" title="Contact" />
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
