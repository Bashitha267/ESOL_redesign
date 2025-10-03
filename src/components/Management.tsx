import React from 'react';
import {
  Plane,         // Andrew Abhinash (Marketing/General Manager)
  FileText,      // Isuri Kathriarachchi (Teacher Development)
  Award,         // Himantha Karunarathne (CEO)
  Users,         // Dishan Samarathunga (HR)
  BookOpen,      // Amali Jayasinghe (Principal)
  GraduationCap, // Ama Narendra (Higher Education Manager)
  Code,          // Tharindu Dileepa (IT Manager)
  Sparkles,      // Thushanthi Ramanayaka (Student Development)
  Link,
  Computer,
  Network,
  LucideComputer,
} from 'lucide-react';
// import { Link } from 'react-router-dom'; // Keep this if you are using React Router

// ----------------------------------------------------------------------
// 1. TYPESCRIPT INTERFACE
// ----------------------------------------------------------------------
import ceo from "../assests/ceo.jpg"
import principal from "../assests/principal.jpg"
import managerHR from "../assests/hr_dishan.jpg"
import gm from "../assests/mkt.jpg"
import acdm from "../assests/acad_isuri.jpg"
import acdc from "../assests/acad_thushanthi.jpg"
import upper from "../assests/Upper_edu.jpg"
import its from "../assests/its.jpg"
interface LeaderMessage {
  name: string;
  role: string;
  qualifications?: string;
  message: string;
  photoUrl: string; 
  icon: React.ElementType; 
}

// ----------------------------------------------------------------------
// 2. DATA (MAPPING THE PROVIDED CONTENT)
// ----------------------------------------------------------------------

const leaders: LeaderMessage[] = [
  {
    name: "Himantha Karunarathne",
    role: "CEO / Managing Director",
    message: "I am both honoured and humbled to head a community of warm and friendly teachers, who not only offer the highest standards of education but have consistently delivered results over the past decade. Our focus has always been to ‘mine’ the unique strengths and abilities of each student and direct them towards the pathway that’s most suitable for them.",
    photoUrl: ceo, 
    icon: Award,
  },
  {
    name: "Amali Jayasinghe",
    role: "Principal",
    message: "It gives me great pleasure to see the results we have delivered over the past decade. From internationally acclaimed certifications from the University of Cambridge UK, to offering Cambridge ESOL examinations, we continue to uphold the name as one of the best ESOL trainers in Sri Lanka. Our hope and aspiration is to further expand our scope to reach a wider audience irrespective of social boundaries.",
    photoUrl: principal, 
    icon: BookOpen,
  },
  {
    name: "Dishan Samarathunga",
    role: "Manager HR",
    qualifications: "MBA - Asia E University, CQHRM - CIPM, CIHRM - CIPM",
    message: "We at ESOL College are very clear about what we want to deliver. We strive to produce young minds who wish to engage with the world of knowledge, minds that are hungry for “more”. I, along with our team of silent workers and dedicated faculty, intend to build on this strong foundation and raise the standards in all spheres, to the zenith.",
    photoUrl: managerHR, 
    icon: Users,
  },
  {
    name: "Andrew Abhinash",
    role: "General Manager – ESOL Premier Campus (Marketing)",
    qualifications: "MSc in Management and Leadership, MSc in Strategic Marketing",
    message: "You can be assured that your journey with ESOL will be enjoyable and rewarding, and will prepare you well for your next steps. Something that you will notice from day one, that makes us different to other learning providers is the feeling of being part of a family.",
    photoUrl: gm, 
    icon: GraduationCap,
  },
  {
    name: "Isuri Kathriarachchi",
    role: "Academic Manager - Teacher Development",
    qualifications: "Master in Applied Linguistics, Bachelor of Arts in English",
    message: "The Academic Department at ESOL College aims to enhance teacher education by strengthening the pedagogy. We want the teachers to be equipped with both theory and practice in the English language. As one of the Teacher Development Managers, I constantly evaluate assigned teacher responsibilities to make sure that the predefined teaching standards are maintained.",
    photoUrl: acdm, 
    icon: GraduationCap,
  },
  {
    name: "Thushanthi Ramanayaka",
    role: "Manager - Student Development",
    qualifications: "Master of TESL- Post Graduate Institute of English, OUSL, Bachelor of Science",
    message: "I strongly believe that children are the world’s most valuable resource and its best hope for the future. It’s our responsibility to provide quality education and mould the children to reach greater heights. Our curriculum which includes the clearly defined goals, methods, materials and assessment methods effectively supports the learning process of our students.",
    photoUrl: acdc, 
    icon: GraduationCap,
  },
  {
    name: "Ama Narendra",
    role: "Manager - Higher Education",
    qualifications: "Master of Arts in Linguistics, Bachelor of Arts in English",
    message: "ESOL Premier Campus is the Higher Education Organization of ESOL College which specializes as a language facilitator in teaching English for young adults, adults and professionals. Our wide range of programmes enable students to experience quality, productive and efficient Higher Education that thrives future scholars.",
    photoUrl: upper, 
    icon: GraduationCap,
  },
  {
    name: "Tharindu Dileepa",
    role: "Manager IT",
    qualifications: "Master of Science in Computing - Wrexham Glyndwr University, UK",
    message: "Collaborating education with technology creates wonders and increases potential ability for an institute to deliver higher accomplishment to its students. At ESOL College, we strive continuously to make a difference to our management style and teaching methods by involving technology and believing in “Continuous Improvement Process”.",
    photoUrl: its, 
    icon: LucideComputer,
  },
];

