import Banner from "./Banner";
import Cart from "./Cart";
import ShoppingList from "./ShoppingList";
import QuestionForm from "./QuestionForm";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import "../styles/Layout.css";
import "../styles/App.css";
import logo from "../assets/logo.png";

function App() {
  // savedCart permet de récupérer le panier de l'user
  const savedCart = localStorage.getItem("cartUnits");
  const [cartItems, setCartItems] = useState(
    // Si savedCart existe déjà alors il est traduit de JSON en objet JS.
    // Sinon le state de cartUnits est initialisé à vide
    savedCart ? JSON.parse(savedCart) : []
  );

  const [categActive, setCategActive] = useState("");

  useEffect(
    () => localStorage.setItem("cartItems", JSON.stringify(cartItems)),
    [cartItems]
  );

  return (
    <div>
      <Banner>
        <img src={logo} alt="La maison jungle" className="lmj-logo" />
        <h1 className="lmj-title">La Maison Jungle</h1>
      </Banner>

      <div className="lmj-layout-inner">
        <Cart cartUnits={cartItems} updateCart={setCartItems} />
        <ShoppingList
          cartItems={cartItems}
          setCartItems={setCartItems}
          categActive={categActive}
          setCategActive={setCategActive}
        />
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
