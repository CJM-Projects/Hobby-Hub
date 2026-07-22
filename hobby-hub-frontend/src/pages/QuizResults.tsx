import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import type { QuizResults } from "../models/QuizResults";
import { QuizResultsHobbyCard } from "../components/QuizResultsHobbyCard";



export function QuizResults() {
    const [searchParams] = useSearchParams();
    const [isLoading, setIsLoading] = useState(true);
    const [quizResults, setQuizResults] = useState<QuizResults>();

    useEffect(() => {
        fetch(`https://localhost:7203/Quiz/results?${searchParams.toString()}`)
            .then((response) => response.json())
            .then((json) => setQuizResults(json))
            .then(() => setIsLoading(false))
            .catch((err) => {
                console.error("Failed to fetch matching hobbies.", err);
                setIsLoading(false);
            });
    }, []);


    return (
        <>
            <h1>Quiz Results</h1>
            <div>
                {isLoading ? (<p>Loading...</p>) : (
                        quizResults!.results.map((quizResult) => (
                            <QuizResultsHobbyCard quizResult={quizResult} />
                        ))
                )}
            </div>
        </>
    );
}

