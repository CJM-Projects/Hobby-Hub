import { Link } from "react-router-dom";
export function TakeQuizButton() {
  return (
    <button className="text-white bg-blue-600 hover:bg-blue-500 transition-colors rounded px-2 py-1">
          <Link to={`/quiz`}> Take the quiz → </Link>
    </button>
  );
}
