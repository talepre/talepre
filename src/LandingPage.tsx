import React from 'react';
import img from './cacti.jpg'

const LandingPage: React.FC = () => {
  return (
    <div className='App'>
      <img className='background-pic' src={img} alt='backgroundpic' />
      <section className='site-text'>
        <h1 className='main-header' >talepre</h1>
        <hr />
        <h2>developer</h2>
      </section>
    </div>
  );
}

export default LandingPage;