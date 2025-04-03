const Services = () => {
  return (
    <div className="container mx-auto px-4 py-12 space-y-12">
      {/* Services Overview */}
      <section className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-primary-700 mb-6">Our Services</h1>
        <p className="text-xl text-gray-600 mb-8">
          We provide a range of services to support the recovery and rebuilding efforts 
          in Bangkok. From emergency assistance to long-term reconstruction, we're here to help.
        </p>
      </section>

      {/* Emergency Services */}
      <section>
        <h2 className="text-3xl font-bold text-primary-700 mb-8 text-center">Emergency Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Emergency Shelter</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Temporary housing</li>
              <li>• Basic amenities</li>
              <li>• Medical assistance</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Food & Supplies</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Daily meals</li>
              <li>• Essential supplies</li>
              <li>• Hygiene kits</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Medical Support</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• First aid</li>
              <li>• Mental health support</li>
              <li>• Emergency care</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="bg-primary-50 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary-700 mb-8 text-center">Volunteer Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">On-Site Volunteers</h3>
              <p className="text-gray-600 mb-4">
                Help with immediate relief efforts, including:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Distribution of supplies</li>
                <li>• Shelter management</li>
                <li>• First aid assistance</li>
                <li>• Clean-up operations</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Support Volunteers</h3>
              <p className="text-gray-600 mb-4">
                Provide support services, including:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Administrative support</li>
                <li>• Fundraising coordination</li>
                <li>• Community outreach</li>
                <li>• Technical assistance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <h2 className="text-3xl font-bold text-primary-700 mb-4">Ready to Help?</h2>
        <p className="text-xl text-gray-600 mb-8">
          Join our team of volunteers and make a difference in our community's recovery.
        </p>
        <button className="bg-primary-700 text-white px-8 py-3 rounded-full hover:bg-primary-800 transition-colors font-semibold">
          Sign Up to Volunteer
        </button>
      </section>
    </div>
  );
};

export default Services; 