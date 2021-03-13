import React from 'react'
import {useDispatch} from 'react-redux'
// import {changeTaskStatus} from "../redux/actions";
import {changeTaskStatus} from '../redux/todoReducer'

const TaskCheckbox = ({taskId, taskStatus}) => {
    const dispatch = useDispatch()
    // const currentTask = useSelector(state => state.tasks.filter(task => task === taskId))

    return (
        <label>
            <input
                   type="checkbox"
                   onChange = { ()=> dispatch(changeTaskStatus(taskId))}
                   checked={taskStatus} />
        </label>
    )
}

export default TaskCheckbox

