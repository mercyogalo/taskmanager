const express=require('express');
const Task=require('../models/Task');
const router=express.Router();


router.post('/', async(req, res)=>{
     try {
        const task=new Task(req.body);
        await task.save();
        res.status(201).json(task);
        
     } catch (error) {
        res.status(400).json({error: error.message});
     }
})

router.put('/task/:id', async(req, res)=>{

    try {
         const updateTask=await Task.findByIdAndUpdate(
        req.body,
        req.params.id,
        { new: true}
    )

    res.json(updateTask);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
   

})

router.get('/tasks', async(req,res)=>{
   try {
    const tasks=await Task.find();
    res.json(tasks);
   } catch (error) {
    res.status(500).json({error:error.mesage})
   }

})

router.delete('/task/:id', async(req, res)=>{
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.json({message:'Task deleted successfully'});

    } catch (error) {
        res.status(500).json({error: error.message});
    }

})

module.exports(router);