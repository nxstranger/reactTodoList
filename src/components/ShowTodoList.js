import React from 'react';
import ShowTask from "./ShowTask";
import { connect } from 'react-redux'


const ShowTodoList = ({todoList}) => {
    if (!todoList.length) {
        return null
    }

    return todoList.map(task => <ShowTask task={task} key={task.id} />)
}

const mapStateToProps = state => {
    console.log(state);
    return {
        todoList: state.tasks
    }
}

export default connect(mapStateToProps, null)(ShowTodoList)
