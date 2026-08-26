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
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex items-center gap-2 flex-col m-5">
      <div className="w-full h-2.5 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-500 transition-all duration-300"
          style={{ width: `${progress}%` }}
          aria-label={`Question ${currentQuestion + 1} of ${questions.length}`}
        ></div>
      </div>
      <div className="flex w-full justify-between">
        <button
          className="max-w-100 h-fit text-xl py-1 px-4 text-center font-medium rounded-xl border border-slate-200 text-slate-700 transition-all duration-200 hover:border-indigo-500 hover:bg-indigo-50/50 hover:text-indigo-900 shadow-sm disabled:cursor-not-allowed disabled:bg-zinc-300 disabled:border-transparent disabled:text-black"
          onClick={prevQuestion}
          disabled={currentQuestion === 0}
          aria-label="Previous question"
        >
          <span aria-hidden="true">←</span> Prev
        </button>
        <div className="text-center">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-700">
            {questions[currentQuestion].question}
          </h1>
        </div>
        <button
          className="max-w-100 h-fit text-xl py-1 px-4 text-center font-medium rounded-xl border border-slate-200 bg-white text-slate-700 transition-all duration-200 hover:border-indigo-500 hover:bg-indigo-50/50 hover:text-indigo-900 shadow-sm disabled:cursor-not-allowed disabled:bg-zinc-300 disabled:border-transparent disabled:text-black"
          onClick={nextQuestion}
          disabled={isLastQuestion || !hasAnsweredCurrent}
          aria-label="Next question"
        >
          Next <span aria-hidden="true">→</span>
        </button>
      </div>
      <div>
        <QuizCard
          key={currentQuestion}
          image={questions[currentQuestion].image}
          altText={questions[currentQuestion].altText}
          answers={questions[currentQuestion].answers}
          selectedScore={selectedScore}
          onAnswerSelected={handleAnswerSelected}
        />
      </div>
    </div>
  );
}
export type AnswerOption = {
  emoji: string;
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
  altText: string;
  category: QuizCategory;
  answers: AnswerOption[];
};

export type QuizProp = {
  questions: QuizQuestion[];
};

type QuizAnswers = Record<QuizCategory, number | null>;
