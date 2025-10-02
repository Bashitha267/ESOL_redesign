import {
  HeartHandshake,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  School,
  Users,
  type LucideIcon,
} from "lucide-react";

// --- TypeScript Interfaces (unchanged) ---
const icons = { Users, MessageCircle, HeartHandshake, School };
type IconName = keyof typeof icons;
interface Feature {
  title: string;
  description: string;
  icon: IconName;
}
interface TeamMember {
  name: string;
  title: string;
  qualifications: string;
  image: string;
}
interface Contact {
  address: string;
  phone: string;
  email: string;
  mapUrl: string;
}
interface Branch {
  slug: string;
  name: string;
  heroImage: string;
  description: string;
  features: Feature[];
  team: TeamMember[];
  contact: Contact;
}

// --- Data with Corrected Image URLs ---
export const branchData: Branch[] = [
  {
    slug: "maharagama",
    name: "Maharagama",
    heroImage:
      "https://res.cloudinary.com/dnfbik3if/image/upload/v1759434493/turkish-students-going-to-school-istanbul_djfo5o.webp",
    description:
      "Conveniently placed between Maharagama and Pannipitiya, our branch is equipped with state-of-the-art classrooms and empowered by a panel of extensively trained teachers. Our dedicated administrative staff are always ready to assist students and parents.",
    features: [
      {
        title: "Over 1000 Students",
        description: "Catering to a large and vibrant student community.",
        icon: "Users",
      },
      {
        title: "English-Speaking Club",
        description:
          "Sharpen speaking skills and build confidence in a friendly environment.",
        icon: "MessageCircle",
      },
      {
        title: "Counseling Services",
        description:
          "Supporting students with their learning and personal development.",
        icon: "HeartHandshake",
      },
      {
        title: "Expert Teaching Panel",
        description:
          "Highly trained teachers delivering excellence in English education.",
        icon: "School",
      },
    ],
    team: [
      {
        name: "Ayodya Perera",
        title: "Branch Manager",
        qualifications:
          "BA(Hons) Business Administration, University of Bedfordshire - UK",
        image:
          "https://res.cloudinary.com/dnfbik3if/image/upload/v1759435083/mg_mngr_na0nfm.jpg",
      },
      {
        name: "Raini Dissanayake",
        title: "Asst. Branch Manager",
        qualifications:
          "BA(Hons) in English and TESOL (First Class), University of Coventry - UK\nTeaching Knowledge Test - UK",
        image:
          "https://res.cloudinary.com/dnfbik3if/image/upload/v1759435083/mh_raini_o1wbo2.jpg",
      },
      {
        name: "Dulishi Samarawickrama",
        title: "Asst. Branch Manager",
        qualifications:
          "Bachelor of Arts in English - CINEC Campus\nDiploma in Teaching English & Literature - CINEC Campus\nTeaching Knowledge Test - UK",
        image:
          "https://res.cloudinary.com/dnfbik3if/image/upload/v1759435082/mh_assis_dulishi_nd8ys5.jpg",
      },
    ],
    contact: {
      address: "No. 123, High Level Road, Maharagama, Sri Lanka",
      phone: "011-222-3333",
      email: "maharagama@esol.lk",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15846.80424610115!2d79.91302242896726!3d6.840748118683531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25a452a3b2b0f%3A0x2375c33360b45783!2sMaharagama!5e0!3m2!1sen!2slk!4v1672582 Maharagama",
    },
  },
  {
    slug: "kaduwela",
    name: "Kaduwela",
    heroImage:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop",
    description:
      "Our Kaduwela branch offers a modern learning environment with easy access. We focus on providing a supportive atmosphere with our skilled teachers and helpful administrative team, ensuring a top-tier educational experience.",
    features: [
      {
        title: "Growing Community",
        description: "Serving over 500 students and expanding.",
        icon: "Users",
      },
      {
        title: "Interactive Workshops",
        description: "Regular workshops to enhance practical language skills.",
        icon: "MessageCircle",
      },
      {
        title: "Career Guidance",
        description:
          "Assisting students in planning their future academic and career paths.",
        icon: "HeartHandshake",
      },
      {
        title: "Certified Instructors",
        description:
          "A team of certified and experienced English language instructors.",
        icon: "School",
      },
    ],
    team: [
      {
        name: "Jane Doe",
        title: "Branch Manager",
        qualifications: "M.A. in Linguistics, University of Kelaniya",
        image:
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
      },
      {
        name: "John Smith",
        title: "Asst. Branch Manager",
        qualifications:
          "B.Ed. in English, University of Colombo\nCambridge CELTA Certified",
        image:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop",
      },
    ],
    contact: {
      address: "No. 456, Main Street, Kaduwela, Sri Lanka",
      phone: "011-555-7777",
      email: "kaduwela@esol.lk",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31682.81977711739!2d79.97346142167857!3d6.953517119298404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2561175c249a7%3A0x5352496a775f46a0!2sKaduwela!5e0!3m2!1sen!2slk!4v1672582 Kaduwela",
    },
  },
];

