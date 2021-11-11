const getAccessToken = () => {
  const token = JSON.parse(localStorage.getItem("gearZoneToken"));
  return token?.access.token;
};

const setToken = (token) => {
  return localStorage.setItem("gearZoneToken", JSON.stringify(token));
};

module.exports = {
  getAccessToken,
  setToken,
};
