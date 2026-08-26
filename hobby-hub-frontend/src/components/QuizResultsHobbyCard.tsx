import { Link } from "react-router-dom";
import type { QuizResult } from "../models/QuizResults";

// type QuizResultsHobbyCardProps = {
//   quizResult: QuizResult;
// };

// export function QuizResultsHobbyCard({
//   quizResult,
// }: QuizResultsHobbyCardProps) {
//   return (
//     <>
//       {quizResult ? (
//         <div className="first:border-orange-700 border-2 border-zinc-600 rounded-xl px-4 py-2 m-4 mx-8">
//           <h2 className="font-bold text-2xl text-center">
//             {quizResult.name} - {(quizResult.similarity * 100).toFixed(1)}%
//             Match
//           </h2>
//           <div className="w-full flex items-center">
//             <img
//               className="w-32 aspect-square object-cover rounded-xl shadow-xl m-1"
//               src={quizResult.hobbyImage}
//               alt={quizResult.hobbyImageAltText}
//             />

//             <div className="flex flex-col p-2">
//               <p>{quizResult.description}</p>
//               <Link
//                 className="max-w-fit text-black bg-gray-200 hover:bg-gray-100 transition-colors rounded px-2 py-1 my-2"
//                 to={`/hobby-details/${quizResult.name.toLowerCase()}`}
//               >
//                 View Details
//               </Link>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <p>Loading</p>
//       )}
//     </>
//   );
// }

type QuizResultsHobbyCardProps = {
    quizResult: QuizResult;
    isTopResult: boolean;
};

export function QuizResultsHobbyCard({
    quizResult,
    isTopResult,
}: QuizResultsHobbyCardProps) {
    const matchPercentage = (quizResult.similarity * 100).toFixed(1);

    return (
        <div
            className={`mx-auto mb-6 overflow-hidden rounded-3xl transition-all ${isTopResult
                ? "max-w-5xl border border-white/60 bg-white/60 shadow-xl backdrop-blur-xl"
                    : "max-w-4xl border border-zinc-200 bg-white shadow-md"
                }`}
        >
            {/* Top result banner */}
            {isTopResult && (
                <div className="flex items-center justify-center gap-2 border-b border-white/50 bg-white/30 px-4 py-3 text-sm font-bold text-logopurple backdrop-blur-md">
                    Your Best Match
                </div>
            )}
            <div
                className={`flex flex-col ${isTopResult ? "md:flex-row" : "sm:flex-row"
                    }`}
            >
                {/* Hobby image */}
                <div
                    className={`overflow-hidden ${isTopResult ? "md:w-1/2" : "sm:w-1/3"
                        }`}
                >
                    <img
                        src={quizResult.hobbyImage}
                        alt={quizResult.name}
                        className={`w-full object-cover ${isTopResult
                                ? "h-72 md:h-full"
                                : "h-48 sm:h-full"
                            }`}
                    />
                </div>

                {/* Hobby details */}
                <div
                    className={`flex flex-1 flex-col justify-center ${isTopResult ? "p-8 md:p-10" : "p-5"
                        }`}
                >
                    <h2
                        className={`font-bold text-zinc-900 ${isTopResult ? "text-4xl" : "text-2xl"
                            }`}
                    >
                        {quizResult.name}
                    </h2>

                    {/* Match percentage */}
                    <div className="my-4">
                        <div className="mb-2 flex items-center justify-between">
                            <p className="text-sm font-medium">
                                Your result
                            </p>

                            <span
                                className={`font-bold ${isTopResult ? "text-xl text-green-900" : "text-base text-logopurple"
                                    }`}
                            >
                                {matchPercentage}% Match
                            </span>
                        </div>

                        {/* Progress bar */}
                        <div
                            className="h-3 w-full overflow-hidden rounded-full bg-zinc-200"
                            role="progressbar"
                            aria-valuenow={Number(matchPercentage)}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            aria-label={`${quizResult.name} match percentage`}
                        >
                            <div
                                className={`h-full rounded-full  transition-all duration-500 ${isTopResult ? "bg-green-900" : "bg-logopurple"}`}
                                style={{ width: `${matchPercentage}%` }}
                            />
                        </div>
                    </div>

                    {/* Description */}
                    <p
                        className={`leading-relaxed ${isTopResult ? "text-lg" : ""
                            }`}
                    >
                        {quizResult.description}
                    </p>

                    {/* Button */}
                    <Link
                        className={`mt-5 max-w-fit rounded px-4 py-2 font-semibold transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 ${isTopResult
                                ? "bg-green-900 text-white hover:-translate-y-0.5 hover:bg-green-700 hover:shadow-md"
                                : "bg-gray-200 text-black hover:bg-gray-100"
                            }`}
                        to={`/hobby-details/${quizResult.name.toLowerCase()}`}
                    >
                        View Details →
                    </Link>
                </div>
            </div>
        </div>
    );
}