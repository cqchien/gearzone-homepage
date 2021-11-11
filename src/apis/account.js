import request from "./request";

const signUpUser = (params) => {
  return request("/auth/register", {
    method: "POST",
    data: params,
  });
};

const signInUser = (params) => {
  console.log(params);
  return request("/auth/login", {
    method: "POST",
    data: params,
  });
};

export { signUpUser, signInUser };
