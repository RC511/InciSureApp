// server.js

const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());

// Define a route on your server that acts as a proxy to the Arduino API
app.get('/arduino-dashboard', async (req, res) => {
  try {
    const response = await axios.get('https://api2.arduino.cc/iot/v2/dashboard');
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch data from Arduino API' });
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
