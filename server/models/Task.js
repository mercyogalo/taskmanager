const express=require('express');


const taskSchema=new Schema({
    title:{type:String, required:true},
    description:{type:String, required:true}
})

const Task=mongoose.model('Task',taskSchema)
module.exports(Task);