"use client";
import { useState } from "react";

const faqs = [
  {
    question: "How does NexaHome work?",
    answer: "NexaHome connects homeowners with verified experts. Simply describe your project, get matched with qualified experts in your area, review their profiles and ratings, and book the one that fits your needs. Our platform handles messaging, scheduling, and payments securely.",
  },
  {
    question: "Are all experts verified?",
    answer: "Yes. Every expert on NexaHome goes through a thorough verification process including background checks, license verification, and identity confirmation. We maintain high standards so you can hire with confidence.",
  },
  {
    question: "How much does NexaHome cost?",
    answer: "NexaHome is completely free for homeowners. There are no subscription fees or platform charges. You only pay the expert directly for the work performed.",
  },
  {
    question: "How quickly can I get matched with an expert?",
    answer: "Most homeowners get matched with qualified experts within minutes of submitting their request. For urgent repairs, we prioritize fast connections to get help to you as quickly as possible.",
  },
  {
    question: "Can I see reviews before hiring?",
    answer: "Absolutely. Every expert profile includes verified reviews from real homeowners. You can read detailed feedback, view ratings, and see photos of past work before making any hiring decisions.",
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
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>
      <div className={`grid transition-all duration-300 ease-in-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
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
        <div className="text-center mb-12">
          <h2 className="section-title">
            Frequently Asked <span className="font-bold">Questions</span>
          </h2>
          <p className="text-gray-500 mt-3">Everything you need to know about using NexaHome</p>
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
