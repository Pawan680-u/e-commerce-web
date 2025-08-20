const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

let cartItems = [];

// API to add product to cart
app.post('/api/cart', (req, res) => {
    const { name, price } = req.body;
    cartItems.push({ name, price });
    res.json({ message: 'Added to cart', cartCount: cartItems.length, cartItems });
});

// API to get cart
app.get('/api/cart', (req, res) => {
    res.json(cartItems);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
