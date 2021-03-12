import Header from "./components/Header";
import Footer from "./components/Footer";
import ShowTodoList from "./components/ShowTodoList";
import CreateTodoField from "./components/CreateTodoField";

function App(props) {
    return (
        <div className="container">
            <Header />
            <main className="container">
                <section className="medium-container">
                    <h2>Todos</h2>
                    <div className="todoapp">
                        <CreateTodoField />
                        <ShowTodoList />
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default App