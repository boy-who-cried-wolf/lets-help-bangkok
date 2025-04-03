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
      isScrolled 
        ? 'bg-gradient-emergency from-primary-800 to-secondary-800 shadow-lg' 
        : 'bg-gradient-emergency from-primary-800 to-secondary-800'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center group-hover:bg-secondary-100 transition-colors">
              <span className="text-primary-700 font-bold text-xl">LH</span>
            </div>
            <span className="text-xl font-bold text-white group-hover:text-secondary-200 transition-colors">
              Let's Help Bangkok
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-white hover:text-secondary-200 py-2 transition-colors ${
                location.pathname === '/' ? 'text-secondary-200 font-semibold' : ''
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-white hover:text-secondary-200 py-2 transition-colors ${
                location.pathname === '/about' ? 'text-secondary-200 font-semibold' : ''
              }`}
            >
              About
            </Link>
            <Link
              to="/services"
              className={`text-white hover:text-secondary-200 py-2 transition-colors ${
                location.pathname === '/services' ? 'text-secondary-200 font-semibold' : ''
              }`}
            >
              Services
            </Link>
            <Link
              to="/contact"
              className={`text-white hover:text-secondary-200 py-2 transition-colors ${
                location.pathname === '/contact' ? 'text-secondary-200 font-semibold' : ''
              }`}
            >
              Contact
            </Link>
            <Link
              to="/donate"
              className="bg-white text-primary-700 px-6 py-2 rounded-md hover:bg-secondary-100 transition-colors font-semibold"
            >
              Donate
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-white/10 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-white"
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
                className={`text-white hover:text-secondary-200 py-2 transition-colors ${
                  location.pathname === '/' ? 'text-secondary-200 font-semibold' : ''
                }`}
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`text-white hover:text-secondary-200 py-2 transition-colors ${
                  location.pathname === '/about' ? 'text-secondary-200 font-semibold' : ''
                }`}
                onClick={closeMenu}
              >
                About
              </Link>
              <Link
                to="/services"
                className={`text-white hover:text-secondary-200 py-2 transition-colors ${
                  location.pathname === '/services' ? 'text-secondary-200 font-semibold' : ''
                }`}
                onClick={closeMenu}
              >
                Services
              </Link>
              <Link
                to="/contact"
                className={`text-white hover:text-secondary-200 py-2 transition-colors ${
                  location.pathname === '/contact' ? 'text-secondary-200 font-semibold' : ''
                }`}
                onClick={closeMenu}
              >
                Contact
              </Link>
              <Link
                to="/donate"
                className="bg-white text-primary-700 px-6 py-2 rounded-md hover:bg-secondary-100 transition-colors font-semibold text-center"
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