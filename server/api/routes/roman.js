const express = require('express');
const router = express.Router();
const controller = require('../../controller/romanController');

// Route for conversion integer into roman
router.post('/', controller.outputRoman);

module.exports = router;