import React from 'react';
import Star from './Star';

interface StarsProps {
  count: number;
}

const Stars: React.FC<StarsProps> = ({ count }) => {
  if (typeof count !== 'number' || count < 1 || count > 5) {
    return null;
  }

  return (
    <ul className="card-body-stars u-clearfix">
      {Array.from({ length: count }, (_, i) => (
        <li key={i}>
          <Star />
        </li>
      ))}
    </ul>
  );
};

export default Stars;