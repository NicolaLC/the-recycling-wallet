import './App.css';
import Header from "./Components/Header/Header";
import Home from "./Views/Home/Home";
import Footer from "./Components/Footer/Footer";

function App() {
    return (
        <div className="app">
            <Header />
            <Home />
            <Footer />
        </div>
    );
}

export default App;
