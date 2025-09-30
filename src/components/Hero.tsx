import { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowRight, Award, Users, Globe, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const slides = useMemo(
    () => [
      {
        image:
          'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1600',
        headline: 'Start Your Journey Today',
        sub: 'Interactive classes, expert instructors, proven results',
      },
      {
        image:
          'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=1600',
        headline: 'Learn With Confidence',
        sub: 'Modern methods and real-world practice',
      },
      {
        image:
          'https://images.pexels.com/photos/4144222/pexels-photo-4144222.jpeg?auto=compress&cs=tinysrgb&w=1600',
        headline: 'Achieve Your Goals',
        sub: 'From beginners to professionals',
      },
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const timerRef = useRef<number | null>(null);

  const next = () => setIndex((i) => (i + 1) % slides.length);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const goTo = (i: number) => setIndex(i % slides.length);

  useEffect(() => {
    if (timerRef.current) window.clearInterval(timerRef.current);
    timerRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 5000);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [slides.length]);

  return (
    <section id="home" className="pt-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Sri Lanka's Leading English Language Institute
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Master English, <span className="text-blue-600">Unlock Your Future</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Join thousands of students who have transformed their careers and lives through our
              comprehensive English language programs. From young learners to professionals, we offer
              tailored courses that deliver real-world results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                to="/programs"
                className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl"
              >
                Explore Programs
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-200 font-semibold"
              >
                Book a Free Consultation
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <p className="text-2xl font-bold text-gray-900">25+</p>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <p className="text-2xl font-bold text-gray-900">50,000+</p>
                <p className="text-sm text-gray-600">Students Trained</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Globe className="w-8 h-8 text-blue-600" />
                </div>
                <p className="text-2xl font-bold text-gray-900">3</p>
                <p className="text-sm text-gray-600">Locations</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px]">
              {slides.map((s, i) => (
                <img
                  key={i}
                  src={s.image}
                  alt={s.headline}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                    i === index ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <p className="text-lg font-semibold mb-1">{slides[index].headline}</p>
                <p className="text-sm opacity-90">{slides[index].sub}</p>
              </div>

              <button
                aria-label="Previous slide"
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                aria-label="Next slide"
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Go to slide ${i + 1}`}
                    onClick={() => goTo(i)}
                    className={`h-2 w-2 rounded-full ${i === index ? 'bg-white' : 'bg-white/60'}`}
                  />
                ))}
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6 max-w-xs hidden lg:block">
              <p className="text-3xl font-bold text-blue-600 mb-1">95%</p>
              <p className="text-sm text-gray-600">Student success rate in achieving their language goals</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
