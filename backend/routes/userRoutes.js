const express = require('express');
const router = express.Router();
const { registerUser } = require('../controllers/userController');
const { register, login } = require('../controllers/userController');
router.post('/api/users/register', registerUser);
router.post('/register', register);
router.post('/login', login);
//router.post('/register', (req, res) => {
    // Handle registration logic here
    //res.json({ success: true });
//});
module.exports = router;
