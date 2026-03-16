"use client";

import { useState } from "react";
import ReactCardFlip from "react-card-flip";

const benefits = [
  {
    image: "/one-image.png",
    title: "Reach homeowners ready to book",
  },
  {
    image: "/two-image.png",
    title: "Spend less time marketing, more time working",
  },
  {
    image: "/three-image.png",
    title: "Showcase your skills on a trusted platform",
  },
  {
    image: "/fourth-image.png",
    title: "Receive opportunities tailored to your services and area",
  },
];

function BenefitCardContent({ benefit }) {
  return (
    <div className="relative h-[375px] rounded-xl overflow-hidden shadow-md">
      <img src={benefit.image} alt={benefit.title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
        <p className="text-white font-semibold text-[18px] leading-snug">
          {benefit.title}
        </p>
      </div>
    </div>
  );
}

export default function WhyPartner() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section id="features" className="bg-gray-50 py-16 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center font-[500] mb-12">
          Why Partner With <span className="font-bold">NexaHome</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="h-[375px]"
              onMouseEnter={() => setHoveredCard(benefit.title)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <ReactCardFlip
                isFlipped={hoveredCard === benefit.title}
                flipDirection="horizontal"
                flipSpeedFrontToBack={0.8}
                flipSpeedBackToFront={0.8}
                containerStyle={{ height: "100%" }}
              >
                <BenefitCardContent benefit={benefit} />
                <BenefitCardContent benefit={benefit} />
              </ReactCardFlip>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
