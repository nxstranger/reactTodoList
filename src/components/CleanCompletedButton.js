import React from 'react';
import {deleteCompletedTasks} from '../redux/todoReducer'
import {useDispatch} from "react-redux";

const CleanCompletedButton = () => {

    const dispatch = useDispatch()

    function clearAllTasks(){
        dispatch(deleteCompletedTasks())
    }
    return (
        <button className="control-panel__control-button" onClick={clearAllTasks}>clear checked</button>
    )
}

export default CleanCompletedButton