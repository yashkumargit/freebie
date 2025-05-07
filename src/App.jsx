import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import MainComponent from './components/MainComponent';
import CardComponent from './components/CardComponent';
import Footer from './components/Footer';
import Maincomponent2 from './components/Maincomponent2';
import Question from './components/Question';
import Customerview from './components/Customerview';
function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <MainComponent/>
    <CardComponent/>
    <Customerview/>
    <Maincomponent2/>
    <h1 className='font-bold text-6xl text-center pb-5 mt-40 '>Phasellus a vitae iaculis magna</h1>
    <h1 className= 'text-3xl text-center'>Phasellus a vitae iaculis magna eleifend pulvinar velit odio.</h1>
    <Question/>
    <Footer/>
    </>
  );
}

export default App;
