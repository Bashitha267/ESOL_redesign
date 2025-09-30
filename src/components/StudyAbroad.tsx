import { Plane, FileText, Award, Headphones as HeadphonesIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function StudyAbroad() {
  const services = [
    {
      icon: FileText,
      title: 'University Application Support',
      description: 'Expert guidance on selecting universities, preparing application documents, and meeting admission requirements.',
    },
    {
      icon: Award,
      title: 'Visa Assistance',
      description: 'Complete support with visa applications, documentation, and interview preparation for study abroad.',
    },
    {
      icon: HeadphonesIcon,
      title: 'Pre-Departure Counseling',
      description: 'Comprehensive orientation on living abroad, cultural adaptation, and academic expectations.',
    },
  ];

  const partnerships = [
    { country: 'United Kingdom', universities: '15+ partner universities' },
    { country: 'Australia', universities: '20+ partner universities' },
    { country: 'Canada', universities: '12+ partner universities' },
    { country: 'United States', universities: '10+ partner universities' },
  ];

  return (
    <section id="study-abroad" className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Plane className="w-12 h-12 text-blue-600" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Study Abroad Support
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Turn your dream of studying at a world-class university into reality. We provide end-to-end
            support to help you secure admission and successfully transition to international education.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Students studying abroad"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-xl shadow-xl max-w-xs hidden lg:block">
              <p className="text-3xl font-bold mb-1">500+</p>
              <p className="text-sm">Students placed in international universities annually</p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Your Gateway to Global Education
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              ESOL College has established strong partnerships with prestigious universities worldwide,
              opening doors for Sri Lankan students to pursue their higher education dreams abroad.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our experienced counselors guide you through every step of the process, from selecting the
              right university and program to securing your student visa and preparing for life in a new country.
            </p>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="font-bold text-gray-900 mb-4">Success Rate</h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-600">University Admissions</span>
                    <span className="text-sm font-bold text-blue-600">98%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '98%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-600">Visa Approvals</span>
                    <span className="text-sm font-bold text-blue-600">95%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-12">
            Our Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="bg-blue-100 text-blue-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">
            Our University Partnerships
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerships.map((partner, idx) => (
              <div
                key={idx}
                className="text-center p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-300"
              >
                <p className="font-bold text-gray-900 mb-2 text-lg">{partner.country}</p>
                <p className="text-sm text-gray-600">{partner.universities}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 sm:p-12 text-white text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Start Your Journey?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Book a free consultation with our study abroad counselors to explore your options and
            begin your application process.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors duration-200 font-semibold shadow-lg"
          >
            Book Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
