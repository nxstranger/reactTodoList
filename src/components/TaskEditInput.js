import {useEffect} from 'react'
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

    useEffect (() => {
        console.log("it works")
    });

    return (
        <label className="elem-list-input-label">
            <input className="elem-list-input"
                   defaultValue={task.text}
                   autoFocus={true}
                   maxLength={"150"}
                   onBlur={()=>{dispatch(setTaskEditable(""))}}
                   onKeyDown={editTask} />
        </label>

    )
}

export default TaskEditInput