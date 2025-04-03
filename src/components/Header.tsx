import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-primary-700 rounded-full flex items-center justify-center group-hover:bg-primary-800 transition-colors">
              <span className="text-white font-bold text-xl">LH</span>
            </div>
            <span className="text-xl font-bold text-primary-700 group-hover:text-primary-800 transition-colors">
              Let's Help Bangkok
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-gray-600 hover:text-primary-700 py-2 transition-colors ${
                location.pathname === '/' ? 'text-primary-700 font-semibold' : ''
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-gray-600 hover:text-primary-700 py-2 transition-colors ${
                location.pathname === '/about' ? 'text-primary-700 font-semibold' : ''
              }`}
            >
              About
            </Link>
            <Link
              to="/services"
              className={`text-gray-600 hover:text-primary-700 py-2 transition-colors ${
                location.pathname === '/services' ? 'text-primary-700 font-semibold' : ''
              }`}
            >
              Services
            </Link>
            <Link
              to="/contact"
              className={`text-gray-600 hover:text-primary-700 py-2 transition-colors ${
                location.pathname === '/contact' ? 'text-primary-700 font-semibold' : ''
              }`}
            >
              Contact
            </Link>
            <Link
              to="/donate"
              className="bg-primary-700 text-white px-6 py-2 rounded-md hover:bg-primary-800 transition-colors font-semibold"
            >
              Donate
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <nav className="py-4">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className={`text-gray-600 hover:text-primary-700 py-2 transition-colors ${
                  location.pathname === '/' ? 'text-primary-700 font-semibold' : ''
                }`}
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`text-gray-600 hover:text-primary-700 py-2 transition-colors ${
                  location.pathname === '/about' ? 'text-primary-700 font-semibold' : ''
                }`}
                onClick={closeMenu}
              >
                About
              </Link>
              <Link
                to="/services"
                className={`text-gray-600 hover:text-primary-700 py-2 transition-colors ${
                  location.pathname === '/services' ? 'text-primary-700 font-semibold' : ''
                }`}
                onClick={closeMenu}
              >
                Services
              </Link>
              <Link
                to="/contact"
                className={`text-gray-600 hover:text-primary-700 py-2 transition-colors ${
                  location.pathname === '/contact' ? 'text-primary-700 font-semibold' : ''
                }`}
                onClick={closeMenu}
              >
                Contact
              </Link>
              <Link
                to="/donate"
                className="bg-primary-700 text-white px-6 py-2 rounded-md hover:bg-primary-800 transition-colors font-semibold text-center"
                onClick={closeMenu}
              >
                Donate
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 