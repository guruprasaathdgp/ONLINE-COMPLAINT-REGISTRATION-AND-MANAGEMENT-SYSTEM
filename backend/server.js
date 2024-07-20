const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
require('dotenv').config();
const app = express();
connectDB();
app.use(express.json({ extended: false }));
app.use(cors());
app.use('/api/users', require('./routes/user'));
app.use('/api/complaints', require('./routes/complaint'));
app.post('http://localhost:5173/login', (req, res) => {
    // Handle login logic
    res.json({ success: true }); // Sample response
});

const PORT = process.env.PORT || 5173;
app.listen(5173, () => console.log(`Server started on port ${PORT}`));
