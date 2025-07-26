import React from 'react';
 import {  useState, useEffect } from 'react';
 import { useNavigate,  useParams } from 'react-router-dom';
 import axios from 'axios';
import api from '../Utils/Api.jsx';



export default function CreateTask(){

  const { id } =useParams();  
  const navigate=useNavigate();
   const [success, setSuccess] =useState(false);

  const [form, setForm] =useState({
      title:'',
      description:'',
      agency:false
  });

useEffect(()=>{
    const fetchTask=async()=>{
      try {
        const response=await axios.get(`${api}/updateTask/${id}`);
        setForm(response.data);
      } catch (error) {
        console.log(error);
      };
    }

    fetchTask();

}, [id])
  

  const setTask= async()=> {

  try{
      const response = await axios.put(`${api}/updateTask/${id}`, form);
        console.log(response);
      navigate('/');
      setSuccess(true);

  }

  catch(error){
  console.log(`Error is ${error}`);
  alert('Error occured. Kindly try again');
  success(false);
  }


  }
  
     

function handleSubmit(e){
  e.preventDefault();
  setTask();
}



    
     return   (
    <div className='d-block m-auto'>
    
    <form onSubmit={handleSubmit}>
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend className="fieldset-legend">Update Task Page</legend>

  <label className="label">Task Title</label>
  <input 
  type="text" 
  name="title"
  className="input" 
  placeholder="title" 
  required 
  value={form.title}
  onChange={
    (e)=>
      setForm((prev)=> ({...prev, title:e.target.value}) )
  }
   />

  <label className="label">Task Description</label>
  <textarea 
  className="textarea h-24" 
  name="description" 
  placeholder="Description"  
  required
  value={form.description}
  onChange={
    (e)=>
      setForm((prev)=> ({...prev, description:e.target.value}))
  }
  ></textarea>

   <label className="label">Agency</label>
  <input 
  type="checkbox" 
  checked={form.agency} 
  defaultChecked 
  name="agency" 
  className="toggle"  
  required
  value={form.agency}
  onChange={
    (e)=>
      setForm((prev)=>({...prev,agency:e.target.checked}))
  }
  />

  <button className="btn btn-neutral mt-4 mb-3">Update Task</button>
</fieldset> 
</form>

    </div>
        );
}