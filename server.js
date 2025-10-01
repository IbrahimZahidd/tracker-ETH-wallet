const express = require('express');
const path = require('path');
const checkEthBalanceRoute = require('./api/check-eth-balance');
const app = express();

// API route
app.use('/api/check-eth-balance', checkEthBalanceRoute);

// Serve React frontend (if built)
app.use(express.static(path.join(__dirname, 'client', 'build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
