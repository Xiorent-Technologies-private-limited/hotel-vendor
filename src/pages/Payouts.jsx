import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { FiCalendar, FiMoreHorizontal } from "react-icons/fi";
import PaymentPie from "../components/PaymentPie";
import DailyTraffic from "../components/DailyTraffic";

const lineData = [
  { name: "SEP", spend: 90, earn: 50 },
  { name: "OCT", spend: 70, earn: 40 },
  { name: "NOV", spend: 108, earn: 60 },
  { name: "DEC", spend: 60, earn: 30 },
  { name: "JAN", spend: 105, earn: 50 },
  { name: "FEB", spend: 110, earn: 55 },
];

const payouts = [
  { name: "Monthly Earnings", date: "24 July 25", amount: "₹2,458", status: "Due" },
  { name: "Referral Bonus", date: "24 July 25", amount: "₹1,485", status: "Paid" },
  { name: "Project Incentive", date: "24 July 25", amount: "₹1,024", status: "Paid" },
  { name: "Commission Return", date: "24 July 25", amount: "₹858", status: "Paid" },
  { name: "Monthly Earnings", date: "24 July 25", amount: "₹258", status: "Due" },
];

function Payouts() {
  return (
    <div className="w-full min-h-screen p-4 sm:p-6 bg-[#f8f5e5]">
      {/* Grid wrapper */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

        {/* Vendor Earnings */}
        <div className="bg-white rounded-2xl shadow-lg p-5 flex flex-col lg:col-span-2">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <div>
              <h2 className="text-xl font-bold">Vendor Earnings</h2>
              <p className="text-2xl text-red-600 font-bold mt-2">₹37.5K</p>
              <p className="text-gray-600">
                Total Spent{" "}
                <span className="text-green-500 font-bold">+2.45%</span>
              </p>
              <p className="flex items-center gap-2 mt-1 text-green-600 font-bold font-mono">
                <span className="w-2 h-2 rounded-full bg-green-600 inline-block"></span>
                On track
              </p>
            </div>
            <div className="bg-red-500 text-white px-3 py-1 rounded-md flex items-center gap-1 mt-4 sm:mt-0">
              <FiCalendar /> 20-07-2024
            </div>
          </div>
          <div className="mt-4 h-60 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={lineData}>
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <Tooltip />
                <Line type="monotone" dataKey="spend" stroke="#ff0000" strokeWidth={2} dot />
                <Line type="monotone" dataKey="earn" stroke="#60a5fa" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Daily Traffic */}
        <div className="bg-white rounded-2xl p-5 flex-col justify-between">
          <DailyTraffic />
        </div>

        {/* Upcoming Payouts */}
        <div className="bg-white rounded-2xl shadow-lg p-5 flex flex-col justify-between overflow-hidden lg:col-span-2">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Upcoming Payouts</h2>
            <button className="p-1 rounded-full hover:bg-gray-100">
              <FiMoreHorizontal size={20} />
            </button>
          </div>

          {/* Table view for larger screens */}
          <div className="hidden sm:block overflow-x-auto">
            <table className="min-w-full w-full text-sm sm:text-base">
              <thead>
                <tr className="text-gray-400/70">
                  <th className="py-2 text-left">PAYOUTS</th>
                  <th className="py-2 text-left">DATE</th>
                  <th className="py-2 text-left">AMOUNT</th>
                  <th className="py-2 text-left">STATUS</th>
                  <th className="py-2"></th>
                </tr>
              </thead>
              <tbody>
                {payouts.map((p, i) => (
                  <tr key={i} className="border-b text-sm sm:text-base">
                    <td className="py-2 flex gap-2 items-center">
                      <input type="checkbox" checked={p.status === "Paid"} readOnly className="accent-red-500 w-4 h-4" />
                      {p.name}
                    </td>
                    <td className="py-2">{p.date}</td>
                    <td className="py-2">{p.amount}</td>
                    <td className="py-2">
                      <span className={`px-2 py-1 rounded-full text-xs sm:text-sm font-medium ${p.status === "Paid" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}>
                        {p.status}
                      </span>
                    </td>
                    <td className="py-2"></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Card view for mobile */}
          <div className="sm:hidden flex flex-col gap-4">
            {payouts.map((p, i) => (
              <div key={i} className="bg-gray-50 p-4 rounded-lg shadow flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <span className="font-bold">{p.name}</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${p.status === "Paid" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}>
                    {p.status}
                  </span>
                </div>
                <div className="text-xs text-gray-500">Date: {p.date}</div>
                <div className="font-semibold">Amount: {p.amount}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Pie Chart */}
        <div className="bg-white rounded-2xl p-5 flex-col justify-between">
          <PaymentPie />
        </div>
      </div>
    </div>
  );
}

export default Payouts;
