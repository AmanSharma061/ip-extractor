const express = require('express');
const app = express();

// Define a route to get the IP address
app.get('/ip', (req, res) => {
  // Extract the IP address from the request headers
  let ipAddress = req.ip.replace('::ffff:', ''); // Remove IPv6 prefix
  if (ipAddress === '::1') {
    // If IP address is localhost, replace with 127.0.0.1
    ipAddress = '127.0.0.1';
  }
  
  // Send the IP address as the response
  res.send({ip:ipAddress});
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
