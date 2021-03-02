// 1ère utilisation d'un tableau pour mapper ses éléments
/*const plantlist = [
  'monstera', 
  'ficus lyrata',
  'pothos argenté',
  'yucca',
  'palmier'
]*/

import { useEffect, useState } from "react";
import { plantList } from "../datas/plantList";
import "../styles/ShoppingList.css";
import PlantItem from "./PlantItem";
import Categories from "./Categories";

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

function ShoppingList({
  cartItems,
  setCartItems,
  categActive,
  setCategActive,
}) {
  // la fonction reduce permet d'accumuler des valeurs d'un tableau en les traitant une par une
  const [categories, setCategories] = useState(
    plantList.reduce(
      // ici on vérifie avec "acc" si la valeur est déjà stockée
      // oui: on ne fait rien || non: on ajoute l'élément courant à acc donc dans "categories"
      (acc, elem) =>
        acc.includes(elem.category) ? acc : acc.concat(elem.category),
      []
    )
  );

  /*useEffect(() => console.log("useEffect SL: " + categActive), [categActive]);*/

  function addToCart(name, price) {
    // On établi une booléenne qui cherche la plante spécifiée selon le nom
    const currentPlantSaved = cartItems.find((plant) => plant.name === name);

    if (currentPlantSaved) {
      // la plante est déjà dans le panier
      // cartFilteredCurrentPlant représente le panier filtré seulement sur les occurences de la plante saisie
      const cartFilteredCurrentPlant = cartItems.filter(
        (plant) => plant.name !== name
      );

      setCartItems([
        ...cartFilteredCurrentPlant,
        { name, price, amount: currentPlantSaved.amount + 1 },
      ]);
    } else {
      // la plante n'est pas encore dans le panier ==> On ajoute le nouveau type de plante
      setCartItems([...cartItems, { name, price, amount: 1 }]);
    }
  }

  return (
    <div className="lmj-shopping-list">
      <Categories
        categories={categories}
        setCategories={setCategories}
        categActive={categActive}
        setCategActive={setCategActive}
      />

      <ul className="lmj-plant-list">
        {plantList.map(({ id, cover, name, water, light, price, category }) =>
          !categActive || categActive === category ? (
            <div key={id}>
              <PlantItem
                name={name}
                cover={cover}
                id={id}
                light={light}
                water={water}
                price={price}
              />
              <button onClick={() => addToCart(name, price)}>Ajouter</button>
            </div>
          ) : null
        )}
      </ul>
    </div>
  );
}

export default ShoppingList;
