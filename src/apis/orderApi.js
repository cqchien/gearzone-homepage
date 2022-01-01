import request from "./request";

const ORDER_API_URL = '/order';

const userApi = {

  createOrder: (params) => {
    return request(`${ORDER_API_URL}`, {
      method: "POST",
      data: params
    });
  },

  getListOrder: () => {
    return request(`${ORDER_API_URL}`, {
      method: "GET",
    });
  },

  getDetail: (id) => {
    return request(`${ORDER_API_URL}/${id}`, {
      method: "GET",
    });
  }
};

export default userApi;
