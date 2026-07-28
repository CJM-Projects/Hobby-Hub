import type { AnswerOption } from "./Quiz";

export function QuizCard({ question, image, answers } :QuizCardProps) {
    return (
        <div>
            <div>
                <h1>{question}</h1>
            </div>
            <div>
                <img src={image}></img>
            </div>
            <div>
            {answers.map((answer) => (
                <button key={answer.text}>
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
    }

