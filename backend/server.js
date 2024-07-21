const express = require('express');
const connectDB = require('./config/db');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');
require('dotenv').config();
const app = express();
app.use(cors());
app.use(express.json());
connectDB();
app.use(express.json({ extended: false }));
app.use('/api/users', userRoutes);
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/complaints', require('./routes/complaint'));
// Define the route for registration
app.post('/api/users/register', (req, res) => {
    const { name, phone, email, password } = req.body;
    
    // Handle registration logic here (e.g., save to database)
    console.log('Registration data:', { name, phone, email, password });
    res.json({ success: true });
});

const PORT = process.env.PORT || 5173;
app.listen(5173, () => console.log(`Server started on port ${PORT}`));
