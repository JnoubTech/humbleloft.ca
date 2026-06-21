import Navbar from '../components/Navbar';
import { useScrollAnimations } from '../hooks/useScrollAnimations';
import './TrainersPage.css';

const trainers = [
  {
    id: 'liam',
    role: 'Co-Founder, Trainer and Boxing/Muay Thai Coach',
    name: 'Liam Thiru',
    specialties: 'Strength and Conditioning - Combat Sports - Athletic Training',
    bio: [
      "Lifetime multi-sport athlete, Muay Thai fighter/coach, UofT graduate/sports coach AND NASM certified personal trainer - Liam has all the experience required to help you reach your goals.",
      "From weight loss, to muscle gain, to injury rehab, athletic training and fighting - Liam meets you where you're at for comfortable yet intense training.",
    ],
    services: [
      'Strength Training (1on1 OR semi-private)',
      'Boxing/Muay Thai (1on1 OR semi-private)',
      'Athletic Training (1on1)',
      'Online Coaching',
    ],
    video: `${import.meta.env.BASE_URL}images/extracted/trainers/trainers_video_03.mp4`,
    image: `${import.meta.env.BASE_URL}images/extracted/trainers/trainers_image_01.jpg`,
    imageAlt: 'Liam Thiru',
    theme: 'light',
    photoSide: 'right',
  },
  {
    id: 'hannah',
    role: 'Co-Founder, Trainer and Pilates/Yoga Instructor',
    name: 'Hannah Badin',
    specialties: 'Pre and Post Natal - Injury Rehab - Weight Loss',
    bio: [
      "With a BKin from Laurier, CanFit CPT, ISSA Nutrition & Yoga, Varsity track background AND Body Harmonics Pilates Certification - Hannah has all the tools to help you achieve success.",
      "From weight loss, to flexibility training, to pre & post natal care - Hannah guides with care and compassion, ensuring you reach your goals.",
    ],
    services: [
      'Strength Training (1on1 OR semi-private)',
      'Mat Pilates/Yoga (1on1 OR semi-private)',
      'Reformer Pilates (1on1)',
      'Online Coaching AND Nutrition Coaching',
    ],
    video: `${import.meta.env.BASE_URL}images/extracted/trainers/trainers_video_01.mp4`,
    image: `${import.meta.env.BASE_URL}images/extracted/trainers/trainers_image_03.jpg`,
    imageAlt: 'Hannah Badin',
    theme: 'dark',
    photoSide: 'left',
  },
];

function TrainerCard({ trainer }) {
  const isPhotoLeft = trainer.photoSide === 'left';
  const themeClass = trainer.theme === 'dark' ? 'trainer-card--dark' : 'trainer-card--light';

  const photoBlock = (
    <div className="trainer-card__photo fade-in-on-scroll">
      {trainer.video ? (
        <video
          src={trainer.video}
          autoPlay
          loop
          muted
          playsInline
          className="trainer-card__video"
        />
      ) : (
        <img src={trainer.image} alt={trainer.imageAlt} />
      )}
    </div>
  );

  const textBlock = (
    <div className="trainer-card__text fade-in-on-scroll">
      <p className="trainer-card__role">{trainer.role}</p>
      <h2 className="trainer-card__name">{trainer.name}</h2>
      <p className="trainer-card__specialties">{trainer.specialties}</p>

      {trainer.bio.map((paragraph, i) => (
        <p key={i} className="trainer-card__bio">{paragraph}</p>
      ))}

      <p className="trainer-card__services-label">Services offered :</p>
      <ul className="trainer-card__services">
        {trainer.services.map((s, i) => (
          <li key={i}>-{s}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <section className={`trainer-card ${themeClass}`} id={`trainer-${trainer.id}`}>
      <div className="trainer-card__inner">
        {isPhotoLeft ? (
          <>
            {photoBlock}
            {textBlock}
          </>
        ) : (
          <>
            {textBlock}
            {photoBlock}
          </>
        )}
      </div>
    </section>
  );
}

function TrainersPage() {
  useScrollAnimations();

  return (
    <div className="app">
      <Navbar />

      {/* Hero */}
      <section className="hero-section" id="trainers-hero">
        <video
          className="hero-video-bg"
          src={`${import.meta.env.BASE_URL}images/extracted/trainers/trainers_video_02.mp4`}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">MEET THE TRAINERS</h1>
        </div>
      </section>

      {/* Trainer Profiles */}
      {trainers.map((trainer) => (
        <TrainerCard key={trainer.id} trainer={trainer} />
      ))}

      {/* CTA */}
      <section className="trainers-cta" id="trainers-cta">
        <div className="trainers-cta__oval">
          <p className="trainers-cta__heading">Already know who you want to train with?</p>
          <a
            href="https://www.instagram.com/humbleloft"
            target="_blank"
            rel="noopener noreferrer"
            className="trainers-cta__btn"
          >
            DM TO BOOK
          </a>
        </div>
      </section>
    </div>
  );
}

export default TrainersPage;
