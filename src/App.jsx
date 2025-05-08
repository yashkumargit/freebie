import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import MainComponent from './components/MainComponent';
import CardComponent from './components/CardComponent';
import Footer from './components/Footer';
import Maincomponent2 from './components/MainComponent2';
import Question from './components/Question';
import Customerview from './components/Customerview';
import Leaf from './assets/leaf.svg';

function App() {
  return (
    <div className="relative overflow-hidden">
      <img
        src={Leaf}
        alt="Leaf Top Left"
        className="absolute z-0"
        style={{
          top: '100.04px',
          left: '-362.7px',
          width: '1106.34px',
          height: '1512.69px',
          opacity: 1,
        }}
      />

      <div className="relative z-10">
        <Navbar />
        <Hero />

        <div className="relative">
          <img
            src={Leaf}
            alt="Leaf Right Middle"
            className="absolute z-0"
            style={{
              top: '100px',
              right: '-200px', 
              width: '700px',   
              height: '1000px',
              transform: 'rotate(-90deg)',
              opacity: 1,
              pointerEvents: 'none',
            }}
          />
          <MainComponent />
        </div>

        <CardComponent />

        <div className="relative">
          <img
            src={Leaf}
            alt="Leaf Bottom Left"
            className="absolute z-0"
            style={{
              top: '100px',
              left: '-300px',
              width: '900px',
              height: '1200px',
              transform: 'rotate(-10deg)',
              opacity: 1,
              pointerEvents: 'none',
            }}
          />
          <Customerview />
        </div>

        <Maincomponent2 />
        <h1 className="font-bold text-6xl text-center pb-5 mt-40">
          Phasellus a vitae iaculis magna
        </h1>
        <h1 className="text-3xl text-center">
          Phasellus a vitae iaculis magna eleifend pulvinar velit odio.
        </h1>
        <Question />
        <Footer />
      </div>
    </div>
  );
}

export default App;
