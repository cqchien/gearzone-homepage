import React from "react";
import { formatMoneyVND } from "../../utils/formatMoneyVND";
import { GrFacebook } from "react-icons/gr";
import { FaTwitterSquare, FaInstagram } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
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
            >
              <div className="picture-sp">
                <img src="../../../public/images/logoGZfooter.png" alt="productx" />
              </div>
              ))
            </Carousel>
          </div>
          <div className="col-6 no-gutters info-sp">
            <p className="name">name</p>
            <div className="row">
              <div className="col-4 judge">
                <div className="star">
                  <div>
                    <AiFillStar className="star star-5"></AiFillStar>
                    <AiFillStar className="star star-4"></AiFillStar>
                    <AiFillStar className="star star-3"></AiFillStar>
                    <AiFillStar className="star star-2"></AiFillStar>
                    <AiFillStar className="star star-1"></AiFillStar>
                  </div>
                </div>
              </div>
              <div className="col-8 judge-text">
                <div className="row">
                  <div className="col-4">
                    <p className="danh-gia">2 đánh giá</p>
                  </div>
                  <div className="col-8">
                    <p className="hoi-dap">112 Hỏi & Đáp</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row price no-gutters">
              <div className="col-4">
                <p className="now-price">20.000VND</p>
              </div>
              <div className="col-8">
                <p className="real-price">25.990.000 VND</p>
              </div>
            </div>
            <div class="row info-box">
              <div class="col">
                <p>
                  <img src="/images/ic-pro/screen-02-1.png" alt=""></img>6.7",
                  FHD+, Dynamic AMOLED 2X, 1080 x 2400 Pixel
                </p>
                <p>
                  <img src="/images/ic-pro/camerablack-1.png" alt=""></img>12.0
                  MP + 12.0 MP + 64.0 MP
                </p>
                <p>
                  <img src="/images/ic-pro/selfie-1.png" alt=""></img>10.0 MP
                </p>
                <p>
                  <img src="/images/ic-pro/microchip-1.png" alt=""></img>Nhà
                  cung cấp: Phong Vu
                </p>
                <p>
                  <img src="/images/ic-pro/micro-sd-card-1.png" alt=""></img>128
                  GB
                </p>
                <a href="">Xem chi tiết thông số kỹ thuật</a>
              </div>
            </div>
            <div className="row add">
              <div className="col-9">
                <button
                  className="btn-add-cart"
                  onClick={() => console.log("cart")}
                >
                  Thêm vào giỏ hàng
                </button>
              </div>
            </div>
            <hr />
            <div className="share">
              <p>
                CHIA SẺ SẢN PHẨM
                <a href="/">
                  <GrFacebook className="icon-social"></GrFacebook>
                </a>
                <a href="/">
                  <FaTwitterSquare className="icon-social"></FaTwitterSquare>
                </a>
                <a href="/">
                  <FaInstagram className="icon-social"></FaInstagram>
                </a>
              </p>
            </div>
          </div>
          <hr />
        </div>
        <div className="no-gutters mb-5">
          <h3> Đánh giá chi tiết</h3>
          <br></br>
          <span>dsadsaffsda</span>
        </div>
        <h3>Đánh giá sản phẩm</h3>
        <br></br>
        <div
          class="fb-comments"
          data-href="http://localhost:3000/"
          data-width=""
          data-numposts="5"
        ></div>
      </div>
    </div>
  );
};

export default ProductDetail;
