import logo from "./logo.svg";
import "../styles/App.css";
import Banner from "./Banner";
import Cart from "./Cart";
import ShoppingList from "./ShoppingList";
import QuestionForm from "./QuestionForm";
import Footer from "./Footer";

function App() {
  return (
    <div>
      {" "}
      <Banner /> <Cart /> <ShoppingList />
      <QuestionForm />
      <Footer />
    </div>
  );
}

export default App;

// Code original
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
