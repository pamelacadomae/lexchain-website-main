import React from 'react';
import '../styles/Home.css';
import logo from '../assets/logo.png';
import animatedBg from '../assets/ai-face.gif';

const Home = () => {
  return (
    <div id="home">
      {/* Hero Section */}
      <div className="hero-section">
        <img src={animatedBg} alt="AI Background" className="hero-bg" />
        <div className="hero-overlay">
          <header className="hero-header">
            <img src={logo} alt="Logo" className="hero-logo" />
            <nav className="hero-nav">Home</nav>
          </header>
          <div className="hero-content">
            <h1>Hello, Welcome to Lexchain!</h1>
            <p>Our AI-powered solutions change the way you work.</p>
            <button className="hero-btn">Get Started</button>
          </div>
        </div>
      </div>

      {/* Existing Services Section */}
      <section id="services-1639">
        <div className="cs-container">
          <div className="cs-title-wrapper">
            <h2 className="cs-h2">WELCOME TO LEXCHAIN</h2>
            <p className="cs-item-text">Here’s what makes us different.</p>
          </div>

          <ul className="cs-card-group">
            <li className="cs-item">
              <div className="cs-flex">
                <h2 className="cs-h2">Creative Solutions</h2>
                <p className="cs-item-text">
                  Highly experienced staff of more than 100 professionals averaging 29+ years in industry and hands-on knowledge.
                </p>
              </div>
              <img
                className="cs-icon"
                loading="lazy"
                decoding="async"
                src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/gold-circle-check.svg"
                alt="icon"
                width="48"
                height="48"
              />
            </li>

            <li className="cs-item">
              <div className="cs-flex">
                <h2 className="cs-h2">Professional Team</h2>
                <p className="cs-item-text">
                  Highly experienced staff of more than 100 professionals averaging 29+ years in industry and hands-on knowledge.
                </p>
              </div>
              <img
                className="cs-icon"
                loading="lazy"
                decoding="async"
                src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/gold-speedometer.svg"
                alt="icon"
                width="48"
                height="48"
              />
            </li>

            <li className="cs-item">
              <div className="cs-flex">
                <h2 className="cs-h2">Diverse Approach</h2>
                <p className="cs-item-text">
                  Highly experienced staff of more than 100 professionals averaging 29+ years in industry and hands-on knowledge.
                </p>
              </div>
              <img
                className="cs-icon"
                loading="lazy"
                decoding="async"
                src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/gold-bouy.svg"
                alt="icon"
                width="48"
                height="48"
              />
            </li>

            <li className="cs-item">
              <div className="cs-flex">
                <h2 className="cs-h2">Detailed Reports</h2>
                <p className="cs-item-text">
                  Highly experienced staff of more than 100 professionals averaging 29+ years in industry and hands-on knowledge.
                </p>
              </div>
              <img
                className="cs-icon"
                loading="lazy"
                decoding="async"
                src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/gold-thumb.svg"
                alt="icon"
                width="48"
                height="48"
              />
            </li>
          </ul>
        </div>
      </section>

      {/* Existing Courses Section */}
      <section id="sbs-1639">
        <div className="cs-container">
          <div className="cs-content">
            <span className="cs-topper">Our Courses</span>
            <h2 className="cs-title">Stitch Group for Process Safety Training</h2>
            <picture className="cs-picture">
              <source
                media="(max-width: 600px)"
                srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/talking.jpg"
              />
              <source
                media="(min-width: 601px)"
                srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/talking.jpg"
              />
              <img
                loading="lazy"
                decoding="async"
                src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/talking.jpg"
                alt="people"
                width="608"
                height="406"
              />
            </picture>
          </div>

          <div className="cs-stats-group">
            <p className="cs-text">
              Aqestic recusandae laudantium optio amet a quisquam saepe aliquid, voluptate praesentium dicta fuga dolor error perspiciatis voluptatem eum cupiditate totam.
            </p>
            <p className="cs-text">
              Aqestic recusandae laudantium optio amet a quisquam saepe aliquid, voluptate praesentium dicta fuga dolor error perspiciatis voluptatem eum cupiditate totam.
            </p>
            <ul className="cs-stats">
              <li className="cs-stat">
                <span className="cs-number">475</span>
                <span className="cs-desc">Repeat Customers</span>
              </li>
              <li className="cs-stat">
                <span className="cs-number">2K</span>
                <span className="cs-desc">Satisfied Customers</span>
              </li>
              <li className="cs-stat">
                <span className="cs-number">37</span>
                <span className="cs-desc">Professional Team</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
