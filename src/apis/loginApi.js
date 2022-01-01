import request from "./request";

const LOGIN_API_ENDPOINT = '/auth';

const loginApi = {
  // api: đăng nhập
  postLogin: ({ email, password }) => {
    const url = LOGIN_API_ENDPOINT;
    return request(`${url}/login`, {
      method: 'POST',
      data: { email, password },
    })
  },

  postLoginAdmin: ({ email, password }) => {
    const url = LOGIN_API_ENDPOINT;
    return request(`${url}/login-admin`, {
      method: 'POST',
      data: { email, password },
    })
  },
}

export default loginApi;
