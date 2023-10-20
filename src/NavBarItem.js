import './NavBarItem.css';
import dash from './assets/dash.png';
import logs from './assets/logs.png';
import inquiries from './assets/inquiries.png';
import profile from './assets/profile.png';
import {Link} from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function NavBarItem(type) {
    if (!type) type = 1;
    const name1 = "Dashboard";
    const name2 = "Medical Logs";
    const name3 = "Inquiries";
    const name4 = "Profile";
    const[ sticky, setSticky ] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY>500)
        }
        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    })
    return(
        // <div class = "flex justify-between">
        //     {/* <div class= "flex">
                
        //     </div> */}
            
        // </div>
        
        <div className= {`${sticky ? 'sticky': ""} fixed top-5 flex border-2 border-blue-900 rounded-lg h-10 px-5 justify-around items-center w-4/5 `}>
            <div className="flex justify-center items-center">
                <Link to="/" className= {`
                ${(type === 1) ? "selectedItem" : "unselectedItem"} flex justify-center items-center`}  >
                    <img className = "mr-2" src={dash} />
                    <div className='navItem'> {name1}  </div>                  
                </Link>
            </div>
            <div className="flex justify-center items-center">
                <Link to="/logs" className={` ${(type === 2) ? "selectedItem" : "unselectedItem"} flex justify-center items-center`}>
                    <img className = "mr-2" src={logs}   />
                    <div className='navItem'>{name2}</div>
                </Link>
            </div>
            <div className="flex justify-center items-center">
                <Link to="/inquiries" className= {`${(type === 3) ? "selectedItem" : "unselectedItem"} flex justify-center items-center`}>
                    <img className = "mr-2" src={inquiries} /> 
                    <div className='navItem'>{name3} </div>
                </Link>
            </div>
            <div className="flex justify-center items-center">
                <Link to="/profile" className={`${(type === 4) ? "selectedItem" : "unselectedItem"} flex justify-center items-center`}>
                    <img className = "mr-2" src={profile}  />
                    <div className='navItem'>{name4}</div>
                </Link>
            </div>
        </div>
        
    );
}