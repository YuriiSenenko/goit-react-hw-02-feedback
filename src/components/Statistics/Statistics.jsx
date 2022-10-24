import React from 'react';

export const Statistics = ({ good, neutrals, bad }) => {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutrals}</p>
      <p>Bad: {bad}</p>
    </div>
  );
};
