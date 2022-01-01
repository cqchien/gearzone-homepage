// fn: định dạng chuỗi truy vấn
const formatQueryString = (str = '') => {
  let result = str;
  // xoá tất cả ký tự đặc biệt
  result = str.replace(/[`~!@#$%^&*()_|+\-=?;:<>\\{\\}\\[\]\\\\/`]/gi, '');
  // thay khoảng trắng thành dấu cộng
  result = result.replace(/[\s]/gi, '+');
  return result;
};

// fn: hàm rút gọn tên sản phẩm
const reduceProductName = (name, length = 64) => {
  let result = name;
  if (name && name.length >= length) {
    result = name.slice(0, length) + ' ...';
  }
  return result;
};

// fn: generate autocomplete search options
const autoSearchOptions = () => {
  let result = [];
  // laptop
  result.push({ value: 'Laptop' });
  result.push({ value: 'Macbook' });
  result.push({ value: 'RAM' });
  result.push({ value: 'Ổ cứng SSD' });
  result.push({ value: 'Máy ảnh Sony' });
  result.push({ value: 'Mainboard Bo mạch chủ' });
  result.push({ value: 'Loa, thiết bị âm thanh' });
  result.push({ value: 'Màn hình, card màn hình' });
  result.push({ value: 'Router wifi' });

  return result;
};

// fn: hàm format giá sản phẩm
const formatProductPrice = (price) => {
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'VND',
  }).format(price);
};

const formatOrderDate = (date = Date.now(), flag = 0) => {
  const newDate = new Date(date);
  const d = newDate.getDate(),
    m = newDate.getMonth() + 1,
    y = newDate.getFullYear();
  return flag === 0
    ? `${d}/${m}/${y}`
    : `${newDate.getHours()}:${newDate.getMinutes()} ${d}/${m}/${y}`;
};

// fn: chuyển đổi tình trạng đơn hàng
const convertOrderStatus = (orderStatus = 0) => {
  switch (orderStatus) {
    case 0:
      return 'Đặt hàng thành công';
    case 1:
      return 'Đã tiếp nhận';
    case 2:
      return 'Đang lấy hàng';
    case 3:
      return 'Đóng gói xong';
    case 4:
      return 'Đang giao vận chuyển';
    case 5:
      return 'Đang vận chuyển';
    case 6:
      return 'Giao hàng thành công';
    default:
      return 'Đặt hàng thành công';
  }
};

// fn: chuyển đổi phương thức thanh toán
const convertPaymentMethod = (payMethod = 0) => {
  switch (payMethod) {
    case 0:
      return 'Thanh toán tiền mặt khi nhận hàng';
    case 1:
      return 'Thanh toán online';
    default:
      return 'Thanh toán tiền mặt khi nhận hàng';
  }
};


export {
  formatQueryString,
  reduceProductName,
  autoSearchOptions,
  formatProductPrice,
  formatOrderDate,
  convertOrderStatus,
  convertPaymentMethod
};
