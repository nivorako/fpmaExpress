const express = require('express');
const mainController = require('./controllers/mainController');

router.get('/', mainController.homePage);
 

module.exports = router