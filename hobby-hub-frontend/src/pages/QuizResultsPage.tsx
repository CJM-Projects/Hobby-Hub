import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router";
import type { QuizResults } from "../models/QuizResults";
import { QuizResultsHobbyCard } from "../components/QuizResultsHobbyCard";



export function QuizResultsPage() {
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
            <h1 className="text-5xl font-bold py-2 text-center">Quiz Results</h1>
            <div>
                {isLoading ? (<p>Loading...</p>) : (
                        quizResults!.results.map((quizResult) => (
                            <QuizResultsHobbyCard quizResult={quizResult} />
                        ))
                )}
            </div>
            <p className="mx-10">Thank you for completing the Hobby Hub quiz to find your new hobby! For more inspiration, use our Browse All hobbies page.</p>

            <button className="max-w-fit text-black bg-gray-200 hover:bg-gray-100 transition-colors rounded px-2 py-1 my-5 mx-auto">
                <Link to={`/browse-all`}>Browse All Hobbies
                </Link>
            </button>
        </>
    );
}

