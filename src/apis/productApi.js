import request from "./request";

const PRODUCT_API_URL = '/product';

const productApi = {
  // api: Lấy danh sách sản phẩm và phân trang
  getAllProducts: (page = 1, perPage = 8) => {
    const url = PRODUCT_API_URL + '/all';
    return request(`${url}`, {
      method: 'GET',
      params: { page, perPage }
    })
  },

};

export default productApi;
