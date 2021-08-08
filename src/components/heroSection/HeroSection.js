import React, {useState} from 'react';
import '../../App.css';
//import { Button } from './Button';
import './HeroSection.css';
import {Link} from 'react-router-dom'
import img0 from './homepic.jpg'
import img1 from './homepic1.jpg'
function HeroSection(props) {
  
  

  ///const img0 = require('./homepic.jpg')
  //const img1 = require('./homepic1.jpg')

  const text0 = "Services"
  const text1 = "Gallery"
  const text2 = "Kontaktieren"
  const text3 = "Terminvereinbarung"

  const link0 = "/services"
  const link1 = "/gallery"
  const link2 = "/contact"
  const link3 = "/termin"

  const comment0 = "Professionelle Nagelspflege für Damen und Herren"
  const comment1 = "Hier können Sie unsere Leistungen anschauen"
  const comment2 = "Wir sind bereits für Sie da"
  const comment3 = "Machen Sie uns einen Termin aus"

  var [state, setState] = useState ({
    index:0, 
    imgList: [img0,img1,img0,img1],
    textList: [text0,text1,text2,text3],
    linkList: [link0,link1,link2,link3],
    commmentList: [comment0,comment1,comment2,comment3]
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
         <img src={state.imgList[state.index]} class="photo" alt="homepic"/>
         <Link to={state.linkList[state.index]} >
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
         
        
    </div>

  );
}

export default HeroSection;