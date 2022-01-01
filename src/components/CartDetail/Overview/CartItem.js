import { DeleteOutlined } from '@ant-design/icons';
import { Avatar, InputNumber, Tooltip } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { formatProductPrice, reduceProductName } from '../../../helpers';

function CartItem(props) {
  const {
    _id,
    name,
    SKU,
    avt,
    quantity,
    price,
    amount,
    index,
    onDelCartItem,
    onUpdateNumOfProd,
  } = props;
  return (
    <div className="d-flex bg-white p-12 bor-rad-4 justify-content-between">
      {/* sản phẩm */}
      <div className="d-flex flex-grow-1">
        <Avatar src={avt} alt="Photo" shape="square" size={64} />
        <div className="d-flex flex-direction-column p-10 ">
          <Link to={`/product/${_id}`} className="font-size-16px">
            <Tooltip title={name}>
              {reduceProductName(name, 20)}
            </Tooltip>
          </Link>
          <span style={{ color: '#aaa' }}>{SKU}</span>
        </div>
      </div>

      {/*  Thêm giảm sản phẩm */}
      <div className="d-flex align-i-center" style={{ flexBasis: 128 }}>
        <DeleteOutlined
          className="m-r-18 icon-del-item"
          onClick={() => onDelCartItem(index)}
        />
        <div>
          <InputNumber
            height={20}
            min={1}
            max={quantity}
            value={amount}
            onChange={(value) => onUpdateNumOfProd(index, value)}
            size="large"
            style={{ borderColor: '#1caf9a' }}
          />
        </div>
      </div>

      {/* Giá */}
      <div
        className="d-flex flex-direction-column align-i-end"
        style={{ flexBasis: 200 }}>
        <b className="font-size-18px" style={{ color: '#1caf9a' }}>
          {formatProductPrice(price)}
        </b>
      </div>
    </div>
  );
}

CartItem.defaultProps = {
  _id: '',
  avt: '',
  SKU: '',
  name: '',
  price: 0,
  quantity: 0,
  amount: 1,
};

CartItem.propTypes = {
  onDelCartItem: PropTypes.func,
  onUpdateNumOfProd: PropTypes.func,
  index: PropTypes.any,
  _id: PropTypes.string,
  avt: PropTypes.string,
  SKU: PropTypes.string,
  amount: PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
};

export default CartItem;
