import calendar from './assets/today_24px.png';
import maleHappy from './assets/maleHappy.png';
import maleSad from './assets/maleSad.png';
import femHappy from './assets/femHappy.png';
import femSad from './assets/femSad.png';
import logOutSign from './assets/log-out-01.png';
import './Home.css';
import './NavBar.css';
import NavBarItem from './NavBarItem.js';
import { BsFillCalendarEventFill } from "react-icons/bs";
import {PiWarningFill} from "react-icons/pi"
import {MdLogout} from "react-icons/md";
import {RiEmotionHappyLine} from "react-icons/ri"
import {React, useState, createContext, useEffect} from 'react';
import ReactSwitch from 'react-switch';
import { db } from './firebase';
import { get, ref, onValue } from '@firebase/database';
import { getUID } from './TokenHandler.js';

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
    sessionStorage.removeItem("token");
    window.location.reload(true);
}

// maybe do background-image

export const ThemeContext = createContext(null);

export default function Home() {
    const [sex, setSex] = useState("M");

    get(ref(db, "/patients/"+getUID()+"/Details/Sex")).then((snapshot) => {
        if (snapshot.exists()) {
            console.log(snapshot.val())
            setSex(snapshot.val());
        } else {
            console.error("NO SEX");
        }
    }).catch((error) => {
        console.error(error);
    });

    const [patientHappy, setHappy] = useState(maleHappy);
    const [patientSad, setSad] = useState(maleSad);
    useEffect(() => {
        if (sex == "M") {
            setHappy(maleHappy);
            setSad(maleSad);
        }
        else if (sex == "F") {
            setHappy(femHappy);
            setSad(femSad);
        }
    }, [sex])

    // const [trigerred, setTriggered] = useState(false);

    // const handleTrigger = () =>v{
    //     setTriggered(!trigerred);
    // }
    const [theme, setTheme] = useState("healthy");

    get(ref(db, "/patients/"+getUID()+"/Warning")).then((snapshot) => {
        if (snapshot.exists()) {
            console.log(snapshot.val())
            if(snapshot.val())
                setTheme("sick");
            else
                setTheme("healthy");
        } else {
            console.error("NO HEALTH DATA");
        }
    }).catch((error) => {
        console.error(error);
    });

    // onValue(ref(db, "/patients/uzC7yC9cJQWeqVb0hKf3rJ19KRW2/Warning"), (snapshot) => {
    //     if (snapshot.exists()) {
    //         console.log(snapshot.val())
    //         if(snapshot.val())
    //             setTheme("sick");
    //         else
    //             setTheme("healthy");
    //     } else {
    //         console.error("NO HEALTH DATA");
    //     }
    // });

    const toggleTheme = () => {
        setTheme((curr) => (curr === "healthy" ? "sick" : "healthy"))
    }

    const style_warn = { color: "red" };

    return (
        <ThemeContext.Provider value = {{theme, toggleTheme}}>
        <div className='HomeHome' id = {theme}>
            <div className="HomePage">
                <div className='HomeContainer'>
                    <div className="navBar">
                        {NavBarItem(1)}
                    </div>
                    <div className="upper-container">
                        <div className='upper-left'>
                            
                        </div>
                        <div className="upper-mid">
                            <h1 className='font-bold text-3xl'>WELCOME, Patient</h1>
                            
                            <h2 className='upper-heading2'> 
                            <span className='inline-flex items-center text-2xl'>
                                {theme === "sick" && <PiWarningFill size={50} className='mr-2' style = {style_warn} />}
                            
                                {theme === "healthy" ? "Your wound is doing"  : "Your wound requires immediate"} 
                            </span>
                            <div className='cond-status-container items-center text-3xl font-extrabold'>
                                <p className='condition-status mx-2'> {theme === "healthy" ? "WELL!" : "ATTENTION!"}</p>
                                
                            </div>
                            </h2>
                            
                            
                        </div>
                        <div className='upper-right'>
                            <div className='flex px-2  justify-items-center'>
                                <BsFillCalendarEventFill size={20}/> 
                            </div>
                            <div>
                                <span> {getDate()}</span>
                                <p class="lUpdate">Last updated...</p>
                            </div>
                                
                        </div>

                    </div>
                    <div class="lower-container">
                        <div className='lower-left'>
                            <div className="inner-lower-left flex rounded-3xl bg-white shadow-2xl ">
                                <p className="tempName">Temperature</p>
                                <p className="tempValue">37.5°C</p>
                            </div>
                        </div>
                        
                        <div className ="lower-mid">
                            <div className = "lower-mid-content">
                                <img src={theme === "healthy" ? patientHappy : patientSad} className="img-responsive" alt="Male Happy"/>
                            </div>
                        </div>
                        <div className='lower-right '>
                            <div className="inner-lower-right flex rounded-3xl bg-white shadow-2xl">
                                <p className="dayCount">16</p>
                                <p className="dayText">Days</p>
                            </div>
                            <div className="logOut">
                                <button onClick={() => {logOut()}} className="logOutBtn">
                                    <MdLogout size={30}/>  
                                    <span>Log Out</span>
                                </button>
                            </div>
                            <div>
                                <label> {theme === "healthy"? "Healthy mode": "Sick mode"}</label>
                                <ReactSwitch onChange={toggleTheme} checked = {theme === "sick"}/>
                            </div>
                            
                        {/* <button onClick={handleTrigger}>
                            Trigger Design Change
                        </button> */}
                        </div>
                    </div>
                    
                        {/* 
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
                        </div> */}
                    

    
                </div>
                
            </div>
        </div>
        </ThemeContext.Provider>
    );
}