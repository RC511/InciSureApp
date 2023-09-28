import './Profile.css';
import profilePic from './assets/img_avatar.png'
import wave from './assets/wave.png'
import NavBarItem from './NavBarItem';
import './NavBar.css';


export default function Profile() {
    return(
        <div class="backgr">
            <br></br>
            <div class="navBar">
                {NavBarItem(4)}
            </div>
            <main class="container1">
                <div class="avatar">
                    <img src={profilePic} className="profilePic" />
                </div>
                <main class="container2">
                    <div class="title">User Information</div>
                    <main class="container3">
                        <div class="information1">
                            <p></p>
                            <p className="item">Name</p>
                            <p className="detail">Smile</p>
                            <p className="item">Birthday</p>
                            <p className="detail">01 Jan 2000</p>
                            <p className="item">Phone</p>
                            <p className="detail">+65 12345678</p>
                            <p className="item">Email</p>
                            <p className="detail">Group4@gmail.com</p>
                            <p></p>
                        </div>
                        <div class="information2">
                            <p></p>
                            <p className="item">Sex</p>
                            <p className="detail">C</p>
                            <p className="item">Age</p>
                            <p className="detail">99</p>
                            <p className="item">Emergency contact</p>
                            <p className="detail">+65 88888888</p>
                            <p></p>
                        </div>
                    </main>
                    
                </main>
            </main>
            <div class="profileBottom">
                <img src={wave} className="wave" />
            </div>
         </div>
    )
}