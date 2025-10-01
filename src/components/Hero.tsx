import { Award, ChevronLeft, ChevronRight, Globe, Users } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// --- Carousel Data ---
// Replace these with your actual images and captions
const slides = [
  {
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop',
    caption: 'Empowering Students for a Decade'
  },
  {
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop',
    caption: 'Collaborative Learning Environment'
  },
  {
    image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop',
    caption: 'Internationally Recognized Programs'
  },
  {
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop',
    caption: 'Led by a Team of Expert Teachers'
  },
];

export default function Hero() {
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
    return () => clearInterval(slideInterval); // Clean up the interval on component unmount
  }, [currentIndex]);


  return (
    <section id="home" className="pt-24 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
          
          {/* --- Left Side: Content --- */}
          <div className="lg:col-span-6 text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
              Unlock Your Future with a <span className="text-indigo-600">World-Class</span> English Education
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              As a British Council Platinum Partner, we've been empowering students across Sri Lanka for over a decade with certified courses from the University of Cambridge.
            </p>
            
            {/* Call to Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/courses" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition-colors">
                Explore Courses
              </Link>
              <Link to="/about-us" className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-100 transition-colors">
                Learn More
              </Link>
            </div>

            {/* Key Statistics */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-6 text-left">
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <Award className="h-8 w-8 text-indigo-500" />
                <p className="mt-2 text-xl font-semibold text-gray-900">10+ Years</p>
                <p className="text-sm text-gray-500">of Excellence</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <Users className="h-8 w-8 text-indigo-500" />
                <p className="mt-2 text-xl font-semibold text-gray-900">5000+</p>
                <p className="text-sm text-gray-500">Students Empowered</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm col-span-2 sm:col-span-1">
                <Globe className="h-8 w-8 text-indigo-500" />
                <p className="mt-2 text-xl font-semibold text-gray-900">Platinum Partner</p>
                <p className="text-sm text-gray-500">British Council</p>
              </div>
            </div>
          </div>

          {/* --- Right Side: Carousel --- */}
          <div className="lg:col-span-6 mt-10 lg:mt-0">
             <div className="relative w-full h-80 lg:h-96 rounded-2xl shadow-2xl overflow-hidden group">
                {/* Slides Container */}
                <div 
                    className="w-full h-full flex transition-transform ease-in-out duration-700"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {slides.map((slide, index) => (
                        <div key={index} className="w-full h-full flex-shrink-0 bg-cover bg-center" style={{ backgroundImage: `url(${slide.image})` }}>
                            <div className="w-full h-full bg-black bg-opacity-30 flex items-end p-6">
                                <h3 className="text-white text-lg font-semibold">{slide.caption}</h3>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Navigation Arrows */}
                <button onClick={prevSlide} className="absolute top-1/2 left-3 -translate-y-1/2 bg-white/50 hover:bg-white/80 p-2 rounded-full transition-all opacity-0 group-hover:opacity-100 z-10">
                    <ChevronLeft className="h-6 w-6 text-gray-800" />
                </button>
                <button onClick={nextSlide} className="absolute top-1/2 right-3 -translate-y-1/2 bg-white/50 hover:bg-white/80 p-2 rounded-full transition-all opacity-0 group-hover:opacity-100 z-10">
                    <ChevronRight className="h-6 w-6 text-gray-800" />
                </button>
                
                {/* Indicator Dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                    {slides.map((_, slideIndex) => (
                        <div 
                            key={slideIndex} 
                            onClick={() => setCurrentIndex(slideIndex)}
                            className={`h-2 w-2 rounded-full cursor-pointer transition-all ${currentIndex === slideIndex ? 'bg-white w-4' : 'bg-white/50'}`}
                        />
                    ))}
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}