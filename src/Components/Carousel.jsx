import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import me1 from "../images/me1.jpg";
import me2 from "../images/me2.jpg";
import me3 from "../images/me3.jpg";
import me6 from "../images/me6.jpg";
import me7 from "../images/me7.jpg";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="carousel-wrapper">
        <Slider {...settings}>
          <div>
            <img src={me1} alt="me1" />
          </div>
          <div>
            <img src={me2} alt="me2" />
          </div>
          <div>
            <img src={me3} alt="me3" />
          </div>

          <div>
            <img src={me6} alt="me6" />
          </div>
          <div>
            <img src={me7} alt="me7" />
          </div>
        </Slider>
      </div>
    );
  }
}
