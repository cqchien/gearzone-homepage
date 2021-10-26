import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Slider.scss";

export default function Slider() {
  return (
    <Carousel
      emulateTouch={true}
      showStatus={false}
      showThumbs={false}
      showArrows={true}
      autoPlay={true}
      infiniteLoop={true}
    >
      <div className="carousel_item">
        <div className="container">
          <div className="row">
            <div className="col-6 carousel_item-left">
              <img src="/images/img-slide-1.png" alt="" />
            </div>
            <div className="col-6 carousel_item-right">
              <p className="carousel_item-title">
                Mechanical Keyboard Leopold FC900R PD
              </p>
              <p className="carousel_item-content">
                Discount up to <span>200.000đ</span>
              </p>
              <button className="my-btn">Offer Now!</button>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel_item">
        <div className="container">
          <div className="row">
            <div className="col-6 carousel_item-left">
              <img src="/images/img-slide-2.png" alt="" />
            </div>
            <div className="col-6 carousel_item-right">
              <p className="carousel_item-title">
                Mouse Logitech G102 LightSync White
              </p>
              <p className="carousel_item-content">
                Special offer up to <span>56%</span> when buying with head phone
              </p>
              <button className="my-btn">Offer Now!</button>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel_item">
        <div className="container">
          <div className="row">
            <div className="col-6 carousel_item-left">
              <img src="/images/img-slide-3.png" alt="" />
            </div>
            <div className="col-6 carousel_item-right">
              <p className="carousel_item-title">Head Phone Logitech G633S</p>
              <p className="carousel_item-content">
                Free delivery nationwide (30/4 - 19/05/2021).
              </p>
              <button className="my-btn">Offer Now!</button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}
