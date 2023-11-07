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
             
                <div className="table-container">
                <img src={neumodel} className="left-pic" alt="neu model"/>
                  <ul className="leaders">
                    <li className="header-preis">
                    Neumodellage oder Auffüllen mit UV Gel
                    </li>
                    <li>
                      <span>Neumodellage oder Auffüllen</span>
                      <span>30 €</span>
                    </li>
                    <li>
                      <span>- mit French/ Babybommer</span>
                      <span>34 €</span>
                    </li>
                    <li>
                      <span>- mit Frenchfarbe</span>
                      <span>36 €</span>
                    </li>
                    <li>
                      <span>- mit einer Farbe</span>
                      <span>34 €</span>
                    </li>
                    <li>
                      <span>- je weitere Farbe</span>
                      <span>+ 2 €</span>
                    </li>
                    <li>
                      <span>- lange Nageln</span>
                      <span>+ 1 bis 5 €</span>
                    </li>
                    <li>
                      <span>- Shellac</span>
                      <span> 25 €</span>
                    </li>
                  </ul>
                </div>
                <div className="table-container">
                  <img src={manikure} className="right-pic" alt="neu model"/>
                  <ul className="leaders">
                  <li className="header-preis">
                  Maniküre
                    </li>
                    <li>
                      <span>Feilen, Nagelhaut entfernen und Massage</span>
                      <span>12 €</span>
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
                      <span>Feilen, Nagelhaut entfernen und Massage</span>
                      <span>30 €</span>
                    </li>
                    <li>
                      <span>- mit Zehenmodellage und UV Gelfarbe/Schellac</span>
                      <span>+ 13 €</span>
                    </li>
                   <li>
                      <span>- mit Zehenmodellage und UV Gelfarbe/Schellac ohne Pediküre</span>
                      <span> 30 €</span>
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
                      <span>Hand- und Airbrushdesign</span>
                      <span>je 1,5 €</span>
                    </li>
                    <li>
                      <span>Strassstein</span>
                      <span>je 0,5 €</span>
                    </li>
                    <li>
                      <span>Ablösen</span>
                      <span>12 €</span>
                    </li>
                    <li>
                      <span>Verlängerung mit Tips</span>
                      <span>2 €</span>
                    </li>
                  </ul>
                </div>

        </div>
  );
}

export default PreisList;
