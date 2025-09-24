import { useState } from "react";
import SettingProfile from "../components/SettingProfile";
import LoginSecurity from "../components/LoginSecurity";
import PaymentKeys from "../components/PaymentKeys";
import EmailSMS from "../components/EmailSMS";
import RefundRules from "../components/RefundRules";
import HeaderNavigation from "../components/HeaderNavigation";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("Account Setting");

  const tabs = [
    "Account Setting",
    "Login & Security",
    "Payment Keys",
    "Email/ SMS",
    "Refund Rules",
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "Account Setting":
        return <SettingProfile />;
      case "Login & Security":
        return <LoginSecurity />;
      case "Payment Keys":
        return <PaymentKeys />;
      case "Email/ SMS":
        return <EmailSMS />;
      case "Refund Rules":
        return <RefundRules />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#f8f5e5] p-4 sm:p-6">
      {/* Tabs */}
      <div className="overflow-x-auto">
        <HeaderNavigation
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>

      {/* Content */}
      <div className="w-full max-w-7xl mx-auto mt-6">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default Settings;
