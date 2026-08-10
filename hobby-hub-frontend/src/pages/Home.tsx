import CategoriesSection from "../components/CategoriesSection";
import { TakeQuizButton } from "../components/TakeQuizButton";
import { TrendingHobbies } from "../components/TrendingHobbies";

export function Home() {
    return (
        <>
            <div className="flex flex-col items-center py-4 max-w-full">
                <div className="flex items-center">
                    <div className="flex flex-col gap-5 align-center">
                        <h1 className="text-5xl font-bold px-20 py-2">Discover your next favourite hobby</h1>
                        <p className="mx-auto max-w-6xl px-20 py-2">
                            Answer a few quick questions and we'll recommend hobbies that match your personality, interests, budget and lifestyle.
                        </p>
                        <div className="px-20">
                            <TakeQuizButton />
                        </div>
                    </div>
                    <img className="w-full max-w-md md:max-w-lg lg:max-w-xl object-contain" src="..\src\assets\home-page-img.png"></img>
                </div>
                <TrendingHobbies />
                <CategoriesSection category="Creative" />

            </div>

        </>
    );
}
