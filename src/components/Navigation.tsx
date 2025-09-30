<<<<<<< HEAD
import { GraduationCap, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
=======
import { useState } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';
>>>>>>> 6a7a15f4efb28d13e4f833ead200eeb911230958

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
<<<<<<< HEAD
    { name: 'Home', to: '/' },
    { name: 'Management', to: '/about' },
    { name: 'Examination', to: '/programs' },
    { name: 'Stages', to: '/higher-education' },
    { name: 'Student Life', to: '/study-abroad' },
    { name: 'Calender', to: '/news' },
    { name: 'Inquiry', to: '/contact' },
    { name: 'About', to: '/about' },

    { name: 'Contact', to: '/contact' },

  ];

  const linkBase = 'text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200';
  const activeClass = 'text-blue-600';

=======
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Higher Education', href: '#higher-education' },
    { name: 'Study Abroad', href: '#study-abroad' },
    { name: 'News & Events', href: '#news' },
    { name: 'Contact', href: '#contact' },
  ];

>>>>>>> 6a7a15f4efb28d13e4f833ead200eeb911230958
  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <GraduationCap className="w-10 h-10 text-blue-600" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">ESOL College</h1>
              <p className="text-xs text-gray-600">Excellence in English Education</p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
<<<<<<< HEAD
              <NavLink
                key={link.name}
                to={link.to}
                className={({ isActive }) => `${linkBase} ${isActive ? activeClass : ''}`}
              >
                {link.name}
              </NavLink>
            ))}
            {/* <Link
              to="/contact"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
            >
              Register Now
            </Link> */}
=======
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#register"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
            >
              Register Now
            </a>
>>>>>>> 6a7a15f4efb28d13e4f833ead200eeb911230958
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
<<<<<<< HEAD
              <NavLink
                key={link.name}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => `block ${linkBase} ${isActive ? activeClass : ''} py-2`}
              >
                {link.name}
              </NavLink>
            ))}
            <Link
              to="/contact"
=======
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-gray-700 hover:text-blue-600 font-medium py-2"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#register"
>>>>>>> 6a7a15f4efb28d13e4f833ead200eeb911230958
              onClick={() => setIsOpen(false)}
              className="block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 text-center font-medium"
            >
              Register Now
<<<<<<< HEAD
            </Link>
=======
            </a>
>>>>>>> 6a7a15f4efb28d13e4f833ead200eeb911230958
          </div>
        </div>
      )}
    </nav>
  );
}
