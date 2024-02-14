const Marks = require('../models/marksModel');
const Student=require('../models/studentModel');
async function create_marks(req, res) {
  try {
    const { studentId, subject, marks } = req.body;

   
    const existingStudent = await Student.findById(studentId);
    console.log()
    if (!existingStudent) {
      return res.status(404).json({ error: 'Invalid student ID' });
    }
 
    const newMarks = await Marks.create({
      student: studentId,
      subject,
      marks
    });

    
    return res.status(201).json({ message: 'Marks created successfully', marks: newMarks });
  } catch (error) {
     
   return  res.status(500).json({ error: error.message });
  }
}



async function getTopper(req, res) {
    try {
      const pipeline = [
        {
          $group: {
            _id: '$student',   
            totalMarks: { $sum: '$marks' },   
            averageMarks: { $avg: '$marks' }   
          }
        },
        {
          $lookup: {
            from: 'students',//connecting with student schema
            localField: '_id',
            foreignField: '_id',
            as: 'studentDetails'
          }
        },
        {
          $sort: { totalMarks: 1 }
        },
        {
          $limit: 1
        },
        {
          $project: {
            _id: 0,
            student: '$_id',
            totalMarks: 1,
            studentDetails: 1,
            averageMarks: 1
          }
        }
      ];

      
      const topper = await Marks.aggregate(pipeline);  

      return res.status(200).json(topper);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
}

module.exports = 
{
    create_marks,
    getTopper
};
