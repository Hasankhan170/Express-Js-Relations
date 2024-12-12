import Student from "../models/student.models.js"
import Course from "../models/course.models.js"


const addStudent = async (req,res)=>{
  console.log("Request Body:", req.body);
    const {fullName,email,enrolledCourse} = req.body;
    if (!fullName)
        return res.status(400).json({
          message: "fullname is required",
        });
      if (!email)
        return res.status(400).json({
          message: "email is required",
        });

        try {
          
          const student = await Student.create({
            fullName,
            email,
            enrolledCourse,
          });
      
          
          await Course.findByIdAndUpdate(enrolledCourse, {
            $push: { enrolledStudents: student._id },
          });
      
          res.json({ message: "Student added successfully", student });
        } catch (err) {
          console.error("Error adding student:", err);
          res.status(500).json({ message: "Internal Server Error" });
        }
}

export {addStudent}