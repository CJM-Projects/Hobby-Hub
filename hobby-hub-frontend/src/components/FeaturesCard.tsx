import type { Hobby } from "../models/hobby.ts";

type FeaturesCardProps = {
    hobby: Hobby
}
export function FeaturesCard({ hobby }: FeaturesCardProps) {
    return (
        <div className="w-full bg-white py-4 px-7 shadow-md">
            <div className="grid grid-cols-4 text-center">
                <p className="font-bold text-zinc-600">
                    Skill Level:{" "}
                    <span className="font-normal">{GetSkillLevel(hobby)}</span>
                </p>

                <p className="font-bold text-zinc-600">
                    Price:{" "}
                    <span className="font-normal">{GetPrice(hobby)}</span>
                </p>

                <p className="font-bold text-zinc-600">
                    Personality:{" "}
                    <span className="font-normal">{GetPersonality(hobby)}</span>
                </p>

                <p className="font-bold text-zinc-600">
                    Type:{" "}
                    <span className="font-normal">{hobby.hobbyCategory.join(", ")}</span>
                </p>
            </div>
        </div>
    );
}

export function GetSkillLevel(hobby: Hobby) {
    
    if (hobby.scores.strategic === 1 || hobby.scores.strategic === 2 ) {
            return "Beginner";
    }
    if (hobby.scores.strategic === 3 || hobby.scores.strategic === 4) {
        return "Intermediate";
    }
    if (hobby.scores.strategic === 5) {
        return "Advanced";
    }
    
}

export function GetPrice(hobby: Hobby) {

    if (hobby.scores.price === 1 || hobby.scores.price === 2) {
        return "£";
    }
    if (hobby.scores.price === 3 || hobby.scores.price === 4) {
        return "££";
    }
    if (hobby.scores.price === 5) {
        return "£££";
    }

}

export function GetPersonality(hobby: Hobby) {

    if (hobby.scores.social === 1 || hobby.scores.social === 2) {
        return "Introvert";
    }
    if (hobby.scores.social === 3 || hobby.scores.social === 4) {
        return "Ambivert";
    }
    if (hobby.scores.social === 5) {
        return "Extrovert";
    }
}
