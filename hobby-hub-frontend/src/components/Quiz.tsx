import { useState } from "react";
import { QuizCard } from "./QuizCard";
import { useNavigate } from "react-router-dom";

const initialAnswers: QuizAnswers = {
  active: null,
  creative: null,
  relaxing: null,
  social: null,
  outdoor: null,
  strategic: null,
  price: null,
  timeCommitment: null,
};

export function Quiz({ questions }: QuizProp) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>(initialAnswers);
  const navigate = useNavigate();

  const currentCategory = questions[currentQuestion].category;
  const hasAnsweredCurrent = answers[currentCategory] !== null;
  const selectedScore = answers[currentCategory];
  const isLastQuestion = currentQuestion === questions.length - 1;
  const progress = (currentQuestion / questions.length) * 100;

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prevIndex) => prevIndex - 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prevIndex) => prevIndex + 1);
    }
  };

  const handleAnswerSelected = (score: number) => {
    const category = questions[currentQuestion].category;
    const updatedAnswers = { ...answers, [category]: score };
    setAnswers(updatedAnswers);

    if (isLastQuestion) {
      const allAnswered = Object.values(updatedAnswers).every(
        (v) => v !== null,
      );
      if (allAnswered) {
        const params = new URLSearchParams(
          Object.entries(updatedAnswers).map(([key, value]) => [
            key,
            String(value),
          ]),
        );
        navigate(`/quiz-results?${params.toString()}`);
        return;
      }
    }

    nextQuestion();
  };

  return (
    <div className="flex items-center gap-3 flex-col m-5">
      <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-500 transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="flex w-full justify-between">
        <button
          className="max-w-100 text-xl py-1 px-4 text-center font-medium rounded-xl border border-slate-200 text-slate-700 transition-all duration-200 hover:border-indigo-500 hover:bg-indigo-50/50 hover:text-indigo-900 shadow-sm disabled:cursor-not-allowed disabled:bg-zinc-300 disabled:border-transparent disabled:text-black"
          onClick={prevQuestion}
          disabled={currentQuestion === 0}
        >
          ← Prev
        </button>
        <button
          className="max-w-100 text-xl py-1 px-4 text-center font-medium rounded-xl border border-slate-200 bg-white text-slate-700 transition-all duration-200 hover:border-indigo-500 hover:bg-indigo-50/50 hover:text-indigo-900 shadow-sm disabled:cursor-not-allowed disabled:bg-zinc-300 disabled:border-transparent disabled:text-black"
          onClick={nextQuestion}
          disabled={isLastQuestion || !hasAnsweredCurrent}
        >
          Next →
        </button>
      </div>
      <div>
        <QuizCard
          key={currentQuestion}
          question={questions[currentQuestion].question}
          image={questions[currentQuestion].image}
          answers={questions[currentQuestion].answers}
          selectedScore={selectedScore}
          onAnswerSelected={handleAnswerSelected}
        />
      </div>
    </div>
  );
}
export type AnswerOption = {
  text: string;
  score: number;
};

export type QuizCategory =
  | "active"
  | "creative"
  | "relaxing"
  | "social"
  | "outdoor"
  | "strategic"
  | "price"
  | "timeCommitment";

export type QuizQuestion = {
  question: string;
  image: string;
  category: QuizCategory;
  answers: AnswerOption[];
};

export type QuizProp = {
  questions: QuizQuestion[];
};

type QuizAnswers = Record<QuizCategory, number | null>;
