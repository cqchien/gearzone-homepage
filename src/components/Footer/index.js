import React from "react";
import { FaMapMarked, FaFacebookSquare } from "react-icons/fa";
import {
  AiFillPhone,
  AiFillYoutube,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { CgMail } from "react-icons/cg";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div>
              <img src="/images/logoVVVfooter.png" className="logo w-75" />
            </div>
            <p className="title">CÔNG TY TNHH THƯƠNG MẠI VVV SHOP</p>
            <p className="content">
              Mua PC Gaming, laptop gaming, card màn hình, màn hình máy tính,
              thiết bị chơi game như PS5 hàng đầu Việt Nam bảo hành chính hãng.
              Mua online nhận nhiều ưu đãi hấp dẫn.
            </p>
            <p className="content">Cảm ơn bạn vì đã chọn VVV Shop!</p>
          </div>
          <div className="col-md-4">
            <p className="section">Về chúng tôi</p>
            <hr />
            <p className="content">
              <a href="#">Giới thiệu</a>
            </p>
            <p className="content">
              <a href="#">Điều khoản chính sách</a>
            </p>
            <p className="content">
              <a href="#">Quy chế hoạt động</a>
            </p>
            <p className="content">
              <a href="#">Chính sách bảo mật thông tin</a>
            </p>
            <p className="content">
              <a href="#">Giải quyết khiếu nại, tranh chấp</a>
            </p>
          </div>
          <div className="col-md-4">
            <p className="section">Liên hệ với chúng tôi</p>
            <hr />
            <p>
              <FaMapMarked className="footer_icon"></FaMapMarked>
              <a href="#" className="content">
                Song Hành, khu phố 6, Thủ Đức, Thành phố Hồ Chí Minh
              </a>
            </p>
            <p className="content">
              <AiFillPhone className="footer_icon"></AiFillPhone>
              <a href="tel: 0123456789">0123456789</a>
            </p>
            <p className="content">
              <CgMail className="footer_icon"></CgMail>
              <a className="text-mail" href="#">
                vvvshop@gmail.com
              </a>
            </p>
            <hr />
            <div>
              <a href="#">
                <FaFacebookSquare className="footer_icon footer_icon-fb"></FaFacebookSquare>
              </a>
              <a href="#">
                <AiFillYoutube className="footer_icon footer_icon-youtube"></AiFillYoutube>
              </a>
              <a href="#">
                <AiFillTwitterSquare className="footer_icon footer_icon-tw"></AiFillTwitterSquare>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
