/* eslint-disable no-unused-vars */

const setTokenToLocalStroge = (token) => {
  const preToken = localStorage.getItem("token");
  if (!preToken) {
    return localStorage.setItem("token", token);
  }
  localStorage.removeItem("token");
  localStorage.setItem("token", token);
};

export default setTokenToLocalStroge;
