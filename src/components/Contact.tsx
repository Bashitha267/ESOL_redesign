import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
=======
>>>>>>> 6a7a15f4efb28d13e4f833ead200eeb911230958

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const locations = [
    {
      name: 'Maharagama Branch',
      address: 'No. 123, High Level Road, Maharagama',
      phone: '+94 11 234 5678',
      email: 'maharagama@esol.lk',
    },
    {
      name: 'Malabe Branch',
      address: 'No. 456, Kaduwela Road, Malabe',
      phone: '+94 11 234 5679',
      email: 'malabe@esol.lk',
    },
    {
      name: 'Hanwella Branch',
      address: 'No. 789, Main Street, Hanwella',
      phone: '+94 11 234 5680',
      email: 'hanwella@esol.lk',
    },
  ];

  const programs = [
    'Young Learners Program',
    'Teen English Course',
    'Adult General English',
    'Business English',
    'IELTS Preparation',
    'TOEFL Preparation',
    'Higher Education Program',
    'Study Abroad Consultation',
    'Other',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    await new Promise(resolve => setTimeout(resolve, 1500));

    setSubmitStatus('success');
    setIsSubmitting(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      program: '',
      message: '',
    });

    setTimeout(() => setSubmitStatus('idle'), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about our programs? We're here to help. Contact us today or visit one of our branches.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {locations.map((location, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{location.name}</h3>
              <div className="space-y-3">
                <p className="text-gray-600 text-sm flex items-start">
                  <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0 text-gray-400" />
                  {location.address}
                </p>
                <p className="text-gray-600 text-sm flex items-center">
                  <Phone className="w-4 h-4 mr-2 flex-shrink-0 text-gray-400" />
                  {location.phone}
                </p>
                <p className="text-gray-600 text-sm flex items-center">
                  <Mail className="w-4 h-4 mr-2 flex-shrink-0 text-gray-400" />
                  {location.email}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors"
                    placeholder="+94 XX XXX XXXX"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="program" className="block text-sm font-semibold text-gray-700 mb-2">
                  Program of Interest *
                </label>
                <select
                  id="program"
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors"
                >
                  <option value="">Select a program</option>
                  {programs.map((program) => (
                    <option key={program} value={program}>
                      {program}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your learning goals or any questions you have..."
                />
              </div>

              {submitStatus === 'success' && (
                <div className="bg-green-50 text-green-700 px-4 py-3 rounded-lg border border-green-200">
                  Thank you! We'll get back to you within 24 hours.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>

          <div>
            <div className="bg-white rounded-xl p-8 shadow-lg mb-6">
              <div className="flex items-center space-x-3 mb-6">
                <Clock className="w-8 h-8 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-900">Office Hours</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="font-semibold text-gray-700">Monday - Friday</span>
                  <span className="text-gray-600">8:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="font-semibold text-gray-700">Saturday</span>
                  <span className="text-gray-600">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="font-semibold text-gray-700">Sunday</span>
                  <span className="text-gray-600">9:00 AM - 2:00 PM</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Visit Our Campus</h3>
              <p className="text-blue-100 mb-6">
                Experience our facilities firsthand and meet our experienced instructors. Walk-ins are
                welcome during office hours, or schedule an appointment for a personalized tour.
              </p>
<<<<<<< HEAD
              <Link
                to="/contact"
                className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors duration-200 font-semibold"
              >
                Register for a Free Class
              </Link>
=======
              <a
                href="#register"
                className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors duration-200 font-semibold"
              >
                Register for a Free Class
              </a>
>>>>>>> 6a7a15f4efb28d13e4f833ead200eeb911230958
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
