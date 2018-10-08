const express = require('express');
const router = express.Router();
const controller = require('../../controller/integerController');

// Route to convert roman to normal number
router.post('/', controller.outputInteger);

module.exports = router;