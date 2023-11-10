import NavBarItem from "./NavBarItem";
import './Logs.css';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useEffect, useState } from "react";
import {PiWarningFill} from "react-icons/pi"
import TempChart from "./utils/TempChart";
import ImpChart from "./utils/ImpChart";
import {db} from "./firebase.js";
import { onChildAdded, ref, get, Database, onValue, query, off, limitToLast } from "firebase/database";
import { getUID } from "./TokenHandler";

Chart.register(CategoryScale);

let export1 = 3;

export default function Logs() {
   
    const [tempData, setTempData] = useState([])
    const [temperature, setTemperature] = useState("32.3°C")
    const [impedance, setImpedance] = useState("")
    const [chartData1, setChartData1] = useState({
      labels : [],
      datasets: [
        {
          label: "Temperature",
          data: [],
          borderColor: "#EFB8C8",
          borderWidth: 2,
        }
      ]
  });

    const [chartData2, setChartData2] = useState({
      labels: [], 
      datasets: [
        {
          label: "Impedance",
          data: [],
          borderColor: "#EFB8C8",
          borderWidth: 2,
        }
      ]
  });

    useEffect(() => {
      const dataRef = query(ref(db, "/patients/uzC7yC9cJQWeqVb0hKf3rJ19KRW2/Data"),limitToLast(10));

      const mapData = (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const newData = Object.values(data);
          const length = newData.length;
          setTemperature(newData[length-1].temp + "°C")
          setTempData(newData);
          setImpedance(Number.parseFloat(newData[length-1].imp/1000).toFixed(2)+ "kΩ")

          const updatedChartData1 = {
            labels: newData.map((entry)=> entry.time),
            datasets: [
              {
                label: "Temperature",
                data: newData.map((entry) => entry.temp),
                borderColor: "#B69DF8",
                borderWidth: 2
              },
              {
                label: "Temp Top",
                data: Array(newData.length).fill(36),
                borderColor: "red",
                borderWidth: 1,
                borderDash: [10, 5],
                pointRadius: 0
              },
              {
                label: "Temp Bottom",
                data: Array(newData.length).fill(33),
                borderColor: "red",
                borderWidth: 1,
                borderDash: [10, 5],
                pointRadius: 0,
                fill: '-1',
                backgroundColor: "rgb(154,190,255,0.2)"
              }
            ]
          
          };
          setChartData1(updatedChartData1)

          const updatedChartData2 = {
            labels: newData.map((entry)=> entry.time/1000),
            datasets: [
              {
                label: "Impedance",
                data: newData.map((entry) => entry.imp/1000),
                borderColor: "#B69DF8",
                borderWidth: 2
              },
              
            ],
          
          };
          setChartData2(updatedChartData2)
          
        }
     };

     onValue(dataRef,mapData);
      return () => {
        // Unsubscribe from the listener when the component unmounts
        off(dataRef, 'value', mapData);
          };
    }, [])

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

  
    
  const style_warn = { color: "red" };
    return(
        <div className = "topContainer" id= {theme}>
          <div className="back">
              <div class="navBar">
                  {NavBarItem(2)}
              </div>
              <main class="containerLogs">
                  <main class="containerValue">
                     
                    <div class="Plot">
                        <TempChart chartData={chartData1} />
                    </div>

                    <div className="boxValue">
                    {theme === 'sick' ? (
                      <div className = "box-warning border-2 px-2 border-red-600 rounded-2xl shadow-md shadow-red-200"> 
                        
                        <span className='inline-flex items-center text-m'>
                        <PiWarningFill size={60} className='mr-2' style = {style_warn} />
                        Current measurement deviates from normal state
                        </span>
                        
                      </div>
                      ): null}
                      <div class="Data">
                          {temperature}
                      </div>

                    </div>
                      
                  </main>
                  <main class="containerValue">
                      <div class="Plot">
                          <ImpChart chartData={chartData2} />
                      </div>
                      <div class="Data">
                          {impedance}
                      </div>
                  </main>
              </main>
          </div>
        </div>
    )
};
