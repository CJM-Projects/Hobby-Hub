import { Link } from "react-router-dom";
import notFoundImg from "../assets/404.png";

export function NotFound() {
  return (
    <div className="flex justify-between items-center px-5">
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-4xl">Uh Oh. This page doesn't exist!</h1>
        <h2 className="text-2xl">
          We're sorry, we can't find the page you're looking for.
        </h2>
        <Link
          className="text-white bg-blue-600 hover:bg-blue-500 transition-colors rounded px-2 py-1"
          to="/"
        >
          Return home
        </Link>
      </div>
      <img
        className="h-[80vh] object-scale-down object-center"
        src={notFoundImg}
      ></img>
    </div>
  );
}
