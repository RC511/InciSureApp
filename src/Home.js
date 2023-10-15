import calendar from './assets/today_24px.png';
import maleHappy from './assets/maleHappy.png';
import maleSad from './assets/maleSad.png';
import femHappy from './assets/femHappy.png';
import femSad from './assets/femSad.png';
import logOutSign from './assets/log-out-01.png';
import './Home.css';
import './NavBar.css';
import NavBarItem from './NavBarItem.js';

function getDate() {
    const today = new Date();
    const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const day = weekdays[today.getDay()];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = months[today.getMonth()];
    const year = today.getFullYear();
    const date = today.getDate();
    return `${day}, ${date} ${month} ${year}`;
}

function logOut() {
    localStorage.removeItem("token");
    window.location.reload(true);
}

// maybe do background-image

export default function Home() {
    return (
        <div class="back">
            <br></br>
            <div class="navBar">
                {NavBarItem(1)}
            </div>
            <div style={{marginTop: "48px"}}>
                <div class="upper">
                    <div class="upleft">
                        a
                    </div>
                    <div class="upmid">
                        <h1 class="greeting">WELCOME, Patient</h1>
                        <h2 class="status">Your wound is doing <span class="statusColouring">WELL</span>!</h2>
                    </div>
                    <div class="upright">
                        <img src={calendar} height="24px" /> <span style={{fontWeight: "bold"}}>{getDate()}</span>
                        <p class="lUpdate">Last updated...</p>
                    </div>
                </div>
                <div class="lower">
                    <div class="loside">
                        <div class="tempBox">
                            <p class="tempFiller">a</p>
                            <p class="tempName">Temperature</p>
                            <p class="tempValue">37.5°C</p>
                        </div>
                    </div>
                    <div class="lomid">
                        <img src={maleHappy} width="85%" />
                    </div>
                    <div class="loside">
                        <div class="calBox">
                            <div class="calTop">
                                
                            </div>
                            <div class="calBot">
                                <p class="dayCount">16</p>
                                <p class="dayText">Days</p>
                            </div>
                        </div>
                        <div class="logOut">
                            <button onClick={() => {logOut()}} class="logOutBtn">
                                <img src={logOutSign} /> Log Out
                            </button>
                        </div>
                    </div>
                </div>
                {/* <header className="App-header"> */}
                {/* <header>
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                        >
                        <Link to='/about'>Nevermind</Link>
                    </a>
                    <button onClick={localStorage.removeItem("token")}>
                        remove token
                    </button>
                </header> */}
            </div>
            
        </div>
    );
}