import React from 'react';
import ShowTask from "./ShowTask";
import { useSelector} from 'react-redux'
import {todoList} from "../redux/todoReducer"

const ShowTodoList = () => {
    const todoArray = useSelector(todoList)
    if (!todoArray.length) {
        return null
    }

    return todoArray.map(task => <ShowTask task={task} key={task.id} />)
}

export default ShowTodoList
