import { Button } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../constant/routePath';
import { formatProductPrice } from '../../../helpers';

function CartPayment(props) {
  const { carts, isCheckout, transportFee, onCheckout, isLoading } = props;
  // giá tạm tính
  const tempPrice = carts.reduce(
    (a, b) => a + (b.price) * b.amount,
    0,
  );

  // rendering ...
  return (
    <div className="Payment bg-white p-16">
      <h2 className="m-b-8">Tiến hành thanh toán</h2>
      <div className="d-flex justify-content-between m-b-6">
        <span className="font-size-16px" style={{ color: '#aaa' }}>
          Tạm tính
        </span>
        <b>{formatProductPrice(tempPrice)}</b>
      </div>
      <div className="d-flex justify-content-between m-b-6">
        <span className="font-size-16px" style={{ color: '#aaa' }}>
          Phí vận chuyển
        </span>
        <b>{formatProductPrice(transportFee)}</b>
      </div>
      <div className="d-flex justify-content-between m-b-6">
        <span className="font-size-16px" style={{ color: '#aaa' }}>
        Thuế VAT - 10%
        </span>
        <b>{formatProductPrice((tempPrice*10/100))}</b>
      </div>
      <div className="d-flex justify-content-between">
        <span className="font-size-16px" style={{ color: '#aaa' }}>
          Thành tiền
        </span>
        <b style={{ color: 'red', fontSize: 20 }}>
          {formatProductPrice((tempPrice + transportFee + tempPrice*10/100))}
        </b>
      </div>

      {isCheckout ? (
        <Button
          onClick={onCheckout}
          className="m-t-16 d-block m-lr-auto w-100"
          type="primary"
          size="large"
          loading={isLoading}
          style={{ backgroundColor: '#1caf9a', color: '#fff' }}>
          ĐẶT HÀNG NGAY
        </Button>
      ) : (
        <Link to={ROUTES.PAYMENT}>
          <Button
            className="m-t-16 d-block m-lr-auto w-100"
            type="primary"
            size="large"
            style={{ backgroundColor: '#1caf9a', color: '#fff' }}>
            THANH TOÁN
          </Button>
        </Link>
      )}
    </div>
  );
}

CartPayment.defaultProps = {
  carts: [],
  isCheckout: false, // cờ kiểm tra có phải ở trang checkout để lập đơn hàng hay k
  transportFee: 0,
  isLoading: false,
};

CartPayment.propTypes = {
  carts: PropTypes.array,
  isCheckout: PropTypes.bool,
  transportFee: PropTypes.number,
  onCheckout: PropTypes.func,
  isLoading: PropTypes.bool,
};

export default CartPayment;
