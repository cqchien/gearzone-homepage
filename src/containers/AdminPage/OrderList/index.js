import { Button, message, Modal, Radio, Spin, Table } from 'antd';
import adminApi from '../../../apis/adminApi';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { convertOrderStatus, formatOrderDate, formatProductPrice } from '../../../helpers';

function generateFilterOrder() {
  let result = [];
  for (let i = 0; i < 8; ++i) {
    result.push({ value: i, text: convertOrderStatus(i) });
  }
  return result;
}

function OrderList() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const admin = JSON.parse(localStorage.getItem('admin'));
  // event: Cập nhật trạng thái đơn hàng
  const updateOrderStatus = async (id, orderStatus) => {
    setIsLoading(true);
    const response = await adminApi.updateOrderStatusForAdmin(id, orderStatus, admin._id);
    if (response && response.success) {
      message.success('Cập nhật thành công');
      setData(
        data.map((item) =>
          item.id === id ? { ...item, orderStatus } : { ...item },
        ),
      );
    } else {
      message.success('Cập nhật thất bại');
    }
    setIsLoading(false);

  };

  // modal cập nhật trạng thái đơn hàng
  function UpdateOrderStatusModal(defaultVal = 0, orderCode, orderId) {
    let valueCurr = defaultVal;
    const modal = Modal.info({
      width: 768,
      title: `Cập nhật trạng thái đơn hàng #${orderCode}`,
      content: (
        <Radio.Group
          defaultValue={defaultVal}
          onChange={(v) => (valueCurr = v.target.value)}
          className="m-t-12">
          {generateFilterOrder().map((item, index) => (
            <Radio className="m-b-8" key={index} value={item.value}>
              {item.text}
            </Radio>
          ))}
        </Radio.Group>
      ),
      centered: true,
      icon: null,
      okText: 'Cập nhật',
      onOk: () => {
        updateOrderStatus(orderId, valueCurr);
        modal.destroy();
      },
    });
  }

  const columns = [
    {
      title: 'khách hàng',
      key: 'owner',
      dataIndex: 'owner',
    },
    {
      title: 'Mã đơn hàng',
      key: 'orderCode',
      dataIndex: 'orderCode',
      render: (v) => <a href='/'>{v}</a>,
    },
    {
      title: 'Ngày đặt',
      key: 'orderDate',
      dataIndex: 'orderDate',
      sorter: (a, b) => {
        if (a.orderDate > b.orderDate) return 1;
        if (a.orderDate < b.orderDate) return -1;
        return 0;
      },
    },
    {
      title: 'Sản phẩm',
      key: 'product',
      dataIndex: 'product',
      render: (value, records) => {
        let result = [];
        value.forEach(productInfo => {
          result.push(
            <Link to={`/product/${productInfo.product._id}`} >
              {productInfo.product.SKU}
            </Link>, "; "
          )
        })
        return result;
      },
    },
    {
      title: 'Tổng tiền',
      key: 'totalMoney',
      dataIndex: 'totalMoney',
      render: (value) => (
        <b style={{ color: '#333' }}>{formatProductPrice(value)}</b>
      ),
      sorter: (a, b) => a.totalMoney - b.totalMoney,
    },
    {
      title: 'HT thanh toán',
      key: 'paymentMethod',
      dataIndex: 'paymentMethod',
      render: (value) => (value === 0 ? 'Tiền mặt' : 'VNPay'),
    },
    {
      title: 'Trạng thái đơn hàng',
      key: 'orderStatus',
      dataIndex: 'orderStatus',
      filters: generateFilterOrder(),
      onFilter: (value, record) => record.orderStatus === value,
      render: (value) => convertOrderStatus(value),
    },
    {
      title: '',
      render: (_v, records) => (
        <Button
          type="dashed"
          onClick={() =>
            UpdateOrderStatusModal(
              records.orderStatus,
              records.orderCode,
              records.id,
            )
          }>
          Cập nhật
        </Button>
      ),
    },
  ];

  useEffect(() => {
    async function getOrderList() {
      setIsLoading(true);
      const response = await adminApi.getListOrderForAdmin(admin._id);
      if (response && response.success) {
        const { orderList } = response.data;
        const newList = orderList.map((item, index) => {
          return {
            key: index,
            id: item._id,
            owner: item.owner.name,
            orderCode: item.orderCode,
            orderDate: formatOrderDate(item.createdAt),
            product: item.orderProds,
            totalMoney: item.total,
            paymentMethod: item.paymentMethod,
            orderStatus: item.orderStatus,
            orderId: item._id,
          };
        });
        setData([...newList]);
      }

      setIsLoading(false);

    }
    getOrderList();
    return () => {
    };
  }, [admin._id]);

  return (
    <>
      {isLoading ? (
        <Spin className="trans-center" tip="Đang lấy danh sách đơn hàng ..." />
      ) : (
        <Table
          columns={columns}
          dataSource={data}
          pagination={{ showLessItems: true, position: ['bottomCenter'] }}
        />
      )}
    </>
  );
}

export default OrderList;
