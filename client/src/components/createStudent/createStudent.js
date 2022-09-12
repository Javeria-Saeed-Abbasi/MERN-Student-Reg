import * as React from 'react';
import {Box , TextField, Button, Grid , Container} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {useState} from 'react';
import axios from 'axios';


export default function  Create() {
const [student, setStudent] = useState({

  regNo: 0,
  studentName: '',
  grade: '',
  section:'',
});

const createStudent = async() =>{
  await axios.post('http://localhost:5000/students' , student).then((res)=>{
    console.log(student);
    console.log(res);
  })
  .catch((error)=>{
    console.log(error);
  })
}

  return (

   <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch', marginBottom: '1rem'},

      }}
      noValidate
      autoComplete="off"
    >
        <h2> Create Student </h2>
      <TextField id="outlined-basic" label="Registration Number" variant="outlined" value={student.regNo} onChange={(event) => {
       setStudent ({...student, regNo: event.target.value})
      }}/><br/>
      <TextField id="outlined-basic" label="Name" variant="outlined" value={student.studentName} onChange={(event) => {
       setStudent ({...student, studentName: event.target.value})
      }} />
      <TextField id="outlined-basic" label="Grade" variant="outlined" value={student.grade} onChange={(event) => {
       setStudent ({...student, grade: event.target.value})
      }} />
      <TextField id="outlined-basic" label="Section" variant="outlined" value={student.section}  onChange={(event) => {
       setStudent ({...student, section: event.target.value})
      }}/>
   
      <Container  style={{
        paddingTop: "1rem",
        paddingBottom: "1rem",

      }}>
        <Button color="primary" size="large" type="submit" variant="contained" onClick={createStudent}>
Create       
 </Button>
 
      </Container>
     

    </Box>
   
  );
}
