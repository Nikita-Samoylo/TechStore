import React from 'react';
import './OurStory.css';

const OurStory = () => {
  return (
    <section className="about-card our-story">
      <h2 className="about-card__title">Our Story</h2>

      <div className="our-story__text">
        <p>
          Founded in 2020, TechStore has grown to become one of the most trusted names in consumer
          electronics. We're passionate about bringing you the latest and greatest technology
          products at competitive prices.
        </p>

        <p>
          Our mission is simple: to provide exceptional products, outstanding customer service, and
          a seamless shopping experience. Whether you're a tech enthusiast or just looking for
          reliable electronics, we're here to help you find exactly what you need.
        </p>

        <p>
          With a carefully curated selection of premium brands and products, we ensure that every
          item in our catalog meets our high standards for quality and performance.
        </p>
      </div>
    </section>
  );
};

export default OurStory;