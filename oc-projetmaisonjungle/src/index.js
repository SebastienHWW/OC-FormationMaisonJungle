import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/*ReactDOM.render(
  <React.StrictMode>
  <App />
  </React.StrictMode>,
  document.getElementById('root')
  ); */
  
  // Premier Exercice pour tester React
  /* function MyComponent() {
    return (<h1>La Maison Jungle</h1>)
    console.log('prout parfumé')
  }
  ReactDOM.render(<MyComponent />, document.getElementById('root') )
  */
  
  //2ème Exercice pour utiliser le JSX
  
  function Header() {
    const titre = "La Maison Jungle"
    return (<div>
      <h1> {titre.toUpperCase()} </h1>
      </div>)
    }
    
    function Description() {
      const text = 'Ici achetez toutes les plantes dont vous avez toujours rêvé'
      return(<p> {text} </p>)
    }
    
    function Cart(){
      const carticon = "🛒"
      
      return (<h2> {carticon} </h2>)
    }
    
    function ShoppingList() {
      
      var monsteraPrice = 8
      var lierrePrice = 10
      var fleursPrice = 15
      return (<div>
        <ul>
        <li> Monstera: {monsteraPrice}€ </li>
        <li>  Lierre: {lierrePrice}€ </li>
        <li>  Bouquet de fleurs: {fleursPrice}€ </li>
        </ul>
        Total: { monsteraPrice + lierrePrice + fleursPrice } €
        </div>
        )
      }
      /*
      ReactDOM.render(<div><Header /><Description /></div>, 
        document.getElementById('root'))
        */
        
        
        
        // 3ème exercice réutilisation des composants
        function Banner() {
          return (<div>
            <Header />
            <Cart />
            <ShoppingList />
            <Description />
            </div>)
          } 
          
          ReactDOM.render(<Banner />, document.getElementById("root"))
          
          
          // If you want to start measuring performance in your app, pass a function
          // to log results (for example: reportWebVitals(console.log))
          // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
          reportWebVitals();
          