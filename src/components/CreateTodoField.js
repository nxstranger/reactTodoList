import React from 'react';
import {connect} from 'react-redux'
import {createTodo} from '../redux/actions'

function CreateTodoField(props) {

    function onKeyPress(ev){

        if (ev.code === "Enter" && ev.target.value.trim() !== "") {
            // ev.persist()
            props.createTodo(ev.target.value.trim())
            console.log(ev.target.value)
            ev.target.value = ""
        }
    }

    return (
        <label htmlFor="new-todo" >
            <input id="new-todo" type="text" onKeyPress={onKeyPress} />
        </label>
    )
}

const MapsDispatchToProps = {
    createTodo
}

export default connect( null, MapsDispatchToProps)(CreateTodoField)