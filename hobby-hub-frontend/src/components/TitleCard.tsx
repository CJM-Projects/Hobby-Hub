import type { Hobby } from "../models/hobby.ts";

type TitleCardProps =
    {
        hobby: Hobby
    }

export function TitleCard({ hobby }:  TitleCardProps  ) {
    return (
        <div className="relative w-full h-[60vh] bg-cover bg-center"
            style={{ backgroundImage: `url(${hobby.hobbyImage})` }}>
            <div className="absolute inset-0 bg-white/20 backdrop-brightness-45" />
            <div className="absolute inset-0 flex items-center justify-center px-6">
                <div className="max-w-2xl rounded-3xl border border-white/20 bg-white/20 p-8 text-white shadow-2xl backdrop-blur-lg">
                    <h1 className="mb-4 text-5xl font-bold text-center ">
                        {hobby.name}
                    </h1>

                    <p className="text-xl leading-relaxed font-bold text-center ">
                        {hobby.description}
                    </p>
                </div>
            </div>
        
      </div>
  );
}



export default TitleCard;