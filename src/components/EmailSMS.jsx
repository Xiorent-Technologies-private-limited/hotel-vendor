import React from "react";

const EmailSMS = () => {
  const emails = [
    { email: "Discover our new app features", campaign: "New app launch", status: "Sent", time: "02/03/2024 at 1:35pm", emailsSent: "2,183", openRate: "35%" },
    { email: "Abandoned cart", campaign: "Automated Email", status: "Sent", time: "02/03/2024 at 1:35pm", emailsSent: "2,183", openRate: "35%" },
    { email: "Discover our new app features", campaign: "New app launch", status: "Sent", time: "02/03/2024 at 1:35pm", emailsSent: "2,183", openRate: "35%" },
    { email: "Abandoned cart", campaign: "Automated Email", status: "Sent", time: "02/03/2024 at 1:35pm", emailsSent: "2,183", openRate: "35%" },
    { email: "Discover our new app features", campaign: "New app launch", status: "Sent", time: "02/03/2024 at 1:35pm", emailsSent: "2,183", openRate: "35%" },
    { email: "Discover our new app features", campaign: "New app launch", status: "Sent", time: "02/03/2024 at 1:35pm", emailsSent: "2,183", openRate: "35%" },
    { email: "Abandoned cart", campaign: "Automated Email", status: "Sent", time: "02/03/2024 at 1:35pm", emailsSent: "2,183", openRate: "35%" },
  ];

  const statsCards = [
    { icon: "📧", label: "Emails sent", value: "5,189", change: "+ 100%", color: "blue-600" },
    { icon: "✨", label: "Clicks in emails", value: "5,671", change: "+ 100%", color: "orange-500" },
    { icon: "❌", label: "No replies", value: "983", change: "", color: "red-500" }
  ];

  return (
    <div className="p-4 sm:p-6 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto space-y-6">

        {/* Top Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {statsCards.map((card, idx) => (
            <div key={idx} className="bg-white rounded-lg p-4 sm:p-6 shadow-sm border border-gray-200 flex flex-col">
              <div className="flex items-center justify-between">
                <span className={`text-${card.color} text-2xl sm:text-3xl`}>{card.icon}</span>
                <button className="text-gray-400">⋮</button>
              </div>
              <p className="text-gray-500 mt-2 text-sm sm:text-base">{card.label}</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 break-words">{card.value}</h2>
              {card.change && <p className="text-green-600 text-xs sm:text-sm">{card.change}</p>}
            </div>
          ))}
        </div>

        {/* Last Emails - Card View on Mobile */}
        <div className="space-y-4">
          <h3 className="text-red-600 font-semibold text-lg">Last Emails</h3>

          {emails.map((item, index) => (
            <div key={index} className="bg-white rounded-lg p-4 sm:p-6 shadow-sm border border-gray-200 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              <div className="flex flex-col sm:flex-row sm:gap-6">
                <div className="text-sm font-semibold">{item.email}</div>
                <div className="text-xs text-gray-500">{item.campaign}</div>
              </div>

              <div className="flex flex-col sm:flex-row sm:gap-6 text-xs">
                <span className={`px-2 py-1 rounded text-xs font-medium ${item.status === "Sent" ? "bg-green-100 text-green-600" : "bg-yellow-100 text-yellow-800"}`}>
                  {item.status}
                </span>
                <span>{item.time}</span>
                <span>{item.emailsSent}</span>
                <span>{item.openRate}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default EmailSMS;
