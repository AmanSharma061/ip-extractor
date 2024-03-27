const express = require('express');
const app = express();


app.get('/ip', (req, res) => {
 
  const ipAddress = req.ip.replace('::ffff:', ''); 
  
  res.send({ip:ipAddress});
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
