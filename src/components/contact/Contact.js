import React from 'react'
import './Contact.css'
import neumodel from './manikure.jpg'
import whatsapp from './whatsapp.png'
import call from './call.png'
import facebook from './facebook.png'

function Contact() {
    return (
        <div>
             <p className="header1">Unsere Services</p>
            <p className="header2">Beauty Nails - Ihr Nagelstudio in Hünfeld</p>
            <p className="header-address">Die Adresse: </p>
         
                <p className="address-text">Unseres Laden befindet sich direkt in der Innerstadt Hünfeld</p>
                <p className="address-text">Mittelstraße 2</p>
                <p className="address-text">36088 Hünfeld</p>
               
                <p className="address-text">Telefon: 06652 9089991</p>
                <p className="address-text">Mobil: 0174 6357272</p>
                
                <a href="tel:+4966529089991" >
                  <img src={call} className="contact-icon" alt="call "/>
                </a>
                <a href="https://api.whatsapp.com/send?phone=+4966529089991" >
                  <img src={whatsapp} className="contact-icon" alt="whatsapp"/>
                </a>
                <a href="https://www.facebook.com/beautynails.huenfeld/" >
                  <img src={facebook} className="contact-icon" alt="facebook"/>
                </a>
            <div className="contact-container">
                  <img src={neumodel} className="contact-right-pic" alt="neu model"/>
                  <ul className="leaders-contact">
                  <li className="header-contact">
                  Unsere Öffnungszeiten:
                    </li>
                    <li>
                      <span>Montag: </span>
                      <span>09:00 bis 18:00</span>
                    </li>
                    <li>
                    <span>Dienstag: </span>
                      <span>09:00 bis 18:00</span>
                    </li>
                    <li>
                    <span>Mittwoch: </span>
                      <span>09:00 bis 18:00</span>
                    </li>
                    <li>
                    <span>Donnerstag: </span>
                      <span>09:00 bis 18:00</span>
                    </li>
                    <li>
                    <span>Freitag: </span>
                      <span>09:00 bis 18:00</span>
                    </li>
                    <li>
                    <span>Samstag: </span>
                      <span>09:00 bis 15:30</span>
                    </li>
                    <li>
                    <span>Sonntag: </span>
                      <span>Geschlossen</span>
                    </li>
                  </ul>
                </div>
        </div>
    )
}

export default Contact
