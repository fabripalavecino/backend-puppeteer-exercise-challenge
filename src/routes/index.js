const { Router } = require('express');
const router = Router();
const {getScrapp}  = require('../controllers/index');


router.get('/scrapp', getScrapp); 

module.exports = router;