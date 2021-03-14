import {createSlice} from '@reduxjs/toolkit';


function loadFromLocalstorage() {

    const localData = localStorage.getItem('reduxState')
        ? JSON.parse(localStorage.getItem('reduxState'))
        : []
    if (Array.isArray(localData) && localData.length){
        return localData
    }
    return [
        {id: 1, completed: true, text: "add objective two"},
        {id: 2, completed: false, text: "objective two"},
        {id: 3, completed: true, text: "add one more objective"},
        {id: 4, completed: false, text: "create minions"},
        {id: 5, completed: false, text: "make world's conqueror machine"},
        {id: 6, completed: false, text: "take over the world"}
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
        changeAllTaskStatus(state, action) {
            state.tasks = state.tasks.map(todo =>
                (todo.completed !== action.payload) ? {...todo, completed: !todo.completed} : todo)
        },
        changeTaskText(state, action) {
            state.tasks = state.tasks.map(todo =>
                (todo.id === action.payload.id) ? {...todo, text: action.payload.text} : todo)
        },

        deleteTask(state, action) {
            state.tasks = state.tasks.filter(todo => todo.id !== action.payload)
        },
        deleteAllTasks(state) {
            state.tasks = []
        },

        setTaskEditable(state, action) {
            state.editableTask = action.payload
        },
        setFilterValue(state, action){
            state.filter = action.payload
        }
    },
});

export const {
    createNewTodo, changeTaskStatus, deleteTask, changeTaskText,
    setTaskEditable, setFilterValue, changeAllTaskStatus, deleteAllTasks } = storeOperator.actions

export const completedTask = state => state.tasks.filter(todo=> todo.completed === true).length;
export const uncompletedTask = state => state.tasks.filter(todo=> todo.completed === false).length;
export const editedTaskId = state => state.editableTask
export const currentFilter = state => state.filter

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






