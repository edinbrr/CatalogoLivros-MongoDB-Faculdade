// routes/users.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Usuários da API.');
});

module.exports = router;