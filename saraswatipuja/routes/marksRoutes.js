const express = require('express');
const router = express.Router();
const marksController = require('../controllers/marksController');
 
 
router.post('/create_marks',marksController.create_marks);
router.get('/getTopper',marksController.getTopper);
 
 
module.exports = router;

 