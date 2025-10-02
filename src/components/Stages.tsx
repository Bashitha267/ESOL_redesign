import {
  BarChart,
  BookOpen,
  ChevronDown // Import ChevronDown icon for the dropdown
  ,

























  ClipboardCheck,
  GraduationCap,
  Layers,
  PenTool,
  Rocket
} from 'lucide-react';
import { useState } from 'react';

// Data for all the courses (remains unchanged)
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
  { key: 'ps2', label: 'PS - BEGINNERS 2', icon: <Layers size={20} />, content: "This is an intricately designed early childhood development program that primarily aims for the 6 -7 age category. At this level, learners will be mainly taught vocabulary that is required to carry out conversations daily. Young learners are being taught how to build 3 worded sentences and this level is the step where they get a proper first glimpse of sentence construction. Later on, during more advanced levels, sentence construction is taught to a deeper extent where the preschool level obtains this goal by introducing them into 3 worded sentences.",content2:"During this level, their confidence in speaking is also being evaluated by teachers and steps are being taken to make students more comfortable and confident in using the English language. Additionally, reading, writing, speaking, and listening skills will be developed using in-class activities as well. Exercises such as tongue twisters are being practiced to improve pronunciation, phonetics, and accents. Preschool is a level that does not carry a heavy weight of academic knowledge but works as a stepping stone for young learners to enjoy learning while enhancing the skills they are gifted with." },

  { key: 'l1', label: 'L1 - ELEMENTARY 1', icon: <PenTool size={20} />, content: "L1 – Elementary 1 is a curriculum that is designed to familiarize young learners with the common vocabulary in the correct order which is designed for children between 7 – 9 years. Level 01 is the starting point for young learners where they learn how to express their ideas through essay writing while being competent sentence constructors. Simple forms of grammar are expected to learn during this level and primary language skills are also expected to improve in this level as well." },
  { key: 'l2', label: 'L2 - ELEMENTARY 2', icon: <PenTool size={20} />, content: "Similar to L1 - Elementary 1, L2 - Elementary 2 is another level where young learners are being sent to Cambridge Starters examination. Apart from usual classes, they are being extensively trained for examinations through extra sessions where exam focus areas are being thoroughly discussed. This level is designed for young learners aged around 10 years old. At this level, learners will be taught basic grammar structures. It is also a great opportunity for the learners to enhance their listening and speaking skills in and outside the classroom.",content2:"As always, an atmosphere where students are encouraged to learn is maintained in our classrooms and a student-centered teaching method is being followed where raising subject-related questions is encouraged and appreciated. The teacher works as a facilitator where students are asked to get the best support out of them rather than having students depend on them to expand their knowledge. Everything the students have learned in previous levels will be revised and the learning content in level 2 is purposely elevated to a slightly more advanced level than their previous levels. Teaching of grammar parts will be done through activities and examples while setting different goals to explore the language in higher dimensions." },
  { key: 'l3', label: 'L3 - PRE INTERMEDIATE 1', icon: <BarChart size={20} />, content: "This is a level that would continue for an approximate period of 1 year where 48 tutorials are being covered each week. Specially designed for students of age 9 – 11, this course comprises basic grammar parts as well. L3 - Pre-Intermediate 1 holds a significant place as a level where students are being prepared for the YLE Movers examination. Similar to previous curriculums this level further focuses on the reading ability, writing, listening, and speaking skills of young learners to a more sophisticated level than early levels. The vocabulary of the students is being expanded during this level while they are taught how to apply what they learned inside the classroom to their daily lives." },
  { key: 'l4', label: 'L4 - PRE INTERMEDIATE 2', icon: <BarChart size={20} />, content: "L4 – Pre Intermediate 2 is a continuation after L3 - Pre Intermediate 1 where everything they have learned in the previous level is elevated to a considerable extent. The learning experience is similar to L3 - Pre Intermediate 1 but the focus on reading, writing, speaking, and listening are far higher than their previous level. This is also a level where young learners are being prepared for the YLE Movers exam module. Students who successfully complete this level are being promoted to L5 - Intermediate. The vocabulary, grammar parts, and essay writing still happen in this stage but with more in-depth knowledge that suits the age group, this curriculum is looking at. L4 – Pre Intermediate 2 is specially designed for young learners between the age of 10 – 13 years." },
  { key: 'l5', label: 'L5 - INTERMEDIATE', icon: <Rocket size={20} />, content: "The aim of L5 - intermediate is to offer comprehensive insight into the English language through this tailor-made learning program. Young learners are expected to apply theoretical knowledge in practical scenarios to enrich their knowledge of the language. Grammar is a prominent focal point in this level while other primal skills such as reading, writing, listening, and speaking are given much attention as well. One significant addition to this level is the inclusion of team activities and confidence-building activities where the personalities of the students are being sharpened. Reminiscent of the previous levels, individual attention will be played on the students and the teacher will keep in touch with the parents regarding the child’s progress." },
  { key: 'ket', label: 'KET - UPPER INTERMEDIATE 1', icon: <ClipboardCheck size={20} />, content: "The Key English Test (KET) is designed for students who wish to communicate using a basic knowledge of the English language. For day-to-day living that requires the ability to communicate in simple English, this is the perfect module and is the most basic level of General English exams carried out by the Cambridge English series." },
  { key: 'pet', label: 'PET - UPPER INTERMEDIATE 2', icon: <ClipboardCheck size={20} />, content: "Preliminary English Test (PET) is a level that has a high emphasis on activity-based learning. Where lower levels have more focus on providing theoretical knowledge and practical knowledge afterwards, levels such as PET which are aimed at intermediate level learners have less to do with theoretical knowledge and more to do with activity-based interactive learning. Students are encouraged to interact with each other and with the teacher to discuss language-related issues and improve their knowledge through activities, games, and in-class discussions. Grammar, reading, and writing are the priorities in this stage which makes it a good foundation for students in their higher educational requirements. Successfully completing of PET level leads students to the next level named FCE." },
  { key: 'fce', label: 'FCE - ADVANCE', icon: <GraduationCap size={20} />, content: "The First Certificate in English (FCE) qualification comes in two forms, particularly for teens for a one year period along with a 6 month programme for FCE adults.This exam comprises four parts and students will complete the reading, writing, use of English and listening papers within a day. The speaking exam is carried out by two examiners along with another candidate facing the same exam." },
];


