import '../styles/Cart.css'


function Cart(){
  const carticon = "🛒"
  
  return (<div className="lmj-cart" alt="Ceci est votre panier"><h2> {carticon} </h2> <ShoppingList /> </div>)
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
  
  export default Cart