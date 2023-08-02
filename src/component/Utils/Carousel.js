/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css'; 
// import 'slick-carousel/slick/slick-theme.css';

import '../../Css/Carousel.css'

const Carousel = ({imageUrls}) => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 2000, // Time to transition between slides
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true, // Set to true to enable autoplay
      autoplaySpeed: 5000, // Time between slide changes
      pauseOnHover: false, // Set to true to pause on hover
      fade: true, // Use fade effect for transition
      cssEase: 'linear', // Linear easing for smoother fade transition
      arrows: false, // Remove arrows
      adaptiveHeight: true,
    };
    return (
        <Slider {...settings}>
          <Slider {...settings}>
            {imageUrls.map((imageUrl, index) => (
                <div key={index} className="carousel-slide">
                    <img src={imageUrl} alt={`Image ${index + 1}`} />
                </div>
            ))}
          </Slider>
        </Slider>
      );
    };

    export default Carousel;