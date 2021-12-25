import {
  FacebookFilled,
  GooglePlusSquareFilled,
  LinkedinFilled,
} from '@ant-design/icons';
import logo from '../../assets/images/logoFooter.png';
import React from 'react';
import './index.scss';


function Footer() {
  return (
    <div className="container-fluid bg-white footer p-lr-0" id="footer">
      {/* Thông tin chi tiết */}
      <div className="container p-tb-32">
        <p className="t-center" style={{ color: '#888' }}>
          <span className="font-size-18px">
            GearZone
          </span>
          <br />
          <strong>Trụ sở:</strong>&nbsp;Số 16 VillaD, Quận 2, Thành phố Hồ Chí Minh
          <br />
          <strong>Điện&nbsp;thoại:</strong>&nbsp;0840.67.9081 |{' '}
          <strong>Email:</strong>&nbsp;gearzone@gmail.com&nbsp;|{' '}
          <strong>Website:</strong>&nbsp;<a href="/">gearzone.vn</a>
        </p>
        <div className="d-flex align-i-center justify-content-center">
          <div className="d-flex align-i-center m-lr-32">
            <img src={logo} alt='footer' width={'70px'} />
            <div className="t-center m-l-16">
              <h2 style={{ color: '#CE1F26' }}>Hotline</h2>
              <h2 style={{ color: '#CE1F26' }}>0840.67.9088</h2>
            </div>
          </div>
          <div className="d-flex">
            <a href="https://fb.com" target="blank">
              <FacebookFilled
                className="p-lr-4 social-item"
                style={{ fontSize: 36, color: '#0C86EF' }}
              />
            </a>
            <a href="https://www.linkedin.com/">
              <LinkedinFilled
                className="p-lr-4 social-item"
                style={{ fontSize: 36, color: '#0073B1' }}
              />
            </a>
            <a href="https://mail.google.com" target="blank">
              {' '}
              <GooglePlusSquareFilled
                className="p-lr-4 social-item"
                style={{ fontSize: 36, color: '#DB5247' }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
