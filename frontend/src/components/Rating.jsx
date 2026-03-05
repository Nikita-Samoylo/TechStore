import React from 'react';

const StarPath = "M7.04894 0.92428C7.3483 0.00293922 8.6517 0.00294006 8.95106 0.924281L10.5222 5.76023C10.6561 6.17237 11.0401 6.45136 11.4734 6.45136H16.5587C17.5262 6.45136 17.929 7.6912 17.1453 8.26063L13.0307 11.2503C12.6802 11.505 12.5335 11.9564 12.6674 12.3686L14.2386 17.2045C14.5379 18.1259 13.4833 18.892 12.6996 18.3226L8.58503 15.3329C8.23453 15.0782 7.76547 15.0782 7.41497 15.3329L3.30043 18.3226C2.51671 18.892 1.46208 18.1259 1.76144 17.2045L3.33261 12.3686C3.46648 11.9564 3.31983 11.505 2.96932 11.2503L-1.14529 8.26063C-1.92902 7.6912 -1.52618 6.45136 -0.558683 6.45136H4.52663C4.9599 6.45136 5.3439 6.17237 5.47777 5.76023L7.04894 0.92428Z";

const FullStar = () => (
  <svg width="16" height="16" viewBox="0 0 16 19" fill="none">
    <path d={StarPath} fill="#FDC700"/>
  </svg>
);

const EmptyStar = () => (
  <svg width="16" height="16" viewBox="0 0 16 19" fill="none">
    <path d={StarPath} fill="#E5E7EB"/>
  </svg>
);

const HalfStar = () => (
  <svg width="16" height="16" viewBox="0 0 16 19" fill="none">
    <defs>
      <linearGradient id="half_grad_rating">
        <stop offset="50%" stopColor="#FDC700"/>
        <stop offset="50%" stopColor="#FFFFFF"/>
      </linearGradient>
    </defs>
    <path d={StarPath} fill="url(#half_grad_rating)"/>
  </svg>
);

const Rating = ({ value }) => {
  return (
    <div style={{ display: 'flex', gap: '4px' }}>
      {[...Array(5)].map((_, i) => {
        const ratingValue = i + 1;
        if (value >= ratingValue) {
          return <FullStar key={i} />;
        } else if (value >= ratingValue - 0.5) {
          return <HalfStar key={i} />;
        } else {
          return <EmptyStar key={i} />;
        }
      })}
    </div>
  );
};

export default Rating;