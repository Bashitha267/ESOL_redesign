import {
    HeartHandshake,
    Mail,
    MapPin,
    MessageCircle,
    Phone,
    School,
    Users,
    type LucideIcon // Import the type for Lucide icons
} from 'lucide-react';

// --- 1. Define Types for your Data ---

// Create a mapping from string to Icon component first
const icons = {
    Users,
    MessageCircle,
    HeartHandshake,
    School
};

// Create a type representing the valid icon names from the keys of the `icons` object
type IconName = keyof typeof icons;

// Define the shape of a single "feature"
interface Feature {
    title: string;
    description: string;
    icon: IconName; // Use the specific IconName type
}

// Define the shape of a single "team member"
interface TeamMember {
    name: string;
    title: string;
    qualifications: string;
    image: string;
}

// Define the shape of the "contact" details
interface Contact {
    address: string;
    phone: string;
    email: string;
    mapUrl: string;
}

// Combine all the smaller types into the main "Branch" type
interface Branch {
    slug: string;
    name: string;
    heroImage: string;
    description: string;
    features: Feature[];
    team: TeamMember[];
    contact: Contact;
}

// --- 2. Apply the Types to Your Data ---

// Now, strongly type your `branchData` array with the `Branch` type
export const branchData: Branch[] = [
    {
        slug: 'maharagama',
        name: 'Maharagama',
        heroImage: 'https://images.unsplash.com/photo-1591123120675-6f7f1aae4f8b?q=80&w=2070&auto=format&fit=crop',
        description: "Conveniently placed between Maharagama and Pannipitiya, our branch is equipped with state-of-the-art classrooms and empowered by a panel of extensively trained teachers. Our dedicated administrative staff are always ready to assist students and parents.",
        features: [
            {
                title: 'Over 1000 Students',
                description: 'Catering to a large and vibrant student community.',
                icon: 'Users' // This is now checked against the `IconName` type
            },
            {
                title: 'English-Speaking Club',
                description: 'Sharpen speaking skills and build confidence in a friendly environment.',
                icon: 'MessageCircle'
            },
            {
                title: 'Counseling Services',
                description: 'Supporting students with their learning and personal development.',
                icon: 'HeartHandshake'
            },
            {
                title: 'Expert Teaching Panel',
                description: 'Highly trained teachers delivering excellence in English education.',
                icon: 'School'
            }
        ],
        team: [
            {
                name: 'Ayodya Perera',
                title: 'Branch Manager',
                qualifications: 'BA(Hons) Business Administration, University of Bedfordshire - UK',
                image: 'https://res.cloudinary.com/dnfbik3if/image/upload/v1792683935/321722880_1578641979250014_212933092500355416_n_q70ggq.jpg'
            },
            {
                name: 'Raini Dissanayake',
                title: 'Asst. Branch Manager',
                qualifications: 'BA(Hons) in English and TESOL (First Class), University of Coventry - UK\nTeaching Knowledge Test - UK',
                image: 'https://res.cloudinary.com/dnfbik3if/image/upload/v1792683935/321764724_1583906425386001_8750849926211718029_n_pgyj6n.jpg'
            },
            {
                name: 'Dulishi Samarawickrama',
                title: 'Asst. Branch Manager',
                qualifications: 'Bachelor of Arts in English - CINEC Campus\nDiploma in Teaching English & Literature - CINEC Campus\nTeaching Knowledge Test - UK',
                image: 'https://res.cloudinary.com/dnfbik3if/image/upload/v1792683935/321727725_1165681944131238_4077589345248232230_n_yv4gvs.jpg'
            }
        ],
        contact: {
            address: 'No. 123, High Level Road, Maharagama, Sri Lanka',
            phone: '011-222-3333',
            email: 'maharagama@esol.lk',
            mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.328323600983!2d79.92078681523483!3d6.851214020926838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25a9a5a5a5a5b%3A0x5a5a5a5a5a5a5a5b!2sMaharagama!5e0!3m2!1sen!2slk!4v1633010301053!5m2!1sen!2slk'
        }
    },
    // You can add other branches here, and TypeScript will ensure they match the `Branch` structure.
    // {
    //   slug: 'kaduwela',
    //   name: 'Kaduwela',
    //   ...
    // }
];

