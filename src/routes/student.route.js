import express from 'express';
import { addStudent } from '../controllers/student.controllers';


const router = express.Router();

router.post("/student",addStudent)

export default router;