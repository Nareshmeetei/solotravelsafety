import React, { useState } from 'react';
import { Heart, X, CreditCard, Coffee, Plane, Shield } from 'lucide-react';

const DonateButton: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const donationAmounts = [
    { amount: 5, icon: Coffee, label: 'Buy us a coffee', description: 'Help keep our servers running' },
    { amount: 15, icon: Shield, label: 'Safety research', description: 'Fund safety data collection' },
    { amount: 30, icon: Plane, label: 'Support a traveler', description: 'Help expand our destination database' },
    { amount: 50, icon: Heart, label: 'Champion safety', description: 'Become a safety advocate' }
  ];

  const handleDonate = async (amount: number) => {
    setSelectedAmount(amount);
    setLoading(true);
    try {
      const res = await fetch('/.netlify/functions/create-donation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: amount * 100, // convert dollars to cents
          currency: 'USD',
          description: 'Donation to Solo Travel Safety'
        })
      });
      const data = await res.json();
      if (data && data.payment_url) {
        window.open(data.payment_url, '_blank');
      } else {
        alert('Error creating payment. Please try again.');
      }
    } catch (error) {
      alert('Error creating payment. Please try again.');
    } finally {
      setLoading(false);
      setShowModal(false);
      setSelectedAmount(null);
      setCustomAmount('');
    }
  };

  const handleCustomDonate = async () => {
    const amount = parseFloat(customAmount);
    if (!amount || amount < 1) {
      alert('Please enter a valid amount (minimum $1)');
      return;
    }
    await handleDonate(amount);
  };

  return (
    <>
      {/* Floating Donate Button */}
      <div className="fixed bottom-6 left-6 z-40">
        <div className="group">
          <button
            onClick={() => setShowModal(true)}
            className="bg-gradient-to-r from-primary-400 to-secondary-pink-400 hover:from-primary-500 hover:to-secondary-pink-500 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-primary-300"
          >
            <Heart className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
          </button>
          
          {/* Tooltip */}
          <div className="absolute bottom-full left-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="bg-gray-900 text-white text-sm px-4 py-3 rounded-lg whitespace-nowrap">
              Fund freedom for more women
              <div className="absolute top-full left-6 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Donation Modal - Reduced height, increased width */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-xl animate-fade-in">
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors duration-300 hover:scale-110 z-10"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Header - Reduced padding */}
            <div className="p-6 pb-3 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-400 to-secondary-pink-400 rounded-full flex items-center justify-center mx-auto mb-3">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-xl font-black text-gray-900 mb-2">
                Fund Freedom For More Women
              </h2>
              <p className="text-sm text-gray-600">
                Help us keep solo female travelers safe worldwide
              </p>
            </div>

            {/* Donation Options - Grid layout for better space usage */}
            <div className="px-6 pb-6">
              <div className="grid grid-cols-2 gap-3 mb-4">
                {donationAmounts.map((option) => (
                  <button
                    key={option.amount}
                    onClick={() => handleDonate(option.amount)}
                    disabled={selectedAmount !== null || loading}
                    className="flex flex-col items-center space-y-2 p-4 border border-gray-200 rounded-xl hover:border-primary-400 hover:bg-primary-50 transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                      <option.icon className="h-4 w-4 text-primary-600" />
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-black text-primary-600">${option.amount}</div>
                      <div className="text-sm font-semibold text-gray-900">{option.label}</div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Custom Amount - Simplified */}
              <div className="border-t border-gray-100 pt-4">
                <div className="flex space-x-2">
                  <div className="relative flex-1">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                    <input
                      type="number"
                      min="1"
                      placeholder="Custom amount"
                      value={customAmount}
                      onChange={e => setCustomAmount(e.target.value)}
                      className="w-full pl-8 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none"
                    />
                  </div>
                  <button
                    onClick={handleCustomDonate}
                    disabled={selectedAmount !== null || loading}
                    className="px-6 py-3 bg-primary-400 hover:bg-primary-500 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                  >
                    {loading ? (
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    ) : (
                      <>
                        <CreditCard className="h-4 w-4 mr-2" />
                        Donate
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Security Notice - Simplified */}
              <p className="text-xs text-gray-500 text-center mt-4">
                Secure payment • Helps keep the platform free for all travelers
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DonateButton;