import Header from "./components/Header";
import Footer from "./components/Footer";
import ShowTodoList from "./components/ShowTodoList";
import NewTodoInput from "./components/NewTodoInput";

function App() {
    return (
        <div className="container">
            <Header />
            <main className="container">
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