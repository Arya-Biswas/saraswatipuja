const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');
 
 
router.post('/create_new_student',studentController.create_new_student);

 
 
module.exports = router;

 