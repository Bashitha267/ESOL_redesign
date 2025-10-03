import { Route, Routes, useParams } from 'react-router-dom';

// Import all your page components
import AboutFeatures from './components/AboutFeatures';
import BranchPage from './components/Branches'; // <-- 1. Import your BranchPage component
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import News from './components/News';
import Programs from './components/Programs';
import Stages from './components/Stages';
import StudyAbroad from './components/StudyAbroad';
import Management from './components/Management';

// 2. Create a wrapper component to handle the dynamic URL parameter
function BranchPageWrapper() {
  // useParams extracts the dynamic part of the URL (e.g., "maharagama")
  const { branchSlug } = useParams(); 
  // It then passes that slug as a prop to your BranchPage component
if (typeof branchSlug !== 'string') {
  // You can return a loading spinner, a 404 component, or null
  return <div>Loading branch...</div>;
}

// 2. If the check passes, TypeScript knows branchSlug is a string,
//    so you can safely render the component.
return <BranchPage branchName={branchSlug} />;
}

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <AboutFeatures />
                {/* Add other homepage sections here if needed */}
              </>
            }
          />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/programs" element={<Programs />} />
          <Route path="/higher-education" element={<Stages />} />
          <Route path="/management" element={<Management />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* 3. Add the new dynamic route for the branches */}
          <Route path="/branches/:branchSlug" element={<BranchPageWrapper />} />

          {/* Fallback route - consider creating a dedicated 404 Not Found page */}
          <Route path="*" element={<Hero />} /> 
        </Routes>
      </main>
      <Footer />
    </div>
  );
}