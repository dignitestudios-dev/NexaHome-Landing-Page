"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How does NexaHome work for Home Experts?",
    answer:
      "NexaHome connects you with homeowners who are actively looking to hire. When a new project matches your services and location, it appears on your dashboard and you’ll receive a notification by text or email. If you're interested, you can use credits to unlock the homeowner’s contact information and reach out directly to discuss the job. You decide which opportunities to pursue, giving you full control over the projects you take on.",
  },
  {
    question: "How do I become a verified NexaHome Expert?",
    answer:
      "Create an account, complete your profile, and submit your business details for verification. Once approved, you’ll begin receiving project requests that match your services and location. Verification helps maintain a trusted network of professionals for homeowners using NexaHome.",
  },
  {
    question: "How does the NexaHome credit system work?",
    answer:
      "NexaHome uses a credit system to give you access to homeowner leads. When you see a project you're interested in, you can use credits to unlock the homeowner’s contact information and reach out directly to discuss the job. Credits are purchased in advance and used only when you decide to unlock a lead.",
  },
  {
    question: "How many credits does a lead cost?",
    answer:
      "The number of credits required to unlock a lead depends on the type of project and service category. Larger or more specialized projects may require more credits, while smaller jobs may require fewer. The exact number of credits needed will always be shown before you unlock a lead so you can decide if the opportunity is right for you.",
  },
  {
    question: "Do multiple professionals receive the same lead?",
    answer:
      "Yes. A small number of qualified professionals may receive the same project so homeowners can compare options and choose the best fit. NexaHome limits how many professionals can unlock each lead to help keep competition manageable.",
  },
  {
    question: "When do I pay NexaHome?",
    answer:
      "Credits are purchased in advance and used when you choose to unlock a homeowner’s contact information. You decide which opportunities are worth pursuing and only use credits on the leads you want to contact. You’ll always see the credit cost before unlocking a lead.",
  },
  {
    question: "How do I get paid for the job?",
    answer:
      "NexaHome connects you with homeowners who need your services, but you handle the project agreement and payment directly with the homeowner. This gives you full control over pricing, scheduling, and how you run your business.",
  },
  {
    question: "Can I choose which projects I respond to?",
    answer:
      "Yes. You decide which leads to unlock and which opportunities to pursue. You are not required to respond to every project request, allowing you to focus on the jobs that best fit your business.",
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
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="section-title">
            Frequently Asked <span className="font-bold">Questions</span>
          </h2>
          <p className="text-[16px] mt-3">
            Everything You Need To Know About Using NexaHome
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
