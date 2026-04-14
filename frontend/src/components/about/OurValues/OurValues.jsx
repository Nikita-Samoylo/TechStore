import React from 'react';
import ValueCard from '../ValueCard/ValueCard';
import './OurValues.css';

const VALUES = [
  { emoji: '🎯', title: 'Quality First', text: 'We only stock products from trusted brands that meet our rigorous quality standards.' },
  { emoji: '💯', title: 'Customer Satisfaction', text: "Your happiness is our priority. We're committed to providing exceptional service at every step." },
  { emoji: '⚡', title: 'Fast & Reliable', text: "Quick shipping, easy returns, and responsive support — we're here when you need us." },
];

const OurValues = () => (
  <section className="our-values">
    <h2 className="our-values__title">Our Values</h2>

    <div className="our-values__grid">
      {VALUES.map((v) => (
        <ValueCard key={v.title} {...v} />
      ))}
    </div>
  </section>
);

export default OurValues;