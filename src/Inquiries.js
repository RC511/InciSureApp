import React, {useEffect} from "react";
import { Divider, useMediaQuery } from "@mui/material";
import FaqContent from "./FaqContent";

import NavBarItem from "./NavBarItem.js";
import './NavBar.css';
import Calendar from "./utils/main_calendar";
import { generateDate } from "./utils/calendar";
import {BsPersonCircle} from "react-icons/bs";
import "./utils/main_calendar.css";
import "./Inquiries.css";
import Iot_client from "./iot-client";
import Arduino_iot from "./Arduino_iot";



export default function Inquiries () {
  // const days = ["S", "M", "T", "W", "T", "F", "S"];

  const isSmallScreen = useMediaQuery('(max-width: 1200px)');
  
  useEffect (()=>{
    Arduino_iot()
    // Iot_client();
  }, []);

  return (
          
    <div className="Inquiries-body" >
      <div class = "flexbox-container"> 
      {NavBarItem(3)} 
      </div>
      
      
      <div className="content-container">
        
        <div className="content-left">
          <FaqContent/>
        </div>
        {!isSmallScreen && <Divider orientation ="vertical" variant= "middle" flexItem></Divider> }
    
        <div className="content-right">
          <Calendar/>
        </div>
        
      </div>
      
      

        
      {/* <React.Fragment>
        
      <Box sx={{ flexGrow: 1 }}>
          <Grid container direction= 'row'>
            <Grid item xs = {12}> </Grid>
            <Grid item container spacing={4}> 
              <Grid item xs = {1}/>
              <Grid item xs = {10} sm = {10} md = {6} xl={7}>
                
                
               
                
              </Grid>
              
              <Grid item xs = {12} sm = {12} md = {4} xl = {3} >
                <Calendar/>
                  
              </Grid>
              <Grid item xs = {1} />
            </Grid>
          </Grid>
          </Box>
          <Divider orientation = 'vertical'flexItem/>
      
    </React.Fragment> */}
    </div>
  
  
  )
}
