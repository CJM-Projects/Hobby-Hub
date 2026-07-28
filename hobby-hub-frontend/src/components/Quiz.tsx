import { useState, useEffect } from "react";
import { QuizCard } from "./QuizCard";

export function Quiz({ questions } : QuizProp) {
    const [progress, setProgress] = useState(70);
    return (
        <div className="flex items-center gap-10 flex-col m-5">
        <div className="w-full  h-4 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-blue-500 transition-all duration-300" style={{ width: `${progress}%` }}></div>
            
        </div>
        <div>
                <QuizCard question={questions[0].question} image={questions[0].image} answers={questions[0].answers} />
            </div>
        </div>
    )
}
export type AnswerOption = {
    text: string;
    score: number;
};

export type QuizQuestion = {
    question: string;
    image: string;
    category:
    | "active"
    | "creative"
    | "relaxing"
    | "social"
    | "outdoor"
    | "strategic"
    | "price"
    | "timeCommitment";
    answers: AnswerOption[];
};

export type QuizProp = {
    questions: QuizQuestion[];
};