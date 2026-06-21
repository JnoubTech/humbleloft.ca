import Navbar from '../components/Navbar';
import { useScrollAnimations } from '../hooks/useScrollAnimations';
import './ContactPage.css';

/* ── SVG Icons ── */
const InstagramIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="8" y="8" width="48" height="48" rx="12" />
    <circle cx="32" cy="32" r="12" />
    <circle cx="46" cy="18" r="3" fill="currentColor" stroke="none" />
  </svg>
);

const EmailIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="6" y="14" width="52" height="36" rx="4" />
    <polyline points="6,14 32,36 58,14" />
  </svg>
);

const LocationIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M32 4C20 4 12 14 12 24c0 14 20 36 20 36s20-22 20-36C52 14 44 4 32 4z" />
    <circle cx="32" cy="24" r="8" />
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="32" cy="32" r="26" />
    <polyline points="32,16 32,32 44,38" />
  </svg>
);

const contactMethods = [
  {
    icon: <InstagramIcon />,
    title: 'DM us on Instagram',
    detail: '@humbleloft',
    href: 'https://www.instagram.com/humbleloft',
  },
  {
    icon: <EmailIcon />,
    title: 'E-mail us',
    detail: 'humbleloft@outlook.com',
    href: 'mailto:humbleloft@outlook.com',
  },
  {
    icon: <LocationIcon />,
    title: 'Location',
    detail: 'Erin Mills, Mississauga',
    href: null,
  },
  {
    icon: <ClockIcon />,
    title: 'Hours',
    detail: 'By appointment only',
    href: null,
  },
];

function ContactPage() {
  useScrollAnimations();

  return (
    <div className="app">
      <Navbar />

      {/* ── Get In Touch Hero ── */}
      <section className="contact-hero" id="contact-hero">
        <div className="contact-hero__oval">
          <p className="contact-hero__sub">Have questions? Ready to train?</p>
          <h1 className="contact-hero__title">Get in touch</h1>
        </div>
      </section>

      {/* ── Contact Methods Grid ── */}
      <section className="contact-methods" id="contact-methods">
        <div className="contact-methods__oval">
          <div className="contact-methods__grid">
            {contactMethods.map((method, i) => {
              const content = (
                <div className="contact-method fade-in-on-scroll" key={i}>
                  <div className="contact-method__icon">
                    {method.icon}
                  </div>
                  <h3 className="contact-method__title">{method.title}</h3>
                  <p className="contact-method__detail">{method.detail}</p>
                </div>
              );

              if (method.href) {
                return (
                  <a
                    key={i}
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="contact-method-link"
                  >
                    {content}
                  </a>
                );
              }
              return content;
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="contact-cta" id="contact-cta">
        <div className="contact-cta__oval">
          <p className="contact-cta__heading">Your first session starts with a message.</p>
          <p className="contact-cta__sub">Session packages available in 5, 10 and 20.</p>
          <a
            href="https://www.instagram.com/humbleloft"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-cta__btn"
          >
            DM @humbleloft
          </a>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
