import { Link } from "react-router-dom";
import type { Hobby } from "../models/hobby";

type HobbyPreviewCardProps = {
  hobby: Hobby;
  imgSize?: "w-24" | "w-32"
};

export function HobbyPreviewCard({ hobby, imgSize = "w-24" }: HobbyPreviewCardProps) {
  return (
    <>
      {hobby ? (
        <div className="w-full flex items-center">
          <img
            className={`${imgSize} aspect-square object-cover rounded-xl shadow-xl m-1`}
            src={hobby.hobbyImage}
          ></img>
          <div className="flex flex-col p-2">
            <h3 className="font-bold">{hobby.name}</h3>
            <p className="h-16 text-sm line-clamp-3">{hobby.description}</p>
            <button className="max-w-fit text-black bg-gray-200 hover:bg-gray-100 transition-colors rounded px-2 py-1 my-2">
              <Link to={`/hobby-details/${hobby.name}`}>View Details</Link>
            </button>
          </div>
        </div>
      ) : (
        <p>Loading</p>
      )}
    </>
  );
}
