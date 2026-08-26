import type { AnswerOption } from "./Quiz";

export function QuizCard({
    image,
  altText,
  answers,
  selectedScore,
  onAnswerSelected,
}: QuizCardProps) {
  return (
    <div className="flex items-center flex-col gap-3">
      <div>
        <img
          className="w-200 h-[50vh] object-cover object-center rounded-md"
          src={image}
          alt={altText}
        ></img>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-3">
        {answers.map((answer) => {
          const isSelected = answer.score === selectedScore;

          return (
            <button
              className={`w-full max-w-110 p-3 text-center font-medium rounded-xl border transition-all duration-200 shadow-sm ${
                isSelected
                  ? "border-indigo-500 bg-indigo-50 text-indigo-900 ring-2 ring-indigo-500"
                  : "border-slate-200 bg-white text-slate-700 hover:border-indigo-500 hover:bg-indigo-50/50 hover:text-indigo-900"
              }`}
              key={answer.text}
              onClick={() => onAnswerSelected(answer.score)}
            >
                  <span aria-hidden="true">{answer.emoji}</span> {answer.text}
            </button>
          );
        })}
      </div>
    </div>
  );
}

type QuizCardProps = {
  image: string;
  altText: string;
  answers: AnswerOption[];
  selectedScore: number | null;
  onAnswerSelected: (score: number) => void;
};
