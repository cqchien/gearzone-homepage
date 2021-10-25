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
      autoPlay={true}
      infiniteLoop={true}
    >
      <div className="carousel_item">
        <div className="container">
          <div className="row">
            <div className="col-7 carousel_item-left">
              <img src="/images/slider1.png" alt="" />
            </div>
            <div className="col-5 carousel_item-right">
              <p className="carousel_item-title">Asus Zenbook</p>
              <p className="carousel_item-content">Giảm ngay <span>1.000.000đ</span> (từ ngày 30/4 - 19/05/2021)</p>
              <button className="my-btn">Đặt hàng ngay</button>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel_item">
        <div className="container">
          <div className="row">
            <div className="col-7 carousel_item-left">
              <img src="/images/slider1.png" alt="" />
            </div>
            <div className="col-5 carousel_item-right">
              <p className="carousel_item-title">Asus Zenbook</p>
              <p className="carousel_item-content">Giảm ngay <span>1.000.000đ</span> (từ ngày 30/4 - 19/05/2021)</p>
              <button className="my-btn">Đặt hàng ngay</button>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel_item">
        <div className="container">
          <div className="row">
            <div className="col-7 carousel_item-left">
              <img src="/images/slider1.png" alt="" />
            </div>
            <div className="col-5 carousel_item-right">
              <p className="carousel_item-title">Asus Zenbook</p>
              <p className="carousel_item-content">Giảm ngay <span>1.000.000đ</span> (từ ngày 30/4 - 19/05/2021)</p>
              <button className="my-btn">Đặt hàng ngay</button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}
