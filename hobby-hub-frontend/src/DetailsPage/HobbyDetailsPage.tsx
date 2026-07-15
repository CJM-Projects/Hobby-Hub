import  DescriptionCard from "../components/DescriptionCard";
import { FeaturesCard } from "../components/FeaturesCard";
import TitleCard from "../components/TitleCard";
import { VideoPlayer } from "../components/VideoPlayer";
import type { Hobby } from "../models/hobby";

function HobbyDetailsPage() {
    const sampleHobby:Hobby = {
        "id": 1,
        "name": "Running",
        "description": "Running is a high-impact, cardiovascular exercise characterized by an aerial phase where both feet are off the ground simultaneously",
        "youtubeVideoId": "https://www.youtube.com/embed/kVnyY17VS9Y",
        "scores": {
            "active": 5,
            "creative": 0,
            "relaxing": 2,
            "social": 1,
            "outdoor": 3,
            "strategic": 1,
            "price": 1,
            "timeCommitment": 3
        },
        "hobbyImage": "https://images.pexels.com/photos/8346669/pexels-photo-8346669.jpeg",
        "hobbyCategory": ["Active", "Outdoor"]
    }

    return (
      <div>
            <TitleCard hobby={sampleHobby} />
            <FeaturesCard hobby={sampleHobby} />
        <DescriptionCard />
            <VideoPlayer url={sampleHobby.youtubeVideoId} />
      </div>
  );
}

export default HobbyDetailsPage;






// TODO: Image, Title, Short Description Component
// TODO: Features bar Component
// TODO: Large Description and Materials Component
// TODO: Video player Component