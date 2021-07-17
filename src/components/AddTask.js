import React from 'react';
import { useState } from 'react';
import './AddTask.css';
const AddTask = ({ onAdd }) =>{
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const [time, setTime] = useState('');

    const onSubmit =(e)=>{
        e.preventDefault();
        if(!title){
            alert('Please add task');
            return
        }

        onAdd({title, message, time})

        setTitle('');
        setMessage('');
        setTime('');
    }
    return (
      <div className="add-task-wrapper">
        <form className="form" onSubmit={onSubmit}>
            <div className="addtask-title">
            <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="title" className="form-control"/>
            </div>
            <div className="addtask-message">
            <textarea type="text" value={message} onChange={(e)=>setMessage(e.target.value)} placeholder="task message" className="form-control"/>
            </div>
            <div className="addtask-time">
            <input type="text" value={time} onChange={(e)=>setTime(e.target.value)} placeholder="time" className="form-control"/>
            </div>
            <button className="addtask-button" value="save task" type="submit">Add</button>
        </form>
  
  
      </div>
    );
  }

  export default AddTask;