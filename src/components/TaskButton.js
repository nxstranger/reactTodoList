import React from 'react';
import {useDispatch} from 'react-redux';
import {deleteTask} from '../redux/todoReducer';

const TaskButton = ({taskId}) => {
    const dispatch = useDispatch()

    return (
        <button className="elem-list-delete" onClick={ ()=> dispatch(deleteTask(taskId)) }>
            X
        </button>
    )
}

export default TaskButton