const express = require('express');
const router = express.Router();
const collegeController = require('../controllers/collegeController');
 
 
router.post('/create_college',collegeController.create_college);
router.post('/populate',collegeController.populatee);
 
 
module.exports = router;

 