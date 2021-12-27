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

  // api: Lấy 1 sản phẩm
  getProduct: (id) => {
    const url = PRODUCT_API_URL;
    return request(`${url}/${id}`, {
      method: 'GET',
    });
  },

};

export default productApi;
