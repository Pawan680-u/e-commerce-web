// routes/userRoutes.js
const express = require('express');
const router = express.Router();

// placeholder routes - expand with controllers/auth logic
router.post('/login', (req, res) => {
  res.json({ message: 'login route' });
});

router.post('/register', (req, res) => {
  res.json({ message: 'register route' });
});

module.exports = router;
