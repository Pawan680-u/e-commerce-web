const express = require('express');
const app = express();
const cors = require('cors');

// Import controllers
const { buyProduct } = require('./controllers/buyProduct');

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to Ecommerce BE');
});

// Product route
app.post('/buyProduct/:id/:userId', buyProduct);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: 'Something went wrong!',
        error: err.message
    });
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
