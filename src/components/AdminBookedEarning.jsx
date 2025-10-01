import React from 'react';
import { MoreVertical, ChevronLeft, ChevronRight } from 'lucide-react';

export default function BookedEarningsCard() {
  const bookingsData = [
    { country: 'Bhutan', topValue: 45, bottomValue: 75, topColor: 'bg-gray-600', bottomColor: 'bg-white' },
    { country: 'Italy', topValue: 55, bottomValue: 65, topColor: 'bg-gray-600', bottomColor: 'bg-white' },
    { country: 'India', topValue: 85, bottomValue: 35, topColor: 'bg-white', bottomColor: 'bg-white' },
    { country: 'Nepal', topValue: 50, bottomValue: 70, topColor: 'bg-gray-600', bottomColor: 'bg-white' },
    { country: 'Japan', topValue: 70, bottomValue: 50, topColor: 'bg-gray-600', bottomColor: 'bg-white' },
    { country: 'China', topValue: 80, bottomValue: 40, topColor: 'bg-gray-600', bottomColor: 'bg-white' }
  ];

  return (
    <div className="w-full max-w-xs mx-auto bg-white rounded-3xl shadow-lg border-4 border-blue-500 overflow-hidden">
      {/* Header */}
      <div className="p-5 pb-3">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-red-600">Booked earnings</h2>
          <button className="text-gray-400 hover:text-gray-600">
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Chart Section */}
      <div className="px-5 pb-5">
        <div className="bg-gradient-to-br from-red-200 via-red-250 to-red-300 rounded-3xl p-6 relative">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <span className="text-base font-bold text-black">Global List</span>
            <span className="text-lg font-bold text-black">₹10,934,900</span>
          </div>

          {/* Chart */}
          <div className="relative">
            <div className="flex items-end justify-center gap-4 h-44 mb-3 px-4">
              {bookingsData.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className="w-4 flex flex-col">
                    {/* Top bar */}
                    <div 
                      className={`${item.topColor} rounded-t-full w-full transition-all duration-300`}
                      style={{ height: `${item.topValue}px` }}
                    ></div>
                    {/* Bottom bar */}
                    <div 
                      className={`${item.bottomColor} rounded-b-full w-full transition-all duration-300`}
                      style={{ height: `${item.bottomValue}px` }}
                    ></div>
                  </div>
                  <span className="text-xs text-red-600 mt-3 font-medium">{item.country}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-between items-center absolute top-1/2 left-3 right-3 pointer-events-none">
            <button className="text-white hover:opacity-80 pointer-events-auto">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button className="text-white hover:opacity-80 pointer-events-auto">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* 2024 Details Section */}
      <div className="px-5 pb-5">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-lg font-bold text-gray-800">2024 details</h3>
          <button className="text-gray-400 hover:text-gray-600">
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">Total bookings</span>
            <span className="text-sm font-bold text-gray-800">238</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">Night Stays</span>
            <span className="text-sm font-bold text-gray-800">128</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">Occupancy rate</span>
            <span className="text-sm font-bold text-gray-800">78%</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">Net Sells</span>
            <span className="text-sm font-bold text-gray-800">₹ 783,44</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">Cancelled Booking</span>
            <span className="text-sm font-bold text-gray-800">238</span>
          </div>
        </div>
      </div>
    </div>
  );
}