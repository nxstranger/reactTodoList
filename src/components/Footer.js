import React from 'react';
import { completedTask, uncompletedTask} from '../redux/todoReducer'
import { useSelector } from "react-redux";

const Footer = () => {
    const completed = useSelector(completedTask);
    const unfinished = useSelector(uncompletedTask);
    return(
        <footer>
            <span>items left: {unfinished}</span>
            <span>completed: {completed}</span>
        </footer>
    )
}

export default Footer