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
                      <span>- mit French</span>
                      <span>33 €</span>
                    </li>
                    <li>
                      <span>- mit einer Farbe</span>
                      <span>33 €</span>
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
                  <img src={manikure} className="right-pic" alt="neu model"/>
                  <ul className="leaders">
                  <li className="header-preis">
                  Maniküre
                    </li>
                    <li>
                      <span>Feilen, Nagelhaut entfernen und Massage</span>
                      <span>12 €</span>
                    </li>
                    <li>
                      <span>- mit Nagellack (für Kinder unter 15J)</span>
                      <span>+7 €</span>
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
                      <span>+ 15 €</span>
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
                      <span>Lackieren</span>
                      <span>8 €</span>
                    </li>
                    <li>
                      <span>Reparatur</span>
                      <span>10 €</span>
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
                <p className="text1">5€ Nachlass auf Neumodellage oder Auffüllen für Schüller, Student und Azubis.</p>
                <p className="text1">5€ Rabatt bei jedem 5.Besuch unter Vorlage der Kundenkarte.</p>

        </div>
  );
}

export default PreisList;