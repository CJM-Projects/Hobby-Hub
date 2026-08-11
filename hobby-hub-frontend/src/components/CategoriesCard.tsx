
import { Link } from "react-router-dom";
import type { Category, Hobby } from "../models/hobby";

type CategoriesCardProps = {
    hobby: Hobby;
    category: Category
}
export function CategoriesCard({ hobby, category }: CategoriesCardProps) {
    return (
        <div className="h-full overflow-hidden rounded-2xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="aspect-[4/3] overflow-hidden">
                <img
                    src={hobby.hobbyImage}
                    alt={hobby.name}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
            </div>

            <div className="p-5">
                <h3 className="text-xl font-bold text-zinc-900">
                    {hobby.name}
                </h3>
                <button className={`mt-4 font-semibold ${categoryStyles[category].button}`}>
                    <Link to={`/hobby-details/${hobby.name.toLowerCase()}`}>Explore hobby →</Link>
                </button>
            </div>
        </div>
    )
}

const categoryStyles = {
  Active: {
    background: "bg-green-50",
    text: "text-green-600",
    button: "text-green-600 hover:text-green-500",
  },

  Creative: {
    background: "bg-orange-50",
    text: "text-orange-600",
    button: "text-orange-600 hover:text-orange-500",
  },

  Relaxing: {
    background: "bg-purple-50",
    text: "text-purple-600",
    button: "text-purple-600 hover:text-purple-500",
  },

  Social: {
    background: "bg-yellow-50",
    text: "text-yellow-600",
    button: "text-yellow-600 hover:text-yellow-500",
  },

  Outdoor: {
    background: "bg-teal-50",
    text: "text-teal-600",
    button: "text-teal-600 hover:text-teal-500",
  },

  Strategic: {
    background: "bg-blue-50",
    text: "text-blue-600",
    button: "text-blue-600 hover:text-blue-500",
  },
};


