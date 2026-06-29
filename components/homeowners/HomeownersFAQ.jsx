"use client";
import { useState } from "react";

const faqs = [
  {
    question: "How does NexaHome work?",
    answer: `NexaHome makes finding home service experts simple and direct. Here's how it works for homeowners:
Submit your details: Describe your project and the services you need. You can add photos or a video to explain the job.
Choose your experts: See verified experts who offer your service in your area. Send your request to up to five of them, or to all of them.
Get connected: Interested experts can claim your request and reach out directly using your preferred contact method. From there, you discuss details, pricing, and scheduling directly with them.`,
  },
  {
    question: "Are all experts verified?",
    answer:
      "Yes. Safety and trust are important to us. Every expert on NexaHome goes through an automated identity verification process, so you can feel confident you’re connecting with real, verified individuals.",
  },
  {
    question: "How much does NexaHome cost?",
    answer:
      "NexaHome is 100% free for homeowners. Our goal is to connect you with the right experts without adding any cost to your project. You don’t pay anything to be matched with service providers. Any pricing, contracts, or payments for the work are handled directly between you and your chosen expert outside of the platform.",
  },
  {
    question: "How quickly will an expert contact me?",
    answer:
      "It depends on the experts you select and their availability. As soon as you submit your request, the experts you've chosen are notified. Many reach out quickly, but response time varies based on each expert's schedule and which requests they take on.",
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
        <span className="font-semibold text-gray-800 text-sm">{question}</span>
        <span className="text-[#4A5565] bg-gray-100 rounded-lg p-2 flex items-center justify-center flex-shrink-0 ml-4">
          <svg
            className={`w-5 h-5 transition-transform duration-200 ${open ? "rotate-45" : ""}`}
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
      <div
        className={`grid transition-all duration-300 ease-in-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
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

export default function HomeownersFAQ() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="section-title font-[500]">
            Frequently Asked <span className="font-bold">Questions</span>
          </h2>
          <p className="text-gray-500 mt-3">
            Everything you need to know about using NexaHome
          </p>
        </div>
        <div className="space-y-3" data-aos="fade-up" data-aos-delay="100">
          {faqs.map((faq) => (
            <FAQItem key={faq.question} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
