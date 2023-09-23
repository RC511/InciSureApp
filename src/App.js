import './App.css';
import Home from './Home.js';
import Profile from './Profile.js';
import PHome from './PhoneHome.js';
import Login from './Login.js';
import useToken from './TokenHandler.js';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
          <Route path="/logs" element={<Profile />} />
          <Route path="/inquiries" element={<Profile />} />
          <Route path="/profile" element={<Profile />} />
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
