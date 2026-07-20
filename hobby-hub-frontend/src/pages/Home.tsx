import { TakeQuizButton } from "../components/TakeQuizButton";
import { TrendingHobbies } from "../components/TrendingHobbies";

export function Home() {
  return (
    <>
      <div className="flex flex-col items-center bg-zinc-100 py-4">
        <h1 className="text-5xl font-bold py-2">Hobby Hub</h1>
        <p className="mx-auto max-w-6xl px-20 py-2">
          Take a quick quiz and get personalised hobby recommendations based on
          your interests, personality and lifestyle. Explore detailed hobby
          pages, watch beginner-friendly videos and find inspiration through
          trending activities. Whether you want something creative, active or
          relaxing, we help you discover a hobby that feels right for you.
        </p>
        <TakeQuizButton />
      </div>
      <TrendingHobbies />
    </>
  );
}
