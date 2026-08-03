import type { AnswerOption } from "./Quiz";

export function QuizCard({
  question,
  image,
  answers,
  selectedScore,
  onAnswerSelected,
}: QuizCardProps) {
  return (
    <div className="flex items-center flex-col gap-7">
      <div>
        <h1 className=" text-3xl font-bold text-slate-700">{question}</h1>
      </div>
      <div>
        <img
          className="w-250 h-[60vh] object-cover object-center rounded-md"
          src={image}
          alt={question}
        ></img>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-4">
        {answers.map((answer) => {
          const isSelected = answer.score === selectedScore;

          return (
            <button
              className={`w-full max-w-100 p-4 text-center font-medium rounded-xl border transition-all duration-200 shadow-sm ${
                isSelected
                  ? "border-indigo-500 bg-indigo-50 text-indigo-900 ring-2 ring-indigo-500"
                  : "border-slate-200 bg-white text-slate-700 hover:border-indigo-500 hover:bg-indigo-50/50 hover:text-indigo-900"
              }`}
              key={answer.text}
              onClick={() => onAnswerSelected(answer.score)}
            >
              {answer.text}
            </button>
          );
        })}
      </div>
    </div>
  );
}

type QuizCardProps = {
  question: string;
  image: string;
  answers: AnswerOption[];
  selectedScore: number | null;
  onAnswerSelected: (score: number) => void;
};
