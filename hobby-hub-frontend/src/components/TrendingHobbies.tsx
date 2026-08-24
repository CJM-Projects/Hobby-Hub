import { useState, useEffect } from "react";
import { HobbyPreviewCard } from "./HobbyPreviewCard";
import type { Hobby } from "../models/hobby";
import { API_URL } from "../config";

export function TrendingHobbies() {
  const [isLoading, setIsLoading] = useState(true);
  const [index, setIndex] = useState(0);
  const [hobbies, setHobbies] = useState<Hobby[]>([]);

  useEffect(() => {
    fetch(`${API_URL}/hobby/trending`)
      .then((response) => response.json())
      .then((json) => setHobbies(json))
      .then(() => setIsLoading(false))
      .catch((err) => {
        console.error("Failed to fetch trending hobbies.", err);
        setIsLoading(false);
      });
  }, []);

  const prevHobby = () => {
    setIndex((prevIndex) => (prevIndex - 1 + hobbies.length) % hobbies.length);
  };

  const nextHobby = () => {
    setIndex((prevIndex) => (prevIndex + 1) % hobbies.length);
  };

    return (
        <section className="mx-auto w-full max-w-7xl px-6 py-10">
            <div className="rounded-3xl border-4 border-double border-amber-300 px-8 py-10">

                {/* Heading */}
                <div className="mb-8 flex items-end justify-between">
                    <div>
                        <h2 className="text-3xl font-bold text-zinc-900">
                            Trending Hobbies
                        </h2>

                        <p className="mt-2 text-zinc-600">
                            See what other hobby hunters are exploring right now.
                        </p>
                    </div>
                </div>

                {isLoading ? (
                    <p className="text-center text-zinc-600">
                        Loading...
                    </p>
                ) : (
                    <div className="flex items-center justify-center gap-6">

                        {/* Previous */}
                        <button
                            aria-label="Previous trending hobby"
                            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-2xl font-bold text-zinc-700 shadow-sm transition-all hover:-translate-x-1 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
                            onClick={prevHobby}
                        >
                            <span aria-hidden="true">←</span>
                        </button>

                        {/* Hobby */}
                        <div
                            aria-live="polite"
                            className="w-full max-w-3l"
                        >
                            <HobbyPreviewCard hobby={hobbies[index]} />
                        </div>

                        {/* Next */}
                        <button
                            aria-label="Next trending hobby"
                            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-2xl font-bold text-zinc-700 shadow-sm transition-all hover:translate-x-1 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
                            onClick={nextHobby}
                        >
                            <span aria-hidden="true">→</span>
                        </button>

                    </div>
                )}
            </div>
        </section>
    );

}
