import { Link } from "react-router-dom";
import type { QuizResult } from "../models/QuizResults";

type QuizResultsHobbyCardProps = {
    quizResult: QuizResult;
}

export function QuizResultsHobbyCard({ quizResult }: QuizResultsHobbyCardProps) {
    return (
        <>
        { quizResult ? (
            <div>
                <h2>{quizResult.name}</h2>
                <p>{quizResult.similarity}% Match</p>
                <p>{quizResult.description}</p>
                    <img src={quizResult.hobbyImage} alt={quizResult.name} />
                <button className="max-w-fit text-black bg-gray-200 hover:bg-gray-100 transition-colors rounded px-2 py-1 my-2">
                        <Link to={`/hobby-details/${quizResult.name}`}>View Details
                        </Link>
                </button>
            </div>
        ) : (
            <p>Loading</p>
            )}
        </>
    )
}