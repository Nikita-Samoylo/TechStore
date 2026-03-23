import React from 'react';
import { RiMailLine, RiPhoneLine, RiMapPinLine, RiTimeLine } from 'react-icons/ri';
import ContactItem from './ContactItem';
import './GetInTouch.css';

const CONTACT_ITEMS = [
  {
    icon: RiMailLine,
    title: 'Email Us',
    lines: ['support@techstore.com', 'sales@techstore.com'],
  },
  {
    icon: RiPhoneLine,
    title: 'Call Us',
    lines: ['1-800-TECH-SHOP', '(1-800-832-4746)'],
  },
  {
    icon: RiMapPinLine,
    title: 'Visit Us',
    lines: ['123 Tech Street', 'San Francisco, CA 94105'],
  },
  {
    icon: RiTimeLine,
    title: 'Business Hours',
    lines: ['Mon-Fri: 9AM - 6PM PST', 'Sat-Sun: 10AM - 4PM PST'],
  },
];

const GetInTouch = () => {
  return (
    <section className="about-card get-in-touch">
      <h2 className="about-card__title">Get in Touch</h2>

      <div className="get-in-touch__grid">
        {CONTACT_ITEMS.map((item) => (
          <ContactItem key={item.title} icon={item.icon} title={item.title} lines={item.lines} />
        ))}
      </div>
    </section>
  );
};

export default GetInTouch;