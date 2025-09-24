// import React from 'react'

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

function PaymentPie() {
    const pieData = [
  { name: "Pending", value: 22, color: "#F1ECFE" },
  { name: "Processing", value: 15, color: "#F2D1C3" },
  { name: "Completed", value: 30, color: "#799BF9" },
  { name: "Scheduled", value: 18, color: "#8EFC9F" },
  { name: "Canceled", value: 15, color: "#FF6F6F" },
];

  return (
    <div className="bg-white rounded-2xl p-5">
              <h2 className="text-xl font-bold mb-4">Payout Status</h2>
              <div className="h-50">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      dataKey="value"
                      nameKey="name"
                      paddingAngle={10}
                      labelLine={false}
                      label={({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, name }) => {
                        const RADIAN = Math.PI / 180;
                        const radius = innerRadius + (outerRadius - innerRadius) * 0.7;
                        const x = cx + radius * Math.cos(-midAngle * RADIAN);
                        const y = cy + radius * Math.sin(-midAngle * RADIAN);
                        // Get the name from pieData
                        const labelName = pieData[index]?.name || '';
                        return (
                          <g>
                            <text
                              x={x}
                              y={y - 8}
                              fill="#222"
                              textAnchor="middle"
                              dominantBaseline="central"
                              fontSize="10"
                              fontWeight="bold"
                            >
                              {`${(percent * 100).toFixed(0)}%`}
                            </text>
                            <text
                              x={x}
                              y={y + 10}
                              fill="#222"
                              textAnchor="middle"
                              dominantBaseline="central"
                              fontSize="8"
                              fontWeight="regular"
                            >
                              {labelName}
                            </text>
                          </g>
                        );
                      }}
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
  )
}

export default PaymentPie