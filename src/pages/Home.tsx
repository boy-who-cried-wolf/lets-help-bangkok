import ImageSlider from '../components/ImageSlider';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section with Image Slider */}
      <section className="relative">
        <ImageSlider />
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <div className="text-center text-white max-w-3xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Let's Help Bangkok Recover</h1>
            <p className="text-xl mb-8">Together we can rebuild our city after the earthquake</p>
            <Link 
              to="/donate" 
              className="bg-white text-primary-700 px-8 py-3 rounded-full hover:bg-secondary-100 transition-colors font-semibold text-lg"
            >
              Donate Now
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-3xl font-bold text-primary-700 mb-2">7.7</h3>
            <p className="text-gray-600">Magnitude Earthquake</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-3xl font-bold text-primary-700 mb-2">100+</h3>
            <p className="text-gray-600">Buildings Damaged</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-3xl font-bold text-primary-700 mb-2">5000+</h3>
            <p className="text-gray-600">People Affected</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-primary-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">How You Can Help</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Your support can make a difference in rebuilding our community. 
            Whether through donations, volunteering, or spreading awareness, 
            every contribution counts.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link 
              to="/donate" 
              className="bg-white text-primary-700 px-8 py-3 rounded-full hover:bg-secondary-100 transition-colors font-semibold"
            >
              Make a Donation
            </Link>
            <Link 
              to="/services" 
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white/10 transition-colors font-semibold"
            >
              Volunteer
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 