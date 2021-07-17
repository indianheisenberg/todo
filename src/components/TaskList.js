import React, { useState } from 'react';
import Task from './Task';


const TaskList = ({tasks, onDelete})=>{

    

    return(
        <div className="task-list-wrapper">

            <div className="task-flex">
                {tasks.map((task)=>(
                    <Task task={task} onDelete={onDelete} />
                ))}
            </div>

        </div>
    )

}


export default TaskList;