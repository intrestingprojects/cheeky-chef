import React, { useState } from 'react'

import "../Css/Common.css"
import "../Css/SignUp.css"
import "../Css/Navbar.css"
import SignUp from './SignUp';

function NavBar() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopupOnClick = () => {
    setShowPopup((showPopup) => !showPopup);
  };



  return (
    <>
      { showPopup && 
        <SignUp  
          setShowPopup={setShowPopup}
        />
      }
      <header>
        <nav className='Navbar container'>
          <a href='/'><h1 className='Navbar__logo'>CheekyChef</h1></a>
          <ul className='Navbar__links'>
            <li className='Navbar__link'><a href='/'>Home</a></li>
            <li className='Navbar__link'><a href='/blog'>Blog</a></li>
            <li className='Navbar__link'onClick={togglePopupOnClick}>Login</li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default NavBar