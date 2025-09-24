import React from "react";

const EmailSMS = () => {
  const emails = [
  {
      email: "Discover our new app features",
      campaign: "New app launch",
      status: "Sent",
      time: "02/03/2024 at 1:35pm",
      emailsSent: "2,183",
      openRate: "35%",
    },
    {
      email: "Abandoned cart",
      campaign: "Automated Email",
      status: "Sent",
      time: "02/03/2024 at 1:35pm",
      emailsSent: "2,183",
      openRate: "35%",
    },
    {
      email: "Discover our new app features",
      campaign: "New app launch",
      status: "Sent",
      time: "02/03/2024 at 1:35pm",
      emailsSent: "2,183",
      openRate: "35%",
    },
    {
      email: "Abandoned cart",
      campaign: "Automated Email",
      status: "Sent",
      time: "02/03/2024 at 1:35pm",
      emailsSent: "2,183",
      openRate: "35%",
    },
    {
      email: "Discover our new app features",
      campaign: "New app launch",
      status: "Sent",
      time: "02/03/2024 at 1:35pm",
      emailsSent: "2,183",
      openRate: "35%",
    },
    {
      email: "Discover our new app features",
      campaign: "New app launch",
      status: "Sent",
      time: "02/03/2024 at 1:35pm",
      emailsSent: "2,183",
      openRate: "35%",
    },
    {
      email: "Abandoned cart",
      campaign: "Automated Email",
      status: "Sent",
      time: "02/03/2024 at 1:35pm",
      emailsSent: "2,183",
      openRate: "35%",
    },
  ];

  return (
    <div className="p-4 sm:p-6 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* Top Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <span className="text-blue-600 text-2xl sm:text-3xl">📧</span>
              <button className="text-gray-400">⋮</button>
            </div>
            <p className="text-gray-500 mt-2 text-sm sm:text-base">Emails sent</p>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">5,189</h2>
            <p className="text-green-600 text-xs sm:text-sm">+ 100%</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <span className="text-orange-500 text-2xl sm:text-3xl">✨</span>
              <button className="text-gray-400">⋮</button>
            </div>
            <p className="text-gray-500 mt-2 text-sm sm:text-base">Clicks in emails</p>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">5,671</h2>
            <p className="text-green-600 text-xs sm:text-sm">+ 100%</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <span className="text-red-500 text-2xl sm:text-3xl">❌</span>
              <button className="text-gray-400">⋮</button>
            </div>
            <p className="text-gray-500 mt-2 text-sm sm:text-base">No replies</p>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">983</h2>
          </div>
        </div>

        {/* Last Emails Table */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-200">
            <h3 className="text-red-600 font-semibold text-sm sm:text-base">Last emails</h3>
            <button className="text-gray-400">⋮</button>
          </div>

          {/* Table Wrapper */}
          <div className="overflow-x-auto">
            <table className="w-full text-xs sm:text-sm text-left text-gray-600 min-w-[650px]">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="px-4 sm:px-6 py-2 sm:py-3 font-semibold">Email</th>
                  <th className="px-4 sm:px-6 py-2 sm:py-3 font-semibold">Campaign</th>
                  <th className="px-4 sm:px-6 py-2 sm:py-3 font-semibold">Status</th>
                  <th className="px-4 sm:px-6 py-2 sm:py-3 font-semibold">Time</th>
                  <th className="px-4 sm:px-6 py-2 sm:py-3 font-semibold">Emails sent</th>
                  <th className="px-4 sm:px-6 py-2 sm:py-3 font-semibold">Open rate</th>
                </tr>
              </thead>
              <tbody>
                {emails.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-200 hover:bg-[#fbeed8]"
                  >
                    <td className="px-4 sm:px-6 py-2 sm:py-3">{item.email}</td>
                    <td className="px-4 sm:px-6 py-2 sm:py-3">{item.campaign}</td>
                    <td className="px-4 sm:px-6 py-2 sm:py-3">
                      <span className="bg-green-100 text-green-600 px-2 py-1 rounded text-[10px] sm:text-xs">
                        {item.status}
                      </span>
                    </td>
                    <td className="px-4 sm:px-6 py-2 sm:py-3">{item.time}</td>
                    <td className="px-4 sm:px-6 py-2 sm:py-3">{item.emailsSent}</td>
                    <td className="px-4 sm:px-6 py-2 sm:py-3">{item.openRate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default EmailSMS;
