import React , {useState} from 'react';
import '../../App.css';
//import './HeroSection.css';
import HeroSection from '../heroSection/HeroSection'
import Cards from '../cards/Cards'
import Footer from '../foots/Footer'

function Home() {


  return (
    <>
    <HeroSection 
    />
    <Cards />
    <Footer />
    </>
  );
}

export default Home;