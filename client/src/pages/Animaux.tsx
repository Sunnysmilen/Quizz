import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import quizAnimal from "../API/Animaux.json";
import animaux from "../assets/images/animaux.jpg";

type AnimalType = {
  id: number;
  question: string;
  options: OptionsType[];
};

type OptionsType = {
  id?: number;
  text: string;
  correct: boolean;
};

export default function Animaux() {
  const [questions, setQuestions] = useState<AnimalType[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const shuffled = quizAnimal
      .slice()
      .sort(() => 1 - Math.random() - 0.5)
      .slice(0, 10);
    setQuestions(shuffled);
  }, []);

  const handleAnswer = (optionsIndex: number, isCorrect: boolean) => {
    setSelectedAnswer(optionsIndex);

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
      <h2>Animal Quiz</h2>
      <img src={animaux} alt="Animaux du monde" className="animaux" />

      <div>
        <p className="number">
          Question {currentQuestion + 1}/{questions.length}
        </p>
        <div className="options">
          <p>{questions[currentQuestion]?.question}</p>
          {questions[currentQuestion].options.map((options, id) => (
            <button
              type="button"
              key={options.id}
              className={`options ${
                selectedAnswer === id
                  ? options.correct
                    ? "correct"
                    : "incorrect"
                  : ""
              }`}
              onClick={() => handleAnswer(id, options.correct)}
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
