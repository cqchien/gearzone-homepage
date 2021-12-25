import laptopIcon from '../../../assets/icon/product/laptop_32px.png';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const menu = [
  {
    key: 0,
    to: '/filter?t=0',
    icon: laptopIcon,
    title: 'Laptop & Macbook',
  },
];

function MenuFilter(props) {
  const { onShow } = props;

  function renderFilterMenu(list) {
    return (
      list &&
      list.map((item, index) => {
        return (
          <div
            onMouseEnter={() => onShow(item.key)}
            key={index}
            className="w-100 p-lr-8 p-tb-4  Filter-menu-item">
            <Link to={item.to} className="d-flex align-i-center">
              <img src={item.icon} className="icon m-lr-8" alt='laptop'/>
              <span className="title">{item.title}</span>
            </Link>
          </div>
        );
      })
    );
  }

  return (
    <div className="bor-rad-8 Filter-menu p-tb-4">{renderFilterMenu(menu)}</div>
  );
}

MenuFilter.propTypes = {
  onShow: PropTypes.func,
};

export default MenuFilter;
