import { Link } from "react-router-dom";
import type { QuizResult } from "../models/QuizResults";

type QuizResultsHobbyCardProps = {
    quizResult: QuizResult;
}

export function QuizResultsHobbyCard({ quizResult }: QuizResultsHobbyCardProps) {
    return (
        <>
            {quizResult ? (
                <div className="border-2 border-zinc-600 rounded-xl px-4 py-4 m-8">
                    <h2 className="font-bold text-2xl text-center">{quizResult.name} - {(quizResult.similarity * 100).toFixed(1)}% Match</h2>
                    <div className="w-full flex items-center">

                        <img className="w-32 aspect-square object-cover rounded-xl shadow-xl m-1" src={quizResult.hobbyImage} alt={quizResult.name} />

                        <div className="flex flex-col p-2">
                            <p>{quizResult.description}</p>
                            <button className="max-w-fit text-black bg-gray-200 hover:bg-gray-100 transition-colors rounded px-2 py-1 my-2">
                                <Link to={`/hobby-details/${quizResult.name}`}>View Details
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <p>Loading</p>
            )}
        </>
    )
}