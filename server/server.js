const mongoose=require('mongoose');
const express=require('express');
const app=express();
const cors=require('cors');
const dotenv=require('dotenv');
const taskRouter=require('./router/Taskroute');

const PORT=process.env.PORT || 5000;

dotenv.config();
app.use(express.json());
app.use(cors());

app.use('/api', taskRouter);

mongoose.connect(process.env.MONGO_URI,
  {})
.then(console.log("Mongodb is running"))
.catch(err=> {
    console.log(`The error is ${err}`)
})


app.listen(PORT, ()=> {
  console.log(`Server running on port ${PORT}`)
});