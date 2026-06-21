import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const navLinksLeft = [
  { label: 'Home', to: '/' },
  { label: 'About Humble Loft', to: '/about' },
  { label: 'Meet the trainers', to: '/trainers' },
  { label: 'Explore the space', to: '/space' },
];

const navLinksRight = [
  { label: 'Strength Training', to: '/strength' },
  { label: 'Boxing/Muay Thai', to: '/boxing' },
  { label: 'Pilates/Yoga', to: '/pilates' },
  { label: 'Contact Us', to: '/contact' },
];

function NavLink({ label, to, onClick }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  if (to.startsWith('#')) {
    return <a href={to} onClick={onClick}>{label}</a>;
  }
  return (
    <Link to={to} onClick={onClick} className={isActive ? 'active' : ''}>
      {label}
    </Link>
  );
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  // Scroll detection for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* The actual navbar bar */}
      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${menuOpen ? 'navbar--menu-open' : ''}`} id="navbar">
        {/* Left Links */}
        <div className="navbar-links" id="navbar-links-left">
          {navLinksLeft.map((link) => (
            <NavLink key={link.label} label={link.label} to={link.to} />
          ))}
        </div>

        {/* Center Logo */}
        <div className="navbar-logo" id="navbar-logo">
          <Link to="/" onClick={closeMenu}>
            <img
              src={`${import.meta.env.BASE_URL}images/hl-logo.png`}
              alt="Humble Loft"
            />
          </Link>
        </div>

        {/* Right Links */}
        <div className="navbar-links" id="navbar-links-right">
          {navLinksRight.map((link) => (
            <NavLink key={link.label} label={link.label} to={link.to} />
          ))}
        </div>

        {/* Hamburger Button (mobile) */}
        <button
          className={`navbar-hamburger ${menuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          id="navbar-hamburger"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Mobile Menu Overlay — OUTSIDE the nav so it's not trapped in the nav's stacking context */}
      <div
        className={`navbar-mobile-menu ${menuOpen ? 'open' : ''}`}
        id="navbar-mobile-menu"
      >
        {[...navLinksLeft, ...navLinksRight].map((link) => (
          <NavLink key={link.label} label={link.label} to={link.to} onClick={closeMenu} />
        ))}
      </div>
    </>
  );
}

export default Navbar;
