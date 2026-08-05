import { CategoriesCard } from "../components/CategoriesCard";
import { TakeQuizButton } from "../components/TakeQuizButton";
import { TrendingHobbies } from "../components/TrendingHobbies";

export function Home() {
  return (
    <>
      <div className="flex items-center py-4">
      <div className="flex flex-col gap-5 align-center">
                  <h1 className="text-5xl font-bold px-20 py-2">Discover your next favourite hobby</h1>
        <p className="mx-auto max-w-6xl px-20 py-2">
                      Answer a few quick questions and we'll recommend hobbies that match your personality, interests, budget and lifestyle.
                  </p>
        <div className="px-20">
                      <TakeQuizButton />
                  </div>
              </div>
              <img className="h-[80vh] object-scale-down" src="..\src\assets\home-page-img.png"></img>
      </div>
          <TrendingHobbies />
          <CategoriesCard />
    </>
  );
}
