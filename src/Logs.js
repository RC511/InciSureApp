import NavBarItem from "./NavBarItem";
import './Logs.css';

export default function Logs() {
    return(
        <div class="back">
            <br></br>
            <div class="navBar">
                {NavBarItem(2)}
            </div>
            <div style={{marginTop: "48px", marginBottom: "1000px"}}>
                To be continued...
            </div>
        </div>
    )
}