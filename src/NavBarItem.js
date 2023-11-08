import './NavBarItem.css';
import dash from './assets/dash.png';
import logs from './assets/logs.png';
import inquiries from './assets/inquiries.png';
import profile from './assets/profile.png';
import {Link, NavLink} from 'react-router-dom';
import { useState, useEffect } from 'react';
import {HiOutlineMenu} from "react-icons/hi";
import  {FaBars, FaTimes} from 'react-icons/fa';

export default function NavBarItem(type) {
    if (!type) type = 1;
    const name1 = "Dashboard";
    const name2 = "Medical Logs";
    const name3 = "Inquiries";
    const name4 = "Profile";

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const[ sticky, setSticky ] = useState(false);

    const [menuOpen, setMenuOpen] = useState(false);
    const handleMenuClick = () => {
        console.log('menu icon clicked')
        setMenuOpen(!menuOpen);
      };

    // useEffect(() => {
    //     const handleScroll = () => {
    //         setSticky(window.scrollY>500)
    //     }
    //     window.addEventListener('scroll', handleScroll)

    //     return () => window.removeEventListener('scroll', handleScroll)
    // })
    return(
        // <div class = "flex justify-between">
        //     {/* <div class= "flex">
                
        //     </div> */}
            
        // </div>
       <nav className='fixed top-5'>
       
        
        {/* <div className= {`${sticky ? 'sticky': ""} fixed top-5 flex border-2 border-blue-900 rounded-lg h-10 px-5 items-center w-4/5 bg-inherit`}> */}

            <div className = "menu-icon top-5" onClick= {handleMenuClick}>
                <FaBars size={30}/>
                {/* <span></span> */}
            </div>

            <div className={`${menuOpen ? "navItem-open" : "navItem"} hover:underline`}>
                <NavLink to="/" className= {`
                ${(type === 1) ? "selectedItem" : "unselectedItem"} flex justify-center items-center cursor-pointer`}  >
                   
                    <img className = {`${menuOpen ? "navImg-open" : "navImg"}  mr-2`} src={dash} />
                    <div className='navItem2'> {name1}  </div> 
                                   
                </NavLink>
            </div>

            <div className={`${menuOpen ? "navItem-open" : "navItem"} hover:underline`}>
                <NavLink to="/logs" className={` ${(type === 2) ? "selectedItem" : "unselectedItem"} flex justify-center items-center`}>
                    <img className = {`${menuOpen ? "navImg-open" : "navImg"}  mr-2`} src={logs}   />
                    <div className='navItem2'>{name2}</div>
                </NavLink>
            </div>

            <div className={`${menuOpen ? "navItem-open" : "navItem"} hover:underline`}>
                <Link to="/inquiries" className= {`${(type === 3) ? "selectedItem" : "unselectedItem"} flex justify-center items-center`}>
                    <img className ={`${menuOpen ? "navImg-open" : "navImg"}  mr-2`} src={inquiries} /> 
                    <div className='navItem2'>{name3} </div>
                </Link>
            </div>

            <div className={`${menuOpen ? "navItem-open" : "navItem"}  hover:underline`}>
                <Link to="/profile" className={`${(type === 4) ? "selectedItem" : "unselectedItem"} flex justify-center items-center`}>
                    <img className = {`${menuOpen ? "navImg-open" : "navImg"}  mr-2`} src={profile}  />
                    <div className='navItem2'>{name4}</div>
                </Link>
            </div>
        
        {/* <div className= {click ? 'nav-menu active' : 'nav-menu'}>
            <div className='nav-item'>
                <link to = "/" className='nav-links'> Home </link>
            </div>
            <div className='nav-item'>
                <link to = "/logs" className='nav-links'> Medical Logs </link>
            </div>
            <div className='nav-item'>
                <link to = "/inquiries" className='nav-links'> Inquiries </link>
            </div>
            <div className='nav-item'>
                <link to = "/profile" className='nav-links'> Profile</link>
            </div>
        </div> */}
            
            {/* <div className="flex justify-center items-center">
                <Link to="/" className= {`
                ${(type === 1) ? "selectedItem" : "unselectedItem"} flex justify-center items-center cursor-pointer`}  >
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
            </div> */}
            
        {/* </div> */}
        </nav>
        
    );
}