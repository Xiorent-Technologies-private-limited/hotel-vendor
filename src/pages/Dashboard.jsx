
import { useState } from "react";
import PaymentPie from "../components/PaymentPie";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import DailyTraffic from "../components/DailyTraffic";
import TodayOccupancy from "../components/TodayOccupancy";

// Dummy data for occupancy and traffic
const occupancyData = [
  { month: "May", value: 90 },
  { month: "Jun", value: 65 },
  { month: "Jul", value: 80 },
  { month: "Aug", value: 35 },
  { month: "Sep", value: 100 },
  { month: "Oct", value: 85 },
  { month: "Nov", value: 85 },
  { month: "Dec", value: 85 },
  { month: "Jan", value: 95 },
  { month: "Feb", value: 90 },
];

const Dashboard = () => {
  const [percentage, setPercentage] = useState(60);
  return (
    <div className="p-4 sm:p-6 bg-[#f8f5e5] min-h-screen font-sans">
      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT SIDE (2/3 width) */}
        <div className="lg:col-span-2 space-y-6">
          {/* Header */}
          <div className="mb-4 sm:mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#5D4037]">
              Hello Tushar!
            </h1>
            <p className="font-bold text-xs sm:text-sm  text-gray-700 mt-1">
              July activity{" "}
              <span className="bg-red-600 text-white px-2 py-0.5 sm:py-1 mx-1 sm:mx-2 rounded text-[10px] sm:text-xs font-medium inline-block align-middle">
                📅 20-07-2024
              </span>
            </p>
          </div>

          {/* Banner Image */}
          <div className="rounded-lg overflow-hidden shadow">
            <img
              src="/firstpageimage.png"
              alt="Flash Rooms"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Occupancy Statistics */}
          <div className="bg-white p-5 rounded-lg shadow-lg overflow-x-auto">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 gap-2">
              <h3 className="text-sm font-semibold text-gray-700">
                Occupancy Statistics
              </h3>
              <span className="bg-red-600 text-white px-3 py-1 text-xs rounded-md">
                20-07-2024
              </span>
            </div>
            <div className="w-full h-40 sm:h-52 min-w-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={occupancyData}>
                  <XAxis dataKey="month" />
                  <Tooltip />
                  <Bar dataKey="value" fill="#f87171" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE (1/3 width) */}
        <div className="space-y-6">
          {/* Daily Traffic */}
          <div className="bg-white p-4 rounded-lg overflow-x-auto">
            <DailyTraffic />
          </div>

          {/* Payout */}
          <div className="bg-white p-4 rounded-lg overflow-x-auto">
            <PaymentPie />
          </div>

          {/* Today's Occupancy */}
          <div className="bg-white p-2 rounded-lg shadow flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex flex-col items-center">
              <h3 className="text-sm font-semibold text-gray-700 mb-2 sm:mb-4">
                Today's Occupancy
              </h3>
              {/* <div className="w-20 h-20 sm:w-28 sm:h-28 relative min-w-[80px] min-h-[80px]">
                <div className="w-full h-full border-8 sm:border-[10px] border-red-400 border-t-transparent border-r-transparent rounded-full transform rotate-[135deg]"></div>
                <div className="absolute inset-0 flex items-center justify-center text-lg sm:text-xl font-bold text-red-500">
                  60%
                </div>
              </div> */}
              <TodayOccupancy percentage={percentage} />
            </div>
            <div className="flex flex-col items-center text-xs sm:text-sm text-gray-500 w-full sm:w-auto gap-1">
              <span>Occupied Rooms</span>
              <span>Ready to book</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
