import React from "react";
import "./Task.css";
import { FaTimes } from "react-icons/fa";
import { FcAlarmClock} from "react-icons/fc"
const Task = ({task, onDelete}) =>{
  return (
    <div className="task-wrapper">
      <div className="card-flex">
        <div className="card">
          <div className="card-body">
            <FaTimes
              onClick={() => onDelete(task.id)}
              style={{ color: "red", cursor: "pointer", float: "right" }}
            />
            <br></br>
            <h5 className="card-title">{task.title}</h5>
            <p className="card-text">{task.message}</p>
            <div className="task-time-wrapper"><FcAlarmClock style={{fontSize : '20px'}}/><p className="card-time">{task.time}</p></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Task;
