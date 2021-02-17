import PlantItem from "./PlantItem";
import { plantList } from "../datas/plantList";

function Categories({ categList, categActive, updtCategSelect }) {
  return (
    <div className="lmj-categories">
      <select
        className="lmj-categories-select"
        onChange={(e) => updtCategSelect(e.target.value)}
        value={categActive}
      >
        <option value="">---</option>

        {categList.map((categ) => (
          <option key={categ} value={categ}>
            {categ}
          </option>
        ))}
      </select>

      <button onClick={() => updtCategSelect("")}>Réinitialiser</button>
    </div>
  );
}

export default Categories;
