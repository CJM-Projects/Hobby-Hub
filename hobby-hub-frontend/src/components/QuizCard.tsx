import type { AnswerOption } from "./Quiz";

export function QuizCard({ question, image, answers, setAnswer } :QuizCardProps) {
    const handler = (score) => {
        setAnswer(score);
    }
    return (
        <div className="flex items-center flex-col gap-7">
            <div >
                <h1 className=" text-3xl font-bold text-slate-700">{question}</h1>
            </div>
            <div >
                <img className="w-250 h-[60vh] bg-cover bg-center rounded-md" src={image}></img>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-4">
                {answers.map((answer) => (
                    <button className="w-full max-w-100 p-4 text-center font-medium rounded-xl border border-slate-200 bg-white text-slate-700 transition-all duration-200 hover:border-indigo-500 hover:bg-indigo-50/50 hover:text-indigo-900 shadow-sm" key={answer.text} onClick={ () => handler(answer.score) }>
                    {answer.text}
                </button>
            ))}
            </div>
        </div>
    )
}

type QuizCardProps =
    {
        question: string;
        image: string;
        answers: AnswerOption[];
        setAnswer: React.Dispatch<React.SetStateAction<number>>
    }

