import React from 'react';
import { Link } from 'react-router-dom';
import './PreisList.css'
import neumodel from './neumodel.jpg'
import manikure from './manikure.jpg'
import pedikure from './pedikure.jpg'
import nailart from './nailart.jpg'
function PreisList(props) {
  return (
    
        <div className="preis-container">
                
                <p className="header1">Unsere Services</p>
                <p className="header2">Beauty Nails - Ihr Nagelstudio in Hünfeld</p>
                <p className="header3">Nails Service</p>
                <p className="text1">With the full of beauty care services and new colors for you to choose, you are ensured to enjoy the best services in our effort of doing a great job.
Let’s take a look at our price list below!! Our nail salon is always committed to bringing you the reasonable price!</p>

                <div className="table-container">
                <img src={neumodel} className="left-pic" alt="neu model"/>
                  <ul className="leaders">
                    <li className="header-preis">
                    Neumodellage oder Auffüllen mit UV Gel
                    </li>
                    <li>
                      <span>Neumodellage oder Auffüllen</span>
                      <span>25 €</span>
                    </li>
                    <li>
                      <span>- mit French</span>
                      <span>30 €</span>
                    </li>
                    <li>
                      <span>- mit einer Farbe</span>
                      <span>31 €</span>
                    </li>
                    <li>
                      <span>- je weitere Farbe</span>
                      <span>2 €</span>
                    </li>
                    <li>
                      <span>- extra lang</span>
                      <span>5 €</span>
                    </li>
                  </ul>
                </div>
                <div className="table-container">
                  <img src={neumodel} className="right-pic" alt="neu model"/>
                  <ul className="leaders">
                  <li className="header-preis">
                  Maniküre
                    </li>
                    <li>
                      <span>Feilen, Nagelhaut entfernen und Massage</span>
                      <span>10 €</span>
                    </li>
                    <li>
                      <span>- mit Nagellack</span>
                      <span>+5 €</span>
                    </li>
                    <li>
                      <span>- mit Shellac</span>
                      <span>+10 €</span>
                    </li>
                  </ul>
                </div>
                <div className="table-container">
                  <img src={pedikure} className="left-pic" alt="neu model"/>
                  <ul className="leaders">
                  <li className="header-preis">
                  Pediküre
                    </li>
                    <li>
                      <span>Neumodellage oder Auffüllen</span>
                      <span>25 €</span>
                    </li>
                    <li>
                      <span>- mit French</span>
                      <span>30 €</span>
                    </li>
                    <li>
                      <span>- mit einer Farbe</span>
                      <span>31 €</span>
                    </li>
                    <li>
                      <span>- je weitere Farbe</span>
                      <span>2 €</span>
                    </li>
                    <li>
                      <span>- extra lang</span>
                      <span>5 €</span>
                    </li>
                  </ul>
                </div>
          
                <div className="table-container">
                  <img src={nailart} className="right-pic" alt="neu model"/>
                  <ul className="leaders">
                  <li className="header-preis">
                  Nail Art Design
                    </li>
                    <li>
                      <span>Neumodellage oder Auffüllen</span>
                      <span>25 €</span>
                    </li>
                    <li>
                      <span>- mit French</span>
                      <span>30 €</span>
                    </li>
                    <li>
                      <span>- mit einer Farbe</span>
                      <span>31 €</span>
                    </li>
                    <li>
                      <span>- je weitere Farbe</span>
                      <span>2 €</span>
                    </li>
                    <li>
                      <span>- extra lang</span>
                      <span>5 €</span>
                    </li>
                  </ul>
                </div>
        </div>
  );
}

export default PreisList;