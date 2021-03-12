import {CHANGE_TASK_STATUS, CREATE_NEW_TODO, DELETE_TASK} from "./types";

function loadFromLocalstorage() {
    return {
        tasks:
            [
                {id: 0, text:"Add first task", completed: true},
                {id: 1, text: "Add second task", completed: false}
            ]
    }
}
function nextTodoId(todos) {
    const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
    return maxId + 1
}

function todoReducer( state = loadFromLocalstorage(), action) {
    switch (action.type) {
        case CREATE_NEW_TODO:
            return {
                ...state,
                tasks: state.tasks.concat({
                    id: nextTodoId(state.tasks),
                    text: action.payload,
                    completed: false
                })
            }
        case CHANGE_TASK_STATUS:
            return {
                ...state,
                tasks:
                    state.tasks.map(todo =>
                        (todo.id === action.id) ? { ...todo, completed: !todo.completed } : todo)
                }
        case DELETE_TASK:
            return {
                ...state,
                tasks:
                    state.tasks.filter(todo => todo.id !== action.id)
            }

        default:
            return state
    }
}

export default todoReducer






