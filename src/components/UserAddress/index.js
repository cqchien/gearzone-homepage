import PropTypes from 'prop-types';
import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddressAddForm from './AddressAddForm';
import { delAddress } from '../../reducers/address';

function AddressUser(props) {
  const dispatch = useDispatch();

  const [isVisibleForm, setIsVisibleForm] = useState(false);

  const user = useSelector((state) => state.user);
  const address = useSelector((state) => state.address);

  console.log(address);
  const onDelDeliveryAdd = () => {
    dispatch(delAddress());
  }
  // rendering
  return (
    <>
      <div className="User-Address-List">
        {/* hiện danh sách địa chỉ */}
        {Object.keys(address).length !== 0 ? (
          <div className="m-t-16">
            <div className={`bg-white bor-rad-8 box-sha-home p-tb-8 p-lr-16 m-b-16 item-active`}>
              <div className="d-flex justify-content-between m-b-4">
                <h3>
                  <b>Tên người nhận: </b> {address.name}
                </h3>
              </div>
              <div className="d-flex justify-content-between m-b-4">
                <p className="m-b-6">
                  <b>Địa chỉ:</b> {address.address}
                </p>
                <p className="m-b-6">
                  <b>Số điện thoại:</b> {address.phone}
                </p>
                <Button
                  danger
                  type="primary"
                  onClick={() => onDelDeliveryAdd()}>
                  Xoá
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <>
            <Button
              type="dashed"
              size="large"
              className="w-100"
              onClick={() => setIsVisibleForm(true)}
              style={{ height: 54 }}>
              <PlusOutlined />
              Thêm địa chỉ
            </Button>
            <h3 className="m-t-16 t-center" style={{ color: '#888' }}>
              Hiện tại bạn chưa có địa chỉ giao, nhận hàng nào
            </h3>
          </>
        )}


        {isVisibleForm && (
          <AddressAddForm
            onCloseForm={() => {
              setIsVisibleForm(false);
            }}
          />
        )}
      </div>

    </>
  );
}

AddressUser.defaultProps = {
  isCheckout: false,
  onChecked: function () { },
};

AddressUser.propTypes = {
  isCheckout: PropTypes.bool,
  onChecked: PropTypes.func,
};

export default AddressUser;
