import { Card, Carousel, Col, Pagination, Row, Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Filter from '../../components/Filter';

// danh sách thương hiệu
const brandList = [
  {
    link: 'https://vn.msi.com/',
    src:
      'https://res.cloudinary.com/tuan-cloudinary/image/upload/v1608268385/famous-brands/msi_zjnihe.webp',
    title: 'MSI',
    desc: 'Bé rồng đỏ siêu cute, gaming',
  },
  {
    link: 'https://www8.hp.com/us/en/home.html',
    src:
      'https://res.cloudinary.com/tuan-cloudinary/image/upload/v1608268384/famous-brands/hp_cdxdv8.webp',
    title: 'HP',
    desc: 'Laptop siêu cấp vip pro',
  },
  {
    link: 'https://www.lenovo.com/vn/vn/',
    src:
      'https://res.cloudinary.com/tuan-cloudinary/image/upload/v1608268384/famous-brands/lenovo_trmmkt.webp',
    title: 'LENOVO',
    desc: 'Siêu ưu đãi cùng với LENOVO',
  },
  {
    link: 'https://www.lg.com/vn',
    src:
      'https://res.cloudinary.com/tuan-cloudinary/image/upload/v1608268384/famous-brands/lg_yijaob.webp',
    title: 'LG',
    desc: 'Sản phẩm siêu chất lượng',
  },
];

// fn: hiển thị danh sách thương hiệu
function showBrandList(list) {
  console.log(list);
  return list.map((item, index) => (
    <Col span={12} md={6} key={index}>
      <div className="brand-item t-center">
        <a href={item.link} target="blank">
          <img className="bor-rad-8" width="100%" src={item.src} alt="img" />
        </a>
        <h4 className="font-size-18px">{item.title}</h4>
        <span className="font-size-16px">{item.desc}</span>
      </div>
    </Col>
  ));
}

// fn: Hiển thị sản phẩm
const showProducts = (list) => {
  list = list ? list : [];
  return list.map((product, index) => {
    const { avt, name, price, discount, stock, _id } = product;
    return (
      <Col key={index} span={24} sm={12} lg={8} xl={6}>
        <Link to={`/product/${_id}`}>
          <Card />
        </Link>
      </Col>
    );
  });
};

function HomePage() {

  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // lấy sản phẩm
  useEffect(() => {
    let isSubscribe = true;
    setIsLoading(true);
    async function getAllProducts() {
      try {
        const response = [];
        if (response && isSubscribe) {
          const { data, count } = response.data;
          setList(data);
          setTotal(count);
          setIsLoading(false);
        }
      } catch (error) {
        setIsLoading(false);
      }
    }

    getAllProducts();

    return () => (isSubscribe = false);
  }, [page]);

  return (
    <div className="Home">
      <div className="pos-relative">
        <Carousel className="Sale-Off" autoplay>
          <img className="Sale-Off-img" src='https://res.cloudinary.com/tuan-cloudinary/image/upload/v1608134777/saleOff/carousels/8_ontuqq.webp' alt='img'
          />
        </Carousel>
        <div className="filter-wrapper trans-center container w-100 h-80">
          < Filter />
        </div>
      </div>
      <Row className="container">
        {/* Thương hiệu nổi bật */}
        <Col span={24} className="m-b-32 bg-white box-sha-home bor-rad-8">
          <div className="p-16 Famous-Brand">
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <h2 className="font-weight-700">Thương hiệu nổi bật</h2>
                <div className="underline-title"></div>
              </Col>
              {showBrandList(brandList)}
            </Row>
          </div>
        </Col>
        {/* Tổng hợp sản phẩm */}
        <Col span={24} className="m-b-32 bg-white box-sha-home bor-rad-8">
          <Row className="p-16" style={{ minHeight: 400 }} gutter={[16, 16]}>
            <Col span={24}>
              <h2 className="font-weight-700">Tất cả sản phẩm</h2>
              <div className="underline-title"></div>
            </Col>
            {isLoading ? (
              <Spin
                className="trans-center"
                tip="Đang tải sản phẩm ..."
                size="large"
              />
            ) : (
              <>
                {showProducts(list)}
                <Col span={24}>
                  <Pagination
                    className="t-center"
                    current={page}
                    pageSize={24}
                    total={total}
                    onChange={(p) => setPage(p)}
                    showSizeChanger={false}
                  />
                </Col>
              </>
            )}
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default HomePage;
