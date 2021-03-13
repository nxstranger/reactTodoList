import React from 'react';
import {useDispatch} from 'react-redux'
// import {createTodo} from '../redux/actions'
import {createNewTodo} from '../redux/todoReducer'

function NewTodoInput(props) {

    const dispatch = useDispatch();

    function onKeyPress(ev){

        if (ev.code === "Enter" && ev.target.value.trim() !== "") {
            dispatch(createNewTodo(ev.target.value.trim()))
            ev.target.value = ""
        }
    }

    return (
        <label htmlFor="new-todo" >
            <input id="new-todo" type="text" onKeyPress={onKeyPress} />
        </label>
    )
}

export default NewTodoInput