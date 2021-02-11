import CareScale from "./CareScale";
import "../styles/PlantItem.css";

//const { name, cover, id, light, water } = props;

function PlantItem({ name, cover, id, light, water }) {
  return (
    <li key={id} className="lmj-plant-item" onClick={handleClick}>
      <img className="lmj-plant-item-cover" src={cover} alt={`${name} cover`} />
      {name}
      <div>
        <CareScale careType="water" scaleValue={water} />
        <CareScale careType="light" scaleValue={light} />
      </div>
    </li>
  );
}

function handleClick(e) {
  e.preventDefault();
  console.log("🌟Ceci est un clic 🌟", e);
}

export default PlantItem;
