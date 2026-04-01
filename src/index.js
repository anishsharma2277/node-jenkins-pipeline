const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// Routes
app.get('/', (req, res) => {
  res.send('🚀 Node App is running successfully!');
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

app.get('/version', (req, res) => {
  res.json({ version: "v4", message: "Updated deployment 🚀" });
});
// Start server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
