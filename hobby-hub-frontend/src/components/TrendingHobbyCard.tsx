import { Link } from "react-router-dom";
import type { Hobby } from "../models/hobby";

type TrendingHobbyCardProps = {
    hobby: Hobby
}

export function TrendingHobbyCard({ hobby }: TrendingHobbyCardProps) {
    return (
        <>
            {
                hobby
                ? (
                    <div className="flex items-center">
                        <img className="w-24 h-24 rounded-xl shadow-xl m-1" src={hobby.hobbyImage}></img>
                        <div className="flex flex-col p-2">
                            <h3 className="font-bold">{hobby.name}</h3>
                            <p className="text-sm">{hobby.description}</p>
                            <Link className="max-w-fit text-black bg-gray-200 hover:bg-gray-100 transition-colors rounded px-2 py-1 my-2" to={`/hobby-details/${hobby.name}`}>View Details</Link>
                        </div>
                        
                    </div>
                )
                : <p>Loading</p>
            }
        </>
    );
}