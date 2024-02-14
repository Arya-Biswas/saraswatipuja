 
const mongoose = require('mongoose');

const marksSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student'
  },
  subject: {
    type:String,
    required:true
  },  
  marks: 
  {
    type:Number,
    required:true
  } 
});

const Marks = mongoose.model('Marks', marksSchema);

module.exports = Marks;
