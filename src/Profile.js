import logo from './logo.svg';
import {Link} from 'react-router-dom';
import NavBarItem from './NavBarItem';

function Profile() {
    return (
        <div className="App">
            <br></br>
            <div class="navBar">
                {NavBarItem(4)}
            </div>
            <header>
                <Link to='/'>Back home</Link>
            </header>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    About us.
                </p>
            </header>
        </div>
    );
}

export default Profile;