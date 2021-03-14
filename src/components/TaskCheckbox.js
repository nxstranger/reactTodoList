import React from 'react'
import {useDispatch} from 'react-redux'
// import {changeTaskStatus} from "../redux/actions";
import {changeTaskStatus} from '../redux/todoReducer'

const TaskCheckbox = ({taskId, taskStatus}) => {
    const dispatch = useDispatch()
    // const currentTask = useSelector(state => state.tasks.filter(task => task === taskId))

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

