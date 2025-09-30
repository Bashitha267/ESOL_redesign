import { useState } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';
import { NavLink, Link } from 'react-router-dom';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    { name: 'Programs', to: '/programs' },
    { name: 'Higher Education', to: '/higher-education' },
    { name: 'Study Abroad', to: '/study-abroad' },
    { name: 'News & Events', to: '/news' },
    { name: 'Contact', to: '/contact' },
  ];

  const linkBase = 'text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200';
  const activeClass = 'text-blue-600';

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
              <NavLink
                key={link.name}
                to={link.to}
                className={({ isActive }) => `${linkBase} ${isActive ? activeClass : ''}`}
              >
                {link.name}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
            >
              Register Now
            </Link>
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
              onClick={() => setIsOpen(false)}
              className="block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 text-center font-medium"
            >
              Register Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
