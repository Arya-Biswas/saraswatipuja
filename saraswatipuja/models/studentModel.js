
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phoneno: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  college: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'College'  
  }
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
