import { Button, Spin, Table } from 'antd';
import orderApi from '../../../apis/orderApi';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { convertOrderStatus, formatOrderDate, formatProductPrice } from '../../../helpers';
import OrderDetail from './OrderDetail';

// fn: tạo danh sách lọc cho trạng thái đơn hàng
function generateOrderStaFilter() {
  let result = [];
  for (let i = 0; i < 8; ++i) {
    result.push({ value: i, text: convertOrderStatus(i) });
  }
  return result;
}

function OrderList() {
  const [isLoading, setIsLoading] = useState(true);
  const [orderList, setOrderList] = useState([]);
  const [orderDetails, setOrderDetails] = useState({
    isOpen: false,
    orderId: '',
  });
  const user = useSelector((state) => state.user);
  console.log(orderList);
  // các cột cho bảng danh sách đơn hàng
  const orderColumns = [
    {
      title: 'Mã đơn hàng',
      dataIndex: 'orderCode',
      key: 'orderCode',
      render: (orderCode, records) => (
        <Button
          type="link"
          onClick={() =>
            setOrderDetails({ isOpen: true, orderId: records._id })
          }>
          <b>{orderCode}</b>
        </Button>
      ),
    },
    {
      title: 'Ngày mua',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (createdAt) => formatOrderDate(createdAt),
      sorter: (a, b) => {
        if (a.createdAt < b.createdAt) return -1;
        if (a.createdAt > b.createdAt) return 1;
        return 0;
      },
    },
    {
      title: 'Số Sản phẩm',
      dataIndex: 'orderProds',
      key: 'orderProds',
      render: (value) => (
        value.reduce((a, b) => {
          return a + b.numOfProd
        }, 0)
      )
    },
    {
      title: 'Tổng tiền',
      key: 'totalMoney',
      render: (value, records) => {
        return formatProductPrice(records.total);
      },
      sorter: (a, b) =>
        a.total - b.total
    },
    {
      title: 'Trạng thái đơn hàng',
      key: 'orderStatus',
      filters: generateOrderStaFilter(),
      onFilter: (value, record) => record.orderStatus === value,
      render: (value, records) => convertOrderStatus(records.orderStatus),
    },
  ];

  // fn: hiển thị danh sách đơn hàng
  function showOrderList(list) {
    return list && list.length === 0 ? (
      <h3 className="m-t-16 t-center" style={{ color: '#888' }}>
        Hiện tại bạn chưa có đơn hàng nào
      </h3>
    ) : (
      <Table
        columns={[...orderColumns]}
        dataSource={list}
        pagination={{
          pageSize: 5,
          showSizeChanger: false,
          position: ['bottomRight'],
        }}
      />
    );
  }

  // event: Lấy danh sách
  useEffect(() => {
    async function getOrderList() {

      setIsLoading(true);
      const response = await orderApi.getListOrder();
      if (response && response.success) {
        const { orderList } = response.data;
        setOrderList(
          orderList.map((item, index) => {
            return { ...item, key: index };
          }),
        );
      }
      setIsLoading(false);
    }

    if (user) getOrderList();
    return () => { };
  }, [user]);

  // rendering ...
  return (
    <>
      {isLoading ? (
        <div className="t-center m-tb-48">
          <Spin tip="Đang tải danh sách đơn hàng của bạn ..." size="large" />
        </div>
      ) : (
        showOrderList(orderList)
      )}
      {orderDetails.isOpen && (
        <OrderDetail
          orderId={orderDetails.orderId}
          onClose={() => setOrderDetails({ isOpen: false })}
        />
      )}
    </>
  );
}

export default OrderList;
