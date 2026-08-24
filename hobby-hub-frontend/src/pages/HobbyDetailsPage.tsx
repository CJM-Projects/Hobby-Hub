import { useEffect, useState } from "react";
import DescriptionCard from "../components/DescriptionCard";
import { FeaturesCard } from "../components/FeaturesCard";
import TitleCard from "../components/TitleCard";
import { VideoPlayer } from "../components/VideoPlayer";
import type { Hobby } from "../models/hobby";
import { useParams } from "react-router";
import { API_URL } from "../config";

function HobbyDetailsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [hobby, setHobby] = useState<Hobby>();
  const params = useParams();

  useEffect(() => {
    try {
      fetch(`${API_URL}/hobby/${params.hobbyName}`)
        .then((response) => response.json())
        .then((json) => setHobby(json))
        .then(() => setIsLoading(false));
    } catch (error) {
      console.log(error);
    }
  }, []);

  if (isLoading) {
      return (
          <main>
            <div>Loading...</div>
          </main>
      );
  }

  if (!hobby) {
      return (
          <main>
            <div>Hobby not found.</div>
          </main>
      );
  }

  return (
    <main>
      <TitleCard hobby={hobby} />
      <FeaturesCard hobby={hobby} />
      <DescriptionCard hobby={hobby} />
      <VideoPlayer
        url={hobby.youtubeVideoId}
        title={`Youtube video about ${hobby.name}`}
      />
    </main>
  );
}

export default HobbyDetailsPage;
