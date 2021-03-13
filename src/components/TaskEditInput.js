import React from 'react'
import {useDispatch} from 'react-redux'
import {changeTaskText, setTaskEditable} from '../redux/todoReducer'

const TaskEditInput = ({task}) => {
    const dispatch = useDispatch()

    function editTask(ev) {
        // ev.preventDefault()
        console.log(ev.key)
        if (ev.code === "Enter" && ev.target.value.trim() !== "") {
            dispatch(changeTaskText({id: task.id, text: ev.target.value.trim()}))
            dispatch(setTaskEditable(""))
            ev.target.value = ""
        }
        if (ev.code === "Escape" && ev.target.value.trim() !== "") {
            dispatch(setTaskEditable(""))
        }
    }
    return (
        <label>
            <input defaultValue={task.text}
                   autoFocus={true}
                   onBlur={()=>{dispatch(setTaskEditable(""))}}
                   onKeyDown={editTask} />
        </label>
    )
}

export default TaskEditInput