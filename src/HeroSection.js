import React from 'react';

const HeroSection = () => (
  <section className="hero__container">
    <div className="hero__image__container">
      <img className="hero__image animated" src="./assets/hero.jpg" alt="Hero Image" loading="lazy" />
      <img src="./assets/svg/heroShape.svg" alt="Hero Image Shape" className="hero__image__shape" loading="lazy" />
      <img src="./assets/svg/herobgpattren.svg" alt="Hero Image Pattern" className="hero__image__pattern" loading="lazy" />
    </div>
    <div className="hero__description">
      <h1 className="hero__text">Join the Mindfulness Community for inner peace.</h1>
      <button className="button__primary">Join now</button>
    </div>
  </section>
);

export default HeroSection;
