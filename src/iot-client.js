// var rp = require('request-promise');
import axios from 'axios';
var IotApi = require('@arduino/arduino-iot-client');

export default async function Iot_client() {
    async function getToken() {
        var options = {
            method: 'POST',
            url: 'https://api2.arduino.cc/iot/v1/clients/token',
            headers: { 'content-type': 'application x-www-form-urlencoded' },
            json: true,
            form: {
                grant_type: 'client_credentials',
                client_id: '9U9MV431aYgo9BprXWbDJ30Lajr6ZBIr',
                client_secret: 'QU8knvPfsZND19wNNyHZeoMlOJQGyQCfUiVPVQr3x7lHDKbNNhLpmbdWHifOM20K',
                audience: 'https://api2.arduino.cc/iot'
            }
        };
    
        try {
            const response = await axios.get(options);
            return response['access_token'];
        }
        catch (error) {
            // console.error("Failed getting an access token: " + error);
            if (error.response) {
                console.error('Request failed with status code ' + error.response.status);
                console.error(error.response.data);
            } else if (error.request) {
                console.error('The request was made but no response was received');
                console.error(error.request);
            } else {
                console.error('Error setting up the request: ' + error.message);
            }
            throw error;
        }
    }

    try {
        var client = IotApi.ApiClient.instance;
        var oauth2 = client.authentications[oauth2];
        oauth2.access_token = await getToken();

        var api = new IotApi.DevicesV2Api(client);

        const devices = await api.DevicesV2List();
        console.log(devices);
        
    } catch (error) {
        console.error("API request error: " + error);
    }
    
    // async function run() {
    //     var client = IotApi.ApiClient.instance;
    //     // Configure OAuth2 access token for authorization: oauth2
    //     var oauth2 = client.authentications['oauth2'];
    //     oauth2.accessToken = await getToken();
        
    //     var api = new IotApi.DevicesV2Api(client)    
    //     api.devicesV2List().then(devices => {
    //         console.log(devices);
    //     }, error => {
    //         console.log(error)
    //     });
    // }
    // return (
    //     run()
    // )
}


