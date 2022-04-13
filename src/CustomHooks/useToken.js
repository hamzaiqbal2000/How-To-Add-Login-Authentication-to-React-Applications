import { useState } from "react";

const useToken = () => {
  const getToken = () => {
    //session storage
    // const tokenString = sessionStorage.getItem("token");
    // const userToken = JSON.parse(tokenString);
    // return userToken?.token;

    //local storage
    const tokenString = localStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    return userToken?.token;
  };
  const [token, setToken] = useState(getToken());

  function saveToken(userToken) {
    //session storage
    // sessionStorage.setItem("token", JSON.stringify(userToken));
    // setToken(userToken.token);

    //local storage
    localStorage.setItem("token", JSON.stringify(userToken));
    setToken(userToken.token);
  }

  return {
    setToken: saveToken,
    token,
  };
};

export default useToken;
