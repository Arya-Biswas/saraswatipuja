const express = require('express');
const mongoose = require('mongoose');
const server = express();
server.use(express.json());
const cors = require('cors');
 

server.use(cors());
mongoose.connect("mongodb://localhost:27017/saraswatipuja");
 
const studentRoutes = require('./routes/studentRoutes');
const marksRoutes=require('./routes/marksRoutes');
const collegeRoutes=require('./routes/collegeRoutes');
 
 
 
server.use('/student',studentRoutes); //or server.use(middleware)
server.use('/marks',marksRoutes);
server.use('/college',collegeRoutes);
 

const port = 4444;
server.listen(port, function () {
  console.log(`Server running on port ${port}`);
});
