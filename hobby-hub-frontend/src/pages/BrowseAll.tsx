import { useState, useEffect } from "react";
import type { Category, Hobby } from "../models/hobby";
import { HobbyPreviewCard } from "../components/HobbyPreviewCard";
import {
  GetPersonality,
  GetPrice,
  GetSkillLevel,
} from "../components/FeaturesCard";
import { Link } from "react-router-dom";
import { TakeQuizButton } from "../components/TakeQuizButton";

export function BrowseAll() {
  const [isLoading, setIsLoading] = useState(true);
  const [hobbies, setHobbies] = useState<Hobby[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedPrices, setSelectedPrices] = useState<string[]>([]);
  const [selectedSkillLevels, setSelectedSkillLevels] = useState<string[]>([]);
  const [selectedPersonalities, setSelectedPersonalities] = useState<string[]>(
    [],
  );

  const filteredHobbies = hobbies.filter((hobby) => {
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.some((cat) =>
        hobby.hobbyCategory.includes(cat as Category),
      );

    const matchesPrice =
      selectedPrices.length === 0 || selectedPrices.includes(GetPrice(hobby)!);

    const matchesSkillLevel =
      selectedSkillLevels.length === 0 ||
      selectedSkillLevels.includes(GetSkillLevel(hobby)!);

    const matchesPersonality =
      selectedPersonalities.length === 0 ||
      selectedPersonalities.includes(GetPersonality(hobby)!);

    return (
      matchesCategory && matchesPrice && matchesSkillLevel && matchesPersonality
    );
  });

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
    <div className="flex max-w-6xl px-10 py-4">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="flex flex-col w-2xs px-2 me-12 border-r-2">
            <h2 className="font-bold text-xl">Filters</h2>
            <details open>
              <summary>Catagory</summary>
              <ul>
                {categories.map((category) => (
                  <li key={category}>
                    <label>
                      <input
                        className="mx-1.5"
                        type="checkbox"
                        value={category}
                        checked={selectedCategories.includes(category)}
                        onChange={(e) => {
                          const value = e.target.value;
                          setSelectedCategories((prev) =>
                            prev.includes(value)
                              ? prev.filter((c) => c !== value)
                              : [...prev, value],
                          );
                        }}
                      />
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
                      <input
                        className="mx-1.5"
                        type="checkbox"
                        value={price}
                        checked={selectedPrices.includes(price)}
                        onChange={(e) => {
                          const value = e.target.value;
                          setSelectedPrices((prev) =>
                            prev.includes(value)
                              ? prev.filter((p) => p !== value)
                              : [...prev, value],
                          );
                        }}
                      />
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
                      <input
                        className="mx-1.5"
                        type="checkbox"
                        value={skillLevel}
                        checked={selectedSkillLevels.includes(skillLevel)}
                        onChange={(e) => {
                          const value = e.target.value;
                          setSelectedSkillLevels((prev) =>
                            prev.includes(value)
                              ? prev.filter((s) => s !== value)
                              : [...prev, value],
                          );
                        }}
                      />
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
                      <input
                        className="mx-1.5"
                        type="checkbox"
                        value={personality}
                        checked={selectedPersonalities.includes(personality)}
                        onChange={(e) => {
                          const value = e.target.value;
                          setSelectedPersonalities((prev) =>
                            prev.includes(value)
                              ? prev.filter((p) => p !== value)
                              : [...prev, value],
                          );
                        }}
                      />
                      {personality}
                    </label>
                  </li>
                ))}
              </ul>
            </details>
          </div>
          <div className="w-full">
            <h2 className="font-bold text-xl">Browse All</h2>
            <div className="flex flex-col">
              {filteredHobbies.length === 0 ? (
                <div className="flex flex-col items-center">
                  <p className="w-full text-lg py-2">
                    Sorry! We have no hobbies with these filters, please try
                    again or complete our quiz.
                  </p>
                  <div className="">
                    <TakeQuizButton />
                  </div>
                </div>
              ) : (
                filteredHobbies.map((hobby) => (
                  <HobbyPreviewCard key={hobby.id} hobby={hobby} imgSize="30" />
                ))
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
