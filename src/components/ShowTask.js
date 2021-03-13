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
        console.log("tsk dbclck", ev.target.innerText)
    }
    return (
        <div>
            <TaskCheckbox taskId={task.id} taskStatus={task.completed} />
            {
                (boolEditTask !== "" && boolEditTask === task.id)
                ? <TaskEditInput isActive={boolEditTask} task={{id:task.id, text: task.text}}  />
                :  <span className={ task.completed ? "completed" : "" } onDoubleClick={editTask}>{task.text}</span>
            }

            {/*<TaskEditToggle taskId={task.id}/>*/}
            <TaskButton taskId={task.id} />
        </div>
    )
}

export default ShowTask