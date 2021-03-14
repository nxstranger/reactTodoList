import React from 'react';
import {deleteAllTasks} from '../redux/todoReducer'
import {useDispatch} from "react-redux";

const AllTasksCleanButton = () => {

    const dispatch = useDispatch()

    function clearAllTasks(){
        dispatch(deleteAllTasks())
    }
    return (
        <button className="control-panel__control-button" onClick={clearAllTasks}>clearTODO</button>
    )
}

export default AllTasksCleanButton