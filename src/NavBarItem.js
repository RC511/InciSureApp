import './NavBarItem.css';
import dash from './assets/dash.png';
import logs from './assets/logs.png';
import inquiries from './assets/inquiries.png';
import profile from './assets/profile.png';
import {Link} from 'react-router-dom';

export default function NavBarItem(type) {
    if (!type) type = 1;
    const name1 = "Dashboard";
    const name2 = "Medical Logs";
    const name3 = "Inquiries";
    const name4 = "Profile";
    return(
        <div>
            <div class="top">
                a
            </div>
            <div class="bottom">
                <span class="bar">
                    <Link to="/" class={(type == 1) ? "selectedItem" : "unselectedItem"}>
                        <img class="pages" src={dash} width="20" height="20" />
                        <span class="pages">{name1}</span>
                    </Link>
                    <Link to="/logs" class={(type == 2) ? "selectedItem" : "unselectedItem"}>
                        <img class="pages" src={logs} width="20" height="20"  />
                        <span class="pages">{name2}</span>
                    </Link>
                    <Link to="/inquiries" class={(type == 3) ? "selectedItem" : "unselectedItem"}>
                        <img class="pages" src={inquiries} width="20" height="20"  />
                        <span class="pages">{name3}</span>
                    </Link>
                    <Link to="/profile" class={(type == 4) ? "selectedItem" : "unselectedItem"}>
                        <img class="pages" src={profile} width="24" height="24"  />
                        <span class="pages">{name4}</span>
                    </Link>
                </span>
            </div>
        </div>
    );
}