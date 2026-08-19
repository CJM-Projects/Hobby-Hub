import CategoriesSection from "../components/CategoriesSection";
import { TakeQuizButton } from "../components/TakeQuizButton";
import { TrendingHobbies } from "../components/TrendingHobbies";

export function Home() {
  return (
    <main>
      <div className="flex flex-col items-center py-4 max-w-full">
        <div className="flex items-center">
          <div className="flex flex-col gap-5 align-center flex-shrink px-4 md:px-10 lg:px-20">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold py-2">
              Discover your next favourite hobby
            </h1>
            <p className="mx-auto max-w-6xl py-2">
              Answer a few quick questions and we'll recommend hobbies that
              match your personality, interests, budget and lifestyle.
            </p>
            <div className="">
              <TakeQuizButton />
            </div>
          </div>
          <img
            className="w-1/2 object-contain"
            src="..\src\assets\home-page-img.png"
            alt="Animated image of a women painting a picture of a mountain range"
          ></img>
        </div>
        <TrendingHobbies />
        <CategoriesSection category="Active" />
        <CategoriesSection category="Creative" />
        <CategoriesSection category="Strategic" />
      </div>
    </main>
  );
}
