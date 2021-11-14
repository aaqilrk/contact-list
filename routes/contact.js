const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contact_controller');

router.post('/create', contactController.create);
router.get('/delete', contactController.delete);

module.exports = router;