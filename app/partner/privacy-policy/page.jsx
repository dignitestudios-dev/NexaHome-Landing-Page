import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export const metadata = {
  title: "Partner Privacy Policy | NexaHome",
  description:
    "NexaHome Partner Privacy Policy — learn how we collect, use, disclose, store, and protect information from Partners in our Partner Program.",
};

export default function PartnerPrivacyPolicyPage() {
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
            Partner Privacy Policy
          </h1>
          <p className="text-white/70 text-sm">Effective Date: July 8, 2026</p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 md:px-0 py-14">
        <section className="space-y-12 text-gray-600 leading-relaxed text-[15px]">

          {/* Section 1 */}
          <div>
            <SectionTitle number="1" title="Introduction" />
            <p className="mb-4">
              NexaHome, LLC (&ldquo;NexaHome,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects the privacy of organizations and individuals participating in the NexaHome Partner Program (&ldquo;Partners&rdquo;).
            </p>
            <p className="mb-4">
              This Partner Privacy Policy explains how we collect, use, disclose, store, and protect information collected from Partners who access or use the NexaHome Partner Dashboard, referral tools, analytics and commission reporting features, and all related web-based services (collectively, the &ldquo;Partner Platform&rdquo;).
            </p>
            <p className="mb-4">
              This Policy is separate from the NexaHome User Privacy Policy and Expert Privacy Policy because the information collected from Partners differs substantially from information collected from Users and Experts.
            </p>
            <p className="mb-4">
              This Policy should be read together with the NexaHome Partner Terms &amp; Conditions and any executed Partner Agreement.
            </p>
            <div className="mt-4 inline-block bg-primary/10 border border-primary/20 text-primary font-semibold text-sm px-4 py-2 rounded-lg">
              NexaHome does not sell your personal information.
            </div>
          </div>

          <Divider />

          {/* Section 2 */}
          <div>
            <SectionTitle number="2" title="Information We Collect" />

            <SubTitle>2.1 Registration Information</SubTitle>
            <p className="pl-11 mb-3">
              When you register as a Partner, we collect information including:
            </p>
            <ul className="space-y-2 pl-11 mb-4">
              {[
                "Full name",
                "Organization or business name",
                "Business email address",
                "Telephone number",
                "Business address",
                "Organization type",
                "Website address",
                "Job title",
                "Username and login credentials",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="pl-11 mb-6">
              We use this information to create, verify, administer, and secure your Partner account.
            </p>

            <SubTitle>2.2 Business Information</SubTitle>
            <p className="pl-11 mb-3">
              Depending on the nature of your participation, we may collect:
            </p>
            <ul className="space-y-2 pl-11 mb-4">
              {[
                "Business registration information",
                "Employer Identification Number (EIN) or tax identification information",
                "Tax documentation",
                "Company branding assets",
                "Business licenses (where applicable)",
                "Marketing preferences",
                "Partner category or industry classification",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="pl-11 mb-6">
              We may request additional documentation where necessary to verify your eligibility for the Partner Program.
            </p>

            <SubTitle>2.3 Payment and Financial Information</SubTitle>
            <p className="pl-11 mb-4">
              Partner commissions are processed through Stripe (including Stripe Connect) or another payment provider designated by NexaHome.
            </p>
            <p className="pl-11 mb-4">
              Payment card information and banking credentials are transmitted directly to the payment processor and are not stored on NexaHome servers.
            </p>
            <p className="pl-11 mb-3">
              We may retain records relating to:
            </p>
            <ul className="space-y-2 pl-11 mb-6">
              {[
                "Commission calculations",
                "Approved payouts",
                "Payment dates",
                "Transaction identifiers",
                "Tax reporting information",
                "Payment status",
                "Historical earnings",
                "Invoice and payout history",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <SubTitle>2.4 Referral and Commission Activity</SubTitle>
            <p className="pl-11 mb-3">
              We maintain records relating to your participation in the Partner Program, including:
            </p>
            <ul className="space-y-2 pl-11 mb-4">
              {[
                "Referral links assigned to your account",
                "Invitation codes",
                "Referral activity",
                "Number of referred Users",
                "Service request activity",
                "Eligible commission transactions",
                "Revenue attribution",
                "Dashboard reports",
                "Historical referral performance",
                "Program participation records",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="pl-11 mb-6">
              These records are used to administer the Partner Program and calculate commissions.
            </p>

            <SubTitle>2.5 Communications</SubTitle>
            <p className="pl-11 mb-3">
              We retain communications between you and NexaHome, including:
            </p>
            <ul className="space-y-2 pl-11 mb-4">
              {[
                "Customer support requests",
                "Emails",
                "Platform messages",
                "Account notifications",
                "Commission inquiries",
                "Technical support communications",
                "Compliance-related correspondence",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="pl-11 mb-6">
              These records help us provide support, investigate issues, and improve our services.
            </p>

            <SubTitle>2.6 Automatically Collected Information</SubTitle>
            <p className="pl-11 mb-3">
              When you access the Partner Platform, we automatically collect certain technical information, including:
            </p>
            <ul className="space-y-2 pl-11 mb-4">
              {[
                "IP address",
                "Approximate geographic location",
                "Browser type",
                "Device type",
                "Operating system",
                "Login timestamps",
                "Session duration",
                "Pages viewed",
                "Dashboard activity",
                "Error logs",
                "Device identifiers",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="pl-11 mb-6">
              This information helps us maintain security, detect unauthorized activity, and improve Platform performance.
            </p>

            <SubTitle>2.7 Cookies and Similar Technologies</SubTitle>
            <p className="pl-11 mb-3">
              We use cookies and similar technologies to:
            </p>
            <ul className="space-y-2 pl-11 mb-4">
              {[
                "authenticate your account",
                "maintain active sessions",
                "remember user preferences",
                "improve Platform functionality",
                "measure usage",
                "enhance security",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="pl-11">
              Most browsers allow you to manage cookie preferences through browser settings. Disabling cookies may affect certain Partner Platform features.
            </p>
          </div>

          <Divider />

          {/* Section 3 */}
          <div>
            <SectionTitle number="3" title="How We Use Partner Information" />
            <p className="mb-3">
              We use Partner information for legitimate business purposes, including to:
            </p>
            <ul className="space-y-2 pl-1 mb-4">
              {[
                "create and manage Partner accounts",
                "verify Partner eligibility",
                "administer the Partner Program",
                "generate referral links and invitation codes",
                "attribute referrals",
                "calculate commissions",
                "process commission payments",
                "maintain financial records",
                "provide Partner Dashboard functionality",
                "communicate regarding the Partner Program",
                "provide customer support",
                "detect fraud and abuse",
                "investigate suspicious activity",
                "enforce our agreements",
                "improve Platform functionality",
                "develop new features",
                "comply with legal obligations",
                "protect NexaHome, Users, Experts, Partners, and the public",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              We may also use aggregated or de-identified information for reporting, analytics, research, and business planning purposes.
            </p>
          </div>

          <Divider />

          {/* Section 4 */}
          <div>
            <SectionTitle number="4" title="How We Share Partner Information" />

            <SubTitle>4.1 Service Providers</SubTitle>
            <p className="pl-11 mb-3">
              We share information with trusted third-party providers that perform services on our behalf, including:
            </p>
            <ul className="space-y-2 pl-11 mb-4">
              {[
                "Amazon Web Services (cloud hosting)",
                "Stripe (payment processing)",
                "Twilio (SMS communications)",
                "SendGrid (email communications)",
                "Identity verification providers (where applicable)",
                "Security and fraud detection providers",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="pl-11 mb-6">
              These providers are contractually required to protect Partner information and may use it only to perform services for NexaHome.
            </p>

            <SubTitle>4.2 Business Transfers</SubTitle>
            <p className="pl-11 mb-6">
              If NexaHome is involved in a merger, acquisition, corporate restructuring, financing transaction, bankruptcy proceeding, or sale of assets, Partner information may be transferred as part of that transaction, subject to the protections described in this Privacy Policy.
            </p>

            <SubTitle>4.3 Legal Compliance</SubTitle>
            <p className="pl-11 mb-3">
              We may disclose Partner information when we believe disclosure is necessary to:
            </p>
            <ul className="space-y-2 pl-11 mb-4">
              {[
                "comply with applicable law",
                "respond to subpoenas or court orders",
                "cooperate with law enforcement",
                "protect NexaHome’s legal rights",
                "investigate fraud",
                "enforce our agreements",
                "protect the safety of Users, Experts, Partners, or the public",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <SubTitle>4.4 Professional Advisors</SubTitle>
            <p className="pl-11 mb-6">
              We may disclose Partner information to our attorneys, accountants, auditors, insurers, financial institutions, or other professional advisors where reasonably necessary for legal, accounting, tax, regulatory, or business purposes.
            </p>

            <SubTitle>4.5 No Sale of Personal Information</SubTitle>
            <p className="pl-11">
              NexaHome does not sell, rent, or trade Partner personal information to third parties for their own marketing or commercial purposes.
            </p>
          </div>

          <Divider />

          {/* Section 5 */}
          <div>
            <SectionTitle number="5" title="Data Storage and Security" />
            <p className="mb-4">
              Partner information is hosted using Amazon Web Services (AWS) infrastructure. We intend for Partner information to be stored within the United States; however, limited copies may exist outside the United States where necessary to support redundancy, disaster recovery, backup services, or other infrastructure requirements provided by our service providers.
            </p>
            <p className="mb-3">
              We implement commercially reasonable administrative, technical, and physical safeguards designed to protect Partner information from unauthorized access, disclosure, alteration, or destruction. These safeguards include, where appropriate:
            </p>
            <ul className="space-y-2 pl-1 mb-4">
              {[
                "Encryption of data in transit",
                "Role-based access controls",
                "Multi-layer authentication for administrative systems",
                "Continuous monitoring and logging",
                "Network security controls",
                "Secure cloud infrastructure",
                "Regular software updates and security maintenance",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mb-4">
              Although we strive to protect your information, no method of electronic transmission or storage is completely secure, and NexaHome cannot guarantee absolute security.
            </p>
            <p>
              If you believe your Partner account has been accessed without authorization, you should immediately change your password and notify NexaHome at{" "}
              <a href="mailto:info@nexahomeapp.com" className="text-primary underline underline-offset-2 hover:text-primary-dark transition-colors font-medium">
                info@nexahomeapp.com
              </a>.
            </p>
          </div>

          <Divider />

          {/* Section 6 */}
          <div>
            <SectionTitle number="6" title="Text Messages and Communications" />
            <p className="mb-4">
              NexaHome may communicate with Partners through email, SMS messages (delivered via Twilio), Partner Dashboard notifications, system alerts, administrative notices, and other communication channels you authorize.
            </p>
            <p className="mb-4">
              These communications may include account verification, security alerts, login notifications, commission reports, payment confirmations, Platform updates, maintenance notifications, policy changes, and support responses, as well as other information necessary for administration of the Partner Program.
            </p>
            <p className="mb-4">
              Certain communications are transactional in nature and are required for participation in the Partner Program. You may not opt out of essential service-related communications while maintaining an active Partner account.
            </p>
            <p className="mb-4">
              For SMS messages, message frequency varies and message and data rates may apply. Reply STOP to opt out or HELP for help.
            </p>
            <p>
              Where promotional or marketing communications are sent, you may opt out using the unsubscribe instructions included in those communications.
            </p>
          </div>

          <Divider />

          {/* Section 7 */}
          <div>
            <SectionTitle number="7" title="Your Rights and Choices" />

            <SubTitle>7.1 Access and Correction</SubTitle>
            <p className="pl-11 mb-6">
              Partners may review and update certain account information through the Partner Dashboard. If information cannot be updated through the dashboard, you may contact NexaHome to request correction of inaccurate or incomplete information.
            </p>

            <SubTitle>7.2 Account Deletion</SubTitle>
            <p className="pl-11 mb-3">
              You may request deletion of your Partner account by contacting{" "}
              <a href="mailto:info@nexahomeapp.com" className="text-primary underline underline-offset-2 hover:text-primary-dark transition-colors font-medium">
                info@nexahomeapp.com
              </a>. Deletion of your account does not automatically eliminate all information associated with your participation in the Partner Program. NexaHome may retain certain records where necessary to:
            </p>
            <ul className="space-y-2 pl-[54px] mb-6">
              {[
                "comply with legal obligations",
                "complete financial reporting",
                "satisfy tax requirements",
                "investigate fraud",
                "resolve disputes",
                "enforce contractual rights",
                "protect Platform security",
                "maintain historical accounting records",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <SubTitle>7.3 California Residents</SubTitle>
            <p className="pl-11 mb-3">
              If you are a California resident, you may have rights under the California Consumer Privacy Act (CCPA), as amended by the California Privacy Rights Act (CPRA), including the right to:
            </p>
            <ul className="space-y-2 pl-[54px] mb-4">
              {[
                "Know what personal information we collect",
                "Request correction of inaccurate information",
                "Request deletion of certain personal information",
                "Receive information regarding disclosures",
                "Opt out of the sale or sharing of personal information (NexaHome does not sell or share Partner personal information as those terms are defined by applicable law)",
                "Receive equal service regardless of exercising your privacy rights",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="pl-11 mb-6">
              Requests may be submitted to{" "}
              <a href="mailto:info@nexahomeapp.com" className="text-primary underline underline-offset-2 hover:text-primary-dark transition-colors font-medium">
                info@nexahomeapp.com
              </a>.
            </p>

            <SubTitle>7.4 Other State Residents</SubTitle>
            <p className="pl-11">
              Residents of Virginia, Colorado, Connecticut, Texas, Oregon, and other states with comprehensive privacy laws may have additional rights under applicable law, including rights relating to access, correction, deletion, portability, and appeal of denied privacy requests. Partners may exercise applicable rights by contacting{" "}
              <a href="mailto:info@nexahomeapp.com" className="text-primary underline underline-offset-2 hover:text-primary-dark transition-colors font-medium">
                info@nexahomeapp.com
              </a>.
            </p>
          </div>

          <Divider />

          {/* Section 8 */}
          <div>
            <SectionTitle number="8" title="Data Retention" />
            <p className="mb-3">
              NexaHome retains Partner information for as long as reasonably necessary to:
            </p>
            <ul className="space-y-2 pl-1 mb-4">
              {[
                "administer the Partner Program",
                "calculate commissions",
                "maintain accounting records",
                "process payments",
                "comply with legal obligations",
                "resolve disputes",
                "prevent fraud",
                "enforce agreements",
                "satisfy audit requirements",
                "maintain Platform security",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              After information is no longer required for these purposes, NexaHome will delete, anonymize, or securely destroy the information in accordance with applicable law and internal retention practices.
            </p>
          </div>

          <Divider />

          {/* Section 9 */}
          <div>
            <SectionTitle number="9" title="Children’s Privacy" />
            <p>
              The Partner Platform is intended solely for adults who are at least eighteen (18) years of age. NexaHome does not knowingly collect personal information from children under the age of eighteen. If we become aware that information has been collected from a child in violation of applicable law, we will take reasonable steps to delete that information promptly.
            </p>
          </div>

          <Divider />

          {/* Section 10 */}
          <div>
            <SectionTitle number="10" title="Changes to This Privacy Policy" />
            <p className="mb-4">
              NexaHome may update this Partner Privacy Policy from time to time. When changes are made, we will update the Effective Date appearing at the beginning of this Policy, post the revised version on the Partner Platform, and, where appropriate, provide notice through email, the Partner Dashboard, or other reasonable communication methods.
            </p>
            <p>
              Your continued use of the Partner Platform following the effective date of an updated Privacy Policy constitutes your acceptance of the revised Policy. If you do not agree with any revisions, your sole remedy is to discontinue participation in the Partner Program and request closure of your Partner account.
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
