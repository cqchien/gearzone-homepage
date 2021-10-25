import React from "react";
import "./HotSellingAccessories.scss";

export default function HotSellingAccessories() {
  return (
    <div className="HotSellingAccessories">
      <div className="container">
        <div className="row">
          <div className="col">
            <p className="title">Phụ kiện bán chạy</p>
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
                <div className="col-12 my-fix">
                  <img src="/images/Mouse/mouse-01.png" alt="..." id="mouse-01" />
                </div>
                <div className="col">
                  <div className="card-body">
                    <p className="card-title">Chuột game có dây Zadez GT616M</p>
                    <p className="card-text">650.000 ₫</p>
                    <button className="my-btn">Mua ngay</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-3" style={{ maxWidth: 540 }}>
              <div className="row no-gutters">
                <div className="col-12 my-fix">
                  <img src="/images/Mouse/mouse-02.png" alt="..." id="mouse-02" />
                </div>
                <div className="col">
                  <div className="card-body">
                    <p className="card-title">Chuột game có dây Zadez G156M</p>
                    <p className="card-text">3000.000 ₫</p>
                    <button className="my-btn">Mua ngay</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-3" style={{ maxWidth: 540 }}>
              <div className="row no-gutters">
                <div className="col-12 my-fix">
                  <img src="/images/Mouse/mouse-03.png" alt="..." id="mouse-03" />
                </div>
                <div className="col">
                  <div className="card-body">
                    <p className="card-title">Chuột Game có dây Logitech G502 HERO High Performance</p>
                    <p className="card-text">1.759.000 ₫</p>
                    <button className="my-btn">Mua ngay</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-3" style={{ maxWidth: 540 }}>
              <div className="row no-gutters">
                <div className="col-12 my-fix">
                  <img src="/images/Mouse/mouse-04.png" alt="..." id="mouse-06" />
                </div>
                <div className="col">
                  <div className="card-body">
                    <p className="card-title">Chuột game có dây Zadez G153M</p>
                    <p className="card-text">300.000 ₫</p>
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
                <div className="col-12 my-fix">
                  <img src="/images/Mouse/mouse-05.png" alt="..." id="mouse-04" />
                </div>
                <div className="col">
                  <div className="card-body">
                    <p className="card-title">
                    Chuột game có dây Zadez GT616M
                    </p>
                    <p className="card-text">650.000 ₫</p>
                    <button className="my-btn">Mua ngay</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-3" style={{ maxWidth: 540 }}>
              <div className="row no-gutters">
                <div className="col-12 my-fix">
                  <img src="/images/Mouse/mouse-06.png" alt="..." id="mouse-05" />
                </div>
                <div className="col">
                  <div className="card-body">
                    <p className="card-title">Chuột game có dây Zadez G156M</p>
                    <p className="card-text">300.000 ₫</p>
                    <button className="my-btn">Mua ngay</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-3" style={{ maxWidth: 540 }}>
              <div className="row no-gutters">
                <div className="col-12 my-fix">
                  <img src="/images/Mouse/mouse-07.png" alt="..." id="mouse-06" />
                </div>
                <div className="col">
                  <div className="card-body">
                    <p className="card-title">Chuột Game có dây Logitech G502 HERO High Performance</p>
                    <p className="card-text">1.759.000 ₫</p>
                    <button className="my-btn">Mua ngay</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-3" style={{ maxWidth: 540 }}>
              <div className="row no-gutters">
                <div className="col-12 my-fix">
                  <img src="/images/Mouse/mouse-08.png" alt="..." id="mouse-06" />
                </div>
                <div className="col">
                  <div className="card-body">
                    <p className="card-title">Chuột game có dây Zadez G153M</p>
                    <p className="card-text">300.000 ₫</p>
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
