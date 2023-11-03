import { useState } from 'react';

export default function useToken() {
  const getToken = () => {
    let tokenString = localStorage.getItem('user');
    if (!tokenString)
      tokenString = sessionStorage.getItem('user');
    if (!tokenString)
    {
      return null;
    }
    else
    {
      const user = JSON.parse(tokenString);
      const accessToken = user?.stsTokenManager.accessToken;
      return accessToken;
    }
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (remember, user) => {
    if (remember)
      localStorage.setItem('user', JSON.stringify(user));
    else
      sessionStorage.setItem('user', JSON.stringify(user));
    setToken(user.stsTokenManager.accessToken);
  };

  return {
    setToken: saveToken,
    token
  }
}