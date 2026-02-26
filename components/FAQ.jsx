"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How does NexaHome work for Home Experts?",
    answer:
      "NexaHome is a connection platform that puts you in front of homeowners actively seeking your services. Once you’re verified, you can browse matched job requests based on your services and location. You decide which opportunities to pursue, and when you accept a job, you’ll connect directly with the homeowner to discuss details, provide quotes, and manage the project on your own terms.",
  },
  {
    question: "How do I become a verified NexaHome Expert?",
    answer:
      "We use an automated identity verification process to maintain a high level of trust on the platform. To get started, you’ll be asked to provide a photo of your government-issued ID and a quick selfie for biometric verification. The process takes only a few minutes and allows us to securely confirm your identity so you can begin receiving job opportunities right away.",
  },
  {
    question: "Is NexaHome a lead marketplace?",
    answer:
      "Yes. NexaHome is a marketplace designed to connect experts with homeowners who need their services. While we verify the identity of experts on our platform, NexaHome does not manage, supervise, or take responsibility for the jobs performed. All project details, contracts, pricing, and communication take place directly between you and the homeowner. As the service provider, you are solely responsible and liable for the work you perform.",
  },
  {
    question: "Does it cost anything to join NexaHome as a Home Expert?",
    answer:
      "No. There is no subscription fee, and it’s completely free to join NexaHome. We operate on a pay-per-lead model, which means you only pay when you choose to purchase a specific job and connect with a homeowner. There are no monthly fees or hidden costs — you only pay for the opportunities you decide to pursue.",
  },
  {
    question: "How do I get matched with jobs?",
    answer:
      "Matching happens in real time. When a homeowner submits a request, they are shown a list of experts who match their needs and location. The homeowner can choose to notify specific experts or notify all matching experts. Once you’re notified, you can review the project details and decide whether to purchase the job to secure the connection.",
  },
  {
    question: "How do homeowners contact me?",
    answer:
      "Once you purchase a job, you’ll receive the homeowner’s contact information along with their preferred method of communication. You can then reach out directly to discuss project details, provide quotes, and schedule the work. All communication happens off the platform.",
  },
];

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-gray-800">{question}</span>

        {/* Icon Container (background stays rounded) */}
        <span className="text-[#4A5565] bg-gray-100 rounded-lg p-2 flex items-center justify-center">
          <svg
            className={`w-5 h-5 transition-transform duration-200 ${
              open ? "rotate-45" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        </span>
      </button>

      {/* Animated Answer Section */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">
            Frequently Asked <span className="font-bold">Questions</span>
          </h2>
          <p className="text-[16px] mt-3">
            Everything You Need To Know About Using NexaHome
          </p>
        </div>
        <div className="space-y-3">
          {faqs.map((faq) => (
            <FAQItem key={faq.question} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
