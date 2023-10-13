import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.css';
import { Link } from 'react-router-dom';

// async function loginUser(credentials) {
//  return fetch('./users.json', {
//    method: 'POST',
//    headers: {
//      'Content-Type': 'application/json'
//    },
//    body: JSON.stringify(credentials)
//  })
//    .then(data => data.json())
//    //.catch()
// }

function makeToken(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

async function loginUser(name, pass) {
  // const toker = fetch('./users.json').then((response) => response.json());
  // const tokernow = JSON.parse(toker);

  let token = "";

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
    if (userData.password != pass) {
      // Invalid password
      token = "invPass";
    } else {
      token = makeToken(10);
    }
  } else {
    // Username not found
    token = "invUser";
  }

  return token;
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [errType, setErr] = useState(0);

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser(username, password);
    if (token == "invPass")
    {
      setErr(2);
    }
    else if (token == "invUser")
    {
      setErr(1);
    }
    else if (token.length == 10)
    {
      setToken(JSON.parse("{\"token\":\""+token+"\"}"))
    }
    else
    {
      setErr(3);
    }
  }

  return(
    <div class="logDiv">
      <br></br>
      <h1 class="h1Login">Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label class="labelClass">
          <p class="pLogin">Username</p>
          <input class="inClass" type="text" onChange={e => setUserName(e.target.value)} required />
          { (errType == 1) && <p>Username not found</p>}
        </label>
        <label class="labelClass">
          <p class="pLogin">Password</p>
          <input class="inClass" type="password" onChange={e => setPassword(e.target.value)} required />
          { (errType == 2) && <p>Invalid password</p>}
        </label>
        <div class="submitDiv">
          <button type="submit" class="submitButton">SUBMIT</button>
        </div>
        { (errType == 3) && <p>err</p>}
        <Link to="/forgotpswd">
          Forgot password
        </Link>
      </form>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};