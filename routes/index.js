const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.json({ message: 'Welcome To Node app' })
});

router.use('/users', require('./user'))
module.exports = router;