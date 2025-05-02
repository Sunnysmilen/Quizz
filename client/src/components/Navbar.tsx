import { NavLink } from "react-router";

import "../assets/styles/navbar.css";

export default function Navbar() {
  return (
    <>
      <nav>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/quiz">Quiz</NavLink>
        <NavLink to="/Resultats">Résultats</NavLink>
      </nav>
    </>
  );
}
