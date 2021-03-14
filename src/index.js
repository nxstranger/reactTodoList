import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import { Provider } from 'react-redux';
import {createStore, compose} from 'redux'
import App from './App'
import todoReducer from "./redux/todoReducer";

const store = createStore(todoReducer, compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

store.subscribe(()=>{
    localStorage.setItem('reduxState', JSON.stringify(store.getState().tasks))
    console.log((store.getState().tasks))
})

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)