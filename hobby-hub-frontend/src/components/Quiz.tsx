import { useState, useEffect } from "react";
import { QuizCard } from "./QuizCard";

export function Quiz({ questions } : QuizProp) {
    const [progress, setProgress] = useState(0);
    return (
        <div>
            <progress role="progressbar" max="100" value={progress}> </progress>
            <QuizCard question={questions[0].question} image={questions[0].image} answers={questions[0].answers} />
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