import React from 'react';
import TaskCheckbox from "./TaskCheckbox";
import TaskButton from "./TaskButton";

const ShowTask = ({task}) => {
    return (
        <div>
            <TaskCheckbox taskId={task.id} taskStatus={task.completed} />
            <span className={ task.completed ? "completed" : "" }>{task.text}</span>
            <TaskButton taskId={task.id} />
        </div>
        )
}

export default ShowTask