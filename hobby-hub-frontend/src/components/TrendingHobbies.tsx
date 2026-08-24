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
    <div className="mx-auto max-w-7xl px-20 py-4 w-full">
      <h2 className="font-bold text-xl">Trending Hobbies</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="flex justify-between">
          <button
            aria-label="Previous trending hobby"
            className="font-bold text-3xl px-3 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
            onClick={prevHobby}
          >
            <span aria-hidden="true">←</span>
          </button>
          <div aria-live="polite">
            <HobbyPreviewCard hobby={hobbies[index]} />
          </div>
          <button
            aria-label="Next trending hobby"
            className="font-bold text-3xl px-3 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
            onClick={nextHobby}
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      )}
    </div>
  );
}
