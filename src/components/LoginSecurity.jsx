import React, { useState } from "react";
import { Eye, EyeOff, Edit, Phone } from "lucide-react";

const LoginSecurity = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [twoFAEnabled, setTwoFAEnabled] = useState(true);

  return (
    <div className="w-full bg-white min-h-screen p-4 sm:p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-lg p-4 sm:p-6 space-y-8">
        
        {/* Upload Photo */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="w-24 h-24 border-2 border-dashed border-red-400 rounded-xl flex flex-col items-center justify-center bg-gray-50">
            <span className="text-xs text-gray-500 text-center">
              Upload your photo
            </span>
          </div>
          <p className="text-sm text-gray-500">
            You can update your profile picture here.
          </p>
        </div>

        <hr className="border-gray-200" />

        {/* Personal Info + Contacts */}
        <div className="overflow-x-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm min-w-[300px]">
            <div className="space-y-2">
              <p className="text-gray-500">Name</p>
              <p className="text-gray-500">Date of Birth</p>
              <p className="text-gray-500">Country</p>
              <p className="text-gray-500">City</p>
              <p className="text-gray-500">Home Address</p>
            </div>

            <div className="space-y-2">
              <p className="font-medium text-gray-800">Tushar Sha</p>
              <p className="font-medium text-gray-800">12/12/1982</p>
              <p className="text-gray-400 break-words">Not chosen</p>
              <p className="text-gray-400 break-words">Not chosen</p>
              <p className="text-gray-400 break-words">Not chosen</p>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center mb-2">
                <p className="text-gray-500">Contacts</p>
                <button className="flex items-center text-red-600 text-sm hover:text-red-700">
                  <Edit className="w-4 h-4 mr-1" /> Edit
                </button>
              </div>
              <p className="text-red-600 break-words">@Tusharsha</p>
              <p className="text-blue-600 break-words">facebook.com/tusharsha</p>
              <p className="text-pink-500 break-words">@Tusharsha</p>
              <p className="text-gray-700 flex items-center break-words">
                <Phone className="w-4 h-4 mr-2" /> +91 9875476803
              </p>
            </div>
          </div>
        </div>

        <hr className="border-gray-200" />

        {/* Security Section */}
        <div>
          <h3 className="text-red-600 font-semibold mb-4">Security</h3>
          <div className="overflow-x-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm min-w-[300px]">
              <div className="space-y-2">
                <p className="text-gray-500">Sign-in Email</p>
                <p className="text-gray-500">2-FA authentication</p>
                <p className="text-gray-500">Password</p>
                <p className="text-gray-500">Phone number</p>
                <p className="text-gray-500">Reserve codes</p>
              </div>

              <div className="space-y-2">
                <p className="font-medium text-gray-800 break-words">Tusharsha@gmail.com</p>

                <button
                  onClick={() => setTwoFAEnabled(!twoFAEnabled)}
                  className={`relative inline-flex h-5 w-10 items-center rounded-full transition-colors ${
                    twoFAEnabled ? "bg-red-600" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      twoFAEnabled ? "translate-x-5" : "translate-x-1"
                    }`}
                  />
                </button>

                <div className="flex items-center gap-2 mt-2 break-words">
                  <span>{showPassword ? "password" : "••••••••"}</span>
                  <button
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>

                <button className="text-red-600 text-xs mt-1 hover:text-red-700">
                  Change password
                </button>

                <p className="font-medium text-gray-800 mt-3 break-words">+91 9875476803</p>

                <div className="mt-3 space-y-2">
                  <p className="font-medium text-gray-800">6 of 10 left</p>
                  <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-xs">
                    + Generate new codes
                  </button>
                </div>
              </div>

              <div />
            </div>
          </div>
        </div>

        <hr className="border-gray-200" />

        {/* Last Login */}
        <div className="space-y-2">
          <h3 className="font-semibold text-gray-800 mb-2">Last login activity</h3>
          <p className="text-sm text-gray-600 break-words">
            on July 14, 2024, at 18:34, using Chrome from IP 198.123.23.23
          </p>
        </div>

        <hr className="border-gray-200" />

        {/* Active Devices */}
        <div className="space-y-3">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 gap-2">
            <h3 className="font-semibold text-gray-800">Active Devices count (3)</h3>
            <button className="text-red-600 hover:text-red-700 text-sm">View all Device</button>
          </div>

          <div className="space-y-2 text-sm">
            <div>
              <p className="font-medium text-gray-800 break-words">
                DESKTOP-ST10SEC • New Delhi, India
              </p>
              <p className="text-gray-500 text-xs">Chrome • Active now</p>
            </div>
            <div>
              <p className="font-medium text-gray-800 break-words">iPhone 11 • New Delhi, India</p>
              <p className="text-gray-500 text-xs">Chrome • 14/07/2024</p>
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded text-sm">
              Remove active Device
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSecurity;
