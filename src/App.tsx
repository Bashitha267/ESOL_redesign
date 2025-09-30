import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import FeaturedPrograms from './components/FeaturedPrograms';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Programs from './components/Programs';
import HigherEducation from './components/HigherEducation';
import StudyAbroad from './components/StudyAbroad';
import News from './components/News';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
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
                <FeaturedPrograms />
                <Testimonials />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/higher-education" element={<HigherEducation />} />
          <Route path="/study-abroad" element={<StudyAbroad />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Hero />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