// ----------------------------------------------------------------------
// 3. SUB-COMPONENT: LEADER CARD
// ----------------------------------------------------------------------

const LeaderCard: React.FC<{ leader: LeaderMessage; index: number }> = ({ leader, index }) => {
  const Icon = leader.icon;
  // Alternate background color for visual separation (striped effect)


  return (
    // Card Container: Photo on left, text on right for LG screens
    <div className={`flex flex-col-reverse lg:flex-row rounded-2xl shadow-xl border border-blue-100 overflow-hidden group transition duration-300 hover:shadow-2xl hover:border-blue-300 bg-white hover:bg-blue-50 `}>
      
    
      {/* RIGHT SIDE: MESSAGE AND ICON */}
      <div className="lg:w-2/3 p-6 sm:p-8 flex flex-col justify-between">
        <div>
            {/* Role Icon */}
            <Icon className="w-8 h-8 text-blue-500 mb-4" />
            
            {/* The Message/Quote */}
            <p className="text-gray-700 leading-relaxed italic border-l-4 border-blue-400 pl-4 text-base">
              {leader.message}
            </p>
        </div>
        
        {/* Subtle Footer/Action Area */}
        <div className="mt-6 pt-4 border-t border-gray-100 flex justify-end">
            <span className="text-sm font-semibold text-blue-500 hover:text-blue-700 cursor-pointer transition">
                Read Full Message &rarr;
            </span>
        </div>
      </div>
        {/* LEFT SIDE: PHOTO, NAME, ROLE */}
      <div className="lg:w-1/3 p-6 flex flex-col items-center justify-center text-center bg-blue-100 lg:bg-transparent">
        <div className="w-44 h-60  overflow-hidden mb-4 border-4 border-blue-400 shadow-md items-center">
          {/* Placeholder Image: */}
          <img
            src={leader.photoUrl}
            alt={leader.name}
            className="w-full h-full object-cover aspect-square transition duration-500 transform group-hover:scale-105"
          />
        </div>
        <h3 className="text-xl font-bold text-blue-900">{leader.name}</h3>
        <p className="text-sm font-medium text-blue-600">{leader.role}</p>
        {leader.qualifications && (
          <p className="text-xs text-gray-500 mt-2 max-w-xs">{leader.qualifications}</p>
        )}
      </div>

    </div>
  );
};

// ----------------------------------------------------------------------
// 4. MAIN COMPONENT: MANAGEMENT
// ----------------------------------------------------------------------

export default function Management() {
    return (
        <section id="management-team" className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50 mt-10">
            <div className="container mx-auto px-4 max-w-7xl">
                
                {/* Header Section */}
                <header className="text-center mb-16">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-900 mb-3 tracking-tight">
                        Our Guiding Leadership
                    </h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Visionary leaders sharing their commitment to quality education, student development, and institutional excellence.
                    </p>
                </header>
                
                {/* Grid of Leader Cards (Vertical spacing between cards) */}
                <div className="space-y-12">
                    {leaders.map((leader, index) => (
                        <LeaderCard key={index} leader={leader} index={index} />
                    ))}
                </div>
                
            </div>

            {/* Global Footer CTA */}
            <div className="text-center mt-16">
                <a href="/inquiry" className="inline-flex items-center text-lg px-6 py-3 bg-blue-600 text-white rounded-full font-semibold shadow-md hover:bg-blue-700 transition duration-200">
                    <FileText className="w-5 h-5 mr-3" /> Start Your Inquiry Here
                </a>
            </div>
        </section>
    );
}