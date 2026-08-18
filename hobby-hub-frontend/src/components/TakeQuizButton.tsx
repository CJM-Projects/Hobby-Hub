import { Link } from "react-router-dom";
export function TakeQuizButton() {
  return (
    <Link
      className="text-white bg-blue-600 hover:bg-blue-500 transition-colors rounded px-2 py-1"
      to={`/quiz`}
    >
      Take the quiz →
    </Link>
  );
}
