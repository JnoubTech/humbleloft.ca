import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  return (
    <div className="app">
      <Navbar />

      {/* Section 1: Hero — HUMBLE LOFT */}
      <section className="hero-section" id="hero">
        <video
          className="hero-video-bg"
          src={`${import.meta.env.BASE_URL}images/extracted/home/home_video_00.mp4`}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">
            HUMBLE<br />LOFT
          </h1>
          <Link to="/about" className="section-btn">About Humble Loft</Link>
        </div>
      </section>

      {/* Section 2: EXPERT TRAINERS */}
      <section className="hero-section" id="expert-trainers">
        <video
          className="hero-video-bg"
          src={`${import.meta.env.BASE_URL}images/extracted/home/home_video_03.mp4`}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h2 className="hero-title">
            EXPERT<br />TRAINERS
          </h2>
          <Link to="/trainers" className="section-btn">Meet your coaches</Link>
        </div>
      </section>

      {/* Section 3: PRIVATE STUDIO */}
      <section className="hero-section" id="private-studio">
        <video
          className="hero-video-bg"
          src={`${import.meta.env.BASE_URL}images/extracted/home/home_video_01.mp4`}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h2 className="hero-title">
            PRIVATE<br />STUDIO
          </h2>
          <Link to="/space" className="section-btn">Explore the space</Link>
        </div>
      </section>

      {/* Section 4: LIFT / STRIKE / FLOW — 3-Panel Grid */}
      <section className="panels-section" id="panels">
        <video
          className="panels-video-bg"
          src={`${import.meta.env.BASE_URL}images/extracted/home/home_video_02.mp4`}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="panels-overlay"></div>
        <div className="panels-grid">
          {/* LIFT */}
          <div className="panel" id="panel-lift">
            <div className="panel-content">
              <h2 className="panel-title">LIFT.</h2>
              <Link to="/strength" className="section-btn">Explore Strength</Link>
            </div>
          </div>

          {/* STRIKE */}
          <div className="panel" id="panel-strike">
            <div className="panel-content">
              <h2 className="panel-title">STRIKE.</h2>
              <Link to="/boxing" className="section-btn">Explore Striking</Link>
            </div>
          </div>

          {/* FLOW */}
          <div className="panel" id="panel-flow">
            <div className="panel-content">
              <h2 className="panel-title">FLOW.</h2>
              <Link to="/pilates" className="section-btn">Explore Flow</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
