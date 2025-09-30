import { GraduationCap, MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const locations = [
    { name: 'Maharagama Branch', address: 'High Level Road, Maharagama' },
    { name: 'Malabe Branch', address: 'Kaduwela Road, Malabe' },
    { name: 'Hanwella Branch', address: 'Main Street, Hanwella' },
  ];

  const quickLinks = [
    { name: 'About Us', to: '/about' },
    { name: 'Programs', to: '/programs' },
    { name: 'Higher Education', to: '/higher-education' },
    { name: 'Study Abroad', to: '/study-abroad' },
    { name: 'Student Portal', to: '/' },
    { name: 'News & Events', to: '/news' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <GraduationCap className="w-8 h-8 text-blue-500" />
              <div>
                <h3 className="text-white text-xl font-bold">ESOL College</h3>
                <p className="text-xs text-gray-400">esol.lk</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Leading English language education center in Sri Lanka, committed to delivering quality education and practical skills for success.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    className="text-sm hover:text-blue-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Our Locations</h4>
            <ul className="space-y-3">
              {locations.map((location) => (
                <li key={location.name} className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-blue-500" />
                  <div>
                    <p className="text-sm font-medium text-white">{location.name}</p>
                    <p className="text-xs text-gray-400">{location.address}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-500" />
                <span className="text-sm">+94 11 234 5678</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-500" />
                <span className="text-sm">info@esol.lk</span>
              </li>
            </ul>
            <div className="mt-6">
              <h5 className="text-white font-semibold mb-2 text-sm">Office Hours</h5>
              <p className="text-sm text-gray-400">Monday - Friday: 8:00 AM - 8:00 PM</p>
              <p className="text-sm text-gray-400">Saturday: 9:00 AM - 6:00 PM</p>
              <p className="text-sm text-gray-400">Sunday: 9:00 AM - 2:00 PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} ESOL College. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
