const About = () => {
  return (
    <div className="container mx-auto px-4 py-12 space-y-12">
      {/* Mission Section */}
      <section className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-primary-700 mb-6">About Let's Help Bangkok</h1>
        <p className="text-xl text-gray-600 mb-8">
          We are a community-driven initiative dedicated to supporting Bangkok's recovery 
          after the devastating earthquake. Our mission is to coordinate relief efforts, 
          provide essential services, and help rebuild our city stronger than before.
        </p>
      </section>

      {/* Timeline Section */}
      <section>
        <h2 className="text-3xl font-bold text-primary-700 mb-8 text-center">Our Journey</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="flex items-start gap-4">
            <div className="bg-primary-700 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
              1
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Immediate Response</h3>
              <p className="text-gray-600">
                Within hours of the earthquake, we mobilized volunteers and resources 
                to provide emergency assistance to affected areas.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-primary-700 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
              2
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Community Support</h3>
              <p className="text-gray-600">
                We established temporary shelters and distributed essential supplies 
                to displaced families and individuals.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-primary-700 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
              3
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Rebuilding Phase</h3>
              <p className="text-gray-600">
                Currently focused on reconstruction efforts and providing long-term 
                support to affected communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-primary-50 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary-700 mb-8 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Emergency Response Team</h3>
              <p className="text-gray-600">
                Trained professionals and volunteers working around the clock to 
                provide immediate assistance and coordinate relief efforts.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Community Support Team</h3>
              <p className="text-gray-600">
                Dedicated individuals focused on providing emotional support, 
                resources, and guidance to affected families and individuals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 