import '../styles/Cart.css'
import {useState} from 'react'

/*2ème version panier dynamique dans lequel le client ajoute des plante via bouton*/

function Cart({cartUnits, updateCart}) {

  // cette définition const était utilisée avant de passer cart et updateCart en props de la fonction Cart()
  //const [cart, updateCart] = useState(0)  // useState pour avoir un composant avec un état que l'on peut faire évoluer
  const monsteraPrice = 8
  const [isOpen, setIsOpen] = useState(true)
  const total = cartUnits.reduce(
		              (acc, plantType) => acc + plantType.amount * plantType.price,
		              0
	)
    return isOpen ? (
    <div className='lmj-cart'>
      <button 
        className='lmj-cart-toggle-button' 
        onClick={() => setIsOpen(false)}
      >
        Fermer Panier
      </button>
   
     {cartUnits.length > 0 ? (
				<div>
					   <h2>Panier 🛒</h2>
					<ul>
						{cartUnits.map(({ name, price, amount }, index) => (
							<div key={`${name}-${index}`}>
								{name}: {amount} x {price}€
							</div>
						))}
					</ul>
					<h3>Total :{total}€</h3>
					<button onClick={() => updateCart([])}>Vider le panier</button>
				</div>
			) : (
				<div>Votre panier est vide</div>
			)}
      </div>   
    ) : 
    <div className='lmj-cart-closed'>
      <button 
        className='lmj-cart-toggle-button'
        onClick={() => setIsOpen(true)}>
        Ouvrir Panier
      </button>
    </div>
}


/*1ère version panier non dynamique dans lequel on a présaisi le contenu pour comprendre*/
/*function Cart(){
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
  } */

  export default Cart