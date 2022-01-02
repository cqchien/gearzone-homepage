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

  doStatisticMonthlyRevenue: (year = new Date().getFullYear(), adminId) => {
    return request(`${USER_API_URL}/monthly-revenue`, {
      method: "GET",
      params: { year, adminId },
    });
  },

  doStatisticAnnualRevenue: (startYear = new Date().getFullYear(), endYear = new Date().getFullYear(), adminId) => {
    return request(`${USER_API_URL}/annual-revenue`, {
      method: "GET",
      params: { startYear, endYear, adminId },
    });
  },

  deleteProduct: (id, adminId) => {
    return request(`${USER_API_URL}/product/${id}`, {
      method: "DELETE",
      params: { adminId }
    });
  },

  updateProduct: ({ _id, ...product }, adminId) => {
    return request(`${USER_API_URL}/product/${_id}`, {
      method: "PATCH",
      params: { adminId },
      data: product
    });
  }
};

export default userApi;
