const express = require('express');
const router = express.Router();
const { getAllStartups, searchStartup } = require('../controllers/startup')

router.get('/allStartups', getAllStartups);
router.get('/search', searchStartup);

module.exports = router;
