import React from 'react'

import "../Css/Common.css"
import "../Css/Navbar.css"

function NavBar() {
  return (
    <header>
      <nav className='Navbar container'>
        <h1 className='Navbar__logo'>CheekyChef</h1>
        <ul className='Navbar__links'>
          <li className='Navbar__link'><a href='/blog'>Blog</a></li>
          <li className='Navbar__link'><a href='/login'>Login</a></li>
          <li className='Navbar__link'><a href='/signup'>Sign Up</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar