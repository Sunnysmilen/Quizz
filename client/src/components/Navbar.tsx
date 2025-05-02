import { NavLink } from "react-router";

import "../assets/styles/navbar.css";

export default function Navbar() {
  return (
    <>
      <nav>
        <NavLink to={"../pages/Homepage.tsx"}>Homepage</NavLink>
        <NavLink to={"../pages/Resultats.tsx"}>Resultats</NavLink>
      </nav>
    </>
  );
}
