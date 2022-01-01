import request from "./request";

const USER_API_URL = '/admin';

const userApi = {

  getListOrderForAdmin: (adminId) => {

    return request(`${USER_API_URL}/order`, {
      method: "GET",
      params: { adminId }
    });
  },

  updateOrderStatusForAdmin: (id, orderStatus, adminId) => {

    return request(`${USER_API_URL}/order/${id}`, {
      method: "POST",
      params: { adminId },
      data: { orderStatus },
    });
  },
};

export default userApi;
