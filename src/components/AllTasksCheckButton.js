import React from 'react';
import {changeAllTaskStatus, uncompletedTask, completedTask} from '../redux/todoReducer'
import {useDispatch, useSelector} from "react-redux";

const AllTasksCheckButton = () => {

    const dispatcher = useDispatch()
    const completedCount = useSelector(completedTask)
    const uncompletedCount = useSelector(uncompletedTask)
    const todoIsEmpty = (!(completedCount + uncompletedCount))

    function changeStatus(){

        if (todoIsEmpty) {
            return
        }
        if (uncompletedCount){
            dispatcher(changeAllTaskStatus(true))
        } else {
            dispatcher(changeAllTaskStatus(false))
        }
    }
    return (
        <button className="control-panel__control-button" onClick={changeStatus}>
            {uncompletedCount || (completedCount + uncompletedCount === 0) ? "checkAll" : "UncheckAll"}
        </button>
    )
}
export default AllTasksCheckButton