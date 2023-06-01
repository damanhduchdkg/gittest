const express = require('express');
var router = express.Router();
const siteController = require('../app/controllers/SiteController');

// siteController.search
// siteController.index

router.use('/search', siteController.search);
router.post('/', siteController.index);
router.use('/', siteController.index);

module.exports = router;
