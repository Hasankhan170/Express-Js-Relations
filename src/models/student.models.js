import mongoose from "mongoose"

const studentSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: Number,
        required: true
    },
    enrolledCourse: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course"
    }
})

export default mongoose.model("Students",studentSchema)