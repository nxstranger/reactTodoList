// import {CHANGE_TASK_STATUS, CREATE_NEW_TODO, DELETE_TASK} from "./types";
import { createSlice } from '@reduxjs/toolkit';

function loadFromLocalstorage() {
    return {
        tasks:
            [
                {id: 0, text:"add objective two", completed: true},
                {id: 1, text: "objective two", completed: false},
                {id: 2, text:"add one more objective", completed: true},
                {id: 3, text: "create minions", completed: false},
                {id: 4, text:"make world's conqueror machine", completed: false},
                {id: 5, text: "take over the world", completed: false}
            ]
    }
}

function nextTodoId(todos) {
    const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
    return maxId + 1
}

export const storeOperator = createSlice({
    name: 'todo',
    initialState: loadFromLocalstorage(),
    reducers: {
        createNewTodo(state, action) {
            state.tasks.push({
                id: nextTodoId(state.tasks),
                text: action.payload,
                completed: false
            })
        },
        changeTaskStatus(state, action) {
            state.tasks = state.tasks.map(todo =>
                (todo.id === action.payload) ? {...todo, completed: !todo.completed} : todo)
        },
        deleteTask(state, action) {
            state.tasks = state.tasks.filter(todo => todo.id !== action.payload)
        },
    },
});

export const {createNewTodo, changeTaskStatus, deleteTask} = storeOperator.actions
export default storeOperator.reducer






