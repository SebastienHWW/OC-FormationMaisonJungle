import { useEffect, useState } from "react";
import "../styles/Footer.css";

function Footer() {
  var [inputValue, setInputValue] = useState("");
  const isEmailValid = inputValue.includes("@");
  let [isFooterShown, setIsFooterShown] = useState(true);

  useEffect(() => {
    document.title = "Footer modifié";
  }, [isFooterShown]);

  // Fonction pour afficher/cacher la partie Footer
  function displayFooter(bool) {
    setIsFooterShown(bool);
  }

  // Fonction utilisée pour mettre à jour dynamiquement un champ d'input via le useState et contrôler son contenu
  function handleInput(event) {
    setInputValue(event.target.value);
  }

  // Fonction utilisée pour réagir si saisie incomplète dans champ d'input
  function onBlur() {
    !isEmailValid &&
      alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide.");
  }

  return isFooterShown ? (
    <footer className="lmj-footer">
      <button type="button" onClick={() => displayFooter(false)}>
        Cacher Footer
      </button>
      <div className="lmj-footer-elem">
        Pour les passionné·e·s de plantes 🌿🌱🌵
      </div>
      <div className="lmj-footer-elem">
        Laissez-nous votre mail :
        <form>
          <input
            type="email"
            id="email"
            placeholder="test@gmail.com"
            // On mets à jour dynamiquement inputValue à chaque saisie de l'user
            onChange={handleInput}
            // Si l'utilisateur clique à coté de la zone de saisie de l'email
            // on vérifie que l'adresse contient un "@" ==> Si non, on renvoi un message d'alerte
            onBlur={onBlur}
            value={inputValue}
          ></input>
          <button type="submit">Valider email</button>
        </form>
      </div>
    </footer>
  ) : (
    <button type="button" onClick={() => displayFooter(true)}>
      Afficher Footer
    </button>
  );
}

export default Footer;
