const College = require('../models/collegeModel');  
const Student = require('../models/studentModel');  
//const populate=require('populate');
async function create_college(req, res) {
    try {
       
        const { name, location } = req.body;
    
      
        const newCollege = await College.create({
          name,
          location
        });
    
       
        res.status(201).json({ message: 'College created successfully', college: newCollege });
      }catch (error) {
    
   return  res.status(500).json({ error: error.message });
  }
}
//////////////////////
async function populatee(req, res) {
    try {
        const { studentid } = req.body;
    
        const found = await Student.findById(studentid);
        if (!found) {
            return res.status(400).json("Invalid student id");
        }

       
        const student = await Student.findById(studentid).populate('college');
    
        if (!student) {
            return res.status(404).json({ error: 'Student not found' });
        }
        
        return res.status(200).json({ message: 'Student populated successfully', student });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

module.exports ={
     create_college,
     populatee
    };
