import { useState, useEffect } from "react";
import { TrendingHobbyCard } from "./TrendingHobbyCard";
import type { Hobby } from "../models/hobby";

export function TrendingHobbies() {
  const [isLoading, setIsLoading] = useState(true);
  const [index, setIndex] = useState(0);
  const [hobbies, setHobbies] = useState<Hobby[]>([]);

  useEffect(() => {
    fetch(`https://localhost:7203/hobby/trending`)
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
    <div className="px-3">
      <h2 className="font-bold text-xl">Trending Hobbies</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="flex justify-between">
          <button className="font-bold text-3xl" onClick={prevHobby}>
            ←
          </button>
          <TrendingHobbyCard hobby={hobbies[index]} />
          <button className="font-bold text-3xl" onClick={nextHobby}>
            →
          </button>
        </div>
      )}
    </div>
  );
}
