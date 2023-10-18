import NavBarItem from "./NavBarItem";
import './Logs.css';
import { Helmet } from 'react-helmet';
import tempPlot from './assets/tempPlot.png';
import impPlot from './assets/impPlot.png';

export default function Logs() {
    return(
        <div class="back">
            <Helmet>
                <link rel="stylesheet" href="https://pyscript.net/latest/pyscript.css" />
                <script defer src="https://pyscript.net/latest/pyscript.js"></script>
            </Helmet>
            <br></br>
            <div class="navBar">
                {NavBarItem(2)}
            </div>
            <main class="containerLogs">
                <main class="containerData">
                    <div class="tempData">
                        36.5°
                    </div>
                    <div class="impData">
                        4MΩ
                    </div>
                </main>
                <main class="containerPlot">
                    <div class="tempPlot">
                        <img src={tempPlot}/>
                    </div>
                    <div class="tempPlot">
                        <img src={impPlot}/>
                    </div>
                </main>
            </main>
            <py-script src='./PlotTemp.py'>
                print("hey")
                {/* python PlotTemp.py
                python PlotImp.py */}
            </py-script>
        </div>
    )
}