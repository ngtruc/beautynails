import React, {useState} from 'react';
import '../../App.css';
//import { Button } from './Button';
import './HeroSection.css';
import {Link} from 'react-router-dom'
import img0 from './homepic.jpg'
import img1 from './homepic2.jpg'
import img2 from './homepic1.jpg'
import whatsapp from './whatsapp.png'
import call from './call.png'
import facebook from './facebook.png'
function HeroSection(props) {
  
  

  ///const img0 = require('./homepic.jpg')
  //const img1 = require('./homepic1.jpg')

  const text0 = "Services"
  const text1 = "Gallery"
  const text2 = "Kontaktieren"

  const link0 = "/services"
  const link1 = "/gallery"
  const link2 = "/contact"


  const comment0 = "Wir machen Nageldesign aus Leidenschaft, Beauty Nails - Ihre professionelle Nagelspflege für Damen und Herren"
  const comment1 = "Die Kunden haben uns vertrauen"
  const comment2 = "Nehmen Sie mit uns den Kontakt auf"


  var [state, setState] = useState ({
    index:0, 
    imgList: [img0,img1,img2],
    textList: [text0,text1,text2],
    linkList: [link0,link1,link2],
    commmentList: [comment0,comment1,comment2]
  })

  const onClickForward = () => {
      if (state.index + 1 == state.imgList.length) {
        setState ( {
          ...state,
          index: 0
        })
      } else {
        setState ({
          ...state,
          index: state.index +1 
        })
      }
  }

  const onClickBack = () => {
    if (state.index - 1 == -1) {
      setState ({
        ...state,
        index: state.imgList.length - 1
      })
    } else {
      setState ({
        ...state, 
        index: state.index - 1
      })
    }
  }
  

  return (
    <div class = "slideshow-container">
      
      <div class="mySlide fade">
         
         <Link to={state.linkList[state.index]} >
          <img src={state.imgList[state.index]} class="photo" alt="homepic"/>
            <h1>{state.textList[state.index]}</h1>
          </Link>
          <h3>{state.commmentList[state.index]}</h3>
      </div>
    
    
      <a class="prev" onClick={onClickBack}>&#10094;</a>
     <a class="next" onClick={onClickForward}>&#10095;</a>
     <div class="dot-container">
         <span class="dot" onClick="currentSlide(1)"></span>
          <span class="dot" onClick="currentSlide(2)"></span>
          <span class="dot" onClick="currentSlide(3)"></span>
     </div>
         
     <a href="tel:+4966529089991" >
                  <img src={call} className="contact-icon" alt="call "/>
                </a>
                <a href="https://api.whatsapp.com/send?phone=+4966529089991" >
                  <img src={whatsapp} className="contact-icon" alt="whatsapp"/>
                </a>
                <a href="https://www.facebook.com/beautynails.huenfeld/" >
                  <img src={facebook} className="contact-icon" alt="facebook"/>
                </a>    
    </div>

  );
}

export default HeroSection;