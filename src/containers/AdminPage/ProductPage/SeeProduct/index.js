import {
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  WarningOutlined,
} from '@ant-design/icons';
import { message, Spin, Table, Tooltip } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import adminApi from '../../../../apis/adminApi';
import productApi from '../../../../apis/productApi';
import React, { useEffect, useState } from 'react';
import { formatProductPrice, reduceProductName } from '../../../../helpers';
import EditProductModal from './EditProductModal';

function SeeProduct() {
  const [editModal, setEditModal] = useState({ visible: false, product: null });
  const [modalDel, setModalDel] = useState({ visible: false, _id: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [list, setList] = useState([]);
  const admin = JSON.parse(localStorage.getItem('admin'));

  // event: xoá sản phẩm
  const onDelete = async (_id) => {
    setIsLoading(true);
    const response = await adminApi.deleteProduct(_id, admin._id);
    if (response && response.success) {
      message.success('Xoá thành công.');
      const newList = list.filter((item) => item._id !== _id);
      setList(newList);
    }
    else {
      message.error('Xoá thất bại, thử lại !');
    }
    setIsLoading(false);

  };

  // event: cập nhật sản phẩm
  const onCloseEditModal = (newProduct) => {
    const newList = list.map((item) =>
      item._id !== newProduct._id ? item : { ...item, ...newProduct },
    );
    setList(newList);
    setEditModal({ visible: false });
  };

  // event: Lấy toàn bộ danh sách sản phẩm
  useEffect(() => {
    setIsLoading(true);
    async function getProductList() {
      const response = await productApi.getAllProducts();
      if (response && response.success) {
        const { data } = response.data;
        const list = data.map((item, index) => {
          return { ...item, key: index };
        });
        setList(list);
      } else {
        message.error('Lấy danh sách sản phẩm thất bại.');
      }
      setIsLoading(false);

    }
    getProductList();

    return () => {
    };
  }, []);

  // Cột của bảng
  const columns = [
    {
      title: 'Mã',
      key: 'SKU',
      dataIndex: 'SKU',
      render: (SKU, data) => (
        <a target="blank" href={`/product/${data._id}`}>
          {SKU}
        </a>
      ),
    },
    {
      title: 'Tên',
      key: 'name',
      dataIndex: 'name',
      render: (name) => (
        <Tooltip title={name}>{reduceProductName(name, 40)}</Tooltip>
      ),
    },
    {
      title: 'Giá',
      key: 'price',
      dataIndex: 'price',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.price - b.price,
      render: (price) => (
        <h3 style={{ color: '#4F55C5' }}>
          {price ? formatProductPrice(price) : 'Liên hệ'}
        </h3>
      ),
    },
    {
      title: 'Thương hiệu',
      key: 'brand',
      dataIndex: 'brand',
      sorter: (a, b) => {
        if (a.brand < b.brand) return -1;
        if (a.brand > b.brand) return 1;
        return 0;
      },
      render: (brand) => (
        <Tooltip title={brand}>{reduceProductName(brand, 40)}</Tooltip>
      ),
    },
    {
      title: 'Danh mục',
      key: 'category',
      dataIndex: 'category',
      render: (category) => (
        <Tooltip title={category.name}>{category.name}</Tooltip>
      ),
    },
    {
      title: 'Tồn kho',
      key: 'quantity',
      dataIndex: 'quantity',
      defaultSortOrder: 'ascend',
      sorter: (a, b) => a.quantity - b.quantity,
    },
    {
      title: 'Hành động',
      key: 'actions',
      fixed: 'right',
      width: 100,
      render: (text) => (
        <>
          <DeleteOutlined
            onClick={() => setModalDel({ visible: true, _id: text._id })}
            className="m-r-8 action-btn-product"
            style={{ color: 'red' }}
          />
          <Tooltip title="Chỉnh sửa" placement="left">
            <EditOutlined
              onClick={() => {
                setEditModal({ visible: true, product: { ...text } });
              }}
              className="m-r-8 action-btn-product"
              style={{ color: '#444' }}
            />
          </Tooltip>

          <Tooltip title="Xem chi tiết" placement="left">
            <a target="blank" href={`/product/${text._id}`}>
              <EyeOutlined
                className="action-btn-product"
                style={{ color: '#444' }}
              />
            </a>
          </Tooltip>
        </>
      ),
    },
  ];

  // rendering ...
  return (
    <div className="pos-relative p-8">
      {isLoading ? (
        <Spin
          tip="Đang tải danh sách sản phẩm ..."
          size="large"
          className="trans-center"
        />
      ) : (
        <>
          {' '}
          {/* modal confirm delete product */}
          <Modal
            title="Xác nhận xoá sản phẩm"
            visible={modalDel.visible}
            onOk={() => {
              onDelete(modalDel._id);
              setModalDel({ visible: false, _id: false });
            }}
            onCancel={() => setModalDel({ visible: false, _id: false })}
            okButtonProps={{ danger: true }}
            okText="Xoá"
            cancelText="Huỷ bỏ">
            <WarningOutlined style={{ fontSize: 28, color: '#F7B217' }} />
            <b> Không thể khôi phục được, bạn có chắc muốn xoá ?</b>
          </Modal>
          {/* table show product list */}
          <Table
            pagination={{
              pageSize: 10,
              position: ['bottomCenter'],
              showSizeChanger: false,
            }}
            className="admin-see-product"
            columns={columns}
            dataSource={list}
          />
          {/* edit product modal */}
          <EditProductModal
            visible={editModal.visible}
            onClose={(value) => onCloseEditModal(value)}
            product={editModal.product}
          />
        </>
      )}
    </div>
  );
}

export default SeeProduct;
