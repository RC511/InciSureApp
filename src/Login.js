import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.css';
import { Link, useLocation } from 'react-router-dom';
import ChangePass from './ChangePass';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from './firebase';

function useQuery() {
  const location = useLocation();
  return new URLSearchParams(location.search);
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [remember, setRemember] = useState(false);

  const auth = getAuth(app);
  const oobCode = useQuery().get('oobCode');
  const mode = useQuery().get('mode');

  const handleSubmit = async e => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, username, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      setToken(remember, JSON.parse("{\"token\":\""+user+"\"}"));
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
  }

  if (mode === "resetPassword" && oobCode)
  {
    return <ChangePass oobCode = {oobCode}/>
  }
  else
  {
    return(
      <div class="logDiv">
        <br></br>
        <h1 class="login">Please Log In</h1>
        <form onSubmit={handleSubmit}>
          <label class="labelClass">
            <p class="pLogin">Email</p>
            <input class="inClass" type="email" onChange={e => setUserName(e.target.value)} required />
          </label>
          <label class="labelClass">
            <p class="pLogin">Password</p>
            <input class="inClass" type="password" onChange={e => setPassword(e.target.value)} required />
          </label>
          <br></br>
          <span class="passSpan">
            <input class="remembBox" type="checkbox" id="rememberme" name="rememberme" onChange={e =>setRemember(e.target.checked)} />
            <label class="remembText" for="rememberme">Remember credentials</label>
            <Link class="forgotPass" to="/forgotpswd">
              Forgot password
            </Link>
          </span>
          <div class="submitDiv">
            <button type="submit" class="submitButton">LOG IN</button>
          </div>
        </form>
      </div>
    )
  }
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};