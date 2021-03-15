import Header from "./components/Header";
import Footer from "./components/Footer";
import ShowTodoList from "./components/ShowTodoList";
import NewTodoInput from "./components/NewTodoInput";
import FilterButton from "./components/FilterButton";
import AllTasksCheckButton from "./components/AllTasksCheckButton"
import AllTasksCleanButton from "./components/AllTasksCleanButton"


function App() {
    return (
        <div className="app-box">
            <Header />
            <main className="control-panel">
                    <div className={"control-panel__filters"}>
                        <FilterButton filter={"ALL"} />
                        <FilterButton filter={"COMPLETED"} />
                        <FilterButton filter={"UNFINISHED"} />
                    </div>
                    <div className={"control-panel__actions"}>
                        <AllTasksCheckButton />
                        <AllTasksCleanButton />
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