import React, {useEffect} from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Divider } from "@mui/material";
import FaqContent from "./FaqContent";
import NavBarItem from "./NavBarItem.js";
import './NavBar.css';
import Calendar from "./main_calendar";
import { generateDate } from "./utils/calendar";
import {BsPersonCircle} from "react-icons/bs";
import "./main_calendar.css";
import "./Inquiries.css";

/* hi
hi again */

export default function Inquiries () {
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  return (
    <div class="backgr" >
      <br></br>
      <div class="navBar">{NavBarItem(3)}</div>
      <React.Fragment>
      <Box sx={{ flexGrow: 1 }}>
          <Grid container direction= 'row'>
            <Grid item xs = {12}> </Grid>
            <Grid item container spacing={4}> 
              <Grid item xs = {1}/>
              <Grid item xs = {10} sm = {10} md = {6} xl={7}>
                <FaqContent/>
                
               
                
              </Grid>
              
              <Grid item xs = {12} sm = {12} md = {4} xl = {3} >
                <Calendar/>
                  
              </Grid>
              <Grid item xs = {1} />
            </Grid>
          </Grid>
          </Box>
          <Divider orientation = 'vertical'flexItem/>
      
    </React.Fragment>
    </div>
    
  )
}

/*
<div className="w-96 h-96">
                  <div className="w-full h-96 grid grid-cols-7">
                    {days.map((day,index)=>{
                      return (<h1 key={index} > {day}</h1>);
                    })}
                  </div>
                  <div className="w-full h-96 grid grid-cols-7">
                    {generateDate().map(({date, currentMonth,today},index)=>{
                      return (
                      <div key = {index}>
                        <h1></h1>
                      </div>
                      );
                    })}
                            
                  </div>
                </div>
*/