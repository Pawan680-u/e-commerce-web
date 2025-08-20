// routes/orderRoutes.js
const express = require('express');
const router = express.Router();

// placeholder
router.post('/', (req, res) => {
  res.json({ message: 'create order' });
});

module.exports = router;
