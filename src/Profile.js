import './Profile.css';
import logo from './logo.svg';
import profilePic from './assets/img_avatar.png'
import rectangle from './assets/Rectangle.png'
import NavBarItem from './NavBarItem';
import './NavBar.css';


export default function Profile() {
    return(
        <div class="backgr">
            <br></br>
            <div class="navBar">
                {NavBarItem(4)}
            </div>
            <div class="mainarea">
                <div class="pfp">
                    <img src={profilePic} className="App-profilePic" alt="profilePic"/>
                    testin
                </div>
                <div class="info">
                    <div>
                        User Information
                    </div>
                    <div class="infbox">
                        <div>
                            <p className="inftitles">Name</p>
                            <p className="inftitles">Birthday</p>
                            <p className="inftitles">Phone</p>
                            <p className="inftitles">Email</p>
                            <p className="inftitles">Sex</p>
                            <p className="inftitles">Age</p>
                            <p className="inftitles">Emergency contact</p>
                        </div>
                    </div>
                </div>

            </div>


            
            {/* <p className="App-title">
            Hello World
            </p>
            <img src={rectangle} className="App-rectangle" alt="rectangle"/> */}
            

            


            
                {/* <img src={logo} className="App-logo" alt="logo" />
                <p>
                Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                >
                Learn React
                </a> */}

         </div>
    )
}