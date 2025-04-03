import { useState, useEffect } from 'react';
import earthquake1 from '../assets/images/1743559159645.jpg';
import earthquake2 from '../assets/images/1743152930716.png';

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  const slides = [
    {
      image: earthquake1,
      alt: 'Earthquake damage in Bangkok 1'
    },
    {
      image: earthquake2,
      alt: 'Earthquake damage in Bangkok 2'
    }
  ];

  useEffect(() => {
    let timer: number | undefined;
    if (isAutoPlaying) {
      timer = window.setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isAutoPlaying, slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPreviousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-emergency from-primary-900/50 to-secondary-900/50 z-10" />
      
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary-800/50 text-white p-2 rounded-full hover:bg-primary-700/75 transition-colors z-20"
        onClick={goToPreviousSlide}
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary-800/50 text-white p-2 rounded-full hover:bg-primary-700/75 transition-colors z-20"
        onClick={goToNextSlide}
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* Auto-play Toggle */}
      <button
        className="absolute bottom-4 right-4 bg-primary-800/50 text-white px-4 py-2 rounded-full hover:bg-primary-700/75 transition-colors z-20"
        onClick={toggleAutoPlay}
      >
        {isAutoPlaying ? 'Pause' : 'Play'}
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider; 