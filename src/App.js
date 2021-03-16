import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import ShowTodoList from "./components/ShowTodoList";
import NewTodoInput from "./components/NewTodoInput";
import FilterButton from "./components/FilterButton";
import AllTasksCheckButton from "./components/AllTasksCheckButton"
import CleanCompletedButton from "./components/CleanCompletedButton"
import {ALL,COMPLETED, UNFINISHED} from "./redux/filterTypes";

function App() {
    return (
        <div className="app-box">
            <Header />
            <main className="control-panel">
                    <div className={"control-panel__filters"}>
                        <FilterButton filter={ALL} key={ALL} />
                        <FilterButton filter={COMPLETED} key={COMPLETED} />
                        <FilterButton filter={UNFINISHED} key={UNFINISHED} />
                    </div>
                    <div className="control-panel__actions">
                        <AllTasksCheckButton />
                        <CleanCompletedButton />
                    </div>
            </main>
            <section className="new-todo">
                <NewTodoInput />
            </section>
            <section className="todo-list">
                <ShowTodoList />
            </section>

            <Footer />
        </div>
    )
}

export default App