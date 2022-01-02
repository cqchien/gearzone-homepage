import {
  Col,
  Form,
  Input,
  InputNumber,
  message,
  Modal,
  Row,
} from 'antd';
import adminApi from '../../../../../apis/adminApi';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

function EditProductModal(props) {
  const { visible, onClose, product } = props;
  const [form] = Form.useForm();
  const initValues = product ? { ...product } : {};
  const [isUpdating, setIsUpdating] = useState(false);
  const admin = JSON.parse(localStorage.getItem('adminGearZone'));

  useEffect(() => {
    if (visible)
      form.resetFields();
    return () => {
    }
  }, [form, visible])

  // event: Sửa chữa sản phẩm
  const onEdit = async (value) => {
    setIsUpdating(true);
    const response = await adminApi.updateProduct(value, admin._id);
    if (response && response.success) {
      message.success('Cập nhật thành công');
      onClose(value);
    }
    else {
      message.error('Cập nhật thất bại');
    }

    setIsUpdating(false);
  };

  return (
    <Modal
      className="edit-product-modal"
      destroyOnClose={false}
      maskClosable={false}
      visible={visible}
      okText="Cập nhật"
      cancelText="Huỷ bỏ"
      onCancel={onClose}
      okButtonProps={{ form: 'editForm', htmlType: 'submit' }}
      title="Chỉnh sửa thông tin sản phẩm"
      confirmLoading={isUpdating}
      width={1000}
      centered>
      <Form
        initialValues={{ ...initValues }}
        name="editForm"
        form={form}
        onFinish={onEdit}>
        <Row gutter={[16, 16]}>
          {/* Id */}
          <Col span={12}>
            <Form.Item name="_id">
              <Input disabled size="large" placeholder="ID" />
            </Form.Item>
          </Col>

          {/* Mã sản phẩm */}
          <Col span={12}>
            <Form.Item
              name="SKU"
              label="Mã sản phẩm"
              rules={[
                { required: true, message: 'Bắt buộc', whitespace: true },
              ]}>
              <Input size="large" placeholder="Mã sản phẩm *" />
            </Form.Item>
          </Col>

          {/* Tên sản phẩm */}
          <Col span={12}>
            <Form.Item
              name="name"
              label="Tên sản phẩm"
              rules={[
                { required: true, message: 'Bắt buộc', whitespace: true },
              ]}>
              <Input size="large" placeholder="Tên sản phẩm *" />
            </Form.Item>
          </Col>

          {/* Giá sản phẩm */}
          <Col span={12}>
            <Form.Item
              name="price"
              label="Giá sản phẩm"
              rules={[{ required: true, message: 'Bắt buộc' }]}>
              <InputNumber
                min={0}
                max={9000000000}
                step={100000}
                className="w-100"
                size="large"
                placeholder="Giá sản phẩm *"
              />
            </Form.Item>
          </Col>

          {/* Thương hiệu */}
          <Col span={12}>
            <Form.Item
              name="brand"
              label="Thương hiệu"
              rules={[
                { required: true, message: 'Bắt buộc', whitespace: true },
              ]}>
              <Input size="large" placeholder="Thương hiệu *" />
            </Form.Item>
          </Col>

          {/* Tồn kho */}
          <Col span={12}>
            <Form.Item
              name="quantity"
              label="Tồn kho"
              rules={[{ required: true, message: 'Bắt buộc' }]}>
              <InputNumber
                style={{ width: '100%' }}
                step={1}
                size="large"
                min={0}
                max={100000}
                placeholder="Tồn kho *"
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
}

EditProductModal.propTypes = {
  onClose: PropTypes.func,
  product: PropTypes.object,
  visible: PropTypes.bool,
};

export default EditProductModal;
