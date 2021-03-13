import Header from "./components/Header";
import Footer from "./components/Footer";
import ShowTodoList from "./components/ShowTodoList";
import NewTodoInput from "./components/NewTodoInput";
import FilterButton from "./components/FilterButton";

function App() {
    return (
        <div className="container">
            <Header />

            <main className="container">
                <div>
                    <FilterButton filter={"ALL"} />
                    <FilterButton filter={"COMPLETED"} />
                    <FilterButton filter={"UNFINISHED"} />
                </div>
                <NewTodoInput />
            </main>
            <section className="medium-container">
                <ShowTodoList />
            </section>

            <Footer />
        </div>
    )
}

export default App