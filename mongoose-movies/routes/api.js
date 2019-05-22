var express = require('express');
var router = express.Router();
var apiControls = require('../controllers/api')

router.get('/', apiControls.apiIndex);

module.exports = router; 