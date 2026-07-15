import type { Hobby } from "../models/hobby.ts";

type FeaturesCardProps = {
    hobby: Hobby
}
export function FeaturesCard({ hobby }: FeaturesCardProps) {
    return (
      <div>
            <p>Skill Level: { GetSkillLevel(hobby) }</p>
            <p>Price: { GetPrice(hobby) }</p>
            <p>Personality: { GetPersonality(hobby) }</p>
            <p>Type: { hobby.hobbyCategory } </p>
    </div>
  );
}

function GetSkillLevel(hobby: Hobby) {
    
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

function GetPrice(hobby: Hobby) {

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

function GetPersonality(hobby: Hobby) {

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
