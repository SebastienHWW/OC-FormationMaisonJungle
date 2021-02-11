// scaleValue est la quantité de paramètre évaluée
// careType est le type de données évalué. Ici soit light, soit water
function CareScale({ scaleValue, careType }) {
  const arrScale = [1, 2, 3];

  const quantityLabel = {
    1: "peu",
    2: "modérément",
    3: "beaucoup",
  };

  const scaleType = careType === "light" ? "☀️" : "💧";

  return (
    <div
      onClick={() =>
        console.log(
          `Cette plante requiert ${quantityLabel[scaleValue]} ${
            careType === "light" ? "de lumière" : "d'arrrosage"
          }`
        )
      }
    >
      {arrScale.map((scaleElem) =>
        scaleValue >= scaleElem ? (
          <span key={scaleElem.toString()}>{scaleType}</span>
        ) : null
      )}
    </div>
  );
}

export default CareScale;
