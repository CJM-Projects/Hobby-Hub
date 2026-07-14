export function TitleCard() {
    return (
        <div className="flex items-center justify-between">
            <div className= "bg-[url(https://images.pexels.com/photos/8346669/pexels-photo-8346669.jpeg)]">
            </div>
        <div className = "h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100">
            <h1 className="text-3xl font-bold">Habit Name</h1>
            <p className="text-zinc-600 text-sm">Short Description</p>
        </div>

      </div>
  );
}

//TODO: functionality to get the API

export default TitleCard;