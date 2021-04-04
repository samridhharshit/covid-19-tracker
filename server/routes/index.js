const express = require('express');
const router = express.Router();

const userRoutes = require('./api')

router.use('/api', userRoutes)

module.exports = router