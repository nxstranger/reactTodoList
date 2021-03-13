import React from 'react'
import {useDispatch} from 'react-redux'
// import {deleteTask} from "../redux/actions";
import {deleteTask} from '../redux/todoReducer'

const TaskButton = ({taskId}) => {
    const dispatch = useDispatch()

    return (
        <button
            onClick={
                ()=> dispatch(deleteTask(taskId))
            }
        >
            del
        </button>
    )
}

export default TaskButton