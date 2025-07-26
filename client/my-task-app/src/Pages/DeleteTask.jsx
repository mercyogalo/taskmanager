import axios from 'axios';
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../Utils/Api';


export default function deleteTask(){
    const { id } = useParams();
    const navigate=useNavigate();
     


    useEffect(()=>{
          const DeleteTask = async () => {
        try {
         await axios.delete(`${api}/deleteTask/${id}`);
            navigate('/');
        } catch (error) {
          console.log('Delete failed error:',error);
        }
      };

      DeleteTask();
      
      }, [id, navigate])


       return (
    <div className="p-4 text-center">
      <p>Deleting task...</p>
    </div>
  );
    
}
