import React, { useEffect } from "react";
import useBookingStore from "../stores/useBookingStore";
import { FiSearch, FiFilter, FiCheckCircle, FiXCircle } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";

// const bookings = [
//   { id: "#SN192MB5H9G", name: "Aarav", contact: "6789432156", amount: "₹2000", status: "Paid" },
//   { id: "#SN192MB5H9G", name: "Parmesh", contact: "1234567890", amount: "₹2500", status: "Due" },
//   { id: "#SN192MB5H9G", name: "Mohan", contact: "9876543210", amount: "₹2000", status: "Paid" },
//   { id: "#SN192MB5H9G", name: "Cecil", contact: "5551234567", amount: "₹3000", status: "Paid" },
// ];

function Booking() {
  const { getBooking, bookings } = useBookingStore();
  useEffect(() => {
    getBooking();
  }, []);
  return (
    <div className="p-4 sm:p-6 bg-white rounded-2xl shadow-lg w-full">

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between gap-3 mb-6">
        <h1 className="text-xl sm:text-2xl font-bold text-red-600">Booking</h1>

        {/* Filter & Search */}
        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          <button className="flex items-center gap-2 border px-3 py-2 rounded-md text-sm sm:text-base">
            <FiFilter /> Filter
          </button>
          <div className="relative w-full sm:w-60">
            <input
              type="text"
              placeholder="Search by room number/ID"
              className="border rounded-md pl-8 pr-3 py-2 w-full text-sm"
            />
            <FiSearch size={16} className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" />
          </div>
        </div>
      </div>

      {/* Table for larger screens */}
      <div className="hidden sm:block overflow-x-auto">
        <table className="min-w-full text-sm sm:text-base">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4">Booking Id</th>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Contact No.</th>
              <th className="py-3 px-4">Check In</th>
              <th className="py-3 px-4">Check Out</th>
              <th className="py-3 px-4">Amount</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((b, i) => (
              <tr key={i} className="border-b">
                <td className="py-2 px-4">{b._id}</td>
                <td className="py-2 px-4">{b.guestDetails?.firstName}</td>
                <td className="py-2 px-4">{b.guestDetails?.phone}</td>
                <td className="py-2 px-4">{new Date(b.dates?.checkIn).toLocaleDateString()}</td>
                <td className="py-2 px-4">{new Date(b.dates?.checkOut).toLocaleDateString()}</td>
                <td className="py-2 px-4 font-semibold">₹{b.pricing?.totalAmount}</td>
                <td className="py-2 px-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs sm:text-sm font-medium ${b.status === "paid" || b.paymentStatus === "paid"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                      }`}
                  >
                    {b.paymentStatus}
                  </span>
                </td>
                <td className="py-2 px-4 flex gap-2">
                  <FiCheckCircle className="text-green-600" />
                  <FiXCircle className="text-red-600" />
                  <BsThreeDotsVertical className="text-gray-500" />
                </td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>

      {/* Card View for small screens */}
      <div className="sm:hidden flex flex-col gap-4">
        {bookings.map((b) => (
          <div key={b._id} className="bg-gray-50 p-4 rounded-lg shadow flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <span className="font-bold">{b.guestDetails.firstName}</span>
              <span
                className={`px-2 py-1 rounded-full text-xs font-medium ${b.status === "Paid" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                  }`}
              >
                {b.status}
              </span>
            </div>
            <div className="text-xs text-gray-500">Booking ID: {b.id}</div>
            <div className="text-xs text-gray-500">Contact: {b.contact}</div>
            <div className="text-xs text-gray-500">Check In: 24 July 25</div>
            <div className="text-xs text-gray-500">Check Out: 28 July 25</div>
            <div className="font-semibold">Amount: {b.amount}</div>
            <div className="flex gap-2 pt-2">
              <FiCheckCircle className="text-green-600" />
              <FiXCircle className="text-red-600" />
              <BsThreeDotsVertical className="text-gray-500" />
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-4 gap-2">
        <button className="px-3 py-1 rounded-md border bg-gray-100 text-gray-400">Previous</button>
        <div className="flex gap-2 flex-wrap">
          {[1, 2, 3, 4].map((n) => (
            <button
              key={n}
              className={`px-3 py-1 rounded-md ${n === 1 ? "bg-gray-300 text-white" : "bg-white border"}`}
            >
              {n}
            </button>
          ))}
        </div>
        <button className="px-3 py-1 rounded-md border bg-gray-100">Next</button>
      </div>
    </div>
  );
}

export default Booking;
