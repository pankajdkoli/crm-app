import "./App.css";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Admin from "./components/Admin";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />

        <Admin />
        <Footer />
      </header>
    </div>
  );
}

export default App;
