import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Egypt2026 from './pages/Egypt2026';
import Mexico2026 from './pages/Mexico2026';
import HolyLand2026 from './pages/HolyLand2026';
import Peregrinaciones from './pages/Peregrinaciones';
import Tours from './pages/Tours';
import JapanTour from './pages/JapanTour';
import EuropeTour from './pages/EuropeTour';
import Paquetes from './pages/Paquetes';
import SouthAfricaTour from './pages/SouthAfricaTour';
import PolynesiaTour from './pages/PolynesiaTour';
import Viajes from './pages/Viajes';
import AsiaMaldivesTour from './pages/AsiaMaldivesTour';
import About from './pages/About';
import Contact from './pages/Contact';
import ViajesEspeciales from './pages/ViajesEspeciales';
import Asia from './pages/continents/Asia';
import Europe from './pages/continents/Europe';
import Africa from './pages/continents/Africa';
import Oceania from './pages/continents/Oceania';
import America from './pages/continents/America';
import LatinAmerica from './pages/continents/LatinAmerica';
import Cruceros from './pages/Cruceros';
import DueroCruise from './pages/DueroCruise';
import DueroCruisePortToPort from './pages/DueroCruisePortToPort';
import GuadalquivirChristmasCruise from './pages/GuadalquivirChristmasCruise';
import CroatiaMontenegroCruise from './pages/CroatiaMontenegroCruise';
import RhineCruise from './pages/RhineCruise';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/egypt-2026" element={<Egypt2026 />} />
              <Route path="/egypt2026" element={<Egypt2026 />} />
              <Route path="/mexico-2026" element={<Mexico2026 />} />
              <Route path="/mexico2026" element={<Mexico2026 />} />
              <Route path="/holyland-2026" element={<HolyLand2026 />} />
              <Route path="/holyland2026" element={<HolyLand2026 />} />
              <Route path="/peregrinaciones" element={<Peregrinaciones />} />

              <Route path="/viajes-especiales" element={<ViajesEspeciales />} />
              <Route path="/viajes-especiales/asia" element={<Asia />} />
              <Route path="/viajes-especiales/europe" element={<Europe />} />
              <Route path="/viajes-especiales/africa" element={<Africa />} />
              <Route path="/viajes-especiales/oceania" element={<Oceania />} />
              <Route path="/viajes-especiales/america" element={<America />} />
              <Route path="/viajes-especiales/latin-america" element={<LatinAmerica />} />
              <Route path="/cruceros" element={<Cruceros />} />
              <Route path="/cruceros/duero-valley" element={<DueroCruise />} />
              <Route path="/cruceros/duero-port-to-port" element={<DueroCruisePortToPort />} />
              <Route path="/cruceros/guadalquivir-christmas" element={<GuadalquivirChristmasCruise />} />
              <Route path="/cruceros/croatia-montenegro" element={<CroatiaMontenegroCruise />} />
              <Route path="/cruceros/rhine-treasures" element={<RhineCruise />} />

              <Route path="/tours" element={<Navigate to="/viajes-especiales" replace />} />
              <Route path="/paquetes" element={<Navigate to="/viajes-especiales" replace />} />
              <Route path="/viajes" element={<Navigate to="/viajes-especiales" replace />} />

              <Route path="/japan-tour" element={<JapanTour />} />
              <Route path="/europe-tour" element={<EuropeTour />} />
              <Route path="/south-africa-tour" element={<SouthAfricaTour />} />
              <Route path="/polynesia-tour" element={<PolynesiaTour />} />
              <Route path="/asia-maldives-tour" element={<AsiaMaldivesTour />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
