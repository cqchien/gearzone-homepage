import request from "./request";

const LOGIN_API_ENDPOINT = '/auth/login';

const loginApi = {
  // api: đăng nhập
  postLogin: ({ email, password }) => {
    const url = LOGIN_API_ENDPOINT;
    return request(`${url}`, {
      method: 'POST',
      data: { email, password },
    })
  },
}

export default loginApi;
