import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-emergency from-primary-800 to-secondary-800 shadow-lg">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <svg className="h-10 w-10 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L4 7V17L12 22L20 17V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M8 10L12 8L16 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 14L12 16L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-white text-xl font-bold">Let's Help Bangkok</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-8">
              <a href="#home" className="text-white hover:text-secondary-200 transition-colors py-2">Home</a>
              <a href="#about" className="text-white hover:text-secondary-200 transition-colors py-2">About</a>
              <a href="#services" className="text-white hover:text-secondary-200 transition-colors py-2">Services</a>
              <a href="#contact" className="text-white hover:text-secondary-200 transition-colors py-2">Contact</a>
            </div>
            <button className="bg-white text-primary-700 px-6 py-2 rounded-full hover:bg-secondary-100 transition-colors font-semibold">
              Donate Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-white hover:text-secondary-200 transition-colors py-2">Home</a>
              <a href="#about" className="text-white hover:text-secondary-200 transition-colors py-2">About</a>
              <a href="#services" className="text-white hover:text-secondary-200 transition-colors py-2">Services</a>
              <a href="#contact" className="text-white hover:text-secondary-200 transition-colors py-2">Contact</a>
              <button className="bg-white text-primary-700 px-6 py-2 rounded-full hover:bg-secondary-100 transition-colors font-semibold w-full">
                Donate Now
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header; 