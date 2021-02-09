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

function ShoppingList() {
  return (
    <div>
      <Categories />
      <ul className="lmj-plant-list">
        {plantList.map(({ id, cover, name, water, light }) => (
          <PlantItem
            name={name}
            cover={cover}
            id={id}
            light={light}
            water={water}
          />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
