import request from "./request";

const USER_API_URL = '/customer';

const userApi = {

  getUser: () => {
    return request(`${USER_API_URL}/me`, {
      method: "GET",
    });
  },
};

export default userApi;
