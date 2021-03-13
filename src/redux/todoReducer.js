// import {CHANGE_TASK_STATUS, CREATE_NEW_TODO, DELETE_TASK} from "./types";
import { createSlice } from '@reduxjs/toolkit';

function loadFromLocalstorage() {
    return [
        {id: 0, text:"add objective two", completed: true},
        {id: 1, text: "objective two", completed: false},
        {id: 2, text:"add one more objective", completed: true},
        {id: 3, text: "create minions", completed: false},
        {id: 4, text:"make world's conqueror machine", completed: false},
        {id: 5, text: "take over the world", completed: false}
    ]
}

function nextTodoId(todos) {
    const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
    return maxId + 1
}

export const storeOperator = createSlice({
    name: 'todo',
    initialState: {
        tasks: loadFromLocalstorage(),
        editableTask: "",
        filter: "ALL"
    },
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
        changeTaskText(state, action) {
            state.tasks = state.tasks.map(todo =>
                (todo.id === action.payload.id) ? {...todo, text: action.payload.text} : todo)
        },

        deleteTask(state, action) {
            state.tasks = state.tasks.filter(todo => todo.id !== action.payload)
        },
        setTaskEditable(state, action) {
            state.editableTask = action.payload
        },
        setFilterValue(state, action){
            state.filter = action.payload
        }
    },
});

export const {createNewTodo, changeTaskStatus, deleteTask, changeTaskText, setTaskEditable, setFilterValue } = storeOperator.actions

export const completedTask = state => state.tasks.filter(todo=> todo.completed === true).length;
export const uncompletedTask = state => state.tasks.filter(todo=> todo.completed === false).length;
export const editedTaskId = state => state.editableTask
export const todoList = state => { switch(state.filter){
    case "ALL":
        return state.tasks
    case "COMPLETED":
        return state.tasks.filter(todo => todo.completed === true)
    case "UNFINISHED":
        return state.tasks.filter(todo => todo.completed === false)
    default:
        return state.tasks
}}


export default storeOperator.reducer






