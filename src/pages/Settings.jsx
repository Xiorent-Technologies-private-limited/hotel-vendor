import { useState } from 'react';
import SettingProfile from '../components/SettingProfile';
import LoginSecurity from '../components/LoginSecurity';
import PaymentKeys from '../components/PaymentKeys';
import EmailSMS from '../components/EmailSMS';
import RefundRules from '../components/RefundRules';
import HeaderNavigation from '../components/HeaderNavigation';

const Settings = () => {
  const [activeTab, setActiveTab] = useState("Account Setting");

  const tabs = [
    'Account Setting',
    'Login & Security',
    'Payment Keys',
    'Email/ SMS',
    'Refund Rules'
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Account Setting':
        return <SettingProfile />;
      case 'Login & Security':
        return <LoginSecurity />;
      case 'Payment Keys':
        return <PaymentKeys />;
      case 'Email/ SMS':
        return <EmailSMS />;
      case 'Refund Rules':
        return <RefundRules />;
      default:
        return null;
    }
  };

  return (
    <div>
      <HeaderNavigation tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="mt-4">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default Settings;
