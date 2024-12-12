import Course from "../models/course.models.js"

const addCourse = async (req,res)=>{
    const {name,duration} = req.body;
    if(!name) return res.status(404).json({
        message: 'Please provide a course name'
    })

    const course = await Course.create({
        name,
        duration
    })

    res.status(200).json({
        message: 'Course added successfully',
    })
}

const getCourse = async (req,res)=>{
    const course = await Course.find({}).populate('enrolledStudents')
    res.json(course)
}

export {addCourse,getCourse}