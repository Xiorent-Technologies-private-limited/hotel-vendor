import { FaUserCircle } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

function Header() {
  return (
    <div className="w-full h-24 bg-[#f8f5e5] px-8 ">
      <div className="flex justify-between items-center h-full">
        
        {/* Logo */}
        <img
          src="/flashrooms.png" 
          alt="Flash Rooms"
          className="h-14"
        />

        {/* Search Bar */}
        <div className="relative w-[500px]">
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-red-500" size={18} />
          <input 
            type="text" 
            placeholder="Search..." 
            className="w-full rounded-full border border-black/20 pl-12 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-300"
          />
        </div>

        {/* User Section */}
        <div className="flex items-center gap-3">
          <FaUserCircle  size={24} className="text-red-700" />
          <p className="font-medium text-red-500">Tushar</p>
        </div>

      </div>
    </div>
  )
}

export default Header;