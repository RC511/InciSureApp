import NavBarItem from "./NavBarItem";
import './Logs.css';
// import { ArduinoIoTCloud } from 'arduino-iot-js';
// import axios from 'axios';

export default function Logs() {
    var IotApi = require('@arduino/arduino-iot-client');
    // var rp = require('request-promise');
    // const axios = require("axios");
    // axios.defaults.withCredentials = true;

    async function getToken() {
        var options = {
            method: 'GET',
            // method: 'POST',
            // url: 'https://api2.arduino.cc/iot/v1/clients/token',
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            json: true,
            form: {
                grant_type: 'client_credentials',
                client_id: 'lkvt0TqlBkSEAH280NhuBRHfIXmBb3m2',
                client_secret: 'gNU66nTTfrTNoaRfnk9HYy1Q0cAfL0qxHjgH2alln4LNd5wlg72mwyAjXQQYJiD4',
                audience: 'https://api2.arduino.cc/iot'
            }
        };

        try {
            // const response = await rp(options);
            const response = await fetch('https://api2.arduino.cc/iot/v2/dashboard', options);
            return response['access_token'];
        }
        catch (error) {
            console.error("Failed getting an access token: " + error)
        }
    }

    async function run() {
        var client = IotApi.ApiClient.instance;
        // Configure OAuth2 access token for authorization: oauth2
        var oauth2 = client.authentications['oauth2'];
        oauth2.accessToken = await getToken();
        
        var api = new IotApi.DevicesV2Api(client)    
        api.devicesV2List().then(devices => {
            console.log(devices);
        }, error => {
            console.log(error)
        });
    }

    run();

    // console.log("MAMAMMIA")

    // (async () => {
    //     const client = await ArduinoIoTCloud.connect({
    //         clientId: 'lkvt0TqlBkSEAH280NhuBRHfIXmBb3m2',
    //         clientSecret: 'gNU66nTTfrTNoaRfnk9HYy1Q0cAfL0qxHjgH2alln4LNd5wlg72mwyAjXQQYJiD4',
    //         onDisconnect: (message) => console.error(message),
    //     });

    //     console.log(client);

    //     // // Send a value to a thing property
    //     // const value = 'some value';
    //     // client.sendProperty('YOUR_THING_ID', 'YOUR_VARIABLE_NAME', value);

    //     // // Listen to a thing property's changes
    //     // client.onPropertyValue('YOUR_THING_ID', 'ANOTHER_VARIABLE_NAME', (value) => console.log(value));
    // })();

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