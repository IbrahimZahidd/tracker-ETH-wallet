const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();

router.get('/', async (req, res) => {
  const address = req.query.address;
  const apiKey = process.env.ETHERSCAN_API_KEY; // Sử dụng biến môi trường!
  if (!address) return res.status(400).json({error: 'Missing address'});
  const url = `https://api.etherscan.io/api?module=account&action=balance&address=${address}&tag=latest&apikey=${apiKey}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.status === '1') {
      const balance = data.result / Math.pow(10, 18);
      res.json({ balance });
    } else {
      res.status(500).json({ error: data.message });
    }
  } catch (err) {
    res.status(500).json({ error: 'Fetch error' });
  }
});

module.exports = router;
