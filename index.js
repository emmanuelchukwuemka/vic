// Import dependencies
const express = require('express');
const app = express();

// Parse JSON bodies
app.use(express.json());

// Serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Handle form submission
app.post('/sign-up', (req, res) => {
  // Call the sign-up route
  app.post('/sign-up', async (req, res) => {
    // ...
  });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});