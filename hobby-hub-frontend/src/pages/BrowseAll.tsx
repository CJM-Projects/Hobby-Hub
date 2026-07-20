import { useState, useEffect } from "react";
import type { Hobby } from "../models/hobby";
import { HobbyPreviewCard } from "../components/HobbyPreviewCard";

export function BrowseAll() {
  const [isLoading, setIsLoading] = useState(true);
  const [hobbies, setHobbies] = useState<Hobby[]>([]);
  const categories = [
    "Active",
    "Creative",
    "Relaxing",
    "Social",
    "Outdoor",
    "Strategic",
  ];
  const prices = ["£", "££", "£££"];
  const skillLevels = ["Beginner", "Intermediate", "Advanced"];
  const personalities = ["Introvert", "Ambivert", "Extrovert"];

  useEffect(() => {
    fetch(`https://localhost:7203/hobby`)
      .then((response) => response.json())
      .then((json) => setHobbies(json))
      .then(() => setIsLoading(false))
      .catch((err) => {
        console.error("Failed to fetch all hobbies.", err);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="flex mx-auto max-w-6xl px-10 py-4">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="flex flex-col w-xl px-2 me-12 border-r-2">
            <h2 className="font-bold text-xl">Filters</h2>
            <details open>
              <summary>Catagory</summary>
              <ul>
                {categories.map((category) => (
                  <li key={category}>
                    <label>
                      <input className="mx-1.5" type="checkbox" />
                      {category}
                    </label>
                  </li>
                ))}
              </ul>
            </details>
            <details open>
              <summary>Price</summary>
              <ul>
                {prices.map((price) => (
                  <li key={price}>
                    <label>
                      <input className="mx-1.5" type="checkbox" />
                      {price}
                    </label>
                  </li>
                ))}
              </ul>
            </details>
            <details open>
              <summary>Skill Level</summary>
              <ul>
                {skillLevels.map((skillLevel) => (
                  <li key={skillLevel}>
                    <label>
                      <input className="mx-1.5" type="checkbox" />
                      {skillLevel}
                    </label>
                  </li>
                ))}
              </ul>
            </details>
            <details open>
              <summary>Personality</summary>
              <ul>
                {personalities.map((personality) => (
                  <li key={personality}>
                    <label>
                      <input className="mx-1.5" type="checkbox" />
                      {personality}
                    </label>
                  </li>
                ))}
              </ul>
            </details>
          </div>
          <div>
            <h2 className="font-bold text-xl">Browse All</h2>
            <div className="flex flex-col justify-between">
              {hobbies.map((hobby) => (
                <HobbyPreviewCard key={hobby.id} hobby={hobby} imgSize="30" />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
