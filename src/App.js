import logo from './logo.svg';
import './App.css';
import AddTask from './components/AddTask'
import Task from './components/Task';
import TaskList from './components/TaskList';
import Header from './components/Header';
import { useState, useEffect } from 'react';

function App() {

  const [tasks, setTasks] = useState([
    {
        id:1,
        title:'Sample Task',
        message:'this is my first task',
        time: '14 May 08:00 PM'
    }
]);

// delete task
const deleteTask = (id)=>{
  setTasks(tasks.filter((task)=>task.id !=id))
  
}

// add task
const addTask = (task)=>{
  const id = Math.floor(Math.random() *10000)+1;
  const newTask = { id, ...task};
  setTasks([...tasks,newTask]);
}

const [showAddTask, setShowAddTask] = useState(false);

// useEffect(() => {
//   const fetchTasks = async () =>{
//     const res = await fetch('http://localhost:5000/tasks');
//     const data = await res.json();
//     console.table(data);
//   }

//   fetchTasks();
// }, [])

  return (
    <div className="App">
      <div style={{}}>
      <Header onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {/* add a task component */}
      {/* list of tasks component > task component*/}
      {/* delete task component */}
      { showAddTask && <AddTask onAdd={addTask}  />}
      {tasks.length>0 ?(<TaskList tasks={tasks} onDelete={deleteTask}/>): <div><br></br>{('No tasks to show')}</div>}
      </div>
    </div>
  );
}

export default App;
