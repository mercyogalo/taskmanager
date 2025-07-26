import { useState, useEffect, useParams } from 'react';
import axios from 'axios';
import api from '../Utils/Api.jsx';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const [task, setTask] = useState({});
  const [loading, setLoading] = useState(true); 
  const { id } =useParams();

  const displayTask = async () => {
    try {
      const response = await axios.get(api);
      setTask(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };


  

  useEffect(() => {
    displayTask();
  }, []);

  return (
    <div className="w-full p-4">
      {loading ? (
        <>
        <span className="loading loading-spinner loading-xs"></span>
        <span className="loading loading-spinner loading-sm"></span>
        <span className="loading loading-spinner loading-md"></span>
        <span className="loading loading-spinner loading-lg"></span>
        <span className="loading loading-spinner loading-xl"></span>
        </>
        
      ) : Object.keys(task).length === 0 ? (
        <p className="text-center text-sm text-gray-500">No task available.</p>
      ) : 
      (
        <div className="card w-96 bg-base-100 card-sm shadow-sm m-auto">
          <div className="card-body">
            <h2 className="card-title">{task.title}</h2>
            <p className="text-left mt-2">{task.description}</p>
            <div className="justify-end card-actions">
              <Link to='/updateTask/${task.id}' className="btn btn-primary">Update</Link>
              <Link to='/deleteTask/${task.id}' className="btn btn-primary">Delete</Link>
            </div>
          </div>
        </div>
        
      )}
    </div>
  );
}
