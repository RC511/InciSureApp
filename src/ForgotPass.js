import '@fontsource/lexend';
import { useRef, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import emailjs from '@emailjs/browser';
import "./ForgotPass.css";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

export default function ForgotPass() {
    const [username, setUserName] = useState();
  
    const [loading, setLoading] = useState(false);

    const handleSubmit = async e => {
      e.preventDefault();
      setLoading(true);
      const auth = getAuth();
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
        <div class="logDiv">
            <br></br>
            <h1 class="forgotPass">Forgot your password</h1>
            <form onSubmit={handleSubmit}>
                <label class="labelClass">
                <p class="pLogin">Email</p>
                <input class="inClass" type="email" onChange={e => setUserName(e.target.value)} required />
                </label>
                <div class="submitDiv">
                <button type="submit" class="submitButton" disabled={loading}>SUBMIT</button>
                </div>
                <Link to="/">
                  Cancel
                </Link>
                {/* <Link to="/changepswd">
                  reset_pass
                </Link> */}
                

                <Link to= {'/changepswd'} >resetPassword</Link>
                  
                
                

              
            </form>
        </div>
    );
}
