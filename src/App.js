import './App.css';
import Home from './Home.js';
import Profile from './Profile.js';
import PHome from './PhoneHome.js';
import Login from './Login.js';
import Logs from './Logs.js';
import Inquiries from './Inquiries.js';
import useToken from './TokenHandler.js';
import ForgotPass from './ForgotPass';
import ChangePass from './ChangePass';
//import ChangePass from './ChangePass.component';
import { useState } from 'react';
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import {ArduinoIoTCloud} from 'arduino-iot-js';

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

function LoginPages({tokenFunc}) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login setToken={tokenFunc} />} />
        <Route path="/forgotpswd" element={<ForgotPass />} />
        {/* <Route path="/changepswd" element={<ChangePass />} /> */}
        {/* <Route exact path= '/changepswd' component = {ChangePass}/> */}
      </Routes>
    </BrowserRouter>
  );
}

function App() {

  const {token, setToken} = useToken();
  // const [token, setToken] = useState();

  const isMobile = false;

  if (!token)
  {
    return (
      <LoginPages tokenFunc={setToken} />
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
