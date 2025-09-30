import { Calendar, Clock, ArrowRight } from 'lucide-react';

export default function News() {
  const news = [
    {
      title: 'New IELTS Intensive Course Starting in October',
      date: '2025-09-28',
      category: 'Course Launch',
      image: 'https://images.pexels.com/photos/5212329/pexels-photo-5212329.jpeg?auto=compress&cs=tinysrgb&w=600',
      excerpt: 'Join our comprehensive IELTS preparation course designed to help you achieve your target band score. Limited seats available.',
      readTime: '3 min read',
    },
    {
      title: 'Study Abroad Fair: UK & Australia Universities',
      date: '2025-10-15',
      category: 'Event',
      image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=600',
      excerpt: 'Meet representatives from over 25 universities and explore study opportunities. Free admission for all students.',
      readTime: '2 min read',
    },
    {
      title: 'Success Story: 500+ Students Achieve IELTS 7+ Band',
      date: '2025-09-20',
      category: 'Achievement',
      image: 'https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=600',
      excerpt: 'Celebrating our students remarkable achievements in the September IELTS examination cycle with outstanding results.',
      readTime: '4 min read',
    },
    {
      title: 'Free English Proficiency Assessment Days',
      date: '2025-10-05',
      category: 'Workshop',
      image: 'https://images.pexels.com/photos/5212320/pexels-photo-5212320.jpeg?auto=compress&cs=tinysrgb&w=600',
      excerpt: 'Discover your English level with our comprehensive assessment. Get personalized course recommendations from our experts.',
      readTime: '2 min read',
    },
  ];

  const upcomingEvents = [
    {
      title: 'Business English Workshop',
      date: '2025-10-12',
      time: '10:00 AM - 1:00 PM',
      location: 'Maharagama Branch',
    },
    {
      title: 'Parent Information Session',
      date: '2025-10-18',
      time: '6:00 PM - 7:30 PM',
      location: 'All Branches',
    },
    {
      title: 'Career Guidance Seminar',
      date: '2025-10-25',
      time: '2:00 PM - 5:00 PM',
      location: 'Malabe Branch',
    },
  ];

  return (
    <section id="news" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            News & Events
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest news, events, and success stories from ESOL College.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Latest News</h3>
            <div className="space-y-6">
              {news.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white border-2 border-gray-100 rounded-xl overflow-hidden hover:border-blue-200 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="sm:col-span-1">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-48 sm:h-full object-cover"
                      />
                    </div>
                    <div className="sm:col-span-2 p-6">
                      <div className="flex items-center space-x-4 mb-3">
                        <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                          {item.category}
                        </span>
                        <div className="flex items-center text-gray-500 text-sm">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </div>
                        <div className="flex items-center text-gray-500 text-sm">
                          <Clock className="w-4 h-4 mr-1" />
                          {item.readTime}
                        </div>
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {item.excerpt}
                      </p>
                      <a
                        href="#"
                        className="inline-flex items-center text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Events</h3>
            <div className="space-y-4">
              {upcomingEvents.map((event, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start space-x-3 mb-3">
                    <div className="bg-blue-600 text-white rounded-lg p-2 text-center min-w-[60px]">
                      <p className="text-xs font-semibold">
                        {new Date(event.date).toLocaleDateString('en-US', { month: 'short' }).toUpperCase()}
                      </p>
                      <p className="text-2xl font-bold">
                        {new Date(event.date).getDate()}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">{event.title}</h4>
                      <p className="text-sm text-gray-600 flex items-center mb-1">
                        <Clock className="w-3 h-3 mr-1" />
                        {event.time}
                      </p>
                      <p className="text-sm text-gray-600">{event.location}</p>
                    </div>
                  </div>
                  <button className="w-full mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-semibold">
                    Register Now
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-white border-2 border-gray-100 rounded-xl p-6">
              <h4 className="font-bold text-gray-900 mb-3">Subscribe to Updates</h4>
              <p className="text-sm text-gray-600 mb-4">
                Get the latest news and event notifications delivered to your inbox.
              </p>
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none mb-3 text-sm"
              />
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
