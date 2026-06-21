import Navbar from '../components/Navbar';
import { useScrollAnimations } from '../hooks/useScrollAnimations';
import { useBooking } from '../hooks/useBooking';
import './ServicePage.css';

/**
 * Shared layout for all service pages (Strength, Boxing, Pilates).
 * Accepts a config prop with all the content data.
 *
 * Expected shape of `config`:
 * {
 *   hero: { title, subtitle, bgImage },
 *   training: { heading, paragraphs[], image, imageAlt },
 *   coach: { heading, name, paragraphs[], tagline, image, imageAlt },
 *   features: { heading, items: [{ icon: JSX, label, sublabel }] },
 *   cta: { heading, sub, btnText, btnHref }
 * }
 */
function ServicePage({ config }) {
  useScrollAnimations();
  const openBooking = useBooking();

  const { hero, training, coach, features, cta } = config;

  return (
    <div className="app">
      <Navbar />

      {/* ── Hero ── */}
      <section className="hero-section" id="service-hero">
        {hero.bgVideo ? (
          <video
            className="hero-video-bg"
            src={hero.bgVideo}
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <div
            className="hero-bg"
            style={{ backgroundImage: `url(${hero.bgImage})` }}
          ></div>
        )}
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">{hero.title}</h1>
          <p className="hero-subtitle">{hero.subtitle}</p>
        </div>
      </section>

      {/* ── The Training ── */}
      <section className="svc-training" id="service-training">
        <div className="svc-training__inner">
          <div className="svc-training__text fade-in-on-scroll">
            <h2 className="svc-training__heading">{training.heading}</h2>
            {training.paragraphs.map((p, i) => (
              <p key={i} className="svc-training__para">{p}</p>
            ))}
          </div>
          <div className="svc-training__media fade-in-on-scroll">
            {training.video ? (
              <video src={training.video} autoPlay loop muted playsInline />
            ) : (
              <img src={training.image} alt={training.imageAlt} />
            )}
          </div>
        </div>
      </section>

      {/* ── Meet Your Coach / Instructor ── */}
      <section className="svc-coach" id="service-coach">
        <div className="svc-coach__inner">
          <div className="svc-coach__photo fade-in-on-scroll">
            {coach.video ? (
              <video src={coach.video} autoPlay loop muted playsInline />
            ) : (
              <img src={coach.image} alt={coach.imageAlt} />
            )}
          </div>
          <div className="svc-coach__text fade-in-on-scroll">
            <h2 className="svc-coach__heading">{coach.heading}</h2>
            {coach.paragraphs.map((p, i) => (
              <p key={i} className="svc-coach__para">{p}</p>
            ))}
            {coach.tagline && (
              <p className="svc-coach__tagline">{coach.tagline}</p>
            )}
          </div>
        </div>
      </section>

      {/* ── Features / What it's for ── */}
      <section className="svc-features" id="service-features">
        {features.heading && (
          <h3 className="svc-features__heading">{features.heading}</h3>
        )}
        <div className="svc-features__grid">
          {features.items.map((item, i) => (
            <div className="svc-features__item-wrapper" key={i}>
              {i > 0 && <div className="svc-features__divider" />}
              <div className="svc-features__item fade-in-on-scroll">
                <div className="svc-features__icon">
                  {item.icon}
                </div>
                <p className="svc-features__label">{item.label}</p>
                {item.sublabel && (
                  <p className="svc-features__sublabel">{item.sublabel}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="svc-cta" id="service-cta">
        <div className="svc-cta__oval">
          <p className="svc-cta__heading">{cta.heading}</p>
          {cta.sub && <p className="svc-cta__sub">{cta.sub}</p>}
          <button className="svc-cta__btn" onClick={openBooking}>
            {cta.btnText || 'BOOK NOW'}
          </button>
        </div>
      </section>
    </div>
  );
}

export default ServicePage;