// Type the `icons` map object for full type safety
const typedIcons: Record<IconName, LucideIcon> = {
    Users,
    MessageCircle,
    HeartHandshake,
    School
};

// --- 3. Define Types for Component Props ---

interface BranchPageProps {
    branchName: string;
}

// --- 4. Apply Types to the Component ---

export default function BranchPage({ branchName }: BranchPageProps) {
    // TypeScript now knows `branch` is of type `Branch | undefined`
    const branch = branchData.find(b => b.slug === branchName);

    if (!branch) {
        return <div className="text-center py-20">Branch not found.</div>;
    }
  
    // --- The rest of your JSX remains the same ---
    return (
      <div>
        
        <section 
          className="relative h-80 bg-cover bg-center flex items-center justify-center text-white" 
          style={{ backgroundImage: `url(${branch.heroImage})` }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 text-center">
            <p className="text-lg font-semibold tracking-widest uppercase">ESOL College</p>
            <h1 className="text-5xl font-extrabold tracking-tight">{branch.name} Branch</h1>
          </div>
        </section>

        {/* --- Overview & Features Section --- */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">Welcome to Our {branch.name} Center</h2>
              <p className="mt-4 text-lg text-gray-600">{branch.description}</p>
            </div>
            <div className="mt-10 lg:mt-0 grid grid-cols-2 gap-6">
              {branch.features.map((feature) => {
                // TypeScript correctly infers `Icon` is a React Component
                const Icon = typedIcons[feature.icon]; 
                return (
                  <div key={feature.title} className="bg-gray-50 p-6 rounded-lg">
                    <Icon className="h-8 w-8 text-indigo-600" />
                    <h3 className="mt-4 text-md font-semibold text-gray-900">{feature.title}</h3>
                    <p className="mt-1 text-sm text-gray-500">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* --- Meet the Team Section --- */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900">Meet the {branch.name} Team</h2>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                Our dedicated managers are here to ensure the best learning experience for every student.
              </p>
            </div>
            <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 justify-center">
              {branch.team.map((member) => (
                <div key={member.name} className="bg-white rounded-xl shadow-lg text-center overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                  <img className="h-64 w-full object-cover object-center" src={member.image} alt={member.name} />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                    <p className="mt-1 text-indigo-600 font-semibold">{member.title}</p>
                    <p className="mt-4 text-sm text-gray-500 whitespace-pre-line">{member.qualifications}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Contact & Location Section --- */}
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 lg:gap-16 items-center">
                <div>
                    <h2 className="text-3xl font-extrabold text-gray-900">Find & Contact Us</h2>
                    <div className="mt-6 space-y-4">
                        <div className="flex items-start">
                            <MapPin className="flex-shrink-0 h-6 w-6 text-indigo-600 mt-1"/>
                            <p className="ml-3 text-lg text-gray-600">{branch.contact.address}</p>
                        </div>
                          <div className="flex items-center">
                            <Phone className="flex-shrink-0 h-6 w-6 text-indigo-600"/>
                            <p className="ml-3 text-lg text-gray-600">{branch.contact.phone}</p>
                        </div>
                          <div className="flex items-center">
                            <Mail className="flex-shrink-0 h-6 w-6 text-indigo-600"/>
                            <p className="ml-3 text-lg text-gray-600">{branch.contact.email}</p>
                        </div>
                    </div>
                </div>
                <div className="mt-10 lg:mt-0 h-96 rounded-lg overflow-hidden shadow-xl">
                    <iframe 
                        src={branch.contact.mapUrl}
                        width="100%" 
                        height="100%" 
                        style={{ border:0 }} 
                        allowFullScreen={true}
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </section>
      </div>
    );
}