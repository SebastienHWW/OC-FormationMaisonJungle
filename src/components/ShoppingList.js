// 1ère utilisation d'un tableau pour mapper ses éléments
/*const plantlist = [
  'monstera', 
  'ficus lyrata',
  'pothos argenté',
  'yucca',
  'palmier'
]*/

import { useState } from "react";
import { plantList } from "../datas/plantList";
import "../styles/ShoppingList.css";
import PlantItem from "./PlantItem";
import Categories from "./Categories"

/* function Categories() {
  // Utilisation du reduce pour ne récupérer que les noms des catégories en 1 seul exemplaire
  const arrCateg = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );
  return (
      <Categories />
  );
} */

function ShoppingList({cartUnits, updateCart}) {
  const[categActive, updtCategSelect] = useState('')

  const categories = plantList.reduce(
    (acc, elem) =>
      acc.includes(elem.category) ? acc : acc.concat(elem.category), 
      [] 
  ) 
  


    function addToCart(name, price) {
      // On établi une booléenne qui cherche la plante spécifiée selon le nom
      const currentPlantSaved = cartUnits.find((plant) => plant.name === name)
      
      if (currentPlantSaved) {  // la plante est déjà dans le panier

        // cartFilteredCurrentPlant représente le panier filtré seulement sur les occurences de la plante saisie
        const cartFilteredCurrentPlant = cartUnits.filter(
          (plant) => plant.name !== name
        )

        updateCart([...cartFilteredCurrentPlant, {name, price, amount: currentPlantSaved.amount + 1}
        ])
      } else {  // la plante n'est pas encore dans le panier ==> On ajoute le nouveau type de plante
         updateCart([...cartUnits, {name, price, amount : 1}])
        }

    }


  return (
    <div className='lmj-shopping-list'>
      <Categories 
        categList={categories} 
        categActive={categActive} 
        updtCategSelect={updtCategSelect}
       />

      <ul className="lmj-plant-list">
        {plantList.map(({ id, cover, name, water, light, price, category }) => 
        ( !categActive || categActive === category ? (
          <div key={id}>
            <PlantItem
              name={name}
              cover={cover}
              id={id}
              light={light}
              water={water}
              price={price}
            />
          <button onClick={() => addToCart({name}, {price})}>Ajouter</button>
          </div> 
          ) : null
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
