import React from 'react';
import './App.css';
import img from './cacti.jpg'

const App: React.FC = () => {
  return (
    <div className='App'>
      <img className='background-pic' src={img} alt='backgroundpic' />
      <section className='site-text'>
        <h1>talepre</h1>
        <h2>developer</h2>
      </section>
    </div>
  );
}

export default App;
