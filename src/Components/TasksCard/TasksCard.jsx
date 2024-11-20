import React, {useState} from 'react' 
import add_btn from '../Assets/Plus_button_small.png' 
import './TasksCard.css'; 
import { Link } from 'react-router-dom';
import TasksPreview from './TasksPreview';


export const TasksCard = () => {

const [tasks, setTasks] = useState([]);  
<TasksPreview tasks = {tasks} />

const addTask = () => {     
    setTasks(prevTask => {       
    return [...prevTask,""];
});      
    }; 
    
    
const handleChange = (event, index) => {     
setTasks(prevTask => {       
    const newArr = [...prevTask]; 
    newArr[index] = event.target.value;
    return newArr
 });
    };    
  
return (      
 
  <div className='container'>        
      {tasks.map((task,index)=>{     
        return(       
        <div key={index}>       
        <input type="text" placeholder= {`Task ${index + 1}`} onChange= {(e) => handleChange(e, index)}/> 
        <input type='checkbox' />     
        </div>     
        )     
      })   
      }      
      <button><img src={add_btn} className='addTasksBtn'onClick={addTask}/></button>
      <Link to="/dashboard">back</Link>  
      </div>   
      )  
    } 
      
  export default TasksCard

