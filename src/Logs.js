import NavBarItem from "./NavBarItem";
import './Logs.css';
// import { Helmet } from 'react-helmet';
// import tempPlot from './assets/tempPlot.png';
// import impPlot from './assets/impPlot.png';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useEffect, useState } from "react";
import { tempData } from "./utils/tempData";
import { impData } from "./utils/impData";
// import LineChart from "./utils/LineChart";
import TempChart from "./utils/TempChart";
import ImpChart from "./utils/ImpChart";
import {
  getFirestore , collection, getDocs, initializeFirestore
} from 'firebase/firestore'
import {db} from "./firebase.js";
import { onChildAdded, ref, get, Database, onValue } from "firebase/database";
// import { getAuth } from "firebase/auth";

Chart.register(CategoryScale);


export default function Logs() {
    // init services
    // const db = initializeFirestore(app, {useFetchStreams: false})  
    // // collection ref
    // const colRef  = collection(db,"dummy_data")

    // const [dummy_data, setData] = useState([]);

//     useEffect(() => {
//         const fetchData = async() => {
//             try {
//                 const snapshot = await getDocs(colRef);
//                 const dataFromFirestore = snapshot.docs.map((doc) => doc.data());
//                 setData(dataFromFirestore);
//                 // Log the data to the console
//                 console.log('Data from Firestore:', dataFromFirestore);
//             } catch(error) {
//                 console.error('Error getting data:', error)
//             }
//     };

//     fetchData();
// }, []);

    // useEffect(() => {
    //     const commentsRef = ref(db, 'tunky/wunky/' + 'TempID');
    //     onChildAdded(commentsRef, (data) => {
    //         addCommentElement(postElement, data.key, data.val())
    //     })
    //     });
    
    // const [, setData] = useState(null);
    // useEffect(() => {
    //     const fetchData = async () => {
    //         // let ref = Database.database("https://bg4103-trial-default-rtdb.asia-southeast1.firebasedatabase.app")
    //         const commentsRef = ref(db, 'tunky/wunky');
      
    //         try {
    //           const snapshot = await get(commentsRef);
    //           if (snapshot.exists()) {
    //             setData(snapshot.val());
    //             const data1 = snapshot.val()
    //             console.log('Data from Firebase:', data1);
    //             setData(data1);
    //           } else {
    //             setData(null);
    //           }
    //         } catch (error) {
    //           console.error('Error reading data:', error);
    //         }
    //       };
      
    //     fetchData();
    //     }, []);
    const [tempData, setTemp] = useState([])
    
    // useEffect(() => {
      
    // })

    onValue(ref(db,'/tunky/wunky'), snapshot => {
        const data = snapshot.val();
        if(data)
            console.log(data);
        else
            console.log("NONE");
    })
    
    
    get(ref(db, "/patients/uzC7yC9cJQWeqVb0hKf3rJ19KRW2/Data")).then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
        } else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
      });
    
    const chartData1 = {
        labels: tempData.map((data) => data.year), 
        datasets: [
          {
            label: "Users Gained ",
            data: tempData.map((data) => data.userGain),
            borderColor: "#B69DF8",
            borderWidth: 2
          },
          {
            label: "Temp Top",
            data: [37.2,37.2,37.2,37.2,37.2],
            borderColor: "red",
            borderWidth: 1,
            borderDash: [10, 5],
            pointRadius: 0
          },
          {
            label: "Temp Bottom",
            data: [36.1,36.1,36.1,36.1,36.1],
            borderColor: "red",
            borderWidth: 1,
            borderDash: [10, 5],
            pointRadius: 0,
            fill: '-1',
            backgroundColor: "rgb(154,190,255,0.2)"
          }
        ]
    };
    // const [chartData1, setChartData1] = useState({
    //     labels: tempData.map((data) => data.year), 
    //     datasets: [
    //       {
    //         label: "Users Gained ",
    //         data: tempData.map((data) => data.userGain),
    //         borderColor: "#B69DF8",
    //         borderWidth: 2
    //       }
    //       {
    //         label: "Temp Baseline",
    //         data: [0,300,500,1000],
            
    //       }
    //     ]
    // });
    const [chartData2, setChartData2] = useState({
        labels: impData.map((data) => data.year), 
        datasets: [
          {
            label: "Users Gained ",
            data: impData.map((data) => data.userLost),
            borderColor: "#EFB8C8",
            borderWidth: 2,
          }
        ]
    });
    
    return(
        <div class="back">
            <div class="navBar">
                {NavBarItem(2)}
            </div>
            <main class="containerLogs">
                <main class="containerTemp">
                    <div class="Plot">
                        <TempChart chartData={chartData1} />
                    </div>
                    <div class="Data">
                        36.5°C
                    </div>
                </main>
                <main class="containerImp">
                    <div class="Plot">
                        <ImpChart chartData={chartData2} />
                    </div>
                    <div class="Data">
                        4MΩ
                    </div>
                </main>
            </main>
        </div>
    )
};