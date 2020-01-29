import React from 'react';
import BEMHelper from 'react-bem-helper';

const Competition: React.FC = () => {
  const classes = new BEMHelper({
    name: 'competition',
    prefix: 'c-'
  });
  return (
    <div {...classes()}>
      <h1 {...classes('header')}>Pinnekamp - poeng</h1>
    </div>
  );
}

export default Competition;