import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export const metadata = {
  title: "Expert Terms & Conditions | NexaHome",
  description:
    "NexaHome Expert Terms & Conditions — the legally binding agreement governing your use of the NexaHome platform as an independent service professional.",
};

export default function ExpertTermsAndConditionsPage() {
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
            Expert Terms &amp; Conditions
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
              These Expert Terms and Conditions (&ldquo;Expert Terms&rdquo;) are a legally binding agreement
              between you (&ldquo;Expert,&rdquo; &ldquo;you,&rdquo; or &ldquo;your&rdquo;) and NexaHome, LLC (&ldquo;NexaHome,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo;
              or &ldquo;our&rdquo;), governing your use of the NexaHome Platform as a service provider.
              &ldquo;Users&rdquo; means individuals seeking home services through the Platform, including
              homeowners, renters, and property managers.
            </p>
            <div className="bg-primary/10 border border-primary/20 text-primary font-semibold text-sm px-4 py-3 rounded-lg uppercase tracking-wide">
              By registering as an Expert or purchasing credits, you acknowledge that you have read,
              understood, and agree to be bound by these Expert Terms and the Expert Privacy Policy,
              which is incorporated by reference. If you do not agree, do not register or use the
              Platform as an Expert.
            </div>
          </div>

          <Divider />

          {/* Section 2 */}
          <div>
            <SectionTitle number="2" title="Eligibility, Registration, and Verification" />

            <SubTitle>2.1 Eligibility</SubTitle>
            <ul className="space-y-2 pl-1 mb-6">
              {[
                "You must be at least 18 years of age;",
                "You must be legally authorized to conduct business in the United States;",
                "You must hold all licenses, permits, certifications, and insurance required by applicable law for the services you offer;",
                "You must provide accurate and complete registration information and keep it current.",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <SubTitle>2.2 Verification Documentation</SubTitle>
            <p className="mb-4">
              Depending on your service category, you may be required to submit: government-issued
              photo identification; professional licenses or certifications; business registration
              documentation; proof of insurance; and business profile information. Submitted
              documentation is processed through an automated third-party identity verification
              service and is subject to administrative review and approval by NexaHome. NexaHome
              may approve, reject, or request additional documentation in its sole discretion, and may
              require re-verification of any documentation at any time.
            </p>
            <p className="mb-4">
              You represent and warrant that all documentation you submit is genuine, current,
              accurate, and belongs to you or your business. Submitting false, altered, expired, or
              borrowed documentation is a material breach of these Expert Terms and grounds for
              immediate termination.
            </p>
            <p className="mb-6">
              Your obligation to maintain current documentation continues for as long as you use the
              Platform. If any license, certification, insurance policy, or other credential required for
              your service category lapses, expires, is suspended, or is revoked, you must
              immediately notify NexaHome. Upon such notice, or upon NexaHome otherwise
              becoming aware that a required credential is no longer valid, NexaHome may
              immediately suspend your access to the affected service category, including your ability
              to purchase or accept Leads within it, until you provide proof of renewal or
              reinstatement. Failure to notify NexaHome as required by this paragraph is a material
              breach of these Expert Terms.
            </p>

            <SubTitle>2.3 No Endorsement</SubTitle>
            <p>
              Approval of your registration confirms only that your documentation passed
              NexaHome&rsquo;s review process. It is not an endorsement, certification, or guarantee of your
              qualifications, and you may not represent to any person that NexaHome has endorsed,
              certified, or vouched for your business.
            </p>
          </div>

          <Divider />

          {/* Section 3 */}
          <div>
            <SectionTitle number="3" title="Independent Contractor Status" />
            <p>
              You are an independent contractor. Nothing in these Expert Terms creates an
              employment, agency, partnership, or joint venture relationship between you and
              NexaHome. NexaHome exercises no control over the manner or means by which you
              perform services. You are solely responsible for all applicable taxes; for maintaining
              adequate insurance, including general liability and workers&rsquo; compensation where
              required; for compliance with all federal, state, and local laws; and for your tools,
              equipment, employees, and subcontractors.
            </p>
          </div>

          <Divider />

          {/* Section 4 */}
          <div>
            <SectionTitle number="4" title="The Credit System" />

            <SubTitle>4.1 Purchasing Credits</SubTitle>
            <p className="mb-6">
              Experts purchase credits in advance to access User Job Requests (&ldquo;Leads&rdquo;). Payments
              are processed by Stripe; card information is transmitted directly to Stripe&rsquo;s
              PCI-compliant infrastructure and is not stored on NexaHome servers.
            </p>

            <SubTitle>4.2 Purchasing Leads</SubTitle>
            <p className="mb-6">
              Users may direct a Job Request to specific Experts they select, or make it visible to all
              eligible Experts offering the relevant service in their area. Before purchase, you may view
              job details only; the User&rsquo;s name and contact information are revealed only upon
              purchasing the Lead. Up to five (5) Experts may purchase the same Lead, and you
              acknowledge that you may be competing with up to four other Experts for the same job.
            </p>

            <SubTitle>4.3 No Guarantee</SubTitle>
            <p className="mb-6">
              Purchasing a Lead does not guarantee that the User will respond, hire you, or enter into
              any agreement with you. Credits are consumed upon purchase of the Lead regardless of
              outcome. NexaHome does not warrant the accuracy of information Users provide in Job
              Requests.
            </p>

            <SubTitle>4.4 Credits Are Non-Refundable</SubTitle>
            <div className="bg-primary/10 border border-primary/20 text-primary font-semibold text-sm px-4 py-3 rounded-lg uppercase tracking-wide mb-6">
              All credits are non-refundable, have no cash value, and cannot be redeemed for money.
              Credits do not expire. If your account is suspended or terminated for any reason —
              including based on User complaints — all remaining credits are immediately forfeited
              without refund. NexaHome may, in its sole discretion, issue a credit adjustment for a
              verified technical error in lead delivery but is under no obligation to do so. You agree
              not to initiate chargebacks or payment disputes for credit purchases except in cases of
              demonstrable fraud or unauthorized use.
            </div>

            <SubTitle>4.5 Pricing Changes</SubTitle>
            <p>
              NexaHome may change credit pricing or the credit cost of Leads at any time by posting
              updated pricing on the Platform. Continued purchases after a change constitutes
              acceptance.
            </p>
          </div>

          <Divider />

          {/* Section 5 */}
          <div>
            <SectionTitle number="5" title="Contacting Users; Telemarketing Compliance" />

            <SubTitle>5.1 Authorized Contact</SubTitle>
            <p className="mb-6">
              Purchasing a Lead authorizes you to contact the associated User solely regarding their
              Job Request. Users indicate a preferred contact method (call/text or email) when
              submitting a request; you agree to honor that preference.
            </p>

            <SubTitle>5.2 Your Legal Compliance Obligations</SubTitle>
            <div className="bg-primary/10 border border-primary/20 text-primary font-semibold text-sm px-4 py-3 rounded-lg uppercase tracking-wide mb-4">
              You are solely responsible for your communications with Users and for compliance with
              all applicable communications and telemarketing laws, including without limitation the
              Telephone Consumer Protection Act (TCPA), the Telemarketing Sales Rule, the
              CAN-SPAM Act, and all applicable state telemarketing, do-not-call, and
              text-messaging laws.
            </div>
            <p className="mb-6">
              Without limiting the foregoing, you agree to: promptly honor any User&rsquo;s request to stop
              contacting them; not use automated dialing systems, prerecorded messages, or bulk
              texting tools to contact Leads unless you have independently ensured your own legal
              compliance; not contact Users whose Leads you have not purchased; and not contact
              Users for any purpose unrelated to their Job Request.
            </p>

            <SubTitle>5.3 Lead Data Restrictions</SubTitle>
            <p>
              User contact information is confidential. You may use it solely to respond to the
              associated Job Request. You may not sell, share, transfer, or disclose Lead information
              to any third party; add Users to marketing lists without their separate, lawful consent; or
              retain Lead data longer than reasonably necessary. Upon a User&rsquo;s request or
              NexaHome&rsquo;s instruction, you will delete the User&rsquo;s contact information.
            </p>
          </div>

          <Divider />

          {/* Section 6 */}
          <div>
            <SectionTitle number="6" title="Complaints, Suspension, and Termination" />
            <p className="mb-4">
              Users may submit complaints through the Platform&rsquo;s report feature. NexaHome reviews
              complaints internally and, in its sole discretion, may take any action it deems
              appropriate — including immediate suspension or permanent termination of your
              account —{" "}
              <span className="font-semibold text-gray-800">
                without prior notice and without any obligation to provide you an opportunity to
                respond.
              </span>{" "}
              NexaHome is not obligated to investigate any complaint in any particular manner, to
              follow any specific process, or to disclose its findings. NexaHome&rsquo;s decisions regarding
              account actions are final.
            </p>
            <p>
              Upon suspension or termination for any reason — including voluntary account closure —
              all unused credits are immediately forfeited and non-refundable. You may close your
              account by contacting{" "}
              <a href="mailto:info@nexahomeapp.com" className="text-primary underline underline-offset-2 hover:text-primary-dark transition-colors">
                info@nexahomeapp.com
              </a>
              .
            </p>
          </div>

          <Divider />

          {/* Section 7 */}
          <div>
            <SectionTitle number="7" title="Expert Conduct" />
            <p className="mb-3">You agree to:</p>
            <ul className="space-y-2 pl-1">
              {[
                "Offer only services for which you hold all legally required licenses, certifications, and insurance;",
                "Perform services in a professional and workmanlike manner, in compliance with all applicable laws and codes;",
                "Provide proof of licensure or insurance to Users upon reasonable request;",
                "Not misrepresent your identity, qualifications, pricing, or services;",
                "Not create multiple accounts, manipulate reviews, or solicit or incentivize reviews;",
                "Not harass, threaten, defraud, or discriminate against Users;",
                "Not use automated tools to access, scrape, or interact with the Platform.",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <Divider />

          {/* Section 8 */}
          <div>
            <SectionTitle number="8" title="Reviews" />
            <p>
              Users may post public reviews of your services, which NexaHome may display
              indefinitely at its discretion, including after your account closes. You may not offer
              anything of value in exchange for reviews, retaliate or threaten Users over reviews, or
              post reviews of your own business. NexaHome may, but is not obligated to, remove
              reviews that violate Platform policies.
            </p>
          </div>

          <Divider />

          {/* Section 9 */}
          <div>
            <SectionTitle number="9" title="Intellectual Property" />
            <p>
              By uploading content (photos, logos, business descriptions), you grant NexaHome a
              non-exclusive, royalty-free, worldwide, sublicensable license to use, display, reproduce,
              and distribute that content to operate and promote the Platform. You represent that you
              own or have rights to all content you upload. You may not use NexaHome&rsquo;s name, logo,
              or trademarks without prior written permission, except to truthfully state that you receive
              leads through the Platform.
            </p>
          </div>

          <Divider />

          {/* Section 10 */}
          <div>
            <SectionTitle number="10" title="Platform Access" />
            <p>
              Expert access to the Platform is provided through NexaHome&rsquo;s web platform. NexaHome
              may modify, update, or discontinue features of the web platform at any time. If
              NexaHome makes Expert functionality available through mobile applications in the
              future, additional terms may apply.
            </p>
          </div>

          <Divider />

          {/* Section 11 */}
          <div>
            <SectionTitle number="11" title="Disclaimer of Warranties" />
            <div className="bg-primary/10 border border-primary/20 text-primary font-semibold text-sm px-4 py-3 rounded-lg uppercase tracking-wide">
              The Platform and all Leads are provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties of
              any kind. NexaHome does not warrant the volume, quality, or convertibility of Leads;
              that any Lead will result in work or revenue; that User information is accurate; or that
              the Platform will be uninterrupted or error-free.
            </div>
          </div>

          <Divider />

          {/* Section 12 */}
          <div>
            <SectionTitle number="12" title="Limitation of Liability" />
            <div className="bg-primary/10 border border-primary/20 text-primary font-semibold text-sm px-4 py-3 rounded-lg uppercase tracking-wide">
              To the fullest extent permitted by law, NexaHome shall not be liable for any indirect,
              incidental, special, consequential, exemplary, or punitive damages, including lost profits,
              lost revenue, or lost business opportunities. NexaHome&rsquo;s aggregate liability to you shall
              not exceed the total amount you paid for credits in the three (3) months preceding the
              event giving rise to the claim.
            </div>
          </div>

          <Divider />

          {/* Section 13 */}
          <div>
            <SectionTitle number="13" title="Indemnification" />
            <p>
              You agree to indemnify, defend, and hold harmless NexaHome and its officers, directors,
              members, employees, and agents from and against any claims, damages, losses,
              liabilities, penalties, and expenses (including reasonable attorneys&rsquo; fees) arising out of
              or related to: (a) your services, workmanship, or failure to perform; (b) your violation of
              these Expert Terms or any law; (c) any claim by a User arising from your work, conduct,
              or communications; (d) your misrepresentation of qualifications or documentation; and
              (e) any claim arising from your communications with Users, including any alleged
              violation of the TCPA, Telemarketing Sales Rule, CAN-SPAM Act, or any state
              telemarketing or do-not-call law.
            </p>
          </div>

          <Divider />

          {/* Section 14 */}
          <div>
            <SectionTitle number="14" title="Governing Law; Jurisdiction; Class Action Waiver" />
            <p className="mb-4">
              These Expert Terms are governed by the laws of the State of Louisiana, without regard to
              conflict-of-law principles. Before filing any claim, you agree to attempt informal
              resolution by contacting{" "}
              <a href="mailto:info@nexahomeapp.com" className="text-primary underline underline-offset-2 hover:text-primary-dark transition-colors">
                info@nexahomeapp.com
              </a>{" "}
              for at least thirty (30) days. Any unresolved dispute shall be brought exclusively in the
              state or federal courts located in Louisiana, and you and NexaHome each consent to the
              personal jurisdiction and venue of those courts. Either party may seek emergency
              injunctive relief in a court of competent jurisdiction.
            </p>
            <div className="bg-primary/10 border border-primary/20 text-primary font-semibold text-sm px-4 py-3 rounded-lg uppercase tracking-wide">
              You and NexaHome each waive the right to a jury trial and the right to participate in a
              class, collective, or representative action.
            </div>
          </div>

          <Divider />

          {/* Section 15 */}
          <div>
            <SectionTitle number="15" title="Modifications" />
            <p>
              NexaHome may modify these Expert Terms at any time by posting the revised version
              and updating the Effective Date, and, for material changes, providing notice through the
              Platform or by email. Continued use after changes take effect constitutes acceptance.
            </p>
          </div>

          <Divider />

          {/* Section 16 */}
          <div>
            <SectionTitle number="16" title="Miscellaneous" />
            <p>
              If any provision is held unenforceable, the remainder survives. No waiver is implied from
              any failure to enforce. You may not assign these Expert Terms; NexaHome may assign
              them in connection with a merger, acquisition, or sale of assets. These Expert Terms,
              together with the Expert Privacy Policy, constitute the entire agreement regarding your
              use of the Platform as an Expert. Sections 4.4, 5.3, 6, 8, 9, and 11–14 survive
              termination.
            </p>
          </div>

          <Divider />

          {/* Section 17 */}
          <div>
            <SectionTitle number="17" title="Contact" />
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
