"use client";

import React, { useEffect } from "react";
import { FaLocationDot } from "react-icons/fa6";
import useRoomStore from "../stores/useRoomStore";

function Rooms() {
  const roomTypes = [
    { id: 1, title: "Classic Rooms", deals: 2, available: "2/35", price: "₹1,068" },
    { id: 2, title: "AC Base Rooms", deals: 2, available: "2/35", price: "₹568" },
    { id: 3, title: "Non-AC Rooms", deals: 2, available: "2/35", price: "₹1,568" },
    { id: 4, title: "Sharing Rooms", deals: 2, available: "2/35", price: "₹2,568" },
  ];

  const { getRooms, rooms } = useRoomStore();

  useEffect(() => {
    getRooms();
  }, [getRooms]);

  return (
    <div className="p-4 sm:p-6">
      {/* Room type cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {roomTypes.map((room) => (
          <div key={room.id} className="rounded-lg p-4 shadow-lg bg-white">
            {room.deals > 0 && (
              <div className="text-green-600 font-bold bg-emerald-300/20 w-fit px-3 rounded-2xl text-sm mb-2">
                {room.deals} Deals
              </div>
            )}
            <div className="font-semibold">{room.title}</div>
            <p className="text-sm text-gray-500">{room.available} available</p>
            <p className="text-red-600 font-bold text-lg sm:text-xl">
              {room.price}
              <span className="text-gray-500 text-sm">/day</span>
            </p>
          </div>
        ))}
      </div>

      {/* Main grid: Hotels + Filters */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Hotels Section */}
        <div className="lg:col-span-3 space-y-4">
          {rooms.map((room) => (
            <div
              key={room._id}
              className="bg-white rounded-2xl shadow-lg flex flex-col sm:flex-row p-4 gap-4"
            >
              <img
                src={room.images?.[0] || "/roompage1.png"}
                alt={room.hotelId?.name || "Hotel"}
                className="rounded-lg w-full sm:w-40 h-40 sm:h-32 object-cover"
              />
              <div className="flex flex-col justify-between w-full">
                <div>
                  {/* ✅ Name */}
                  <h3 className="font-semibold text-lg sm:text-xl">
                    {room.hotelId?.name || "Unknown Hotel"}
                  </h3>

                  {/* ✅ Location */}
                  <p className="text-sm sm:text-base flex items-center gap-2 text-gray-800">
                    <FaLocationDot className="text-red-500" />
                    {room.hotelId?.location?.city || "Location not available"}
                  </p>

                  {/* ✅ Amenities */}
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">
                    {room.amenities?.join(" • ") || "No amenities listed"}
                  </p>
                </div>

                {/* Buttons */}
                <div className="mt-3 mb-2 flex flex-wrap gap-3">
                  <button className="px-3 sm:px-4 rounded-xl py-1 text-emerald-600 bg-emerald-200/50 text-sm sm:text-base">
                    Available
                  </button>
                  <button className="px-3 sm:px-4 rounded-xl py-1 text-red-600 bg-red-200/50 text-sm sm:text-base">
                    Book Now
                  </button>
                </div>

                {/* ✅ Rating + Price */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-1 text-sm sm:text-base text-black">
                    <span>{room.hotelId?.rating?.average || "N/A"}</span>
                    <span className="text-gray-500 text-xs sm:text-sm">
                      ({room.hotelId?.rating?.totalReviews || 0} Reviews)
                    </span>
                  </div>
                  <p className="font-bold text-lg sm:text-2xl">
                    ₹{room.basePrice}{" "}
                    <span className="text-gray-500 text-sm sm:text-lg font-medium">
                      Onwards
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Filters Section */}
        <div className="rounded-lg p-4 shadow-lg space-y-4 bg-white">
          <h4 className="font-bold text-lg sm:text-xl">Filters</h4>

          <div>
            <label className="text-sm font-medium">Price</label>
            <input type="range" className="w-full" />
            <p className="text-xs text-gray-500">₹854 - ₹7,954</p>
          </div>

          <div>
            <label className="text-sm font-medium">Packages</label>
            <select className="w-full border rounded p-1">
              <option className="font-bold">Package Deals</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-medium">Category</label>
            <select className="w-full border rounded p-1">
              <option className="font-bold">5 Star</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-medium">Popular Filters</label>
            <div className="space-y-1 text-sm">
              <label className="flex gap-2 items-center">
                <input type="checkbox" /> Pay at Hotel
              </label>
              <label className="flex gap-2 items-center">
                <input type="checkbox" /> Couple Friendly
              </label>
              <label className="flex gap-2 items-center">
                <input type="checkbox" /> Free Breakfast
              </label>
            </div>
          </div>

          <div className="border p-3 rounded-2xl">
            <h4 className="font-semibold text-red-500">Customers Feedback</h4>
            <ul className="text-xs sm:text-sm text-gray-600 mt-1">
              <li>Food could be better - 4/5</li>
              <li>Cleanliness & rooms are good - 5/5</li>
              <li>Ambience could be better - 4/5</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rooms;
