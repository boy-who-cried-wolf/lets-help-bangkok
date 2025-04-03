const Donate = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary-700 mb-8 text-center">Make a Donation</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Donation Information */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-primary-700">Your Impact</h2>
            <p className="text-gray-600">
              Your donation will help us provide essential services and support 
              to those affected by the earthquake. Every contribution makes a difference.
            </p>
            
            <div className="space-y-4">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Where Your Money Goes</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary-700 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Emergency shelter and housing
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary-700 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Food and essential supplies
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary-700 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Medical and mental health support
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary-700 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Rebuilding and reconstruction efforts
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Donation Form */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-primary-700 mb-6">Donation Details</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Donation Amount
                </label>
                <div className="grid grid-cols-3 gap-3">
                  <button
                    type="button"
                    className="px-4 py-2 border border-primary-700 text-primary-700 rounded-md hover:bg-primary-50"
                  >
                    ฿500
                  </button>
                  <button
                    type="button"
                    className="px-4 py-2 border border-primary-700 text-primary-700 rounded-md hover:bg-primary-50"
                  >
                    ฿1,000
                  </button>
                  <button
                    type="button"
                    className="px-4 py-2 border border-primary-700 text-primary-700 rounded-md hover:bg-primary-50"
                  >
                    ฿2,000
                  </button>
                </div>
                <div className="mt-3">
                  <input
                    type="number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Other amount"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Payment Method
                </label>
                <div className="space-y-3">
                  <label className="flex items-center">
                    <input type="radio" name="payment" className="text-primary-600" />
                    <span className="ml-2">Credit/Debit Card</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="payment" className="text-primary-600" />
                    <span className="ml-2">Bank Transfer</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="payment" className="text-primary-600" />
                    <span className="ml-2">Mobile Payment</span>
                  </label>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Card Details
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500 mb-3"
                  placeholder="Card number"
                />
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    placeholder="MM/YY"
                  />
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    placeholder="CVV"
                  />
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full bg-primary-700 text-white px-6 py-3 rounded-md hover:bg-primary-800 transition-colors font-semibold"
              >
                Donate Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate; 