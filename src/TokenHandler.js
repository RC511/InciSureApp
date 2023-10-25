import { useState } from 'react';

export default function useToken() {
  const getToken = () => {
    let tokenString = localStorage.getItem('token');
    if (!tokenString)
      tokenString = sessionStorage.getItem('token');
    if (!tokenString)
    {
      return null;
    }
    else
    {
      const userToken = JSON.parse(tokenString);
      return userToken?.token
    }
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (remember, userToken) => {
    if (remember)
      localStorage.setItem('token', JSON.stringify(userToken));
    else
      sessionStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken.token);
  };

  return {
    setToken: saveToken,
    token
  }
}