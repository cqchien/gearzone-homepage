import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { delCartItem, updateCartItem } from '../../../reducers/carts';
import CartItem from './CartItem';
import './index.scss';

function CartOverview(props) {
  const { carts } = props;
  const dispatch = useDispatch();

  // event: xoá 1 sản phẩm trong cart
  const onDelCartItem = (key) => {
    dispatch(delCartItem(key));
  };

  // event: cập nhật số lượng sản phẩm trong cart
  const onUpdateNumOfProd = (key, value) => {
    dispatch(updateCartItem(key, value));
  };

  // rendering...
  return (
    <>
      {carts.map((item, index) => (
        <div key={index} className="m-b-12">
          <CartItem
            index={index}
            {...item}
            avt={item.images.split(',')[0]}
            onDelCartItem={onDelCartItem}
            onUpdateNumOfProd={onUpdateNumOfProd}
          />
        </div>
      ))}
    </>
  );
}

CartOverview.defaultProps = {
  carts: [],
};

CartOverview.propTypes = {
  carts: PropTypes.array,
};

export default CartOverview;
