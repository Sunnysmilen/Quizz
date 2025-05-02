import quiz from "../assets/images/Quiz.png";

import "../assets/styles/homepage.css";

export default function Homepage() {
  return (
    <>
      <div className="Page_accueil">
        <img src={quiz} alt="Quiz" className="Accueil_img" />
        <div className="container_button">
          <button type="button">Quiz animaux</button>
          <button type="button">Quiz disney</button>
          <button type="button">Quiz famille</button>
          <button type="button">Quiz éducatif</button>
        </div>
      </div>
    </>
  );
}
