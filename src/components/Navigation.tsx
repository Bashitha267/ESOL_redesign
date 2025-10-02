import { GraduationCap, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', to: '/' },
    // { name: 'Management', to: '/about' },
    // { name: 'Examination', to: '/programs' },
    { name: 'Stages', to: '/higher-education' },
    // { name: 'Student Life', to: '/study-abroad' },
    // { name: 'Calender', to: '/news' },
    // { name: 'Inquiry', to: '/contact' },
    { name: 'Contact', to: '/contact' },
  ];

  // --- 1. REMOVED 'text-gray-700' from this base variable ---
  const linkBase = 'hover:text-blue-600 font-medium transition-colors duration-200';
  const activeClassmobile = 'bg-blue-600 text-white px-4';
  const activeClass = ' text-blue-600 px-4 py-2    ';


  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <GraduationCap className="w-10 h-10 text-blue-600" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">ESOL College</h1>
              <p className="text-xs text-gray-600 ">Excellence in English Education</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                // --- 2. APPLIED default or active color conditionally ---
                className={({ isActive }) => 
                  `${linkBase} ${isActive ? activeClass : 'text-gray-700 px-4'}`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                onClick={() => setIsOpen(false)}
                // --- 3. APPLIED the same fix here for mobile view ---
                className={({ isActive }) => 
                  `block py-2 ${linkBase} ${isActive ? activeClassmobile : 'text-gray-700 px-4'}`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}