import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css' ;
import Dashboard from './Pages/Dashboard';
import CreateTask from './Pages/CreateTask';
import UpdateTask from './Pages/UpdateTask';

function App() {
  

  return (
    <>
    
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/createTask'  element={<CreateTask />}/>
          <Route path='/updateTask'  element={<UpdateTask />}/>
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
