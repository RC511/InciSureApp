import '@fontsource/lexend';
import { useRef, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import emailjs from '@emailjs/browser';
import "./ForgotPass.css";
import app from './firebase';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import logo from './assets/logo.png';

export default function ForgotPass() {
    const [username, setUserName] = useState();
  
    const [loading, setLoading] = useState(false);

    const handleSubmit = async e => {
      e.preventDefault();
      setLoading(true);
      const auth = getAuth(app);
      await sendPasswordResetEmail(auth, username)
        .then(() => {
          alert("Password reset email sent!");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage);
        });
      setLoading(false);
    }

    return(
      <div class="forgotDiv">
        <div>
          <img src={logo} class="loginLogo"/>
        </div>
        <div class="login">Password recovery</div>     
        <form class="forgotSubmit" onSubmit={handleSubmit}>
          <div class="forgotEmail">
            <p class="pLogin">Email</p>
            <input class="inClass" type="email" onChange={e => setUserName(e.target.value)} required />
          </div>
          <div class="submitDiv">
            <button type="submit" class="submitButton bg-light-blue hover:bg-white" disabled={loading}>SUBMIT</button>
          </div>
          <Link class="cancelLink" to="/">
            Cancel reset Password
          </Link>
        </form>

          
          
      </div>
    );
}
