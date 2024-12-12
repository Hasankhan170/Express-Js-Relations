import express from 'express'
import dotenv from "dotenv";
import connectDB from './src/db/index.js'
import cors from 'cors'
import studentRouter from "./src/routes/student.route.js"
import courseRouter from "./src/routes/course.route.js"




dotenv.config()


const app = express()
app.use(cors())
app.use(express.json())
app.use("/api/v1",studentRouter)
app.use("/api/v1",courseRouter)







app.get("/", (req, res) => {
  res.send("Hello World!");
});







connectDB()
.then(()=>{
    app.listen(process.env.PORT, () => {
        console.log(`⚙️  Server is running at port : ${process.env.PORT}`);
      });
})
.catch((err)=>{
    console.log("MONGO DB connection failed !!! ", err);
})