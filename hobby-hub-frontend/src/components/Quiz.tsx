import { useState, useEffect } from "react";

import { QuizCard } from "./QuizCard";

export function Quiz({ questions } : QuizProp) {
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const progress = ((currentQuestion + 1) / questions.length) * 100;

    return (
        <div className="flex items-center gap-4 flex-col m-5">
            <div className="w-full  h-4 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 transition-all duration-300" style={{ width: `${progress}%` }}></div>
            </div>
            <div className="flex w-full justify-between">
                
                <button className="max-w-100 text-xl py-2 px-4 text-center font-medium rounded-xl border border-slate-200 text-slate-700 transition-all duration-200 hover:border-indigo-500 hover:bg-indigo-50/50 hover:text-indigo-900 shadow-sm">
                     ← Prev
                </button>
                <button className="max-w-100  text-xl py-2 px-4 text-center font-medium rounded-xl border border-slate-200 bg-white text-slate-700 transition-all duration-200 hover:border-indigo-500 hover:bg-indigo-50/50 hover:text-indigo-900 shadow-sm">
                    Next → 
                </button>
            </div>
            <div>
                <QuizCard question={questions[currentQuestion].question} image={questions[currentQuestion].image} answers={questions[currentQuestion].answers} />
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