import React from "react";
import "./FeaturedProducts.scss";

export default function FeaturedProducts() {
  return (
    <div className="FeaturedProducts">
      <div className="container">
        <div className="row">
          <div className="col">
            <p className="title">Sản phẩm nổi bật</p>
          </div>
          <div className="col" style={{ textAlign: "right" }}>
            <div className="nav-group">
              <a href="#" className="each-nav">
                PC Gaming
              </a>
              <a href="#" className="each-nav">
                Laptop
              </a>
              <a href="#" className="each-nav active">
                Điện thoại
              </a>
            </div>
          </div>
        </div>
        <hr />
        {/*SP Row 1*/}
        <div className="row">
          <div className="col">
            <div className="card mb-3" style={{ maxWidth: 540 }}>
              <div className="row no-gutters">
                <div className="col-md-6 my-fix">
                  <img src="/images/Phone/phone-01.png" alt="..." id="phone-01" />
                </div>
                <div className="col-md-6">
                  <div className="card-body">
                    <p className="card-title">Samsung Galaxy S21+ 128GB</p>
                    <p className="card-text">22.990.000 ₫</p>
                    <button className="my-btn">Mua ngay</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-3" style={{ maxWidth: 540 }}>
              <div className="row no-gutters">
                <div className="col-md-6 my-fix">
                  <img src="/images/Phone/phone-02.png" alt="..." id="phone-02" />
                </div>
                <div className="col-md-6">
                  <div className="card-body">
                    <p className="card-title">Samsung Galaxy S20 FE 256GB</p>
                    <p className="card-text">15.490.000 ₫</p>
                    <button className="my-btn">Mua ngay</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-3" style={{ maxWidth: 540 }}>
              <div className="row no-gutters">
                <div className="col-md-6 my-fix">
                  <img src="/images/Phone/phone-03.png" alt="..." id="phone-03" />
                </div>
                <div className="col-md-6">
                  <div className="card-body">
                    <p className="card-title">OPPO A94 8GB-128GB</p>
                    <p className="card-text">7.390.000 ₫</p>
                    <button className="my-btn">Mua ngay</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*SP Row 2*/}
        <div className="row">
          <div className="col">
            <div className="card mb-3" style={{ maxWidth: 540 }}>
              <div className="row no-gutters">
                <div className="col-md-6 my-fix">
                  <img src="/images/Phone/phone-04.png" alt="..." id="phone-04" />
                </div>
                <div className="col-md-6">
                  <div className="card-body">
                    <p className="card-title">
                      Xiaomi Mi 10T Lite 5G 6GB-128GB
                    </p>
                    <p className="card-text">6.990.000 ₫</p>
                    <button className="my-btn">Mua ngay</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-3" style={{ maxWidth: 540 }}>
              <div className="row no-gutters">
                <div className="col-md-6 my-fix">
                  <img src="/images/Phone/phone-05.png" alt="..." id="phone-05" />
                </div>
                <div className="col-md-6">
                  <div className="card-body">
                    <p className="card-title">Samsung Galaxy S21 Ultra 128GB</p>
                    <p className="card-text">27.990.000 ₫</p>
                    <button className="my-btn">Mua ngay</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-3" style={{ maxWidth: 540 }}>
              <div className="row no-gutters">
                <div className="col-md-6 my-fix">
                  <img src="/images/Phone/phone-06.png" alt="..." id="phone-06" />
                </div>
                <div className="col-md-6">
                  <div className="card-body">
                    <p className="card-title">iPhone 12 128GB</p>
                    <p className="card-text">21.990.000 ₫</p>
                    <button className="my-btn">Mua ngay</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/**/}
        <div className="all">
          <a className="all-content" href="">
            Xem tất cả
          </a>
        </div>
      </div>
    </div>
  );
}
