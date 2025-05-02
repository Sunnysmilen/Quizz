import erreur from "../assets/images/Erreur404.png";
import "../assets/styles/wrong.css";

export default function Wrong() {
  return (
    <>
      <div className="wrong">
        <img src={erreur} alt="Page erreur" className="Erreur" />
      </div>
    </>
  );
}
