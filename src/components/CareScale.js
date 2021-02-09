// scaleValue est la quantité de paramètre évaluée
// careType est le type de données évalué. Ici soit light, soit water
function CareScale({ scaleValue, careType }) {
  const arrScale = [1, 2, 3];

  const scaleType = careType === "light" ? "☀️" : "💧";

  return (
    <div>
      {arrScale.map((scaleElem) =>
        scaleValue >= scaleElem ? (
          <span key={scaleElem.toString()}> {scaleType} </span>
        ) : null
      )}
    </div>
  );
}

export default CareScale;
