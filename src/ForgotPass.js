import '@fontsource/lexend';
import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';

async function findUser(name) {
    let found = false;

    const database = [
        {
          username: "user1",
          password: "pass1"
        },
        {
          username: "user2",
          password: "pass2"
        }
      ];
    
      const userData = database.find((user) => user.username == name);
    
      // Compare user info
      if (userData) {
        found = true;
      } else {
        // Username not found
        found = false;
      }
    
      return found;
}

export default function ForgotPass() {
    const [username, setUserName] = useState();
    const [dispErr, setDispErr] = useState(false);
  
    // const emailRef = useRef<HTMLInputElement>();
    // const nameRef = useRef<HTMLInputElement>();
    // const [loading, setLoading] = useState(false);

    // useEffect(() => emailjs.init("YOUR-PUBLIC-KEY-HERE"), []);
    // const handleSubmit = async (e) => {
    //   e.preventDefault();
    //   const serviceId = "YOUR-SERVICE-ID-HERE";
    //   const templateId = "YOUR-TEMPLATE-ID-HERE"";
    //   try {
    //     setLoading(true);
    //     await emailjs.send(serviceId, templateId, {
    //     name: nameRef.current.value,
    //       recipient: emailRef.current.value
    //     });
    //     alert("email successfully sent check inbox");
    //   } catch (error) {
    //     console.log(error);
    //   } finally {
    //     setLoading(false);
    //   }
    // };
    // https://www.telerik.com/blogs/sending-emails-react-app-using-emailjs
    // https://www.npmjs.com/package/@emailjs/browser

    const handleSubmit = async e => {
      e.preventDefault();
      const found = await findUser(username);
      if (found)
      {
        // Send Email
        alert("Email sent!");
      }
      else
      {
        setDispErr(true);
      }
    }

    return(
        <div class="logDiv">
            <br></br>
            <h1 class="h1Login">Forgot your password</h1>
            <form onSubmit={handleSubmit}>
                <label class="labelClass">
                <p class="pLogin">Email</p>
                <input class="inClass" type="email" onChange={e => setUserName(e.target.value)} required />
                { dispErr && <p>User with email not found</p>}
                </label>
                <div class="submitDiv">
                <button type="submit" class="submitButton">SUBMIT</button>
                </div>
                <Link to="/">
                  Cancel
                </Link>
            </form>
        </div>
    );
}