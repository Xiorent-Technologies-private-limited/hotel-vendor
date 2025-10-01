// src/pages/Signup.jsx
import { useState } from "react";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
    // Add signup logic here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
        {/* Logo */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-red-600">FLASH ROOMS</h1>
          <p className="text-sm text-red-600">Rooms near Temple</p>
        </div>

        {/* Heading */}
        <h2 className="text-3xl font-semibold text-red-600 mb-6">Sign up</h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <p className="text-gray-700 text-sm">
            By signing up, you agree to the{" "}
            <a href="#" className="text-blue-600 underline">
              Terms of use
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-600 underline">
              Privacy Policy
            </a>
            .
          </p>

          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded-full hover:bg-red-700 transition"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}
