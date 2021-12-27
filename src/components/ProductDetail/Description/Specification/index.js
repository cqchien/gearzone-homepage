import PropTypes from 'prop-types';
import React from 'react';
import './index.scss';

// fn: show danh sách
function showSpecification(list) {
  return (
    list &&
    list.map((item, index) => (
      <div key={index} className="Specification-item d-flex p-12">
        <span className="font-size-16px" style={{ flexBasis: 150 }}>
          {item.title}
        </span>
        <span className="font-size-16px flex-grow-1">{item.desc}</span>
      </div>
    ))
  );
}

// rendering ...
function Specification(props) {
  const { specifications, brand } = props;
  return (
    <div className="Specification p-t-16">
      <div className="Specification-item d-flex p-12">
        <span className="font-size-16px" style={{ flexBasis: 150 }}>
          Thương hiệu
        </span>
        <span className="font-size-16px flex-grow-1">{brand}</span>
      </div>
      {showSpecification(specifications)}
    </div>
  );
}

Specification.propTypes = {
  data: PropTypes.object,
};

export default Specification;
