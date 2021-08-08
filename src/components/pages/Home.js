import React , {useState} from 'react';
import '../../App.css';
//import './HeroSection.css';
import HeroSection from '../heroSection/HeroSection'
import homepic from './homepic.jpg'
import Cards from '../cards/Cards'

function Home() {


  return (
    <>
    <HeroSection 
      pic={homepic}
      link='/angebot-preise'
      name='Angebot und Preise'
      text="Bei uns gibt es nur professionelles Nageldesign"
    />
    <Cards />
    </>
  );
}

export default Home;