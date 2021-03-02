import PlantItem from "./PlantItem";
import { plantList } from "../datas/plantList";
import { useEffect, useState } from "react";

function Categories({
  categories,
  setCategories,
  categActive,
  setCategActive,
}) {
  const lc_InitCategories = categories.map((categ) => (
    <option key={categ} value={categ}>
      {categ}
    </option>
  ));
  const [lcCategories, setLcCategories] = useState(lc_InitCategories);

  // useState pour gérer plusieurs filtres
  const [filterList, setFilterList] = useState([]);

  let dispList = filterList.map((categ, index) => (
    <div key={`${categ}-${index}`}>
      {categ}
      <button type="button" onClick={() => handleRmvFiltr(categ)}>
        Suppr
      </button>
    </div>
  ));

  // useEffects
  // categoriesFltr est la liste déroulante sans la catégorie active sélectionnée
  /*  const categoriesFltr = dispList.filter((categ) => categ !== categActive);
  useEffect(() => setCategories([...categoriesFltr]), [categActive]); */

  // Fonction utilisée pour filtrer les plantes selon leur type
  function handleChangeCateg(labelCateg) {
    setCategActive(labelCateg); // Mise à jour de la catégorie
    labelCateg !== ""
      ? setFilterList([...filterList, labelCateg])
      : setFilterList([]);
    // faire en sorte de retirer la catégorie choisie de la liste {categories}
    let rmvCategory = lcCategories.filter((props) => props.key !== labelCateg);
    setLcCategories([...rmvCategory]);
  }

  //
  // Fonction utilisée pour supprimer un filtre sur un type de plante
  function handleRmvFiltr(categ) {
    const rmvFiltr = filterList.filter((categfltr) => categfltr !== categ);
    console.log(rmvFiltr);
    rmvFiltr.length > 0 ? setFilterList([rmvFiltr]) : setFilterList([]);
    console.log(categ);
    setLcCategories([categ]);
  }

  function handleReinit() {
    setCategActive("");
    setLcCategories([lc_InitCategories]);
    console.log(dispList);
    setFilterList([]);
  }

  /* onChange={(e) => setCategActive(e.target.value)} */
  return (
    <div className="lmj-categories">
      <select
        className="lmj-categories-select"
        value={categActive}
        onChange={(e) => handleChangeCateg(e.target.value)}
      >
        <option value="">---</option>

        {lcCategories}
      </select>

      <button onClick={() => handleReinit()}>Réinitialiser</button>
      {dispList}
    </div>
  );
}

export default Categories;
