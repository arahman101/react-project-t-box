import React from "react";
import './TasksCard.css';
import { Link } from "react-router-dom";

const TasksPreview = ()=>{

    return(
    <div className="tasksPreviewCard">
        <ol>
    {localStorage.getItem("Tasks")}
        </ol>
       <p> <Link to="/tasks">more...</Link> </p>
    </div>
    )
    
}

export default TasksPreview