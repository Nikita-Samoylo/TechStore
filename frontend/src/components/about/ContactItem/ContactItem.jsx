import React from 'react';
import './ContactItem.css';

const ContactItem = ({ icon: Icon, title, lines }) => {
  return (
    <div className="get-in-touch__item">
      <div className="get-in-touch__icon" aria-hidden="true">
        <Icon className="get-in-touch__icon-svg" />
      </div>

      <div>
        <h3 className="get-in-touch__title">{title}</h3>
        {lines.map((line, idx) => (
          <p key={idx} className="get-in-touch__text">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ContactItem;