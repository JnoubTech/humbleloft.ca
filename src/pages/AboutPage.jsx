import Navbar from '../components/Navbar';
import './AboutPage.css';

function AboutPage() {
  return (
    <div className="app">
      <Navbar />

      {/* Section 1: Hero — ABOUT HUMBLE LOFT */}
      <section className="hero-section" id="about-hero">
        <video
          className="hero-video-bg"
          src={`${import.meta.env.BASE_URL}images/extracted/about/about_video_00.mp4`}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">
            ABOUT<br />HUMBLE LOFT
          </h1>
        </div>
      </section>

      {/* Section 2: WHAT WE ARE — light bg, text left / image right */}
      <section className="about-split about-split--light" id="what-we-are">
        <div className="about-split__inner">
          <div className="about-split__text">
            <h2 className="about-split__heading">WHAT WE ARE</h2>
            <p className="about-split__body">
              A <em>fully private</em> training studio in Mississauga. <em>Commercial-grade</em> strength
              and conditioning equipment, a <em>complete</em> Pilates setup, and
              <em> dedicated</em> space for boxing and Muay Thai - all in one space, and
              all yours for every session.
            </p>
          </div>
          <div className="about-split__image">
            <img
              src={`${import.meta.env.BASE_URL}images/extracted/about/about_image_03.png`}
              alt="The Humble Loft gym space"
            />
          </div>
        </div>
      </section>

      {/* Section 3: WHY WE BUILT IT — dark bg, image left / text right */}
      <section className="about-split about-split--dark about-split--reverse" id="why-we-built-it">
        <div className="about-split__inner">
          <div className="about-split__text">
            <h2 className="about-split__heading">WHY WE BUILT IT</h2>
            <p className="about-split__body">
              Private training shouldn't cost more - it should just be better.
              Expert coaching in a real facility, without the markup, the crowds,
              or the contracts.
            </p>
          </div>
          <div className="about-split__image">
            <img
              src={`${import.meta.env.BASE_URL}images/extracted/about/about_image_00.png`}
              alt="Pilates reformer room"
            />
          </div>
        </div>
      </section>

      {/* Section 4: Feature Cards — 3 columns with images */}
      <section className="about-features" id="features">
        <div className="about-features__grid">
          <div className="feature-card">
            <div className="feature-image">
              <img
                src={`${import.meta.env.BASE_URL}images/extracted/about/about_image_02.png`}
                alt="Session packages"
              />
            </div>
            <p className="feature-text">
              Buy packages of 5, 10, or 20 sessions. Train on your schedule.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-image">
              <img
                src={`${import.meta.env.BASE_URL}images/extracted/about/about_image_04.png`}
                alt="Private studio"
              />
            </div>
            <p className="feature-text">
              No shared floor. No strangers. Just you and your coach.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-image">
              <img
                src={`${import.meta.env.BASE_URL}images/extracted/about/about_image_05.png`}
                alt="Personalized programming"
              />
            </div>
            <p className="feature-text">
              Programming built for you, progressed intentionally, coached every session.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: CTA — DM TO BOOK */}
      <section className="about-cta" id="about-cta">
        <p className="about-cta__text">No crowds. No contracts. Just training.</p>
        <a
          href="https://www.instagram.com/humbleloft"
          target="_blank"
          rel="noopener noreferrer"
          className="about-cta__btn"
        >
          DM TO BOOK
        </a>
      </section>
    </div>
  );
}

export default AboutPage;
