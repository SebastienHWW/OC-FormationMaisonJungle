import "../styles/Banner.css";
import logo from "../assets/logo.png";

function Banner() {
  return (
    <div className="lmj-banner">
      <h1 className="lmj-title">
        <img src={logo} alt="La maison jungle" className="lmj-logo" />
        La Maison Jungle
      </h1>
    </div>
  );
}

export default Banner;
