import { useNavigate } from "react-router";
import quiz from "../assets/images/Quiz.png";

import "../assets/styles/quiz.css";

export default function Quiz() {
  const navigate = useNavigate();
  return (
    <>
      <div className="Page_accueil">
        <img src={quiz} alt="Quiz" className="Accueil_img" />
        <div className="container_button">
          <button type="button" onClick={() => navigate("/animaux")}>
            Quiz animaux
          </button>
          <button type="button" onClick={() => navigate("/disney")}>
            Quiz disney
          </button>
          <button type="button" onClick={() => navigate("/famille")}>
            Quiz famille
          </button>
          <button type="button" onClick={() => navigate("/educatif")}>
            Quiz éducatif
          </button>
        </div>
      </div>
    </>
  );
}
