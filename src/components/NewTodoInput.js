import React from 'react';
import {useDispatch} from 'react-redux'
import {createNewTodo} from '../redux/todoReducer'

function NewTodoInput() {
    const dispatch = useDispatch();

    function onKeyPress(ev){

        if (ev.code === "Enter" && ev.target.value.trim() !== "") {
            dispatch(createNewTodo(ev.target.value.trim()))
            ev.target.value = ""
        }
    }

    return (
        <label>
            <input
                className="new-todo-input"
                type="text"
                maxLength={"150"}
                placeholder="add objective"
                onKeyPress={onKeyPress} />
        </label>
    )
}

export default NewTodoInput