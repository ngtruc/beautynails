import React , {useState} from 'react';
import '../../App.css';
//import './HeroSection.css';
import PreisList from '../services/PreisList'
import Footer from '../foots/Footer'

function Services() {


  return (
      
    <>
        <PreisList/>
        <Footer />
    </>
  );
}

export default Services;