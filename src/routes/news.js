const express = require('express');
var router = express.Router();
const newController = require('../app/controllers/NewsController');

// newController.index

router.use('/chi-tiet-sp', newController.show_sp);
router.use('/chi-tiet-user', newController.show_user);
router.use('/', newController.index);

module.exports = router;
