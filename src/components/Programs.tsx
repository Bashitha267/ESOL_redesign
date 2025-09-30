import { Clock, Calendar, TrendingUp, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Programs() {
  const programCategories = [
    {
      category: 'Young Learners',
      age: 'Ages 5-12',
      description: 'Building strong language foundations through fun and interactive learning',
      courses: [
        {
          title: 'Primary English',
          duration: '6 months',
          frequency: 'Twice weekly',
          level: 'Beginner to Intermediate',
          highlights: ['Interactive games', 'Story-based learning', 'Creative activities'],
        },
        {
          title: 'Junior Speaking Club',
          duration: '3 months',
          frequency: 'Once weekly',
          level: 'All levels',
          highlights: ['Confidence building', 'Pronunciation practice', 'Group activities'],
        },
      ],
    },
    {
      category: 'Teenagers',
      age: 'Ages 13-17',
      description: 'Comprehensive English skills for academic success and personal growth',
      courses: [
        {
          title: 'General English for Teens',
          duration: '8 months',
          frequency: 'Twice weekly',
          level: 'Elementary to Advanced',
          highlights: ['Grammar mastery', 'Writing skills', 'Discussion practice'],
        },
        {
          title: 'O/L & A/L English Support',
          duration: '6 months',
          frequency: 'Weekly',
          level: 'Intermediate',
          highlights: ['Exam techniques', 'Essay writing', 'Literature analysis'],
        },
      ],
    },
    {
      category: 'Adults',
      age: '18+',
      description: 'Practical English for everyday communication and career advancement',
      courses: [
        {
          title: 'General English',
          duration: '6 months',
          frequency: 'Flexible schedule',
          level: 'All levels',
          highlights: ['Speaking fluency', 'Listening comprehension', 'Practical vocabulary'],
        },
        {
          title: 'Business English',
          duration: '4 months',
          frequency: 'Weekends',
          level: 'Intermediate to Advanced',
          highlights: ['Professional communication', 'Presentation skills', 'Email writing'],
        },
      ],
    },
    {
      category: 'Exam Preparation',
      age: 'All ages',
      description: 'Specialized training for international English proficiency tests',
      courses: [
        {
          title: 'IELTS Preparation',
          duration: '3 months',
          frequency: 'Intensive',
          level: 'Intermediate+',
          highlights: ['All 4 modules', 'Mock tests', 'Score improvement strategies'],
        },
        {
          title: 'TOEFL / PTE',
          duration: '3 months',
          frequency: 'Intensive',
          level: 'Intermediate+',
          highlights: ['Computer-based practice', 'Test strategies', 'Score guarantees'],
        },
      ],
    },
  ];

  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive English Programs
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Whether you're starting your English learning journey or preparing for international exams,
            we have the perfect program tailored to your needs and goals.
          </p>
        </div>

        <div className="space-y-12">
          {programCategories.map((category, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 sm:p-8">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-2">{category.category}</h3>
                    <p className="text-blue-100 text-sm font-semibold">{category.age}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-blue-100">{category.description}</p>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.courses.map((course, courseIdx) => (
                    <div
                      key={courseIdx}
                      className="border-2 border-gray-100 rounded-xl p-6 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
                    >
                      <h4 className="text-xl font-bold text-gray-900 mb-4">{course.title}</h4>

                      <div className="space-y-3 mb-6">
                        <div className="flex items-center text-gray-600">
                          <Clock className="w-5 h-5 mr-3 text-blue-600" />
                          <span className="text-sm">Duration: {course.duration}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Calendar className="w-5 h-5 mr-3 text-blue-600" />
                          <span className="text-sm">Schedule: {course.frequency}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <TrendingUp className="w-5 h-5 mr-3 text-blue-600" />
                          <span className="text-sm">Level: {course.level}</span>
                        </div>
                      </div>

                      <div className="mb-6">
                        <p className="text-sm font-semibold text-gray-700 mb-2">Course Highlights:</p>
                        <ul className="space-y-2">
                          {course.highlights.map((highlight, hIdx) => (
                            <li key={hIdx} className="flex items-start text-sm text-gray-600">
                              <BookOpen className="w-4 h-4 mr-2 text-blue-600 flex-shrink-0 mt-0.5" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Link
                        to="/contact"
                        className="block w-full text-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
                      >
                        Enroll Now
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 sm:p-12 text-white text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Not Sure Which Program to Choose?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Our experienced counselors are here to help you find the perfect course based on your
            current level, goals, and schedule.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors duration-200 font-semibold shadow-lg"
          >
            Schedule a Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
