import React from 'react';
import {useDispatch} from 'react-redux';
import {changeTaskStatus} from '../redux/todoReducer';

const TaskCheckbox = (propObj) => {
    const dispatch = useDispatch()

    const taskId = propObj.taskId
    const taskStatus = propObj.taskStatus

    return (
        <div>
            <input
                id={"label-task-" + taskId}
                className="elem-list-checkbox"
                type="checkbox"
                onChange = { ()=> dispatch(changeTaskStatus(taskId))}
                checked={taskStatus}
            />
            <label htmlFor={"label-task-"+taskId} className="elem-list-checkbox-label"/>
        </div>
        )
}


export default TaskCheckbox

