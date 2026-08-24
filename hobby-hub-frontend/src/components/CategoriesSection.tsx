import { useEffect, useState } from "react";
import type { Category, Hobby } from "../models/hobby";
import { CategoriesCard } from "./CategoriesCard";
import { Link } from "react-router-dom";
import { API_URL } from "../config";

type CategoriesSectionProps = {
  category: Category;
};

function CategoriesSection({ category }: CategoriesSectionProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hobbies, setHobbies] = useState<Hobby[]>([]);

  useEffect(() => {
    fetch(`${API_URL}/hobby/category/${category}`)
      .then((response) => response.json())
      .then((json) => setHobbies(json))
      .then(() => setIsLoading(false))
      .catch((err) => {
        console.error(
          `Failed to fetch hobbies within category ${category}.`,
          err,
        );
        setIsLoading(false);
      });
  }, []);

  return (
    <section className="mx-auto max-w-7xl px-6 py-6">
      <div
        className={`rounded-3xl px-8 py-10 ${categoryStyles[category].background}`}
      >
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p
              className={`mb-2 text-sm font-semibold uppercase tracking-wider ${categoryStyles[category].text}`}
            >
              Explore
            </p>

            <h2 className="text-3xl font-bold text-zinc-900">
              {category} hobbies
            </h2>
          </div>

          <Link
            className={`font-semibold ${categoryStyles[category].button}`}
            to={`/category/${category.toLowerCase()}`}
          >
            View all <span aria-hidden="true">→</span>
          </Link>
        </div>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div aria-live="polite" className="flex gap-6 w-full justify-evenly">
            <div className="shrink w-1/4 min-w-[150px] opacity-100">
              <CategoriesCard hobby={hobbies[0]} category={category} />
            </div>

            <div className="shrink w-1/4 min-w-[150px] hidden sm:block sm:opacity-100 opacity-0">
              <CategoriesCard hobby={hobbies[1]} category={category} />
            </div>

            <div className="shrink w-1/4 min-w-[150px] hidden md:block md:opacity-100 opacity-0">
              <CategoriesCard hobby={hobbies[2]} category={category} />
            </div>

            <div className="shrink w-1/4 min-w-[150px] hidden lg:block lg:opacity-100 opacity-0">
              <CategoriesCard hobby={hobbies[3]} category={category} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

const categoryStyles = {
  Active: {
    background: "bg-green-50",
    text: "text-green-700",
    button: "text-green-700 hover:text-green-600",
  },

  Creative: {
    background: "bg-orange-50",
    text: "text-orange-700",
    button: "text-orange-700 hover:text-orange-600",
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

export default CategoriesSection;
