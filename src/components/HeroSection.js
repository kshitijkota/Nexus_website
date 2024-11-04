import React from 'react';
import { ReactTyped as Typed } from 'react-typed';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <h1 className="club-name">NEXUS CLUB</h1>
      <Typed
        className="tagline"
        strings={[
          "Unlocking Tomorrow's Technology Today!",
          "Driving Innovation in Technology and Engineering!",
          "Where Ideas Meet Innovation!"
        ]}
        typeSpeed={50}
        backSpeed={30}
        loop
      />
      <p className="hero-description">
        Charting the Course of Innovation: Spearheading Revolutionary Advancements and Transformations.
      </p>
      <div className="hero-buttons">
        <button className="btn">Projects</button>
        <button className="btn">Events</button>
      </div>
    </section>
  );
};

export default HeroSection;
