import logo from './logo.svg';
import './Home.css';
import './NavBar.css';
import {Link} from 'react-router-dom';
import NavBarItem from './NavBarItem.js';

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
                        Datestuff
                    </div>
                </div>
                <div class="lower">
                    <div class="loside">
                        Temp
                    </div>
                    <div class="lomid">
                        FACE
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