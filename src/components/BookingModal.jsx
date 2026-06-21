import { useState, useRef, useEffect } from 'react';
import './BookingModal.css';

const SERVICES = [
  { value: '', label: 'Select a service...' },
  { value: 'Strength Training', label: 'Strength Training', trainer: 'Liam or Hannah' },
  { value: 'Boxing / Muay Thai', label: 'Boxing / Muay Thai', trainer: 'Liam' },
  { value: 'Pilates / Yoga', label: 'Pilates / Yoga', trainer: 'Hannah' },
  { value: 'Online Coaching', label: 'Online Coaching', trainer: 'Liam or Hannah' },
  { value: 'Nutrition Coaching', label: 'Nutrition Coaching', trainer: 'Hannah' },
];

function BookingModal({ isOpen, onClose }) {
  const [tab, setTab] = useState('form'); // 'form' | 'instagram'
  const [service, setService] = useState('');
  const [sessionType, setSessionType] = useState('1-on-1');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const dialogRef = useRef(null);

  const selectedService = SERVICES.find((s) => s.value === service);

  // Open/close the native dialog
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen && !dialog.open) {
      dialog.showModal();
    } else if (!isOpen && dialog.open) {
      dialog.close();
    }
  }, [isOpen]);

  // Light-dismiss: close when clicking backdrop
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleClick = (e) => {
      if (e.target !== dialog) return;
      const rect = dialog.getBoundingClientRect();
      const isInside =
        rect.top <= e.clientY &&
        e.clientY <= rect.top + rect.height &&
        rect.left <= e.clientX &&
        e.clientX <= rect.left + rect.width;
      if (!isInside) {
        onClose();
      }
    };

    dialog.addEventListener('click', handleClick);
    return () => dialog.removeEventListener('click', handleClick);
  }, [onClose]);

  // Handle native close (Escape key)
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleClose = () => onClose();
    dialog.addEventListener('close', handleClose);
    return () => dialog.removeEventListener('close', handleClose);
  }, [onClose]);

  // Reset state when modal closes
  useEffect(() => {
    if (!isOpen) {
      // Delay reset so close animation finishes
      const timer = setTimeout(() => {
        setSubmitted(false);
        setService('');
        setSessionType('1-on-1');
        setTab('form');
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData(e.target);

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      });
      setSubmitted(true);
    } catch (error) {
      alert('Something went wrong. Please try again or DM us on Instagram.');
      console.error('Form submission error:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <dialog ref={dialogRef} className="booking-dialog" aria-labelledby="booking-title">
      <div className="booking-modal">
        {/* Header */}
        <div className="booking-modal__header">
          <h2 className="booking-modal__title" id="booking-title">Book a Session</h2>
          <button
            className="booking-modal__close"
            onClick={onClose}
            aria-label="Close booking modal"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="booking-modal__body">
          {submitted ? (
            /* ── Success State ── */
            <div className="booking-success">
              <div className="booking-success__icon">
                <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="32" cy="32" r="28" />
                  <polyline points="20,34 28,42 44,24" />
                </svg>
              </div>
              <h3 className="booking-success__title">Thank you!</h3>
              <p className="booking-success__text">
                We&apos;ve received your booking request.<br />
                We&apos;ll get back to you shortly.
              </p>
            </div>
          ) : (
            <>
              {/* ── Booking Method Tabs ── */}
              <div className="booking-tabs">
                <button
                  className={`booking-tab ${tab === 'form' ? 'booking-tab--active' : ''}`}
                  onClick={() => setTab('form')}
                  type="button"
                >
                  <svg className="booking-tab__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="3" />
                    <line x1="7" y1="8" x2="17" y2="8" />
                    <line x1="7" y1="12" x2="14" y2="12" />
                    <line x1="7" y1="16" x2="11" y2="16" />
                  </svg>
                  <span className="booking-tab__label">Book via Form</span>
                  <span className="booking-tab__sub">Fill out the form below</span>
                </button>

                <button
                  className={`booking-tab ${tab === 'instagram' ? 'booking-tab--active' : ''}`}
                  onClick={() => setTab('instagram')}
                  type="button"
                >
                  <svg className="booking-tab__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="5" />
                    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                  </svg>
                  <span className="booking-tab__label">Book via Instagram</span>
                  <span className="booking-tab__sub">DM @humbleloft</span>
                </button>
              </div>

              {/* ── Instagram Panel ── */}
              {tab === 'instagram' && (
                <div className="booking-instagram">
                  <p className="booking-instagram__text">
                    Send us a DM on Instagram and we&apos;ll get you booked in.<br />
                    Quick, easy — no forms needed.
                  </p>
                  <a
                    href="https://ig.me/m/humbleloft"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="booking-instagram__btn"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" />
                      <circle cx="12" cy="12" r="5" />
                      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                    </svg>
                    DM @humbleloft
                  </a>
                </div>
              )}

              {/* ── Form Panel ── */}
              {tab === 'form' && (
                <form
                  className="booking-form"
                  name="booking"
                  method="POST"
                  onSubmit={handleSubmit}
                >
                  <input type="hidden" name="form-name" value="booking" />

                  {/* Name */}
                  <div className="booking-form__group">
                    <label className="booking-form__label" htmlFor="booking-name">
                      Full Name
                    </label>
                    <input
                      className="booking-form__input"
                      type="text"
                      id="booking-name"
                      name="name"
                      placeholder="Your name"
                      required
                      autoComplete="name"
                    />
                  </div>

                  {/* Email or Phone */}
                  <div className="booking-form__group">
                    <label className="booking-form__label" htmlFor="booking-contact">
                      Email or Phone
                    </label>
                    <input
                      className="booking-form__input"
                      type="text"
                      id="booking-contact"
                      name="contact"
                      placeholder="Your email or phone number"
                      required
                      autoComplete="email tel"
                    />
                  </div>

                  {/* Service */}
                  <div className="booking-form__group">
                    <label className="booking-form__label" htmlFor="booking-service">
                      Service
                    </label>
                    <select
                      className="booking-form__select"
                      id="booking-service"
                      name="service"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      required
                    >
                      {SERVICES.map((s) => (
                        <option key={s.value} value={s.value} disabled={s.value === ''}>
                          {s.label}
                        </option>
                      ))}
                    </select>

                    {/* Trainer hint */}
                    {selectedService?.trainer && (
                      <div className="booking-form__trainer-hint">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="8" r="4" />
                          <path d="M4 20c0-4 4-7 8-7s8 3 8 7" />
                        </svg>
                        Coached by {selectedService.trainer}
                      </div>
                    )}
                  </div>

                  {/* Session Type */}
                  <div className="booking-form__group">
                    <span className="booking-form__label">Session Type</span>
                    <div className="booking-form__radio-group">
                      <label className="booking-form__radio-label">
                        <input
                          type="radio"
                          name="session-type"
                          value="1-on-1"
                          checked={sessionType === '1-on-1'}
                          onChange={(e) => setSessionType(e.target.value)}
                        />
                        1-on-1
                      </label>
                      <label className="booking-form__radio-label">
                        <input
                          type="radio"
                          name="session-type"
                          value="Semi-Private"
                          checked={sessionType === 'Semi-Private'}
                          onChange={(e) => setSessionType(e.target.value)}
                        />
                        Semi-Private
                      </label>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="booking-form__group">
                    <label className="booking-form__label" htmlFor="booking-message">
                      Message <span style={{ opacity: 0.4 }}>(optional)</span>
                    </label>
                    <textarea
                      className="booking-form__textarea"
                      id="booking-message"
                      name="message"
                      placeholder="Anything else we should know?"
                      rows={3}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    className="booking-form__submit"
                    type="submit"
                    disabled={submitting}
                  >
                    {submitting ? 'Sending...' : 'SEND BOOKING REQUEST'}
                  </button>
                </form>
              )}
            </>
          )}
        </div>
      </div>
    </dialog>
  );
}

export default BookingModal;
