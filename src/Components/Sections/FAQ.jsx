"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

const faqData = [
  {
    question: "How long does shipping take?",
    answer: "For local orders, it takes 2-3 business days. International shipping can take 7-14 business days depending on your location.",
  },
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day easy return policy. The product must be unused and in its original packaging with the receipt.",
  },
  {
    question: "Do you offer cash on delivery (COD)?",
    answer: "Yes! We offer cash on delivery for all orders within the country to ensure maximum convenience for our customers.",
  },
  {
    question: "How can I track my order?",
    answer: "Once your order is shipped, you will receive an email with a tracking number and a link to track your package in real-time.",
  },
  {
    question: "Is my payment information secure?",
    answer: "Absolutely. ShopHub uses industry-standard SSL encryption and secure payment gateways like SSLCommerz, Stripe, and PayPal.",
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-10">
          <div className="flex justify-center mb-2">
            <HelpCircle className="text-orange-500 w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">Frequently Asked Questions</h2>
          <p className="text-gray-500 mt-2">Everything you need to know about ShopHub services.</p>
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm transition-all"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-5 text-left font-semibold text-gray-700 hover:bg-orange-50 transition-colors"
              >
                <span>{item.question}</span>
                {activeIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-orange-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  activeIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-5 text-gray-600 border-t border-gray-100 bg-gray-50">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}