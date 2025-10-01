import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Header from "./components/Header";
import Sidebar from "./components/SideBar";
import Dashboard from "./pages/Dashboard";
import Rooms from "./pages/Rooms";
import Booking from "./pages/Booking";
import Availability from "./pages/Availability";
import Payouts from "./pages/Payouts";
import Settings from "./pages/Settings";
import AdminCatalogPage from "./components/AdminCatalogPage";

// ✅ Layout component with Header + Sidebar
function MainLayout({ children }) {
  return (
    <div className="bg-[#f8f5e5] w-full min-h-screen p-4 sm:p-6 md:p-8 max-w-full md:max-w-8xl mx-auto">
      <Header />
      <div className="flex justify-start">
        <Sidebar />
        <div className="w-full p-6">{children}</div>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Signup page (no header/sidebar) */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* All other pages with layout */}
        <Route
          path="/"
          element={
            <MainLayout>
              <Dashboard />
            </MainLayout>
          }
        />
        <Route
          path="/rooms"
          element={
            <MainLayout>
              <Rooms />
            </MainLayout>
          }
        />
        <Route
          path="/bookings"
          element={
            <MainLayout>
              <Booking />
            </MainLayout>
          }
        />
        <Route
          path="/availability"
          element={
            <MainLayout>
              <Availability />
            </MainLayout>
          }
        />
        <Route
          path="/payouts"
          element={
            <MainLayout>
              <Payouts />
            </MainLayout>
          }
        />
        <Route
          path="/settings"
          element={
            <MainLayout>
              <Settings />
            </MainLayout>
          }
        />
        {/* <Route
          path="/admincatalog"
          // element={
          //   <MainLayout>
          //     <AdminCatalogPage />
          //   </MainLayout>
          // } */}
        {/* /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
