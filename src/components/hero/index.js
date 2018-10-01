import React from 'react';
import './hero.scss';
import HeroImage from 'static/images/hero.png';

const Hero = () => (
  <div className="section-hero">
    <div className="container">
      <div className="hero-content">
        <div className="hero-content-left">
          <h2 className="hero__title">WP Summit 2018 - Não perca a cabeça com WordPress Headless</h2>
          <a className="btn-hero" href="#">saiba mais</a>
        </div>

        <div className="hero-content-right">
          <img className="hero-thumb" src={HeroImage} alt="WP-Summit" />
        </div>
      </div>
    </div>
  </div>
);

export { Hero };
