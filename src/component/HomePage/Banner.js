import React from 'react'

import "../../Css/Common.css"
import "../../Css/Banner.css"
import Carousel from '../Utils/Carousel';
import SearchBox from '../Utils/SearchBox';

function  Banner() {

  const imageUrls = [
    'https://images.unsplash.com/photo-1605522561233-768ad7a8fabf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
    'https://images.unsplash.com/photo-1495521821757-a1efb6729352?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=852&q=80',
    // Add more image URLs as needed
  ];

  return (
    <div className='container banner_background_image background_image'> 
      {/* dark background is being added by background_image class which is in common.css */}
      <div className='carousel_container'>
        <Carousel imageUrls={imageUrls}/>
      </div>

     <div className='Banner_Outer_container flex_middle'>
        <div className='tagLineContainer flex_middle'>
          <SearchBox />
          {/* <p className='tagLine'>Unlock the flavors of creativity with CheekyChef: Your ultimate recipe sharing community.</p> */}
        </div>
     </div>
    </div>
  )
}

export default Banner