import './Profile.css';
import profilePic from './assets/img_avatar.png'
import wave from './assets/wave.png'
import NavBarItem from './NavBarItem';
import './NavBar.css';
import { useState } from 'react';
import { db } from './firebase';
import { get, ref } from 'firebase/database';
import { getUID } from './TokenHandler';


function getAge(birthString) {
    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth() + 1;
    const currentYear = currentDate.getFullYear();
    const birthDay = parseInt(birthString.substring(0, 2));
    const birthMonth = parseInt(birthString.substring(3, 5));
    const birthYear = parseInt(birthString.substring(6, 10));
    let age = currentYear - birthYear - 1;
    age += (birthMonth < currentMonth);
    age += ((birthMonth == currentMonth) && (currentDay >= birthDay));
    return(age);
}

export default function Profile() {
    // Name, birthdate, phone, email, sex, age, emergency contact
    const [name, setName] = useState("--");
    const [birthdate, setBirthdate] = useState("--");
    const [phone, setPhone] = useState("--");
    const [email, setEmail] = useState("--");
    const [sex, setSex] = useState("--");
    const [age, setAge] = useState(0);
    const [emergency, setEmergency] = useState("--");

    get(ref(db, "/patients/" + getUID() + "/Details")).then((snapshot) => {
        if (snapshot.exists()) {
            console.log(snapshot.val());
            const details = snapshot.val();
            setName(details.Name);
            setBirthdate(details.Birthdate);
            setPhone(details.Phone);
            setEmail(details.Email);
            setSex(details.Sex);
            setAge(getAge(details.Birthdate));
            setEmergency(details.Emergency);
        } else {
            console.error("NO DATA");
        }
    }).catch((error) => {
        console.error(error);
    });

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
                            <p className="detail">{name}</p>
                            <p className="item">Birthday</p>
                            <p className="detail">{birthdate}</p>
                            <p className="item">Phone</p>
                            <p className="detail">{phone}</p>
                            <p className="item">Email</p>
                            <p className="detail">{email}</p>
                            <p></p>
                        </div>
                        <div class="information2">
                            <p></p>
                            <p className="item">Sex</p>
                            <p className="detail">{sex}</p>
                            <p className="item">Age</p>
                            <p className="detail">{age}</p>
                            <p className="item">Emergency contact</p>
                            <p className="detail">{emergency}</p>
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