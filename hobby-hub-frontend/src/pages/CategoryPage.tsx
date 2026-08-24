import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router";
import type { Hobby } from "../models/hobby";
import { HobbyPreviewCard } from "../components/HobbyPreviewCard";
import { TakeQuizButton } from "../components/TakeQuizButton";

const VALID_CATEGORY = [
  "Active",
  "Creative",
  "Relaxing",
  "Social",
  "Outdoor",
  "Strategic",
] as const;

export function CategoryPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [hobbies, setHobbies] = useState<Hobby[]>();

  const { category } = useParams<{ category: string }>();
  const matchedCategory = VALID_CATEGORY.find(
    (c) => c.toLowerCase() === category?.toLowerCase(),
  );

  useEffect(() => {
    fetch(`https://localhost:7203/hobby/category/${category}`)
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
    <>
      {!matchedCategory ? (
        <Navigate to="/not-found" replace />
      ) : (
        <main>
          <h1 className="text-5xl font-bold py-2 text-center">
            {matchedCategory}
          </h1>
          <p className="px-4 m-8 text-center">
            If you're looking for something {category}, take a look at the
            hobbies below!
          </p>
          <div className="px-4 m-8">
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              hobbies!.map((hobby) => <HobbyPreviewCard hobby={hobby} />)
            )}
          </div>
          <p className="mx-10 text-center m-2">
            Looking for a personalised recommendation? Take our Quiz
          </p>
          <div className="flex justify-center m-4">
            <TakeQuizButton />
          </div>
        </main>
      )}
    </>
  );
}
