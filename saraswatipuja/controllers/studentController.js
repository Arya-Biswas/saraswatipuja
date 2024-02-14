const Student = require("../models/studentModel");
const studentValidationSchema = require("../validations/studentValidation");
const bcrypt = require('bcrypt');
 

async function create_new_student(req, res) {
    try {
         
        const { name, age, email, phoneno, password,college } = req.body;
    
        const hashedPassword = await bcrypt.hash(password, 10);

        const newStudent = await Student.create({
          name,
          age,
          email,
          phoneno,
          password:hashedPassword,
          college
      
        });
     
        res.status(201).json({ message: 'Student created successfully', student: newStudent });
      }  catch (error) {
    
   return res.status(500).json({ error: error.message });
  }
}

module.exports = {
  create_new_student
};
