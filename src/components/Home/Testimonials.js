import React, { Component } from "react";
import Slider from "react-slick";
import '../../css/Home/Testimonials.css'

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    //   autoplay: true,
      autoplaySpeed: 5000,
      pauseOnHover: true,
    };
    return (
      <div className="testimonials">
        <h2>Testimonials</h2>
        <Slider {...settings}>
          <div className="individual__Slide">
            <img src="https://i.imgur.com/OdqbS0w.png" alt="" />
            <h3 className="testimonial__Name">Isaiah Johnson</h3>
            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, iure!"</p>
          </div>
          <div className="individual__Slide">
            <img src="#" alt="" />
            <h3 className="testimonial__Name">2</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, iure!</p>
          </div>
          <div className="individual__Slide">
            <img src="#" alt="" />
            <h3 className="testimonial__Name">3</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, iure!</p>
          </div>
          <div className="individual__Slide">
            <img src="#" alt="" />
            <h3 className="testimonial__Name">4</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, iure!</p>
          </div>
          <div className="individual__Slide">
            <img src="#" alt="" />
            <h3 className="testimonial__Name">5</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, iure!</p>
          </div>
          <div className="individual__Slide">
            <img src="#" alt="" />
            <h3 className="testimonial__Name">6</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, iure!</p>
          </div>
        </Slider>
      </div>
    );
  }
}