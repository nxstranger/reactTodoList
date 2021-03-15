import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import TaskCheckbox from "./TaskCheckbox";
import TaskButton from "./TaskButton";
import TaskEditInput from "./TaskEditInput";
import {editedTaskId, setTaskEditable} from "../redux/todoReducer"

const ShowTask = ({task}) => {

    const boolEditTask = useSelector(editedTaskId)
    const dispatcher = useDispatch()
    function editTask(ev) {
        ev.preventDefault();
        dispatcher(setTaskEditable(task.id))
    }
    return (
        <div className="todo-object frame-border">
            <TaskCheckbox taskId={task.id} taskStatus={task.completed} />
            {
                (boolEditTask !== "" && boolEditTask === task.id)
                ? <TaskEditInput isActive={boolEditTask} task={{id:task.id, text: task.text}}  />
                : <label className={ "elem-list-input-label " + (task.completed ? "completed" : "") }
                         onDoubleClick={editTask}>
                        {task.text}
                  </label>
            }

            <TaskButton taskId={task.id} />
        </div>
    )
}

export default ShowTask