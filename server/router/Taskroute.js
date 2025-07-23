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

router.get('/groupTasks', async(req,res)=>{
   try {
    const groupTasks=await Task.aggregate([
        {
            $sort:{agency:-1}
        },
        {
            $group:{
                _id:'$title',
                tasks:{$push:'$$ROOT'}
            }
        },
        {
            $sort:{'_id':-1}
        }
    ]);
    res.json(groupTasks);
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

module.exports=router;