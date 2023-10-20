import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.css';
import { Link } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [remember, setRemember] = useState(false);

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDl0OFJkVUG67asXIenKo9YOjQ_ZJLvJ9c",
    authDomain: "bg4103-trial.firebaseapp.com",
    projectId: "bg4103-trial",
    storageBucket: "bg4103-trial.appspot.com",
    messagingSenderId: "909208369703",
    appId: "1:909208369703:web:db7ec33ac8d2d25e386c02"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

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

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};