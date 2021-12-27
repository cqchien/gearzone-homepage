import { HomeOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';
// import RelatedProduct from '../../containers/RelatedProduct/index';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import Description from './Description';
import './index.scss';
import ProductOverview from './Overview';

function ProductDetail(props) {
  const { product, specifications } = props;
  const { name, brand, desc } = product;
  // rendering...
  return (
    <div className="Product-Detail-View container m-t-20">
      <Row gutter={[16, 32]}>
        {/* Hiển thị đường dẫn trang */}
        <Col span={24} className="d-flex page-position">
          <Link to="/">
            <HomeOutlined className="p-12 icon-home font-size-16px bg-white" />
          </Link>
          <span className="r-arrow p-lr-8 font-weight-500">{`>`}</span>
          <span className="pro-name p-8 font-weight-500 bg-white">{name}</span>
        </Col>

        {/* Thông tin cơ bản của sản phẩm */}
        <Col span={24} md={18}>
          <ProductOverview product={product} />
        </Col>

        {/* Mô tả chi tiết sản phẩm */}
        <Col span={24}>
          <Description
            specifications={specifications}
            desc={desc}
            name={name}
            brand={brand}
          />
        </Col>
      </Row>
    </div>
  );
}

ProductDetail.propTypes = {
  products: PropTypes.object,
};

export default ProductDetail;
