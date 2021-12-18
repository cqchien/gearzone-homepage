// fn: định dạng chuỗi truy vấn
const formatQueryString = (str = '') => {
  let result = str;
  // xoá tất cả ký tự đặc biệt
  result = str.replace(/[`~!@#$%^&*()_|+\-=?;:<>\{\}\[\]\\\/]/gi, '');
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

export {
  formatQueryString,
  reduceProductName,
  autoSearchOptions
};
