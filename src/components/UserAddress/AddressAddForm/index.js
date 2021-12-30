import { Button, Col, Form, Input, message, Modal, Row, Select } from 'antd';
import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAddress } from '../../../reducers/address';

function AddressAddForm(props) {
  const { onCloseForm } = props;
  const [isVisible, setIsVisible] = useState(true);
  const dispatch = useDispatch();

  const formRef = useRef(null);

  // event: thêm địa chỉ
  const onAddAddress = async (info) => {
    dispatch(addAddress({ ...info }))
    message.success('Thêm địa chỉ thành công', 2);

    setIsVisible(false);
    onCloseForm();
  };

  // rendering ...
  return (
    <Modal
      visible={isVisible}
      closable={true}
      maskClosable={false}
      onCancel={() => {
        setIsVisible(false);
        onCloseForm();
      }}
      centered
      width={768}
      footer={[
        <Button
          key="back"
          danger
          onClick={() => {
            setIsVisible(false);
            onCloseForm();
          }}>
          Huỷ bỏ
        </Button>,
        <Button key="submit" type="primary" htmlType="submit" form="form">
          Thêm địa chỉ
        </Button>,
      ]}>
      <Form onFinish={onAddAddress} ref={formRef} name="form">
        <Row gutter={[32, 0]}>
          <Col span={24}>
            <h3>Thông tin người nhận hàng</h3>
            <Form.Item
              name="name"
              className="m-tb-16"
              rules={[
                { required: true, message: '* Bắt buộc nhập' },
                {
                  max: 40,
                  message: 'Tối đa 40 ký tự',
                },
              ]}>
              <Input size="middle" placeholder="Họ tên *" maxLength={60} />
            </Form.Item>
            <Form.Item
              name="phone"
              rules={[
                { required: true, message: '* Bắt buộc nhập' },
                {
                  validator: (_, value) =>
                    /0\d{0,9}/gi.test(value)
                      ? Promise.resolve()
                      : Promise.reject('Số điện thoại không hợp lệ'),
                },
                {
                  max: 10,
                  message: 'Số điện thoại bao gồm 10 số',
                },
                {
                  min: 10,
                  message: 'Số điện thoại bao gồm 10 số',
                },
              ]}>
              <Input
                size="middle"
                placeholder="Số điện thoại *"
                maxLength={12}
              />
            </Form.Item>
            <Form.Item
              name="address"
              className="m-tb-16"
              rules={[
                { required: true, message: '* Bắt buộc nhập' },
                {
                  max: 40,
                  message: 'Tối đa 40 ký tự',
                },
              ]}>
              <Input size="middle" placeholder="Địa chỉ giao hàng *" maxLength={100} />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
}

AddressAddForm.propTypes = {
  onCloseForm: PropTypes.func,
};

export default AddressAddForm;
