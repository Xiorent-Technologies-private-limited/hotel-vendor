// src/pages/PaymentKeys.jsx
import React from "react";
import LineChart from "./Linechart";
import {
  MoreVertical,
  CreditCard,
  Check,
  X,
  ChevronDown,
} from "lucide-react";

const PaymentKeys = () => {
  const summary = [
    { title: "Total Bookings", value: "700", note: "▲ 10% increase compared", data: [0, 50, 35, 65], color: "green", id:123 },
    { title: "Total Revenue", value: "₹42.5L", note: "▼ 5% decrease compared", data: [80, 45, 50, 0], color: "red", id:124 },
    { title: "Total Rooms", value: "452", note: "▲ +23 compared to last month"}
  ];

  const bookingOverview = [
    { label: "Pending Reservations", pct: 40, count: "160/400", color: "bg-yellow-400" },
    { label: "Completed Reservations", pct: 30, count: "120/400", color: "bg-red-500" },
    { label: "Checked Out Reservations", pct: 30, count: "120/400", color: "bg-green-500" },
  ];

  const reviewBookings = [
    { date: "01/04/2024", title: "Deluxe Suite", status: "In Progress", statusColor: "bg-blue-100 text-blue-800" },
    { date: "02/04/2024", title: "Standard Room", status: "Pending", statusColor: "bg-yellow-100 text-yellow-800" },
    { date: "24/05/2024", title: "Family Suite", status: "Checked Out", statusColor: "bg-green-100 text-green-800" },
    { date: "11/04/2024", title: "Luxury Suite", status: "Checked Out", statusColor: "bg-green-100 text-green-800" },
    { date: "23/05/2024", title: "Deluxe Suite", status: "Pending", statusColor: "bg-yellow-100 text-yellow-800" },
  ];

  const bookingRequests = [
    { id: "#SN12345", name: "Aarav", phone: "6789432156", in: "24 July 25", out: "28 July 25", amount: "₹2000", status: "Paid" },
    { id: "#SN12346", name: "Parmesh", phone: "1234567890", in: "24 July 25", out: "28 July 25", amount: "₹2500", status: "Due" },
    { id: "#SN12347", name: "Mohan", phone: "9876543210", in: "24 July 25", out: "28 July 25", amount: "₹1800", status: "Paid" },
    { id: "#SN12348", name: "Cecil", phone: "5551234567", in: "24 July 25", out: "28 July 25", amount: "₹3000", status: "Paid" },
    { id: "#SN12349", name: "Lakshay", phone: "4445556666", in: "24 July 25", out: "28 July 25", amount: "₹2200", status: "Due" },
  ];

  return (
    <div className="min-h-screen bg-white p-4 sm:p-6">
      <div className="max-w-6xl mx-auto space-y-6">

        {/* Top summary cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {summary.map((s, i) => (
            <div key={i} className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
              <div className="flex justify-between items-start">
                <h3 className="text-sm font-medium text-gray-700">{s.title}</h3>
                <MoreVertical size={16} className="text-gray-500" />
              </div>
              <div className="flex justify-evenly items-center">
                <div className="mt-3">
                  <p className="text-2xl font-bold text-gray-900">{s.value}</p>
                  <p className="text-xs text-gray-600 mt-1">{s.note}</p>
                </div>
                {s.data && s.color && <LineChart  data={s.data} color={s.color} id={s.id}/>}
              </div>
            </div>
          ))}
        </div>

        {/* Middle three cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Booking Overview */}
          <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
            <div className="flex justify-between items-center mb-3">
              <h4 className="text-sm font-semibold text-gray-700">Booking Overview</h4>
              <MoreVertical size={16} className="text-gray-500" />
            </div>
            <div className="space-y-6">
              {bookingOverview.map((b, idx) => (
                <div key={idx}>
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-700 font-medium">{b.label}</div>
                    <div className="text-xs text-gray-500">{b.pct}% Confirmed</div>
                  </div>
                  <div className="text-xs text-gray-500 mb-2">{b.count} Rooms</div>
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className={`${b.color} h-full rounded-full`}
                      style={{ width: `${b.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Payment Overview */}
          <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100 flex flex-col">
            <div className="flex justify-between items-center mb-3">
              <h4 className="text-sm font-semibold text-gray-700">Payment Overview</h4>
              <MoreVertical size={16} className="text-gray-500" />
            </div>
            <div className="flex-1 flex flex-col sm:flex-row sm:items-end sm:justify-around mt-4 gap-6 sm:gap-0">
              <div className="flex flex-col items-center">
                <div className="w-6 h-24 bg-red-400 rounded-t-md" />
                <div className="text-xs text-gray-500 mt-2">31-60 days</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-6 h-32 bg-red-400 rounded-t-md" />
                <div className="text-xs text-gray-500 mt-2">61-90 days</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-6 h-16 bg-red-400 rounded-t-md" />
                <div className="text-xs text-gray-500 mt-2">0-30 days</div>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-4">Upcoming Reservations</p>
          </div>

          {/* Review Bookings */}
          <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
            <div className="flex justify-between items-center mb-3">
              <h4 className="text-sm font-semibold text-gray-700">Review Bookings</h4>
              <MoreVertical size={16} className="text-gray-500" />
            </div>
            <ul className="space-y-3">
              {reviewBookings.map((r, i) => (
                <li key={i} className="flex justify-between items-start">
                  <div>
                    <div className="text-sm font-medium text-gray-800">{r.date} · {r.title}</div>
                    <div className="text-xs text-gray-500 mt-1">#{1000 + i * 5}</div>
                  </div>
                  <div className={`px-2 py-1 rounded-md text-xs font-medium ${r.statusColor}`}>{r.status}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Booking Requests */}
        <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-3">
            <h3 className="text-sm font-semibold text-gray-700 flex items-center">
              <CreditCard size={16} className="mr-2 text-red-600" />
              Booking Requests
            </h3>
            <div className="flex items-center space-x-3">
              <div className="relative">
                <select className="appearance-none pr-8 pl-3 py-1 rounded-md bg-white text-sm border border-gray-200 focus:outline-none">
                  <option>Recent Bookings</option>
                  <option>Last 30 Days</option>
                  <option>All Bookings</option>
                </select>
                <ChevronDown size={16} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
              </div>
              <button className="text-sm text-gray-600 underline">View All Bookings</button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm min-w-[600px]">
              <thead>
                <tr className="text-left text-xs text-gray-500">
                  <th className="py-3">Booking Id</th>
                  <th className="py-3">Name</th>
                  <th className="py-3">Contact No.</th>
                  <th className="py-3">Check In</th>
                  <th className="py-3">Check Out</th>
                  <th className="py-3">Total Amount</th>
                  <th className="py-3">Status</th>
                  <th className="py-3">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {bookingRequests.map((r, idx) => (
                  <tr key={idx}>
                    <td className="py-3">{r.id}</td>
                    <td className="py-3">{r.name}</td>
                    <td className="py-3">{r.phone}</td>
                    <td className="py-3">{r.in}</td>
                    <td className="py-3">{r.out}</td>
                    <td className="py-3">{r.amount}</td>
                    <td className={`py-3 font-medium ${r.status === "Paid" ? "text-green-600" : "text-red-600"}`}>{r.status}</td>
                    <td className="py-3 flex items-center space-x-3">
                      <button className="p-1 rounded-md bg-gray-100 hover:bg-gray-200">
                        <Check size={16} className="text-green-600" />
                      </button>
                      <button className="p-1 rounded-md bg-gray-100 hover:bg-gray-200">
                        <X size={16} className="text-red-600" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PaymentKeys;
