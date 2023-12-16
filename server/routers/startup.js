const express = require('express');
const router = express.Router();
const { getAllStartups, addStartup, searchStartup } = require('../controllers/startup')

router.get('/allStartups', getAllStartups);
router.post('/addStartup', addStartup);
router.get('/search', searchStartup);

module.exports = router;
