import React, { Component } from "react";
import Slider from "react-slick";
import '../../css/Home/Testimonials.css'

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      pauseOnHover: true,
    };
    return (
      <div className="testimonials">
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div className="individual__Slide">
            <h3 className="testimonial__Name">1</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, iure!</p>
          </div>
          <div className="individual__Slide">
            <h3 className="testimonial__Name">2</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, iure!</p>
          </div>
          <div className="individual__Slide">
            <h3 className="testimonial__Name">3</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, iure!</p>
          </div>
          <div className="individual__Slide">
            <h3 className="testimonial__Name">4</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, iure!</p>
          </div>
          <div className="individual__Slide">
            <h3 className="testimonial__Name">5</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, iure!</p>
          </div>
          <div className="individual__Slide">
            <h3 className="testimonial__Name">6</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, iure!</p>
          </div>
        </Slider>
      </div>
    );
  }
}