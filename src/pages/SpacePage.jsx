import { useState } from 'react';
import Navbar from '../components/Navbar';
import { useScrollAnimations } from '../hooks/useScrollAnimations';
import { useBooking } from '../hooks/useBooking';
import './SpacePage.css';

const equipmentSections = [
  {
    id: 'machines',
    title: 'MACHINES',
    images: [
      { src: `${import.meta.env.BASE_URL}images/extracted/space/space_image_05.jpg`, alt: 'Cable machine' },
      { src: `${import.meta.env.BASE_URL}images/extracted/space/space_image_04.jpg`, alt: 'Gym machines' },
    ],
    description: [
      "Assault bike, treadmill, rower, double cable machine, lat pulldown/low row, leg extension/curl AND power cage...",
      "The same commercial-grade equipment you'd find at any gym, without waiting for someone to finish their set.",
    ],
  },
  {
    id: 'free-weights',
    title: 'FREE WEIGHTS',
    images: [
      { src: `${import.meta.env.BASE_URL}images/extracted/space/space_image_11.jpg`, alt: 'Free weights area' },
    ],
    description: [
      "Adjustable dumbbells from 5-80 lb, kettlebells from 5-80 lb, incline/decline adjustable bench, Olympic barbell and plates, EZ curl bar, trap bar, resistance bands...",
      "Everything you need to train - no substitutions, no waiting.",
    ],
  },
  {
    id: 'pilates',
    title: 'PILATES',
    images: [
      { src: `${import.meta.env.BASE_URL}images/extracted/space/space_image_08.jpg`, alt: 'Pilates reformer studio' },
    ],
    description: [
      "Custom reformer, yoga mats, Pilates rings, resistance bands, foam rollers AND stability balls...",
      "A fully equipped Pilates studio in its own dedicated, quiet space - separate from the gym floor.",
    ],
  },
  {
    id: 'combat-sports',
    title: 'COMBAT SPORTS',
    images: [
      { src: `${import.meta.env.BASE_URL}images/extracted/space/space_image_06.jpg`, alt: 'Boxing and Muay Thai area' },
    ],
    description: [
      "Foam mats, freestanding heavy bag, Thai pads, focus mitts, striking paddles, boxing gloves, and shin guards - all provided.",
      "Show up, glove up, get to work.",
    ],
  },
];

function AccordionItem({ section, isOpen, onToggle }) {
  return (
    <div className="accordion-item" id={`accordion-${section.id}`}>
      <button
        className={`accordion-header ${isOpen ? 'accordion-header--open' : ''}`}
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`accordion-panel-${section.id}`}
      >
        <span className="accordion-title">{section.title}</span>
        <span className={`accordion-icon ${isOpen ? 'accordion-icon--open' : ''}`}>
          {/* Circled chevron icon */}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <polyline points="8 10 12 14 16 10" />
          </svg>
        </span>
      </button>

      <div
        className={`accordion-panel ${isOpen ? 'accordion-panel--open' : ''}`}
        id={`accordion-panel-${section.id}`}
        role="region"
      >
        <div className="accordion-content">
          <div className="accordion-images">
            {section.images.map((img, i) => (
              <img key={i} src={img.src} alt={img.alt} className="accordion-img" />
            ))}
          </div>
          <div className="accordion-text">
            {section.description.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function SpacePage() {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default
  useScrollAnimations();
  const openBooking = useBooking();

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <div className="app">
      <Navbar />

      {/* Hero - THE STUDIO */}
      <section className="hero-section" id="space-hero">
        <video
          className="hero-video-bg"
          src={`${import.meta.env.BASE_URL}images/extracted/space/space_video_hero.mp4`}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">THE STUDIO</h1>
        </div>
      </section>

      {/* Accordion Equipment Section */}
      <section className="space-accordion-section" id="equipment" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/extracted/space/space_image_07.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="space-accordion-wrapper">
          {equipmentSections.map((section, index) => (
            <AccordionItem
              key={section.id}
              section={section}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </section>

      {/* 3-Column Features */}
      <section className="space-features" id="space-features">
        <div className="space-features__grid">
          <div className="space-feature fade-in-on-scroll">
            <div className="space-feature__icon">
              <img src={`${import.meta.env.BASE_URL}images/extracted/space/space_image_09.png`} alt="No waiting icon" />
            </div>
            <p className="space-feature__text">
              No waiting on machines, no shared equipment - just you, your trainer and your goals.
            </p>
          </div>

          <div className="space-feature-divider"></div>

          <div className="space-feature fade-in-on-scroll">
            <div className="space-feature__icon">
              <img src={`${import.meta.env.BASE_URL}images/extracted/space/space_image_03.png`} alt="Equipment icon" />
            </div>
            <p className="space-feature__text">
              Between free weights, machines, reformer/mats, gloves/shin guards...
              we have <em>everything</em> you need.
            </p>
          </div>

          <div className="space-feature-divider"></div>

          <div className="space-feature fade-in-on-scroll">
            <div className="space-feature__icon">
              <img src={`${import.meta.env.BASE_URL}images/extracted/space/space_image_10.png`} alt="Two spaces icon" />
            </div>
            <p className="space-feature__text">
              Two distinct spaces under one roof. Our gym and boxing area
              is <em>separate</em> from the quiet focus of the Pilates studio.
            </p>
          </div>
        </div>
      </section>

      {/* CTA - See it for yourself */}
      <section className="space-cta" id="space-cta">
        <div className="space-cta__oval">
          <p className="space-cta__heading">See it for yourself.</p>
          <p className="space-cta__sub">Book your first session and experience the space</p>
          <button className="space-cta__btn" onClick={openBooking}>
            BOOK NOW
          </button>
        </div>
      </section>
    </div>
  );
}

export default SpacePage;
