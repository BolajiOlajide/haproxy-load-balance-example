const express = require('express');


const app = express();

app.get('/api', (req, res) => res.json({
  message: 'APi root route is online!',
  IP: req.ip
}));

app.get('/api/version', (req, res) => res.json({
  version: '1.0.0'
}));

app.listen('8082', () => {
  console.log('Server is now running!');
});
