import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {deleteTask} from "../redux/actions";

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