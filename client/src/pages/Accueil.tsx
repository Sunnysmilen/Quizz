import { useNavigate } from "react-router";
import "../assets/styles/accueil.css";

import quiz from "../assets/images/Quiz.png";

export default function Accueil() {
  const navigate = useNavigate();

  return (
    <>
      <div className="home">
        <img src={quiz} alt="Quiz" className="Accueil_img" />
        <h1 className="start_title">Êtes vous prêt à jouer ?</h1>
        <button
          type="button"
          onClick={() => navigate("/quiz")}
          className="Start"
        >
          Start
        </button>
      </div>
    </>
  );
}
