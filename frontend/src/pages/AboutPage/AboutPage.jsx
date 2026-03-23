import React from 'react';
import OurStory from '../../components/about/OurStory/OurStory';
import OurValues from '../../components/about/OurValues/OurValues';
import GetInTouch from '../../components/about/GetInTouch/GetInTouch';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        <div className="about-hero">
          <h1 className="about-hero__title">About TechStore</h1>
          <p className="about-hero__subtitle">
            Your trusted destination for premium electronics and cutting-edge technology
          </p>
        </div>

        <OurStory />
        <OurValues />
        <GetInTouch />
      </div>
    </div>
  );
};

export default AboutPage;