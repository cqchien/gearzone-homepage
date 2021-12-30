import request from "./request";

const ORDER_API_URL = '/order';

const userApi = {

  createOrder: (params) => {
    return request(`${ORDER_API_URL}`, {
      method: "POST",
      data: params
    });
  },
};

export default userApi;
