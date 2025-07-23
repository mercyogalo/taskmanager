import React from 'react';


export default function createTask(){
    
     return   (
    <>
    
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend className="fieldset-legend">Create Task Page</legend>

  <label className="label">Task Title</label>
  <input type="text" className="input" placeholder="title" />

  <label className="label">Task Description</label>
  <textarea className="textarea h-24" placeholder="Description"></textarea>

   <label className="label">Agency</label>
  <input type="checkbox" defaultChecked className="toggle" />

  <button className="btn btn-neutral mt-4 mb-3">Create Task</button>
</fieldset>

    </>
        );
}