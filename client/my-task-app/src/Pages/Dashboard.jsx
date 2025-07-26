import { useState, useEffect } from 'react';
import api from '../Utils/Api.jsx';
import axios from 'axios';




export default function Dashboard(){

     const [task, setTask]=useState({});

     const displayTask = async()=> {
      try {
         const response=await axios.get(api);
        setTask(response.data);
      } catch (error) {
        console.log(error);
      }
    };


    useEffect(()=>{
        displayTask();
    },[]);

  return(
    <div className='w-full '>  

  <div className="card w-96 bg-base-100 card-sm shadow-sm">
  <div className="card-body">
    <h2 className="card-title">Task title</h2>
    <p className='text-left mt-2'>
      Task description
      </p>
    <div className="justify-end card-actions">

      <button className="btn btn-primary">
        Update
      </button>

      <button className="btn btn-primary">
        Delete
        </button>

    </div>
  </div>
</div>

    </div>
  );
}