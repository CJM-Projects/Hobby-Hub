import type { Hobby } from "../models/hobby.ts";

type TitleCardProps =
    {
        hobby: Hobby
    }

export function TitleCard({ hobby }:  TitleCardProps  ) {
    return (
      <div className="flex items-center">
            <div className="w-full h-screen bg-cover bg-center
                       flex justify-center items-center"
                style={{ backgroundImage: `url(${hobby.hobbyImage})` }}>
            </div>
            <div>
                <h1 className="text-3xl font-bold">{hobby.name}</h1>
                <p className="text-zinc-600 text-sm">{hobby.description}</p>
            </div>
        
      </div>
  );
}



//TODO: functionality to get the API

export default TitleCard;