const typedIcons: Record<IconName, LucideIcon> = {
  Users,
  MessageCircle,
  HeartHandshake,
  School,
};

interface BranchPageProps {
  branchName: string;
}

export default function BranchPage({ branchName }: BranchPageProps) {
  const branch = branchData.find((b) => b.slug === branchName);

  if (!branch) {
    return <div className="text-center py-20">Branch not found.</div>;
  }

  return (
    <div className="bg-white">
      {/* --- Hero Section --- */} {" "}
      <section className="relative h-96 lg:h-[80vh] w-full flex items-center justify-center text-white overflow-hidden mt-16">
   
        <img
          src={branch.heroImage}
          alt={`ESOL College ${branch.name} Branch`}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20"></div>
     
        <div className="relative z-10 text-center p-4">
    
          <p className="text-lg font-semibold tracking-widest uppercase text-slate-200">
            ESOL College
          </p>
    
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-lg">
            {branch.name} Branch
          </h1>
       
        </div>
  
      </section>
      {/* --- Overview & Features Section --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 lg:gap-24 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Welcome to Our {branch.name} Center
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              {branch.description}
            </p>
          </div>
          <div className="mt-12 lg:mt-0 grid grid-cols-2 gap-4 sm:gap-6">
            {branch.features.map((feature) => {
              const Icon = typedIcons[feature.icon];
              return (
                <div
                  key={feature.title}
                  className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="bg-indigo-100 text-indigo-600 rounded-lg w-12 h-12 flex items-center justify-center">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-md font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* --- Meet the Team Section --- */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Meet the {branch.name} Team
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              Our dedicated managers are here to ensure the best learning
              experience for every student.
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-center">
            {branch.team.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-2xl shadow-md text-center overflow-hidden transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
              >
                <img
                  className="h-64 w-full object-contain object-center"
                  src={member.image}
                  alt={member.name}
                />
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-indigo-600 font-semibold text-sm">
                    {member.title}
                  </p>
                  <p className="mt-4 text-xs text-gray-500 whitespace-pre-line border-t pt-4">
                    {member.qualifications}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* --- Contact & Location Section --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Find & Contact Us
            </h2>
            <div className="mt-8 space-y-6">
              <a
                href={`https://maps.google.com/?q=${branch.contact.address.replace(
                  /\s/g,
                  "+"
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start group"
              >
                <MapPin className="flex-shrink-0 h-6 w-6 text-indigo-600 mt-1" />
                <p className="ml-4 text-lg text-gray-700 group-hover:text-indigo-600 transition-colors">
                  {branch.contact.address}
                </p>
              </a>
              <a
                href={`tel:${branch.contact.phone}`}
                className="flex items-center group"
              >
                <Phone className="flex-shrink-0 h-6 w-6 text-indigo-600" />
                <p className="ml-4 text-lg text-gray-700 group-hover:text-indigo-600 transition-colors">
                  {branch.contact.phone}
                </p>
              </a>
              <a
                href={`mailto:${branch.contact.email}`}
                className="flex items-center group"
              >
                <Mail className="flex-shrink-0 h-6 w-6 text-indigo-600" />
                <p className="ml-4 text-lg text-gray-700 group-hover:text-indigo-600 transition-colors">
                  {branch.contact.email}
                </p>
              </a>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 h-96 rounded-2xl overflow-hidden shadow-xl ring-1 ring-slate-200">
            <iframe
              src={branch.contact.mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
