import { useLocation, useNavigate } from "react-router";

export default function Resultats() {
  const navigate = useNavigate();
  const location = useLocation();
  const score = location.state?.score ?? 0;
  return (
    <>
      <div>
        <h2>Score finale : {score} / 10</h2>
        <button type="button" onClick={() => navigate("/quiz")}>
          Rejouer ?
        </button>
        <p>
          {/* {questions}
          {isCorrect} */}
        </p>
      </div>
    </>
  );
}
