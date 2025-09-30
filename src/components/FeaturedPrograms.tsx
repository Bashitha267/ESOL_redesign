import { BookOpen, Briefcase, Baby, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FeaturedPrograms() {
  const programs = [
    {
      icon: Baby,
      title: 'Young Learners',
      description: 'Fun and engaging English programs designed for children aged 5-12, building strong language foundations through interactive activities.',
      age: 'Ages 5-12',
      color: 'bg-pink-100 text-pink-600',
      href: '/programs',
    },
    {
      icon: BookOpen,
      title: 'Teen & Adult Programs',
      description: 'Comprehensive courses for teenagers and adults focusing on practical communication skills and exam preparation.',
      age: 'Ages 13+',
      color: 'bg-blue-100 text-blue-600',
      href: '/programs',
    },
    {
      icon: Briefcase,
      title: 'Professional English',
      description: 'Business English courses tailored for working professionals to excel in corporate environments and advance their careers.',
      age: 'Professionals',
      color: 'bg-green-100 text-green-600',
      href: '/programs',
    },
    {
      icon: GraduationCap,
      title: 'Exam Preparation',
      description: 'Specialized training for IELTS, TOEFL, PTE, and other international English proficiency examinations.',
      age: 'All Levels',
      color: 'bg-amber-100 text-amber-600',
      href: '/programs',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Programs
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our wide range of specialized English language programs designed for every age group and learning objective.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program) => {
            const Icon = program.icon;
            return (
              <div
                key={program.title}
                className="bg-white rounded-xl border-2 border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 p-6 group cursor-pointer"
              >
                <div className={`${program.color} w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7" />
                </div>
                <div className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                  {program.age}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {program.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {program.description}
                </p>
                <Link
                  to={program.href}
                  className="inline-flex items-center text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/programs"
            className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl"
          >
            View All Programs
          </Link>
        </div>
      </div>
    </section>
  );
}
