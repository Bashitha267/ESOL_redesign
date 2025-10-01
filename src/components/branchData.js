// src/data/branchData.js

export const branchData = [
  {
    slug: 'maharagama',
    name: 'Maharagama',
    heroImage: 'https://images.unsplash.com/photo-1591123120675-6f7f1aae4f8b?q=80&w=2070&auto=format&fit=crop', // Replace with a real branch photo
    description: "Conveniently placed between Maharagama and Pannipitiya, our branch is equipped with state-of-the-art classrooms and empowered by a panel of extensively trained teachers. Our dedicated administrative staff are always ready to assist students and parents.",
    features: [
      {
        title: 'Over 1000 Students',
        description: 'Catering to a large and vibrant student community.',
        icon: 'Users'
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
        image: 'https://res.cloudinary.com/dnfbik3if/image/upload/v1792683935/321722880_1578641979250014_212933092500355416_n_q70ggq.jpg' // Replace with URL
      },
      {
        name: 'Raini Dissanayake',
        title: 'Asst. Branch Manager',
        qualifications: 'BA(Hons) in English and TESOL (First Class), University of Coventry - UK\nTeaching Knowledge Test - UK',
        image: 'https://res.cloudinary.com/dnfbik3if/image/upload/v1792683935/321764724_1583906425386001_8750849926211718029_n_pgyj6n.jpg' // Replace with URL
      },
      {
        name: 'Dulishi Samarawickrama',
        title: 'Asst. Branch Manager',
        qualifications: 'Bachelor of Arts in English - CINEC Campus\nDiploma in Teaching English & Literature - CINEC Campus\nTeaching Knowledge Test - UK',
        image: 'https://res.cloudinary.com/dnfbik3if/image/upload/v1792683935/321727725_1165681944131238_4077589345248232230_n_yv4gvs.jpg' // Replace with URL
      }
    ],
    contact: {
      address: 'No. 123, High Level Road, Maharagama, Sri Lanka',
      phone: '011-222-3333',
      email: 'maharagama@esol.lk',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.328323600983!2d79.92078681523483!3d6.851214020926838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25a9a5a5a5a5b%3A0x5a5a5a5a5a5a5a5b!2sMaharagama!5e0!3m2!1sen!2slk!4v1633010301053!5m2!1sen!2slk'
    }
  },
  // --- Add other branches here ---
  {
    slug: 'kaduwela',
    name: 'Kaduwela',
    // ... add all the details for the Kaduwela branch ...
  }
];