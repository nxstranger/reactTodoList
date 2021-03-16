import React from 'react';
import {useDispatch} from 'react-redux';
import {deleteTask} from '../redux/todoReducer';

const TaskDeleteButton = (propObj) => {
    const dispatch = useDispatch()
    const taskId = propObj.taskId

    return (
        <button className="elem-list-delete" onClick={ ()=> dispatch(deleteTask(taskId)) }>
        </button>
    )
}

export default TaskDeleteButton