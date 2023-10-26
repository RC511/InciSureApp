import {ArduinoIoTCloud} from 'arduino-iot-js';

export default async function Arduino_iot (){
      const client = await ArduinoIoTCloud.connect({
        clientId: '9U9MV431aYgo9BprXWbDJ30Lajr6ZBIr',
        clientSecret: 'QU8knvPfsZND19wNNyHZeoMlOJQGyQCfUiVPVQr3x7lHDKbNNhLpmbdWHifOM20K',
        onDisconnect: (message) => console.error(message),
      });
    
      console.log(client);

      // Send a value to a thing property
      const value = 'some value';
      client.sendProperty('YOUR_THING_ID', 'YOUR_VARIABLE_NAME', value);
    
      // Listen to a thing property's changes
      client.onPropertyValue('63900634-58d1-4bdb-8dcf-c403eb40d59a', 'Temp_Thermistor', (value) => console.log(value));
    }

    