import { Avatar, Button, Card, List } from 'antd';
import { ROUTES } from '../../constant/routePath';
import { formatProductPrice } from '../../helpers/index';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

const { Meta } = Card;

function totalPrice(list) {
  return list.reduce((total, item) => {
    total += item.price * item.amount;
    return total;
  }, 0);
}

function Cart(props) {
  const { list } = props;
  const length = list.length;
  return (
    <div
      className="cart-view p-8"
      style={{ backgroundColor: '#fff', height: '500', width: '180' }}>
      <div className="cart-items p-8">
        <List
          itemLayout="vertical"
          size="large"
          dataSource={list}
          renderItem={(item) => (
            <Card style={{ width: 300 }}>
              <Meta
                avatar={
                  <Avatar
                    shape="square"
                    style={{ width: 80, height: 50 }}
                    src={item.images.split(',')[0]}
                  />
                }
                title={item.name}
                description={`Số lượng: ${item.amount}`}
              />
              <p className="product-price">
                {formatProductPrice(item.price)}
              </p>
            </Card>
          )}
        />
      </div>

      <div className="cart-additional p-8">
        <h3>Tổng tiền: {formatProductPrice(totalPrice(list))}</h3>
        <Link to={length > 0 ? ROUTES.CART : '/'}>
          <Button
            className="m-tb-8 d-block m-lr-auto w-100"
            type="primary"
            size="large">
            {length > 0 ? 'Đến giỏ hàng' : 'Mua sắm ngay'}
          </Button>
        </Link>
      </div>
    </div>
  );
}

Cart.propTypes = {
  list: PropTypes.array,
};

export default Cart;
