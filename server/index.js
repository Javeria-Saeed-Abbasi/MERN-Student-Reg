import express from 'express';
import bodyParser from 'body-parser';
import mongoose  from 'mongoose';
import cors from 'cors';
import studentRoutes from './routes/student.js';



const app = express();
// app.use(express.static(studentRoutes + '/students'));

app.use(bodyParser.json({limit:"20mb" , extended: true}));
app.use(bodyParser.urlencoded({limit:"20mb" , extended: true}));

app.use(cors());
app.use('/students' , studentRoutes);

const CONNECTION_URL = 'mongodb+srv://dbUser1:admin1@atlascluster.in1ucma.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {  
    useNewUrlParser:true,

    useUnifiedTopology:true // ---------> Depreacted No Need of this 
})
.then(() => app.listen(PORT, () => 
console.log(`Connection is established and running on port: ${PORT}`)
))
.catch((err) => console.log(err.message)
);

// start server
 //mongoose.set('useFindAndModify' , false) //---------> Depreacted No Need of this 