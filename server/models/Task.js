const express=require('express');
const mongoose=require('mongoose');
const { Schema }=mongoose;


const taskSchema=new Schema({
    title:{type:String, required:true},
    description:{type:String, required:true},
    agency:{type:Boolean, required:true}
})

const Task=mongoose.model('Task',taskSchema)
module.exports=Task;