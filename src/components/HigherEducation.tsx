import { GraduationCap, Target, Users, Sparkles } from 'lucide-react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
=======
>>>>>>> 6a7a15f4efb28d13e4f833ead200eeb911230958

export default function HigherEducation() {
  const programs = [
    {
      title: 'Diploma in English Language Teaching',
      duration: '1 Year',
      description: 'Comprehensive program for aspiring English teachers with practical teaching experience and methodology training.',
    },
    {
      title: 'Advanced Diploma in Business Communication',
      duration: '1.5 Years',
      description: 'Specialized program focusing on professional communication, business writing, and corporate English.',
    },
    {
      title: 'Certificate in Translation & Interpretation',
      duration: '6 Months',
      description: 'Professional training in translation techniques and simultaneous interpretation skills.',
    },
  ];

  const features = [
    {
      icon: Target,
      title: 'Task-Based Learning',
      description: 'Our innovative approach focuses on real-world tasks and practical applications, ensuring students develop skills they can immediately use in their careers.',
    },
    {
      icon: Users,
      title: 'Expert Faculty',
      description: 'Learn from experienced professionals with advanced qualifications and extensive industry experience in language education.',
    },
    {
      icon: Sparkles,
      title: 'Industry Recognition',
      description: 'Our diplomas and certificates are recognized by employers across Sri Lanka and internationally, opening doors to exciting career opportunities.',
    },
  ];

  return (
    <section id="higher-education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            ESOL Premier Campus
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Higher Education Programs
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Take your English language expertise to the next level with our comprehensive diploma and certificate programs, designed for those seeking professional qualifications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Task-Based Learning Approach
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              At ESOL Premier Campus, we've revolutionized higher education in English language studies through our innovative task-based learning methodology. This approach moves beyond traditional textbook learning to focus on practical, real-world applications.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Students engage in authentic tasks that mirror professional scenarios, developing not just language skills but also critical thinking, problem-solving, and collaborative abilities that employers value.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="font-bold text-gray-900 mb-1">Practical Focus</p>
                <p className="text-sm text-gray-600">Real-world applications</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="font-bold text-gray-900 mb-1">Career Ready</p>
                <p className="text-sm text-gray-600">Industry-aligned skills</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/5212320/pexels-photo-5212320.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Higher education classroom"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8" />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-12">
            Available Programs
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-blue-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-blue-600 text-white w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                  {program.duration}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{program.title}</h4>
                <p className="text-gray-600 mb-6 leading-relaxed">{program.description}</p>
<<<<<<< HEAD
                <Link
                  to="/contact"
                  className="block w-full text-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
                >
                  Learn More
                </Link>
=======
                <a
                  href="#contact"
                  className="block w-full text-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
                >
                  Learn More
                </a>
>>>>>>> 6a7a15f4efb28d13e4f833ead200eeb911230958
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
