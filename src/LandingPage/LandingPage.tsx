import React from 'react';
import BEMHelper from 'react-bem-helper';
import img from './cacti.jpg'

const LandingPage: React.FC = () => {
  const classes = new BEMHelper({
    name: 'landingpage',
    prefix: 'c-'
  });
  return (
    <div {...classes()}>
      <img {...classes('background-pic')} src={img} alt='backgroundpic' />
      <section {...classes('site-text')}>
        <h1 {...classes('header')} >talepre</h1>
        <hr />
        <h2>developer</h2>
      </section>
    </div>
  );
}

export default LandingPage;