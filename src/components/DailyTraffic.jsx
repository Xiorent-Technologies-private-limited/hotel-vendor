import React from "react";
import {
  XAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

function DailyTraffic() {
  const barData = [
    { hour: "00", visitors: 20 },
    { hour: "04", visitors: 35 },
    { hour: "08", visitors: 60 },
    { hour: "12", visitors: 30 },
    { hour: "14", visitors: 50 },
    { hour: "16", visitors: 65 },
    { hour: "18", visitors: 20 },
  ];

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-5">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
        <div>
          <h2 className="text-lg sm:text-xl font-semibold text-gray-700">
            Daily Traffic
          </h2>
          <p className="text-2xl sm:text-3xl font-bold text-gray-800 mt-1 sm:mt-2">
            2.579{" "}
            <span className="text-base sm:text-lg text-gray-500 font-normal">
              Visitors
            </span>
          </p>
        </div>
        <p className="text-green-500 font-bold text-sm sm:text-base">+2.45%</p>
      </div>

      {/* Chart */}
      <div className="mt-4 h-[200px] sm:h-[250px] md:h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={barData}>
            <XAxis
              dataKey="hour"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12 }}
            />
            <Tooltip />
            <Bar
              dataKey="visitors"
              fill="url(#grad)"
              radius={[8, 8, 0, 0]}
              barSize={window.innerWidth < 640 ? 18 : 30} // mobile vs desktop size
            />
            <defs>
              <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ff0000" />
                <stop offset="100%" stopColor="#fff" />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default DailyTraffic;
