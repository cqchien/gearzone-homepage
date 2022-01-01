import { Col, Modal, Row, Spin, Table, Tooltip } from 'antd';
import orderApi from '../../../../apis/orderApi';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { convertOrderStatus, convertPaymentMethod, formatOrderDate, formatProductPrice, reduceProductName } from '../../../../helpers';

function OrderDetail(props) {
  const { orderId, onClose } = props;
  const [visible, setVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [order, setOrder] = useState({});

  // event: lấy chi tiết đơn hàng
  useEffect(() => {
    async function getOrderDetails() {
      setIsLoading(true);

      const response = await orderApi.getDetail(orderId);
      if (response.success && response) {
        setOrder(response.data.order);
      }

      setIsLoading(false);

    }
    getOrderDetails();
    return () => {

    };
  }, [orderId]);

  // cột cho bảng chi tiết sản phẩm
  const columns = [
    {
      title: 'Sản phẩm',
      dataIndex: 'name',
      key: 'product',
      render: (v, record) => (
        <Link to={`/product/${record.product._id}`}>
          <Tooltip title={record.product.name}>
            {reduceProductName(record.product.name, 40)}
          </Tooltip>
        </Link>
      ),
    },
    {
      title: 'Giá',
      dataIndex: 'price',
      key: 'product',
      render: (v, record) => formatProductPrice(record.product.price),
    },
    {
      title: 'Số lượng',
      dataIndex: 'numOfProd',
      key: 'numOfProd',
    },
    
  ];

  // rendering...
  return (
    <Modal
      width={1000}
      centered
      visible={visible}
      onCancel={() => {
        setVisible(false);
        onClose();
      }}
      maskClosable={false}
      footer={null}
      title={
        <p className="font-size-18px m-b-0">
          Chi tiết đơn hàng
          {order && (
            <>
              <span style={{ color: '#1caf9a' }}>{` #${order.orderCode}`}</span>
              <b>{` - ${convertOrderStatus(order.orderStatus)}`}</b>
            </>
          )}
        </p>
      }>
      <>
        {isLoading ? (
          <div className="pos-relative" style={{ minHeight: 180 }}>
            <Spin
              className="trans-center"
              tip="Đang tải chi tiết đơn hàng..."
              size="large"
            />
          </div>
        ) : (
          <Row gutter={[16, 16]}>
            {/* thời gian đặt hàng */}
            <Col span={24} className="t-right">
              <b className="font-size-14px">
                {`Ngày đặt hàng  ${formatOrderDate(
                  order.createdAt,
                  1,
                )}`}
              </b>
            </Col>

            {/* địa chỉ người nhận */}
            <Col span={12}>
              <h3 className="t-center m-b-12">ĐỊA CHỈ NGƯỜI NHẬN</h3>
              <div
                className="p-tb-12 p-lr-16 bg-gray bor-rad-8"
                style={{ minHeight: 150 }}>
                <h3 className="m-b-8">
                  <b>{order.receiver.toUpperCase()}</b>
                </h3>
                <p className="m-b-8">{`Địa chỉ: ${order.deliveryAddress}`}</p>
                <p className="m-b-8">
                  Số điện thoại: {order.receiverPhone}
                </p>
              </div>
            </Col>

            {/* Hình thức thanh toán */}
            <Col span={12}>
              <h3 className="t-center m-b-12">HÌNH THỨC THANH TOÁN</h3>
              <div
                className="p-tb-12 p-lr-16 bg-gray bor-rad-8"
                style={{ minHeight: 150 }}>
                <p className="m-b-8">
                  {convertPaymentMethod(order.paymentMethod)}
                </p>
              </div>
            </Col>

            {/* Chi tiết sản phẩm đã mua */}
            <Col span={24}>
              <Table
                pagination={false}
                columns={[...columns]}
                dataSource={order.orderProds}
              />
            </Col>

            {/* Tổng cộng */}
            <Col span={24} className="t-right">
              <div className="d-flex font-weight-500 justify-content-end">
                <p style={{ color: '#282828d9' }}>Tạm tính</p>
                <span
                  className="m-l-32"
                  style={{ color: '#282828d9', minWidth: 180 }}>
                  {formatProductPrice(
                    order.orderProds.map(prodInfo => (
                      prodInfo.product.price * prodInfo.numOfProd
                    ))
                  )}
                </span>
              </div>
              <div className="d-flex font-weight-500 justify-content-end">
                <p style={{ color: '#282828d9' }}>Phí vận chuyển</p>
                <span
                  className="m-l-32"
                  style={{ color: '#282828d9', minWidth: 180 }}>
                  {formatProductPrice(order.transportFee)}
                </span>
              </div>
              <div className="d-flex font-weight-500 justify-content-end">
                <p style={{ color: '#282828d9' }}>Phí VAT 10%</p>
                <span
                  className="m-l-32"
                  style={{ color: '#282828d9', minWidth: 180 }}>
                  {formatProductPrice(order.orderProds.map(prodInfo => (
                    prodInfo.product.price * prodInfo.numOfProd
                  )) * 10 / 100)}
                </span>
              </div>
              <div className="d-flex font-weight-500 justify-content-end">
                <p style={{ color: '#282828d9' }}>Tổng cộng</p>
                <span
                  className="m-l-32 font-size-18px"
                  style={{ color: '#ff2000', minWidth: 180 }}>
                  {formatProductPrice(order.total)}
                </span>
              </div>
            </Col>
          </Row>
        )}
      </>
    </Modal>
  );
}

OrderDetail.propTypes = {
  orderId: PropTypes.string,
  onClose: PropTypes.func,
};

export default OrderDetail;
