import { Link } from 'react-router-dom'; // 1. Import Link

// --- Data for the feature cards ---
const features = [
  // ... your features data remains the same
];

// --- Data for the location cards ---
// 2. Added a 'slug' property for URL routing
const branches = [
  {
    name: 'Maharagama',
    slug: 'maharagama',
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7185743?q=80&w=2070&auto=format&fit=crop',
    description: 'Our main branch offering a full range of courses for all age groups.'
  },
  {
    name: 'Kaduwela',
    slug: 'kaduwela',
    image: 'https://images.unsplash.com/photo-1515263487990-61b07816b324?q=80&w=2070&auto=format&fit=crop',
    description: 'Serving the community with specialized English language programs.'
  },
  {
    name: 'Hanwella',
    slug: 'hanwella',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2e0?q=80&w=2070&auto=format&fit=crop',
    description: 'Focused on beginner and intermediate level courses.'
  },
  {
    name: 'Kaluaggala',
    slug: 'kaluaggala',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop',
    description: 'A modern facility equipped for advanced exam preparation.'
  }
];

export default function AboutFeatures() {
  return (
    <section id="about-features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ... Section Header and Feature Cards remain the same ... */}

        {/* Branch Locations Section */}
        <div className="mt-20 text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Visit Our Branches
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                We are currently operating in several key locations with more expansion plans underway.
            </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {branches.map((branch) => (
                <div key={branch.name} className="overflow-hidden rounded-lg shadow-lg bg-white transform hover:-translate-y-2 transition-transform duration-300">
                    <img className="h-48 w-full object-cover" src={branch.image} alt={`ESOL College - ${branch.name} branch`} />
                    <div className="p-6">
                        <h3 className="text-lg font-semibold text-gray-900">{branch.name}</h3>
                        <p className="mt-2 text-sm text-gray-600">{branch.description}</p>
                        
                        {/* 3. Replaced <a> tag with <Link> */}
                        <Link 
                          to={`/branches/${branch.slug}`} 
                          className="mt-4 inline-block text-sm font-semibold text-indigo-600 hover:text-indigo-500"
                        >
                          More Details &rarr;
                        </Link>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}