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
import React from 'react';

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

export default function Home() {
    return (
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
                        <h2 className='upper-heading2'>Your wound is doing <span className='condition-status'>WELL</span>!</h2>
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
                            <img src={maleHappy} />
                        </div>
                    </div>
                    <div className='lower-right'>
                        <div className="inner-lower-right flex rounded-3xl bg-white shadow-2xl items-center justify-items-center">
                            <p className="dayCount">16</p>
                                <p className="dayText">Days</p>
                        </div>

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
    );
}