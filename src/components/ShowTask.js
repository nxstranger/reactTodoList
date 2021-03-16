import React from 'react';
import {useSelector} from 'react-redux';

import TaskCheckbox from "./TaskCheckbox";
import TaskDeleteButton from "./TaskDeleteButton";
import TaskEditInput from "./TaskEditInput";
import TaskLabel from './TaskLabel'
import {editableTaskId} from "../redux/todoReducer"

const ShowTask = (propObj) => {

    const task = propObj.task
    // console.log(task)
    const editableTask = useSelector(editableTaskId)

    return (
        <div className="todo-object frame-border">
            <TaskCheckbox taskId={task.id} taskStatus={task.completed} />
            {
                (editableTask === task.id)
                ? <TaskEditInput task={{id:task.id, text: task.text}}  />
                : <TaskLabel task={{...task}} />
            }

            <TaskDeleteButton taskId={task.id} />
        </div>
    )
};

export default ShowTask