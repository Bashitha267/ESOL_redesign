import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';

// --- Combined Carousel & Content Data ---
// Combining image and text makes the component more modular and easier to update.
const slides = [
  {
    image: 'https://res.cloudinary.com/dnfbik3if/image/upload/v1759432973/5e0d7e2d4cd17_slider-20_nagtqi.jpg',
    alt: 'Students collaborating in a bright, modern space',
    title: "Unlock Your Future with World-Class Education",
    description: "As a British Council Platinum Partner, we empower students with certified courses from the University of Cambridge.",
    cta1_text: "Explore Courses",
    cta1_link: "/higher-education",
    cta2_text: "Learn More",
    cta2_link: "/contact",
  },
  {
    image: 'https://res.cloudinary.com/dnfbik3if/image/upload/v1759432973/5e0edfbe0c5d1_slider-7_vaci3p.jpg',
    alt: 'Group of students working together on laptops',
    title: "Over a Decade of Educational Excellence",
    description: "Join over 5,000 empowered students who have advanced their careers and skills with our guidance.",
    cta1_text: "Our Story",
    cta1_link: "/",
    cta2_text: "Contact Us",
    cta2_link: "/contact",
  },
  {
    image: 'https://res.cloudinary.com/dnfbik3if/image/upload/v1759432962/5e0d7e2d4cd17_slider-24_mfv90e.jpg',
    alt: 'Students in graduation gowns celebrating their achievement',
    title: "Your Journey to Success Starts Here",
    description: "We provide the tools, support, and environment you need to achieve your academic and professional goals.",
    cta1_text: "View Programs",
    cta1_link: "/higher-education",
    cta2_text: "Get In Touch",
    cta2_link: "/contact",
  },
];

// --- Main App Component ---
export default function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Hero />
    </div>
  );
}


// --- Modern Hero Section Component ---
function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Auto-play functionality
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    return () => clearInterval(slideInterval); // Clean up on component unmount
  }, [currentIndex]);

  return (
    <section id="home" className=" w-full h-screen min-h-[600px] md:min-h-[700px] flex flex-col justify-center items-center text-white overflow-hidden">
      
      {/* --- Carousel Background Images --- */}
      <div className="absolute top-0 left-0 w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100 z-0' : 'opacity-0'}`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
            {/* Dark overlay for better text readability */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>
          </div>
        ))}
      </div>

      {/* --- Carousel Content Overlay --- */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        {/* Animated text content */}
        <div key={currentIndex} className="animate-fadeIn">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight drop-shadow-lg">
            {slides[currentIndex].title}
          </h1>
          <p className="mt-6 text-lg sm:text-xl max-w-2xl mx-auto drop-shadow-md">
            {slides[currentIndex].description}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a href={slides[currentIndex].cta1_link} className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition-transform hover:scale-105">
              {slides[currentIndex].cta1_text}
            </a>
            <a href={slides[currentIndex].cta2_link} className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-900 bg-white/90 hover:bg-white transition-transform hover:scale-105">
              {slides[currentIndex].cta2_text}
            </a>
          </div>
        </div>
      </div>
      
      {/* --- Navigation Arrows --- */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/30 p-3 rounded-full shadow-lg hover:bg-white/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 z-20"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-7 w-7 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/30 p-3 rounded-full shadow-lg hover:bg-white/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 z-20"
        aria-label="Next slide"
      >
        <ChevronRight className="h-7 w-7 text-white" />
      </button>
      
      {/* --- Indicator Dots --- */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, slideIndex) => (
          <button
            key={slideIndex}
            onClick={() => setCurrentIndex(slideIndex)}
            className={`h-3 w-3 rounded-full cursor-pointer transition-all duration-300 ${currentIndex === slideIndex ? 'bg-indigo-500 w-6' : 'bg-white/50 hover:bg-white'}`}
            aria-label={`Go to slide ${slideIndex + 1}`}
          />
        ))}
      </div>

      {/* --- Key Statistics Section (Below the fold/carousel) ---
      <div className="absolute bottom-0 left-0 right-0 bg-gray-50 text-gray-900 p-6 md:hidden">
         <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                  <p className="text-xl font-bold text-indigo-600">10+</p>
                  <p className="text-sm text-gray-500">Years</p>
              </div>
              <div>
                  <p className="text-xl font-bold text-indigo-600">5000+</p>
                  <p className="text-sm text-gray-500">Students</p>
              </div>
              <div>
                  <p className="text-xl font-bold text-indigo-600">Partner</p>
                  <p className="text-sm text-gray-500">British Council</p>
              </div>
          </div>
      </div> */}
    </section>
  );
}
