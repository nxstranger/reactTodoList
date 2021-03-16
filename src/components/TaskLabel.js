import React from 'react';
import {useDispatch} from "react-redux";
import {setTaskEditable} from "../redux/todoReducer";

const TaskLabel = (propObj) => {

    const task = propObj.task
    const dispatcher = useDispatch()

    function editTask(ev) {
        ev.preventDefault();
        dispatcher(setTaskEditable(task.id))
    }

    return (
        <label className={ "elem-list-input-label " + (task.completed ? "completed" : "") }
               onDoubleClick={editTask}>
            {task.text}
        </label>
    )
}
export default TaskLabel