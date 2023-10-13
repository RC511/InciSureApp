import '@fontsource/lexend';
import { useState } from 'react';

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
            <h1 class="h1Login">Enter your Email</h1>
            <form onSubmit={handleSubmit}>
                <label class="labelClass">
                <p class="pLogin">Username</p>
                <input class="inClass" type="text" onChange={e => setUserName(e.target.value)} required />
                { dispErr && <p>Username not found</p>}
                </label>
                <div class="submitDiv">
                <button type="submit" class="submitButton">SUBMIT</button>
                </div>
            </form>
        </div>
    );
}