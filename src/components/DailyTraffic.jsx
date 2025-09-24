// import React from 'react'
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
            <div className="bg-white rounded-2xl p-5 ">
              <div className="flex justify-between items-center">
                <div>
              <h2 className="text-xl font-semibold text-gray-700">Daily Traffic</h2>
              <p className="text-3xl font-bold text-gray-800 mt-2">
                2.579 <span className="text-lg text-gray-500 font-normal">Visitors</span>
              </p>
                </div>
              <p className="text-green-500 font-bold">+2.45%</p>
              </div>
              <div className="mt-4 h-40">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={barData}>
                    <XAxis dataKey="hour" axisLine={false} tickLine={false} />
                    <Tooltip />
                    <Bar dataKey="visitors" fill="url(#grad)" radius={[8, 8, 0, 0]} barSize={20} />
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
  )
}

export default DailyTraffic