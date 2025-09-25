import { FaCalendar, FaFilter } from "react-icons/fa6";

function Availabilty() {
  const roomTypes = [
    { id: 1, title: "Classic Rooms", deals: 2, available: "2/35", price: "₹1,068" },
    { id: 2, title: "AC Base Rooms", deals: 2, available: "2/35", price: "₹568" },
    { id: 3, title: "Non-AC Rooms", deals: 2, available: "2/35", price: "₹1,568" },
    { id: 4, title: "Sharing Rooms", deals: 2, available: "2/35", price: "₹2,568" },
  ];

  const roomTable = [
    {
      id: 1,
      type: "Single",
      offer: "Family Package",
      policy: "Strict",
      dealPrice: "₹700",
      rate: "₹800",
      availability: "5 rooms",
      status: "low",
    },
    {
      id: 2,
      type: "Double",
      offer: "Holiday Special",
      policy: "Strict",
      dealPrice: "₹1,000",
      rate: "₹1,200",
      availability: "Full",
      status: "full",
    },
    {
      id: 3,
      type: "Classic",
      offer: "Family Bundle",
      policy: "Flexible",
      dealPrice: "₹1,600",
      rate: "₹2,000",
      availability: "12 rooms",
      status: "ok",
    },
    {
      id: 4,
      type: "Basic",
      offer: "Mega Sale",
      policy: "Non refundable",
      dealPrice: "₹3,500",
      rate: "₹4,000",
      availability: "10 rooms",
      status: "ok",
    },
  ];

  return (
    <div className="w-full p-4 sm:p-6 md:p-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
        <h2 className="text-2xl sm:text-3xl text-red-500 font-semibold">Rooms</h2>
        <button className="bg-red-500 text-white px-4 py-2 rounded-xl flex gap-2 items-center text-sm sm:text-base">
          <FaCalendar />
          20-07-2024
        </button>
      </div>

      {/* Room Types Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {roomTypes.map((room) => (
          <div key={room.id} className="rounded-lg p-4 shadow-lg bg-white flex flex-col">
            {room.deals > 0 && (
              <div className="text-green-600 font-bold bg-emerald-300/20 w-fit px-3 rounded-2xl text-sm mb-2">
                {room.deals} Deals
              </div>
            )}
            <div className="font-semibold text-sm sm:text-base">{room.title}</div>
            <p className="text-xs sm:text-sm text-gray-500">{room.available} available</p>
            <p className="text-red-600 font-bold text-lg sm:text-xl">
              {room.price}
              <span className="text-gray-500 text-xs sm:text-sm">/day</span>
            </p>
          </div>
        ))}
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-lg shadow-lg overflow-x-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-4 py-2 border-b gap-2 sm:gap-0">
          <h3 className="font-semibold text-xl text-red-500">Room Rates</h3>
          <div className="flex flex-wrap gap-2">
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm sm:text-base">
              Add rate
            </button>
            <button className="border px-4 py-2 rounded-lg flex gap-2 items-center text-sm sm:text-base">
              <FaFilter />
              Filter
            </button>
          </div>
        </div>

        <table className="w-full text-sm sm:text-base min-w-[100%] md:min-w-[600px]">
          <thead className="bg-gray-100 text-gray-500 text-left">
            <tr>
              <th className="py-3 px-4">Room type</th>
              <th className="py-3 px-4">Special Offers</th>
              <th className="py-3 px-4">Cancellation policy</th>
              <th className="py-3 px-4">Deal price</th>
              <th className="py-3 px-4">Rate</th>
              <th className="py-3 px-4">Availability</th>
            </tr>
          </thead>
          <tbody>
            {roomTable.map((room) => (
              <tr key={room.id} className="border-t border-gray-200">
                <td className="py-3 px-4">{room.type}</td>
                <td className="py-3 px-4">{room.offer}</td>
                <td className="py-3 px-4">{room.policy}</td>
                <td className="py-3 px-4 text-gray-600">{room.dealPrice}</td>
                <td className="py-3 px-4 font-semibold">{room.rate}</td>
                <td className="py-3 px-4">
                  {room.status === "low" && (
                    <span className="text-red-500 bg-red-100 px-3 py-1 rounded-lg text-xs sm:text-sm">
                      {room.availability}
                    </span>
                  )}
                  {room.status === "full" && (
                    <span className="text-red-500 bg-red-100 px-3 py-1 rounded-lg text-xs sm:text-sm">
                      Full
                    </span>
                  )}
                  {room.status === "ok" && (
                    <span className="text-blue-500 bg-blue-100 px-3 py-1 rounded-lg text-xs sm:text-sm">
                      {room.availability}
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Availabilty;
