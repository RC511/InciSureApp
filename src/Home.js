import calendar from './assets/today_24px.png';
import maleHappy from './assets/maleHappy.png';
import maleSad from './assets/maleSad.png';
import femHappy from './assets/femHappy.png';
import femSad from './assets/femSad.png';
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

export default function Home() {
    return (
        <div class="back">
            <br></br>
            <div class="navBar">
                {NavBarItem(1)}
            </div>
            <div>
                <div class="upper">
                    <div class="upleft">
                        a
                    </div>
                    <div class="upmid">
                        <h1>WELCOME</h1>
                        <h2>ur okay</h2>
                    </div>
                    <div class="upright">
                        <img src={calendar} height="20px" />{getDate()}<br />
                        Last updated...
                    </div>
                </div>
                <div class="lower">
                    <div class="loside">
                        Temp
                    </div>
                    <div class="lomid">
                        <img src={maleHappy} width="85%" />
                    </div>
                    <div class="loside">
                        Time using bandage
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