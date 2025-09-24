import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/SideBar";
import Dashboard from "./pages/Dashboard";
import Rooms from "./pages/Rooms";
import Booking from "./pages/Booking";
import Availabilty from "./pages/Availabilty";
import Payouts from "./pages/Payouts";
import Settings from "./pages/Settings";
import DailyTraffic from "./components/DailyTraffic";


function App() {
  return (


    <BrowserRouter>
    <div className="bg-[#f8f5e5] w-full h-full p-8 max-w-8xl min-w-[calc(80%-2rem)]">
      <Header />
      <div className="flex justify-start" >
      <Sidebar />
      {/* <DailyTraffic /> */}
      {/* <div className="bg-[#f8f5e5] w-full h-full p-8 max-w-8xl min-w-[calc(80%-2rem)]"> */}
        <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/bookings" element={<Booking />} />
        <Route path="/availabilty" element={<Availabilty />} />
        <Route path="/payouts" element={<Payouts />} />
        <Route path="/settings" element={<Settings />} />
       
      </Routes> </div>
      
    </div>

    </BrowserRouter>
  );
}

export default App;