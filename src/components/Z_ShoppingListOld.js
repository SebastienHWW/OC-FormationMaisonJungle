// 1ère utilisation d'un tableau pour mapper ses éléments
/*const plantlist = [
  'monstera', 
  'ficus lyrata',
  'pothos argenté',
  'yucca',
  'palmier'
]*/
import { plantList } from "../datas/plantList";
import "../styles/ShoppingList.css";
import CareScale from "./CareScale";
import PlantItem from "./PlantItem";

function Categories() {
  // Utilisation du reduce pour ne récupérer que les noms des catégories en 1 seul exemplaire
  const arrCateg = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );
  return (
    <div>
      <ul>
        {arrCateg.map((categ) => (
          <li key={categ}> {categ} </li>
        ))}
      </ul>
    </div>
  );
}

function Z_ShoppingListOld() {
  const soldes = {};
  return (
    <div>
      <Categories />
      <ul>
        {plantList.map((plant) => (
          //<li key={`${plant}-${id}`}>{ plant }</li>

          <li key={`${plant.id}`} className="lmj-plant-item">
            {plant.name}
            {plant.isBestSale && <span>🔥</span>}
            {/* 3ème façon d'écrire une ternaire avec plusieurs conditions*/}
            {/* {plant.isBestSale || plant.category === "classique" && <span>🔥</span>} */}{" "}
            {/* Votre mission est d'afficher un élément  div  qui contient le mot “Soldes” si la plante est en promotion */}
            {plant.isSpecialOffer && <div className="lmj-sales"> Soldes </div>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Z_ShoppingListOld;
