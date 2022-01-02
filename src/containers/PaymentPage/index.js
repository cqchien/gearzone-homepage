import { HomeOutlined } from '@ant-design/icons';
import {
  Avatar,
  Button,
  Card,
  Col,
  Input,
  message,
  Radio,
  Row,
} from 'antd';
import orderApi from '../../apis/orderApi';
import CartPayment from '../../components/CartDetail/Payment/index';
import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { TRANSPORT_METHOD_OPTIONS } from '../../constant/transportOptions';
import { formatProductPrice, reduceProductName } from '../../helpers';
import { resetCart } from '../../reducers/carts';
import { ROUTES } from '../../constant/routePath';
import AddressUser from '../../components/UserAddress';

// fn: Lấy địa chỉ giao hàng của user theo index
function PaymentPage() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.authenticate.isAuth);

  // ghi chú đơn hàng
  const note = useRef('');
  const [transport, setTransport] = useState(0);
  const carts = useSelector((state) => state.carts);
  const user = useSelector((state) => state.user);
  const address = useSelector((state) => state.address);
  const [isLoading, setIsLoading] = useState(false);
  const [isOrderSuccess, setIsOrderSuccess] = useState(false);
  // giá tạm tính
  const tempPrice = carts.reduce(
    (a, b) => a + (b.price + (b.price * b.discount) / 100) * b.amount,
    0,
  );
  const transportFee =
    tempPrice >= 1000000
      ? 0
      : TRANSPORT_METHOD_OPTIONS.find(
        (item) => item.value === transport,
      ).price;
  // fn: hiển thị danh sách đơn hàng
  // Note: Chưa kiểm tra tình trạng thật của sản phẩm trong db !
  function showOrderInfo(carts) {
    return carts.map((item, index) => (
      <Card key={index}>
        <Card.Meta
          avatar={
            <Avatar size={48} shape="square" src={item.images.split(',')[0]} alt="Photo" />
          }
          title={reduceProductName(item.name, 40)}
          description={
            <>
              <span>{`Số lượng: ${item.amount}`}</span>
              <p className="font-size-16px font-weight-700">
                {formatProductPrice(item.price)}
              </p>
            </>
          }
        />
      </Card>
    ));
  }

  // event: đặt hàng
  const onCheckout = async () => {
    setIsLoading(true);
    const owner = user._id;
    if (!address.address) {
      message.warn('Vui lòng chọn địa chỉ giao hàng');
      setIsLoading(false);
      return;
    }
    const paymentMethod = 0;
    const transportMethod = transport;
    const productList = carts.map((item, index) => {
      return { numOfProd: item.amount, product: item._id };
    });

    const params = {
      owner,
      deliveryAddress: address.address,
      receiver: address.name,
      receiverPhone: address.phone,
      orderProds: productList,
      paymentMethod,
      transportFee,
      transportMethod,
      note: note.current
    }
    const response = await orderApi.createOrder(params);
    if (response && response.success) {
      message.success('Đặt hàng thành công', 2);
      setIsLoading(false);
      setIsOrderSuccess(true);
      dispatch(resetCart());
    } else {
      message.error('Bạn mua sản phẩm đã hết hàng hoặc có vấn đề khi đặt hàng. Xin thử lại.', 3);
    }

    setIsLoading(false);
  };

  // rendering ...
  return (
    <>
      {carts.length <= 0 && !isOrderSuccess && (
        <Redirect to={ROUTES.CART} />
      )}
      {isAuth ? (
        <div className="m-tb-32 container">
          {isOrderSuccess ? <Redirect to={ROUTES.HOME} />
            : (
              <Row gutter={[16, 16]}>
                {/* Đường dẫn */}
                <Col span={24} className="d-flex page-position">
                  <Link to="/">
                    <HomeOutlined
                      className="p-12 icon-home font-size-16px bg-white"
                      style={{ borderRadius: 50 }}
                    />
                  </Link>
                  <span
                    className="p-lr-8 font-weight-500"
                    style={{ lineHeight: '40px' }}>{`>`}</span>
                  <span
                    className="p-8 font-weight-500 bg-white"
                    style={{ borderRadius: 50 }}>
                    Tiến hành thanh toán
                  </span>
                </Col>

                {/* Thông tin giao hàng  */}
                <Col span={24} md={16}>
                  {/* địa chỉ giao nhận, cách thức giao */}
                  <div className="p-12 bg-white bor-rad-8 m-tb-16">
                    <h2>Thông tin giao hàng</h2>
                    <Radio.Group
                      defaultValue={transport}
                      onChange={(v) => setTransport(v.target.value)}
                      className="m-tb-8">
                      {TRANSPORT_METHOD_OPTIONS.map((item, index) => (
                        <Radio key={index} value={item.value}>
                          {item.label}
                        </Radio>
                      ))}
                    </Radio.Group>

                    <AddressUser />
                  </div>

                  {/* ghi chú */}
                  <div className="p-12 bg-white bor-rad-8">
                    <h2 className="m-b-8">Ghi chú cho đơn hàng</h2>
                    <Input.TextArea
                      placeholder="Nhập thông tin ghi chú nhà bán"
                      maxLength={200}
                      showCount
                      allowClear
                      onChange={(value) => (note.current = value.target.value)}
                    />
                  </div>

                  {/* phương thức thanh toán */}
                  <div className="p-12 bg-white bor-rad-8 m-tb-16">
                    <h2 className="m-b-8">Phương thức thanh toán</h2>
                    <p>Thông tin thanh toán của bạn sẽ luôn được bảo mật</p>
                    <Row gutter={[16, 16]}>
                      <Col span={24} md={12} onClick={() =>
                        message.success(
                          'Bạn đã chọn phương thức thanh toán khi nhận hàng.',
                          3,
                        )
                      }>
                        <div className="p-tb-8 p-lr-16 bg-gray item-active">
                          <b className="font-size-16px">
                            Thanh toán khi nhận hàng
                          </b>
                          <p>
                            Thanh toán bằng tiền mặt khi nhận hàng tại nhà hoặc
                            showroom.
                          </p>
                        </div>
                      </Col>
                      <Col
                        span={24}
                        md={12}
                        onClick={() =>
                          message.warn(
                            'Tính năng đang được cập nhật. Rất xin lỗi quý khách vì sự bất tiện này',
                            3,
                          )
                        }>
                        <div className="p-tb-8 p-lr-16 bg-gray">
                          <b className="font-size-16px">
                            Thanh toán Online qua cổng VNPAY
                          </b>
                          <p>
                            Thanh toán qua Internet Banking, Visa, Master, JCB,
                            VNPAY-QR.
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>

                {/* đặt hàng */}
                <Col span={24} md={8}>
                  {/* thồng tin đơn hàng */}
                  <div className="p-12 bg-white bor-rad-8 m-tb-16">
                    <div className="d-flex justify-content-between">
                      <h2>Thông tin đơn hàng</h2>
                      <Button type="link" size="large">
                        <Link to={ROUTES.CART}>Chỉnh sửa</Link>
                      </Button>
                    </div>
                    <div>{showOrderInfo(carts)}</div>
                  </div>

                  {/* tiến hành đặt hàng */}
                  <div className="bg-white">
                    <CartPayment
                      isLoading={isLoading}
                      carts={carts}
                      isCheckout={true}
                      transportFee={transportFee}
                      onCheckout={onCheckout}
                    />
                    <div className="t-center p-b-16">
                      <span
                        style={{
                          color: '#ff5000',
                        }}>{`(Xin vui lòng kiểm tra lại đơn hàng trước khi đặt mua)`}</span>
                    </div>
                  </div>
                </Col>
              </Row>
            )}
        </div>
      ) : (
        <Redirect to={ROUTES.SIGNIN} />
      )}
    </>
  );
}

export default PaymentPage;
