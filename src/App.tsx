import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import CursorGlow from './components/CursorGlow';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Reviews from './pages/Reviews';
import Gallery from './pages/Gallery';
import Locations from './pages/Locations';

function App() {
  return (
    <Router>
      <CursorGlow />
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/locations" element={<Locations />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
