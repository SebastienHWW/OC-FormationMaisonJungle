import { useState } from "react";
import "../styles/ShoppingList.css";

function QuestionForm() {
  // Initialisation des variables inputValue + setInputValue comme des variables
  // locales useState
  // inputValue sera la variable initiale que l'user verra et la setInputValue sera celle qu'il va modifier
  // et qui va changer à son tour inputValue
  const [inputValue, setInputValue] = useState("Test");
  const isInputError = inputValue.includes("f");
  const strTest = "Test";

  return (
    <div>
      <textarea
        value={inputValue}
        // Pour checker la valeur dans le onChange, on prend la valeur de l'event et pas de l'useState inputValue
        onChange={(e) => {
          !e.target.value.includes("f") && setInputValue(e.target.value);
        }}
      />
      {/*Afficher une alerte lorsque que l'user clique dessus*/}
      {/*  <button onClick={() => alert(inputValue)}>Alertez moi 🚨</button> */}

      {/*Avoir un bouton qui vérifier si l'user respecte une condition, ici si le texte saisi contient la lettre 'f'*/}
      <button
        onClick={() => {
          // On se sert du useState inputValue pour contrôler car c'est la valeur finale saisie par l'user
          if (inputValue === strTest) {
            console.log("Saisie correspond à la demande");
          } else {
            console.log("Saisie ne correspond pas à la demande");
          }
        }}
      >
        Alertez moi 👮
      </button>
    </div>
  );
}

export default QuestionForm;
