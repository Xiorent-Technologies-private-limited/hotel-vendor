import React from "react";
import { MoreVertical } from "lucide-react";

export default function Gvm() {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold text-gray-800">GVM</h3>
        <MoreVertical className="w-6 h-6 text-gray-400" />
      </div>

      <div className="flex items-start gap-6">
        {/* Chart */}
        <div className="flex-1">
          <div className="relative h-48 mb-4">
            <div className="absolute inset-0 flex justify-between">
              {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'].map((_, idx) => (
                <div key={idx} className="w-px h-full bg-gray-100"></div>
              ))}
            </div>
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 700 190" preserveAspectRatio="none">
              <path
                d="M 20,120 Q 60,50 100,80 Q 140,110 180,100 Q 220,80 260,60 Q 300,80 340,100 Q 380,80 420,110 Q 460,130 500,120 Q 540,110 580,130 Q 620,140 660,150"
                fill="none"
                stroke="#ef4444"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <circle cx="260" cy="60" r="6" fill="#ef4444" />
              <line x1="260" y1="60" x2="260" y2="180" stroke="#ef4444" strokeWidth="2" />
            </svg>
          </div>
          <div className="flex justify-between text-sm px-2">
            <span className="text-gray-400">Jan</span>
            <span className="text-gray-400">Feb</span>
            <span className="text-red-500 font-bold">Mar</span>
            <span className="text-gray-400">Apr</span>
            <span className="text-gray-400">May</span>
            <span className="text-gray-400">Jun</span>
            <span className="text-gray-400">Jul</span>
          </div>
        </div>

        {/* 145 Card */}
        <div className="relative w-56 bg-gradient-to-br from-red-100 via-red-200 to-red-300 rounded-3xl p-6 overflow-hidden flex-shrink-0">
          <div className="absolute -top-8 -right-8 w-32 h-32 bg-red-200 rounded-full opacity-60"></div>
          <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-red-300 rounded-full opacity-40"></div>
          <div className="relative z-10">
            <h3 className="text-6xl font-bold text-gray-900 mb-3">145</h3>
            <p className="text-sm text-gray-800 leading-relaxed">
              The average views<br />
              compared to the<br />
              previous 365 days
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
