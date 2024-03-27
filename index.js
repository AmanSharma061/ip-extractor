const express = require('express');
const app = express();

// Define a route to get the IP address
app.get('/ip', (req, res) => {
  // Extract the client's IP address
  let ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  
  // If the IP address contains multiple addresses (comma-separated), take the first one
  if (ipAddress.includes(',')) {
    ipAddress = ipAddress.split(',')[0];
  }
  
  // Trim any leading/trailing spaces
  ipAddress = ipAddress.trim();
  
  // Send the IP address as the response
  res.send(ipAddress);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
