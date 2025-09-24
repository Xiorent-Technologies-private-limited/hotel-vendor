import React, { useState } from "react";

const SettingProfile = () => {
  const [formData, setFormData] = useState({
    fullName: "Tushar Sha",
    email: "TusharSha@gmail.com",
    username: "Tushar",
    phoneNumber: "+91 xxxxxxxxx",
    bio: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdateProfile = () => {
    console.log("Profile updated:", formData);
  };

  const handleReset = () => {
    setFormData({
      fullName: "Tushar Sha",
      email: "TusharSha@gmail.com",
      username: "Tushar",
      phoneNumber: "+91 xxxxxxxxx",
      bio: "",
    });
  };

  return (
    <div className="w-full min-h-screen bg-white flex justify-center items-start p-4 sm:p-6">
      {/* Form Container */}
      <div className="w-full max-w-4xl bg-white p-6 sm:p-10 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Your Profile</h2>

        <div className="space-y-6">
          {/* Profile Photo Upload */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
            <div className="w-24 h-24 border-2 border-dashed border-red-400 rounded-xl flex flex-col items-center justify-center bg-gray-50">
              <svg
                className="w-8 h-8 text-gray-400 mb-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <span className="text-xs text-center text-gray-500">
                Upload your photo
              </span>
            </div>
            <p className="text-sm text-gray-500">
              Profile photo should be square, 200x200px recommended.
            </p>
          </div>

          {/* Form Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Full name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-colors"
                placeholder="Tushar Sha"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-colors"
                placeholder="TusharSha@gmail.com"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Username
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-colors"
                placeholder="Tushar"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Phone number
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-colors"
                placeholder="+91 xxxxxxxxx"
              />
            </div>
          </div>

          {/* Bio Section */}
          <div className="mt-6">
            <label className="block text-gray-700 font-medium mb-2">Bio</label>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-colors resize-none"
              placeholder="Write your Bio here e.g your hobbies, past, interests ETC"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <button
              onClick={handleUpdateProfile}
              className="bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors w-full sm:w-auto"
            >
              Update Profile
            </button>
            <button
              onClick={handleReset}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold px-8 py-3 rounded-lg transition-colors w-full sm:w-auto"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingProfile;
