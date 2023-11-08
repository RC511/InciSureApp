import maleHappy from './assets/maleHappy.png';
import maleSad from './assets/maleSad.png';
import femHappy from './assets/femHappy.png';
import femSad from './assets/femSad.png';
import './Home.css';
import './NavBar.css';
import NavBarItem from './NavBarItem.js';
import { BsFillCalendarEventFill } from "react-icons/bs";
import {PiWarningFill} from "react-icons/pi"
import {MdLogout} from "react-icons/md";
import {React, useState, createContext, useEffect} from 'react';
import ReactSwitch from 'react-switch';
import { db } from './firebase';
import { getUID } from './TokenHandler.js';
import { ref, get, onValue, query, off, limitToLast } from 'firebase/database';



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

function getTime() {
    const date = new Date();
    const hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    if (minutes < 10)
        minutes = "0" + minutes;
    if (seconds < 10)
        seconds = "0" + seconds;
    const showTime = hours
        + ':' + minutes 
        + ":" + seconds;
    return (showTime);
}

function getDaysFromNow(startString) {
    const currentDate = new Date();
    const startDay = parseInt(startString.substring(0, 2));
    const startMonth = parseInt(startString.substring(3, 5));
    const startYear = parseInt(startString.substring(6, 10));
    const startDate = new Date(startYear, startMonth - 1, startDay)
    var difference = currentDate.getTime() - startDate.getTime();
    difference /= (1000 * 3600 * 24);
    return(Math.floor(difference).toString());
}

function logOut() {
    localStorage.removeItem("user");
    sessionStorage.removeItem("user");
    window.location.reload(true);
}

// maybe do background-image

export const ThemeContext = createContext(null);

export default function Home() {
    const [patientHappy, setHappy] = useState(maleHappy);
    const [patientSad, setSad] = useState(maleSad);
    const [lastUpdatedTime, setUpdateTime] = useState(getTime());
    const [daysUsingBandage, setDaysUsingBdge] = useState("--");

    // const [trigerred, setTriggered] = useState(false);

    // const handleTrigger = () =>v{
    //     setTriggered(!trigerred);
    // }
    const [theme, setTheme] = useState("healthy");
    const [sex, setSex] = useState("M");
    

    const toggleTheme = () => {
        setTheme((curr) => (curr === "healthy" ? "sick" : "healthy"))
    }

    const style_warn = { color: "red" };
    // const [sex, setSex] = useState("M");

    
    get(ref(db, "/patients/"+getUID()+"/Details/Sex")).then((snapshot) => {
        if (snapshot.exists()) {
            const sex = snapshot.val();
            if (sex == "M") {
                setHappy(maleHappy);
                setSad(maleSad);
            }
            else if (sex == "F") {
                setHappy(femHappy);
                setSad(femSad);
            }
        } else {
            console.error("NO SEX");
        }
    }).catch((error) => {
        console.error(error);
    });

   
    useEffect(() => {
        if (sex === "M") {
            setHappy(maleHappy);
            setSad(maleSad);
        }
        else if (sex === "F") {
            setHappy(femHappy);
            setSad(femSad);
        }
    }, [sex])
    
    get(ref(db, "/patients/"+getUID()+"/Details/StartDate")).then((snapshot) => {
        if (snapshot.exists()) {
            setDaysUsingBdge(getDaysFromNow(snapshot.val()));
        } else {
            console.error("NO START DATE");
        }
    }).catch((error) => {
        console.error(error);
    });

    // const [trigerred, setTriggered] = useState(false);

    // const handleTrigger = () =>v{
    //     setTriggered(!trigerred);
    // }
    

    get(ref(db, "/patients/"+getUID()+"/Warning")).then((snapshot) => {
        if (snapshot.exists()) {
            console.log(snapshot.val())
            setUpdateTime(getTime());
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
    //         setUpdateTime(getTime());
    //         if(snapshot.val())
    //             setTheme("sick");
    //         else
    //             setTheme("healthy");
    //     } else {
    //         console.error("NO HEALTH DATA");
    //     }
    // });

    
    const [temperature, setTemperature] = useState("32.3°C")
    useEffect(() => {
        const dataRef = query(ref(db, "/patients/uzC7yC9cJQWeqVb0hKf3rJ19KRW2/Data"),limitToLast(1));
        const mapData = (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const newData = Object.values(data);
                setTemperature(newData[0].temp + "°C")
            }
        };
        onValue(dataRef,mapData);
        return () => {
        // Unsubscribe from the listener when the component unmounts
        off(dataRef, 'value', mapData);
            };
    }, [])



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
                            <div class='warning'>
                                <span className='inline-flex items-center text-2xl'>
                                    {theme === "sick" && <PiWarningFill size={50} className='mr-2' style = {style_warn} />}
                                
                                    {theme === "healthy" ? "Your wound is doing"  : "Your wound requires immediate"} 
                                </span>
                            </div>
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
                                <p class="lUpdate">{"Last updated "+ lastUpdatedTime}</p>
                            </div>
                                
                        </div>

                    </div>
                    <div class="lower-container">
                        <div className='lower-left'>
                            <div className="inner-lower-left flex rounded-3xl bg-box-blue shadow-2xl">
                                <p className="tempName">Temperature</p>
                                <p className="tempValue">{temperature}</p>
                            </div>
                        </div>
                        
                        <div className ="lower-mid">
                            <div className = "lower-mid-content">
                                <img src={theme === "healthy" ? patientHappy : patientSad} className="img-responsive" alt="Patient Happy"/>
                            </div>
                        </div>
                        <div className='lower-right '>
                            <div className="inner-lower-right flex rounded-3xl bg-box-blue shadow-2xl">
                                <p className="dayCount">{daysUsingBandage}</p>
                                <p className="dayText">Days</p>
                            </div>
                            <div className="logOut">
                                <button onClick={() => {logOut()}} className="logOutBtn">
                                    <MdLogout size={30}/>  
                                    <span>Log Out</span>
                                </button>
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