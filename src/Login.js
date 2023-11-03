import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.css';
import { Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from './firebase.js';
import logo from './assets/logo.png';

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [remember, setRemember] = useState(false);

  const auth = getAuth(app);

  const handleSubmit = async e => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, username, password)
    .then((userCredential) => {
      // Signed in 
      console.log("CHEK00");
      console.log(userCredential);
      const user = userCredential.user;
      setToken(remember, user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
  }

  return(
    <div class="logDiv">
      <main class="containerLogin">
        <div>
          <img src={logo} class="loginLogo"/>
        </div>
        <div class="login">
          Log in to your account :D
        </div>
        <form onSubmit={handleSubmit}>
          <main class="labelClass">
            <div class="pLogin">Email</div>
            <input class="inClass" type="email" onChange={e => setUserName(e.target.value)} required />
          </main>
          <main class="labelClass">
            <div class="pLogin">Password</div>
            <input class="inClass" type="password" onChange={e => setPassword(e.target.value)} required />
          </main>
          <main class="bottomLogin">
            <div class="rememb">
              <input type="checkbox" id="rememberme" name="rememberme" onChange={e =>setRemember(e.target.checked)} />
              <label class="remembText" for="rememberme">Remember credentials</label>
            </div>
            <Link class="forgotPass" to="/forgotpswd">
              Forgot password
            </Link>
          </main>
          <div class="submitDiv">
            <button type="submit" class="submitButton bg-light-blue hover:bg-white">LOG IN</button>
          </div>
        </form>
      </main>

      {/* <br></br>
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
      </form> */}
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};