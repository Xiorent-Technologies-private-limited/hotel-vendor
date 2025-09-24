import React from "react";
import { Pencil } from "lucide-react";

const RefundRules = () => {
  const rules = [
    {
      title: "Free Cancellation Window",
      description:
        "Full refund if cancelled within 24 hours of booking (and at least 48 hours before check-in).",
    },
    {
      title: "Before Check-in",
      description: (
        <ul className="list-disc pl-5 space-y-1">
          <li>80% refund if cancelled more than 48 hours before check-in.</li>
          <li>50% refund if cancelled within 24–48 hours before check-in.</li>
          <li>No refund if cancelled within 24 hours of check-in.</li>
        </ul>
      ),
    },
    {
      title: "No-show Policy",
      description:
        "If the guest does not show up without cancellation, no refund will be issued.",
    },
    {
      title: "Early Check-out",
      description:
        "Refund will be processed only for unused nights, subject to hotel policy.",
    },
    {
      title: "Force Majeure / Special Cases",
      description:
        "In case of unavoidable events (natural calamities, government restrictions, medical emergencies), hotels may offer flexible refund or reschedule options.",
    },
    {
      title: "Processing Time",
      description:
        "Refunds will be credited back to the original payment method within 7–10 business days.",
    },
    {
      title: "Free Cancellation Window",
      description:
        "Full refund if cancelled within 24 hours of booking (and at least 48 hours before check-in).",
    },
    {
      title: "Before Check-in",
      description: (
        <ul className="list-disc pl-5 space-y-1">
          <li>80% refund if cancelled more than 48 hours before check-in.</li>
          <li>50% refund if cancelled within 24–48 hours before check-in.</li>
          <li>No refund if cancelled within 24 hours of check-in.</li>
        </ul>
      ),
    },
    {
      title: "No-show Policy",
      description:
        "If the guest does not show up without cancellation, no refund will be issued.",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50 p-4 sm:p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-xl p-4 sm:p-6">

        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-gray-300 pb-3 mb-4">
          <h1 className="text-xl sm:text-2xl font-bold text-red-600">Our Refund Rules</h1>
          <button className="flex items-center text-red-600 hover:text-red-800 text-sm mt-2 sm:mt-0">
            <Pencil className="w-4 h-4 mr-1" />
            Edit
          </button>
        </div>

        {/* Rules List */}
        <div className="space-y-6">
          {rules.map((rule, index) => (
            <div key={index} className="p-4 bg-gray-50 rounded-lg shadow-sm">
              <h2 className="font-semibold text-gray-900 text-base sm:text-lg">
                {index + 1}. {rule.title}
              </h2>
              <div className="text-sm sm:text-base mt-1 text-gray-700">{rule.description}</div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default RefundRules;
