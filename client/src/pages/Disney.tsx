import "../assets/styles/disney.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import quizDisney from "../API/Disney.json";
import disney from "../assets/images/disney.jpeg";

type DisneyType = {
  id: number;
  question: string;
  options: OptionsType[];
};

type OptionsType = {
  id?: number;
  text: string;
  correct: boolean;
};

export default function Disney() {
  const [questions, setQuestions] = useState<DisneyType[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const shuffled = quizDisney
      .slice()
      .sort(() => 1 - Math.random() - 0.5)
      .slice(0, 10);
    setQuestions(shuffled);
  }, []);

  const handleAnswer = (optionsId: number, isCorrect: boolean) => {
    setSelectedAnswer(optionsId);

    if (isCorrect) setScore((prev) => prev + 1);

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion((prev) => prev + 1);
        setSelectedAnswer(null);
      } else {
        navigate("/resultats", { state: { score } });
      }
    }, 1500);
  };
  if (questions.length === 0) return <div>Chargement ...</div>;

  return (
    <>
      <h2>Disney Quiz</h2>
      <img src={disney} alt="Personnages disney" className="Disney" />

      <div>
        <p className="number">
          Question {currentQuestion + 1}/{questions.length}
        </p>
        <div className="options">
          <p>{questions[currentQuestion]?.question}</p>
          {questions[currentQuestion].options.map((options, optionsId) => (
            <button
              type="button"
              key={options.id}
              className={`options ${
                selectedAnswer === optionsId
                  ? options.correct
                    ? "correct"
                    : "incorrect"
                  : ""
              }`}
              onClick={() => handleAnswer(optionsId, options.correct)}
              disabled={selectedAnswer !== null}
            >
              {options.text}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
