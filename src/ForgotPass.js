import '@fontsource/lexend';
import { useRef, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';

async function findUser(name) {
    let found = false;
    let realname = "";

    const database = [
        {
          username: "ryokusnadi2@gmail.com",
          realname: "First User",
          password: "pass1"
        },
        {
          username: "user2@mail.com",
          realname: "Second User",
          password: "pass2"
        }
      ];
    
      const userData = database.find((user) => user.username == name);
    
      // Compare user info
      if (userData) {
        found = true;
        realname = userData.realname;
      } else {
        // Username not found
        found = false;
      }
    
      return {found, realname};
}

export default function ForgotPass() {
    const [username, setUserName] = useState();
    const [dispErr, setDispErr] = useState(false);
    const navPage = useNavigate();
  
    const [loading, setLoading] = useState(false);

    useEffect(() => emailjs.init("PAK9XzziKGpdJa5yn"), []);
    const handleSubmit = async (e) => {
      e.preventDefault();
      const {found, realname} = await findUser(username);
      if (found)
      {
        // Send Email
        const serviceId = "service_b09wvan";
        const templateId = "template_qaqtu48";
        const emailContents = "test"
        const templateFields = {
          recipient: username,
          name: realname,
          message: emailContents,
        }
        try {
          setLoading(true);
          await emailjs.send(serviceId, templateId, templateFields);
          alert("Email sent!");
          navPage("/");
        } catch (error) {
          alert(error);
        } finally {
          setLoading(false);
        }
      }
      else
      {
        setDispErr(true);
      }
      
    };
    // https://www.telerik.com/blogs/sending-emails-react-app-using-emailjs
    // https://www.npmjs.com/package/@emailjs/browser

    // const handleSubmit = async e => {
    //   e.preventDefault();
    //   const found = await findUser(username);
    //   if (found)
    //   {
    //     // Send Email
    //     alert("Email sent!");
    //   }
    //   else
    //   {
    //     setDispErr(true);
    //   }
    // }

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
                <button type="submit" class="submitButton" disabled={loading}>SUBMIT</button>
                </div>
                <Link to="/">
                  Cancel
                </Link>
            </form>
        </div>
    );
}