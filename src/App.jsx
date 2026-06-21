import { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import FloatingBookButton from './components/FloatingBookButton';
import BookingModal from './components/BookingModal';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TrainersPage from './pages/TrainersPage';
import SpacePage from './pages/SpacePage';
import StrengthPage from './pages/StrengthPage';
import BoxingPage from './pages/BoxingPage';
import PilatesPage from './pages/PilatesPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/trainers" element={<TrainersPage />} />
        <Route path="/space" element={<SpacePage />} />
        <Route path="/strength" element={<StrengthPage />} />
        <Route path="/boxing" element={<BoxingPage />} />
        <Route path="/pilates" element={<PilatesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      {/* Global booking UI — visible on all pages */}
      <FloatingBookButton
        onClick={() => setBookingOpen(true)}
        hidden={bookingOpen}
      />
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />
    </HashRouter>
  );
}

export default App;
