import React, {useState} from 'react'
import add_btn from '../Assets/Plus_button_small.png'
import './TasksCard.css';
import { Link } from 'react-router-dom';

export const TasksCard = () => {
  const [tasks, setTasks] = useState(["task 1","task 2"]);
  const [newTask,setNewTask] = useState('');


  const addTask = ()=>
{
  setTasks(t => [...t,newTask]);
  localStorage.setItem("Tasks",tasks);
}  

const taskInput = (e) => {
  setNewTask(e.target.value)
};

return (
    <div className='container'>   
    {tasks.map((task,index)=>{
      <div key={index}>
      <input
        type="text"
        value={task}
        onChange={taskInput}
      />
      <input type='checkbox' />
    </div>
    })}

      <img src={add_btn} className='addTasksBtn'onClick={addTask}/>
          
      <Link to="/dashboard">back</Link>
    </div>
  )
}

export default TasksCard
