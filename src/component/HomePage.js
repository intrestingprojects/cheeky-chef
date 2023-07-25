import React from 'react'
import "../Css/HomePage.css"
import "../Css/Common.css"

import Navbar from './Navbar'

function HomePage() {
  return (
    <>
        <Navbar />
        <div className="image-container">
          {/* Give path/SRC of image in "home__background-image" class inside HomePage.css */}
          <div className="home__background-image background-image"></div>
          
        </div>

    </>
  )
}

export default HomePage