// Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import React from 'react'
import Slider from "react-slick";

function Carousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplaySpeed: 4000,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const sliderImages = [
        'slider1.jpg',
        'slider2.jpg',
        'slider3.jpg'
    ];

    const sliderItems = sliderImages.map((image) =>
        <img src={"/images/slider/" + image} alt='Slider' key={Math.random()}/>
    );

    return (
        <Slider {...settings}>
          {sliderItems}
        </Slider>
      )
}

export default Carousel