export default function Stages() {
  // State to keep track of the currently selected tab
  const [activeTab, setActiveTab] = useState('kj1');
  
  // State to manage the visibility of the dropdown on mobile
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Find the course object that matches the active tab
  const activeCourse = courses.find(course => course.key === activeTab);

  return (
    <section id="higher-education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-5 mt-4">
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
                alt="CEFR Levels"
                className='object-cover w-full max-w-xl rounded-lg shadow-md'
            />
        </div>

        {/* --- Main Content Grid --- */}
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          
          {/* --- MOBILE DROPDOWN (Visible on small screens) --- */}
          <div className="lg:hidden mb-6">
            <div className="relative">
              {/* Dropdown Button */}
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200 ease-in-out bg-indigo-600 text-white font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="flex items-center">
                  <span className="mr-3">{activeCourse?.icon}</span>
                  {activeCourse?.label}
                </span>
                <ChevronDown 
                  size={24} 
                  className={`transform transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
                />
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute z-10 mt-2 w-full bg-white rounded-lg shadow-xl border border-gray-200">
                  <nav className="p-2 space-y-1" aria-label="Sidebar">
                    {courses.map((course) => (
                      <button
                        key={course.key}
                        onClick={() => {
                          setActiveTab(course.key);
                          setIsDropdownOpen(false); // Close dropdown after selection
                        }}
                        className="w-full flex items-center px-4 py-2 rounded-md text-left text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      >
                        <span className="mr-3">{course.icon}</span>
                        {course.label}
                      </button>
                    ))}
                  </nav>
                </div>
              )}
            </div>
          </div>

          {/* --- DESKTOP SIDEBAR (Hidden on small screens) --- */}
          <div className="hidden lg:block lg:col-span-4">
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

          {/* --- Right Side: Content Area --- */}
          <div className="mt-8 lg:mt-0 lg:col-span-8">
            <div className="bg-white p-6 rounded-xl shadow-lg h-full">
              {activeCourse ? (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 pb-5">
                    {activeCourse.label}
                  </h3>
                  <p className="mt-4 text-gray-600 text-lg text-justify lg:leading-relaxed mb-2">
                    {activeCourse.content}
                  </p>
                  <p className="mt-4 text-gray-600 text-lg text-justify lg:leading-relaxed">
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