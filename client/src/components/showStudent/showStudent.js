import React, { useEffect } from 'react';
import {Table, TableBody , TableCell , TableContainer, TableHead, TableRow, Paper} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { useState } from 'react';
import axios from 'axios';

export default function ShowStudent() {

  const [studentsList, setStudentList] = useState([])
const deleteStudent = (id) =>{
  axios.delete(`http://localhost:5000/students/${id}`).then( () => {
  window.location.reload(false);
  
})
.catch((error)=>{
  console.log(error);
})
}
  useEffect(() => {
    axios.get('http://localhost:5000/students').then( (allStudents) =>{
    setStudentList(allStudents.data); 
    console.log(allStudents);
    })
    .catch((error)=>{
      console.log(error);
    })
  }, [])

  return (
    <>

    <h2>
      All Students 
    </h2>
    <TableContainer 
    component={Paper}>
      <Table sx={{ minWidth: 650}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Registration Number</TableCell>
            <TableCell align="right">Grade</TableCell>
            <TableCell align="right">Section</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {studentsList.map((student , key) => (
            <TableRow
              key={key}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {student.studentName}
              </TableCell>
              <TableCell align="right">{student.regNo}</TableCell>
              <TableCell align="right">{student.grade}</TableCell>
              <TableCell align="right">{student.section}</TableCell>

              <TableCell align="right">
                <IconButton aria-label="delete" size="small" onClick={() => deleteStudent(student._id)}>
                    <DeleteIcon fontSize="small" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
