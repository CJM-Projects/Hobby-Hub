import { useEffect, useState } from "react";
import  DescriptionCard from "../components/DescriptionCard";
import { FeaturesCard } from "../components/FeaturesCard";
import TitleCard from "../components/TitleCard";
import { VideoPlayer } from "../components/VideoPlayer";
import type { Hobby } from "../models/hobby";
import { useParams } from "react-router"

function HobbyDetailsPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [hobby, setHobby] = useState<Hobby>();
    const params = useParams();

    useEffect(() => {
        try {
            fetch(`https://localhost:7203/hobby/${params.hobbyName}`)
                .then(response => response.json())
                .then(json => setHobby(json))
                .then(() => setIsLoading(false))
        } catch (error) {
            console.log(error)
        }
    }, [])

    return (
      <div>
            {
                isLoading
                ? <p>Loading...</p>
                : <>
                    <TitleCard hobby={hobby} />
                    <FeaturesCard hobby={hobby} />
                    <DescriptionCard />
                    <VideoPlayer url={hobby.youtubeVideoId} />
                  </>
            }
      </div>
  );
}

export default HobbyDetailsPage;

// TODO: Image, Title, Short Description Component
// TODO: Features bar Component
// TODO: Large Description and Materials Component
// TODO: Video player Component