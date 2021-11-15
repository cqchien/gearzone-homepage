import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./style.scss";

const ProductDetail = ({ loading }) => {
  return (
    <div className="prodetail">
      <div className="bg-breadcrumb">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Trang chủ</a>
            </li>
            <li className="breadcrumb-item">
              <a href="/">category</a>
            </li>
            <li className="breadcrumb-item active">name</li>
          </ol>
        </div>
      </div>

      <div className="container">
        <div className="row sp no-gutters">
          <div className="col-6 no-gutters">
            <Carousel
              emulateTouch={true}
              showStatus={false}
              autoPlay={true}
              infiniteLoop={true}
              showArrows={false}
              dynamicHeight={true}
            >
              <div className="picture-sp">
                <img src="/images/img-slide-1.png" alt="product" />
              </div>
              <div className="picture-sp">
                <img src="/images/img-slide-1.png" alt="product" />
              </div>
              <div className="picture-sp">
                <img src="/images/img-slide-1.png" alt="product" />
              </div>
            </Carousel>
          </div>
          <div className="col-6 no-gutters info-sp">
            <div className="row ">
              <p className="name">name</p>

              <div className="col" style={{ height: "40vh" }}>
                <p style={{ fontSize: "15pt" }}>General Information:</p>
                <ul style={{ fontSize: "15pt" }}>
                  <li>
                    <strong> Producer: </strong> ACER
                  </li>
                  <li>
                    <strong> Origin: </strong> Genuine
                  </li>
                  <li>
                    <strong> Warranty: </strong> 12 months
                  </li>
                </ul>
              </div>
            </div>
            <div className="row add">
              <div className="row price no-gutters">
                <p>Price: </p>
                <div className="col-4">
                  <p className="now-price">20.000VND</p>
                </div>
                <div className="col-8">
                  <p className="real-price">25.990.000 VND</p>
                </div>
              </div>
              <div className="col-9">
                <button
                  className="btn-add-cart"
                  onClick={() => console.log("cart")}
                >
                  Thêm vào giỏ hàng
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
