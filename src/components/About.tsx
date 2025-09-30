import { Award, Users, Target, CheckCircle } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering the highest quality English education through proven methodologies and expert instructors.',
    },
    {
      icon: Users,
      title: 'Student-Centered',
      description: 'Every program is designed with our students success in mind, offering personalized attention and support.',
    },
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'Our focus is on measurable outcomes, helping students achieve their language goals and career aspirations.',
    },
  ];

  const achievements = [
    '25+ years of excellence in English language education',
    'Over 50,000 successful students',
    'Partnerships with leading international institutions',
    'Experienced and qualified instructors',
    'Modern teaching facilities across 3 locations',
    'Proven track record in exam preparation',
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              About ESOL College
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Since our establishment, ESOL College has been at the forefront of English language education in Sri Lanka. We are dedicated to empowering students of all ages with the language skills they need to succeed in an increasingly connected world.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Our comprehensive programs combine traditional teaching excellence with modern, interactive learning methods. From young children taking their first steps in English to professionals seeking to advance their careers, we provide a supportive and engaging environment for everyone.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              With three conveniently located branches in Maharagama, Malabe, and Hanwella, ESOL College continues to be the trusted choice for quality English education.
            </p>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="ESOL College classroom"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-xl shadow-xl max-w-xs">
              <p className="text-3xl font-bold mb-1">25+</p>
              <p className="text-sm">Years of Educational Excellence</p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-12">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors duration-300"
                >
                  <div className="flex justify-center mb-4">
                    <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center">
                      <Icon className="w-8 h-8" />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 sm:p-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Choose ESOL College?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700 font-medium">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
