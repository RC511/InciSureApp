import {ArduinoIoTCloud} from 'arduino-iot-js';

export default async function Arduino_iot (){
  try{
      const client = await ArduinoIoTCloud.connect({
        clientId: '9U9MV431aYgo9BprXWbDJ30Lajr6ZBIr',
        clientSecret: 'QU8knvPfsZND19wNNyHZeoMlOJQGyQCfUiVPVQr3x7lHDKbNNhLpmbdWHifOM20K',
        onDisconnect: (message) => console.error(message),
      });
    
      console.log('connected',client);

      // Send a value to a thing property
      // const value = 25.0;
      // client.sendProperty('63900634-58d1-4bdb-8dcf-c403eb40d59a', 'Temp_Thermistor', value);
    
      // Listen to a thing property's changes
      client.onPropertyValue('63900634-58d1-4bdb-8dcf-c403eb40d59a', 'Temp_Thermistor', (value) => console.log(value)
    );
      console.log('')
    
    } catch(error) {
      console.error('Error:', error)
    }
  }
  
    