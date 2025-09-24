import { FaLocationDot } from "react-icons/fa6";

function Rooms() {
  const roomTypes = [
    { id: 1, title: "Classic Rooms", deals: 2, available: "2/35", price: "₹1,068" },
    { id: 2, title: "AC Base Rooms", deals: 2, available: "2/35", price: "₹568" },
    { id: 3, title: "Non-AC Rooms", deals: 2, available: "2/35", price: "₹1,568" },
    { id: 4, title: "Sharing Rooms", deals: 2, available: "2/35", price: "₹2,568" },
  ];

  const hotels = [
    {
      id: 1,
      name: "Sri Ranganadha Nilayam",
      location: "Srirangam, Tiruchirappalli, Tamil Nadu, India",
      amenities: "Wifi • AC • Heating • CCTV • Parking • Housekeeping • Pet Friendly",
      rating: 4.2,
      reviews: 7,
      price: "₹3,000",
      image: "/roompage1.png",
    },
    {
      id: 2,
      name: "Amritha Homestay",
      location: "Srirangam, Tiruchirappalli, Tamil Nadu, India",
      amenities: "Wifi • AC • Heating • CCTV • Parking • Housekeeping • Pet Friendly",
      rating: 4.6,
      reviews: 14,
      price: "₹2,440",
      image: "/roompage2.png",
    },
    {
      id: 3,
      name: "Heritage Stay",
      location: "Thanjavur, Tamil Nadu, India",
      amenities: "Wifi • Restaurant • Terrace • Garden • Shuttle Service • Cultural Experience",
      rating: 3.9,
      reviews: 312,
      price: "₹3,600",
      image: "/roompage3.png",
    },
  ];

  return (
    <div className="p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl text-red-500 font-semibold mb-4">Rooms</h2>

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
          {hotels.map((hotel) => (
            <div
              key={hotel.id}
              className="bg-white rounded-2xl shadow-lg flex flex-col sm:flex-row p-4 gap-4"
            >
              <img
                src={hotel.image}
                alt={hotel.name}
                className="rounded-lg w-full sm:w-40 h-40 sm:h-32 object-cover"
              />
              <div className="flex flex-col justify-between w-full">
                <div>
                  <h3 className="font-semibold text-lg sm:text-xl">{hotel.name}</h3>
                  <p className="text-sm sm:text-base flex items-center gap-2 text-gray-800">
                    <FaLocationDot className="text-red-500" />
                    {hotel.location}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">{hotel.amenities}</p>
                </div>

                <div className="mt-3 mb-2 flex flex-wrap gap-3">
                  <button className="px-3 sm:px-4 rounded-xl py-1 text-emerald-600 bg-emerald-200/50 text-sm sm:text-base">
                    Available
                  </button>
                  <button className="px-3 sm:px-4 rounded-xl py-1 text-red-600 bg-red-200/50 text-sm sm:text-base">
                    Available
                  </button>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-1 text-sm sm:text-base text-black">
                    <span>{hotel.rating}</span>
                    <span className="text-gray-500 text-xs sm:text-sm">
                      ({hotel.reviews} Reviews)
                    </span>
                  </div>
                  <p className="font-bold text-lg sm:text-2xl">
                    {hotel.price}{" "}
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
