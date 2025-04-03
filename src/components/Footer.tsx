import { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setShowModal(true);
    setEmail('');
  };

  return (
    <footer className="bg-gradient-emergency from-primary-800 to-secondary-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">About Us</h3>
            <p className="text-sm text-gray-300">
              We are dedicated to helping Bangkok recover from the earthquake through community support and emergency response initiatives.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-sm text-gray-300">
                <span className="line-through">+66 2 123 4567</span>
              </li>
              <li className="text-sm text-gray-300">
                <span className="line-through">info@letshelpbangkok.org</span>
              </li>
              <li className="text-sm text-gray-300">
                For inquiries, please email:{' '}
                <a href="mailto:hdreamdev@gmail.com" className="text-white hover:text-secondary-200">
                  hdreamdev@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <p className="text-sm text-gray-300">
              Subscribe to our newsletter for updates.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-md bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:border-white"
                required
              />
              <button
                type="submit"
                className="w-full bg-white text-primary-700 px-4 py-2 rounded-md hover:bg-secondary-100 transition-colors font-semibold"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-sm text-gray-300">
            © {new Date().getFullYear()} Let's Help Bangkok. All rights reserved.
          </p>
        </div>
      </div>

      {/* Subscribe Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              
              <h3 className="text-xl font-bold text-yellow-600 mb-2">Important Notice</h3>
              <p className="text-gray-600 mb-4">
                This is a demonstration website. Please do not enter any real personal information.
              </p>
              <p className="text-gray-600 mb-6">
                For any inquiries, please contact us at{' '}
                <a href="mailto:hdreamdev@gmail.com" className="text-primary-700 hover:underline">
                  hdreamdev@gmail.com
                </a>
              </p>
              
              <button
                onClick={() => setShowModal(false)}
                className="bg-primary-700 text-white px-6 py-2 rounded-md hover:bg-primary-800 transition-colors font-semibold"
              >
                I Understand
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer; 