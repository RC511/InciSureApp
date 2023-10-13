import './App.css';
import Home from './Home.js';
import Profile from './Profile.js';
import PHome from './PhoneHome.js';
import Login from './Login.js';
import Logs from './Logs.js';
import Inquiries from './Inquiries.js';
import useToken from './TokenHandler.js';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import '@fontsource/lexend';

/* Code to check if app is being opened on mobile or desktop
const [width, setWidth] = useState<number>(window.innerWidth);

function handleWindowSizeChange() {
    setWidth(window.innerWidth);
}
useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
    }
}, []);

const isMobile = width <= 768;
*/

// this is a new hi for me
// a different hi

function MobilePages() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<PHome />} />
        </Routes>
      </BrowserRouter>
  );
}

function DesktopPages() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logs" element={<Logs />} />
          <Route path="/inquiries" element={<Inquiries />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
  );
}

// var IotApi = require('@arduino/arduino-iot-client');
// var rp = require('request-promise');

// async function getToken() {
//     var options = {
//         method: 'POST',
//         url: 'https://api2.arduino.cc/iot/v1/clients/token',
//         headers: { 'content-type': 'application/x-www-form-urlencoded' },
//         json: true,
//         form: {
//             grant_type: 'client_credentials',
//             client_id: 'CLIENT_ID',
//             client_secret: 'CLIENT_SECRET',
//             audience: 'https://api2.arduino.cc/iot'
//         }
//     };

//     try {
//         const response = await rp(options);
//         return response['access_token'];
//     }
//     catch (error) {
//         console.error("Failed getting an access token: " + error)
//     }
// }

// async function run() {
//   var client = IotApi.ApiClient.instance;
//   // Configure OAuth2 access token for authorization: oauth2
//   var oauth2 = client.authentications['oauth2'];
//   oauth2.accessToken = await getToken();
  
//   var api = new IotApi.DevicesV2Api(client)    
//   api.devicesV2List().then(devices => {
//       console.log(devices);
//   }, error => {
//       console.log(error)
//   });
// }

// run();

function App() {

  const {token, setToken} = useToken();
  // const [token, setToken] = useState();

  const isMobile = false;

  if (!token)
  {
    return (
      <Login setToken={setToken} />
    );
  }

  if (isMobile) {
    return (
      <MobilePages />
    );
  }
  else {
    return (
      <DesktopPages />
    );
  }
}

export default App;
