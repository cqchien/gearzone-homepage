import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'antd';
import './index.scss';
import Specification from './Specification';

function Description(props) {
  const { specifications, desc, name, brand } = props;

  return (
    <Row className="Product-Desc bg-white p-8" id="descId">
      {/* Bài viết chi tiết */}
      <Col
        span={24}
        md={16}
        className={`p-8 `}>
        <h2 className="font-weight-700">Mô tả sản phẩm</h2>
        <div className="underline-title"></div>
        <h2 className="m-t-16 m-b-8 font-weight-700">{name}</h2>
        <div >
          <p className="t-justify font-size-15px font-weight-500 desc-detail">
            {desc}
          </p>
        </div>
      </Col>

      {/* Thông số kỹ thuật */}
      <Col span={24} md={8} className={`p-8`}>
        <h2 className="font-weight-700">Thông số kỹ thuật</h2>
        <div className="underline-title"></div>
        <Specification specifications={specifications} brand={brand} />
      </Col>
    </Row>
  );
}

Description.propTypes = {
  specification: PropTypes.array,
  desc: PropTypes.string,
};

export default Description;
