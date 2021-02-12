import logo from "../assets/logo.svg";
import "../styles/Layout.css";
import "../styles/App.css";
import Banner from "./Banner";
import Cart from "./Cart";
import ShoppingList from "./ShoppingList";
import QuestionForm from "./QuestionForm";
import Footer from "./Footer";
import { useState } from "react";
import Categories from "./Categories";
import { plantList } from "../datas/plantList";

function App() {
  var [cartUnits, updateCart] = useState([])

  return (
    <div>
      <Banner /> 
      <div className='lmj-layout-inner'>
      <Cart cartUnits={cartUnits} updateCart={updateCart} />
      <ShoppingList cartUnits={cartUnits} updateCart={updateCart} />
      
      </div>
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
