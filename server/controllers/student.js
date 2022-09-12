import StudentData from "../models/student.js";

export const getStudents = async (req, res) =>{
    try {
        const allStudents = await StudentData.find();        
        res.status(200).json(allStudents); // Success/OK
    } catch (error) {
        res.status(404).json({ message: error.messsage}); // Not Found

    }
}

export const createStudent = async (req, res) => {

    const student = req.body;

    const newStudent = new StudentData(student);

    try {   
        await newStudent.save();     
        res.status(201).json(newStudent); //Created 
    } 
    catch (error) {
        res.status(409).json({message: error.messsage}); //Conflict

    }
}

export const deleteStudent = async (req, res) => {

    const id = req.params.id;
    try {   
        await StudentData.findByIdAndRemove(id).exec();     
        res.send("Deleted Successfully"); 
    } 
    catch (error) {
      console.log(error);
    }
}