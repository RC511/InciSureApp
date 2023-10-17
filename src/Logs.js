import NavBarItem from "./NavBarItem";
import './Logs.css';
import tempPlot from './assets/tempPlot.png';
import impPlot from './assets/impPlot.png';

export default function Logs() {
    return(
        <div class="back">
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
        </div>
    )
}