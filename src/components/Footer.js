import React from 'react';
import { completedTask, uncompletedTask} from '../redux/todoReducer'
import { useSelector } from "react-redux";

const Footer = () => {
    const completed = useSelector(completedTask);
    const unfinished = useSelector(uncompletedTask);
    return(
        <header className="container">
            <h3>
                <span>{completed}</span>
                Footer
                <span>{unfinished}</span>
            </h3>
        </header>
    )
}

export default Footer