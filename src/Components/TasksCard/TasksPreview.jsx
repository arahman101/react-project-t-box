import React from "react";
import './TasksCard.css';
import { Link } from "react-router-dom";



const TasksPreview = ({tasks})=>{
    

    return(
    <div className="tasksPreviewCard">
        
        {tasks}
    
       <p> <Link to="/tasks">more...</Link> </p>
    </div>
    )
    
}

export default TasksPreview