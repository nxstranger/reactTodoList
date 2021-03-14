import React from 'react';
import {changeAllTaskStatus, uncompletedTask, completedTask} from '../redux/todoReducer'
import {useDispatch, useSelector} from "react-redux";

const AllTasksCheckButton = () => {

    const dispatcher = useDispatch()
    const completeSelector = useSelector(completedTask)
    const uncompletedSelector = useSelector(uncompletedTask)

    function changeStatus(){

        if (uncompletedSelector){
            dispatcher(changeAllTaskStatus(true))
        } else if (completeSelector + uncompletedSelector) {
            dispatcher(changeAllTaskStatus(false))
        } else {

        }
    }

    return (
        <button className="control-panel__control-button" onClick={changeStatus}>
            {uncompletedSelector || (completeSelector + uncompletedSelector === 0) ? "checkAll" : "UncheckAll"}
        </button>
    )
}

export default AllTasksCheckButton