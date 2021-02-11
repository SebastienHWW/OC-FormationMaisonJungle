import { useState } from "react";
import "../styles/Footer.css";

function Footer() {
  const [inputValue, setInputValue] = useState("");
  const isEmailValid = inputValue.includes("@");

  return (
    <footer className="lmj-footer">
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
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            // Si l'utilisateur clique à coté de la zone de saisie de l'email
            // on vérifie que l'adresse contient un "@" ==> Si non, on renvoi un message d'alerte
            onBlur={() => {
              !isEmailValid &&
                alert(
                  "Attention, il n'y a pas d'@, ceci n'est pas une adresse valide."
                );
            }}
            value={inputValue}
          ></input>
          <button type="submit">Valider email</button>
        </form>
      </div>
    </footer>
  );
}

export default Footer;
