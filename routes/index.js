const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller');

router.get('/', homeController.home);

// for other routers
// router.use('/routerName', require('./routerFile'));

router.use('/contact', require('./contact'));

module.exports = router;