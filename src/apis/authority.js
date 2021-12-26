const getAccessToken = () => {
  const tokenPayload = JSON.parse(localStorage.getItem("gearZoneToken"));
  return tokenPayload ? tokenPayload.token : null;
};

const removeToken = () => {
  return localStorage.removeItem("gearZoneToken");
}

const setToken = (token) => {
  return localStorage.setItem("gearZoneToken", JSON.stringify(token));
};

module.exports = {
  getAccessToken,
  setToken,
  removeToken
};
