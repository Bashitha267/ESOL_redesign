import {
  BarChart,
  BookOpen,
  ClipboardCheck,
  GraduationCap,
  Layers,
  PenTool,
  Rocket
} from 'lucide-react';
import { useState } from 'react';

// Data for all the courses. This makes the component clean and easy to update.
const courses = [
  {
    key: 'kj1',
    label: 'KJ - JUNIOR BEGINNERS 1',
    icon: <BookOpen size={20} />,
    content: "Kindergarten is the preliminary level where young children are taught the alphabet and the words related to each letter. Basic things such as numbers, shapes, and colors will also be taught in detail during this level, and at the end of the level, young learners are expected to excel in identifying the said criteria effortlessly. This goal is achieved via our panel of teachers who will guide young learners with examples, revisionary tests, and in-class activities.",
    content2:"A student-friendly environment is infused with kindergarten classes that would make them comfortable for the learning process. Undivided individual attention will be provided to each student during class time and parents are advised to keep constant communication with the class teacher regarding their progress and concerns. Kinder is not a level that focuses on in-depth English language activities but moreover, a preliminary level that introduces young children to the English language and the journey of learning that awaits them."
  },
  {
    key: 'ks2',
    label: 'KS - JUNIOR BEGINNERS 2',
    icon: <BookOpen size={20} />,
    content: "Kindergarten is the preliminary level where young children are taught the alphabet and the words related to each letter. Basic things such as numbers, shapes, and colors will also be taught in detail during this level, and at the end of the level, young learners are expected to excel in identifying the said criteria effortlessly. This goal is achieved via our panel of teachers who will guide young learners with examples, revisionary tests, and in-class activities.",
    content2:"A student-friendly environment is infused with kindergarten classes that would make them comfortable for the learning process. Undivided individual attention will be provided to each student during class time and parents are advised to keep constant communication with the class teacher regarding their progress and concerns. Kinder is not a level that focuses on in-depth English language activities but moreover, a preliminary level that introduces young children to the English language and the journey of learning that awaits them"
    
  },
  {
    key: 'psj1',
    label: 'PSJ - BEGINNERS 1',
    icon: <Layers size={20} />,
    content: "The Pre-School Junior course is designed for young learners that would encourage them to start learning English using their own experiences. This level focuses on encouraging children to be more creative, and expressive and learn English systematically. During Pre School Junior, students will be taught the language in a far less complex approach in contrast to other levels. The content that will be taught at this level will be age-appropriate for young learners and will not burden them with a vast amount of knowledge.",
    content2:"For each day, 2 nouns will be taught to children and the following week, what has been taught will be revised as well. Apart from that, nursery rhymes are recited in the class in groups and individually to familiarize students with the language and pronunciation. Teaching Nursery Rhymes will also be a methodology of teaching vocabulary apart from the words the children are being taught in class. Vocabulary-related activities will take place in the classroom every week to prepare young children to be effective speakers daily. The Alphabet which also has been taught previously will be revised until they get a good grasp on the letters and how to use them appropriately in words."
  },
  {
    key: 'ps2',
    label: 'PS - BEGINNERS 2',
    icon: <Layers size={20} />,
    content: "Content for PS - BEGINNERS 2 will be displayed here."
  },
  {
    key: 'l1',
    label: 'L1 - ELEMENTARY 1',
    icon: <PenTool size={20} />,
    content: "Content for L1 - ELEMENTARY 1 will be displayed here."
  },
  {
    key: 'l2',
    label: 'L2 - ELEMENTARY 2',
    icon: <PenTool size={20} />,
    content: "Content for L2 - ELEMENTARY 2 will be displayed here."
  },
  {
    key: 'l3',
    label: 'L3 - PRE INTERMEDIATE 1',
    icon: <BarChart size={20} />,
    content: "Content for L3 - PRE INTERMEDIATE 1 will be displayed here."
  },
  {
    key: 'l4',
    label: 'L4 - PRE INTERMEDIATE 2',
    icon: <BarChart size={20} />,
    content: "Content for L4 - PRE INTERMEDIATE 2 will be displayed here."
  },
  {
    key: 'l5',
    label: 'L5 - INTERMEDIATE',
    icon: <Rocket size={20} />,
    content: "Content for L5 - INTERMEDIATE will be displayed here."
  },
  {
    key: 'ket',
    label: 'KET - UPPER INTERMEDIATE 1',
    icon: <ClipboardCheck size={20} />,
    content: "Content for KET - UPPER INTERMEDIATE 1 will be displayed here."
  },
  {
    key: 'pet',
    label: 'PET - UPPER INTERMEDIATE 2',
    icon: <ClipboardCheck size={20} />,
    content: "Content for PET - UPPER INTERMEDIATE 2 will be displayed here."
  },
  {
    key: 'fce',
    label: 'FCE - ADVANCE',
    icon: <GraduationCap size={20} />,
    content: "Content for FCE - ADVANCE will be displayed here."
  },
];


export default function Stages() {
  // State to keep track of the currently selected tab
  const [activeTab, setActiveTab] = useState('kj1');

  // Find the course object that matches the active tab
  const activeCourse = courses.find(course => course.key === activeTab);

  return (
    <section id="higher-education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-5">
               Courses
            </h2>
            <h1 className="text-2xl font-semibold text-gray-800 sm:text-2xl text-left">When you partner with ESOL College, we help you identify the qualification that fits you!</h1>
            <p className="mt-4 text-lg text-gray-600 text-left">
               You may be a complete beginner, student, professional or even a fluent speaker desiring to take your language skills to the next level; at ESOL there is a course that suits everyone’s requirements.
            </p>
        </div>
        
        <div className='my-5 flex justify-center'>
    <img 
        src='https://res.cloudinary.com/dnfbik3if/image/upload/v1759288734/CEFR-Level_fzic5b.jpg' 
       
        className='object-cover w-full max-w-2xl rounded-lg shadow-md'
    />
</div>
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Left Side: Navigation Tabs */}
          <div className="lg:col-span-4">
            <nav className="space-y-2" aria-label="Sidebar">
              {courses.map((course) => (
                <button
                  key={course.key}
                  onClick={() => setActiveTab(course.key)}
                  className={`
                    w-full flex items-center px-4 py-3 rounded-lg transition-all duration-200 ease-in-out
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                    ${
                      activeTab === course.key
                        ? 'bg-indigo-600 text-white font-semibold shadow-md'
                        : 'text-gray-700 hover:bg-gray-200 hover:text-gray-900'
                    }
                  `}
                >
                  <span className="mr-3">{course.icon}</span>
                  {course.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Right Side: Content Area */}
          <div className="mt-8 lg:mt-0 lg:col-span-8">
            <div className="bg-white p-8 rounded-xl shadow-lg h-full">
              {activeCourse ? (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {activeCourse.label}
                  </h3>
                  <p className="mt-4 text-gray-600 leading-relaxed">
                    {activeCourse.content}

                  </p>
                    <p className="mt-4 text-gray-600 leading-relaxed">
                    {activeCourse.content2}

                  </p>
                   
                  <button className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Enroll Now
                  </button>
                </div>
              ) : (
                <p>Please select a course to see the details.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}