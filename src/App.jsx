import { useState, useCallback } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { BookingProvider } from './hooks/useBooking';
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
  const openBooking = useCallback(() => setBookingOpen(true), []);

  return (
    <HashRouter>
      <BookingProvider value={openBooking}>
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
          onClick={openBooking}
          hidden={bookingOpen}
        />
        <BookingModal
          isOpen={bookingOpen}
          onClose={() => setBookingOpen(false)}
        />
      </BookingProvider>
    </HashRouter>
  );
}

export default App;
