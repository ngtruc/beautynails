import React, {useState} from 'react'
import {Link} from 'react-router-dom'
//import  Button  from './Button.js'
import haupticon from './hauptlogo.jpg'
import hamburger_icon from './ham_icon.jpg'
import cancel_icon from './cancel.png'
import './Navbar.css'
//import HeroSection from './HeroSection.js'

function Navbar() {
    const [click, setClick] = useState(false)
    //const {button,setButton} = useState(true)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
    const showButton = () => {
        if (window.innerWidth <= 960) {
            //setButton(false)
        } else {
            //setButton(true)
        }
    }

    //window.addEventListener('resize', showButton)

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                            Beauty Nails
                        <img src={haupticon} width="60" height="60" className="hauptIcon-logo" />
                    </Link> 
                    <div className="menu-icon" onClick={handleClick}>
                         
                        <img src={click ? cancel_icon : hamburger_icon} width="20" height="20"/>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                                Services
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/gallery' className='nav-links' onClick={closeMobileMenu}>
                                Gallery
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                                Kontaktieren
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/termin' className='nav-links' onClick={closeMobileMenu}>
                                Terminvereinbarung
                            </Link>
                        </li>
                    </ul>
                </div>
               
            </nav>
        </>
    )
}

export default Navbar
