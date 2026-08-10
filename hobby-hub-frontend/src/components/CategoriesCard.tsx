
import type { Hobby } from "../models/hobby";

type CategoriesCardProps = {
    hobby: Hobby
}
export function CategoriesCard({ hobby }: CategoriesCardProps) {
    return (
        // <div className= "border-3 border-teal-900 bg-sagegreen rounded-xl px-4 py-4 m-8 w-80">
        //     <img className="h-60 object-cover rounded-xl" src={hobby.hobbyImage}></img>
        //     <p className="text-xl font-bold py-2">{ hobby.name }</p>
        // </div>
        <div className="overflow-hidden rounded-2xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="aspect-[4/3] overflow-hidden">
                <img
                    src={hobby.hobbyImage}
                    alt={hobby.name}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
            </div>

            <div className="p-5">
                <h3 className="text-xl font-bold text-zinc-900">
                    {hobby.name}
                </h3>

                <p className="mt-2 line-clamp-2 text-sm text-zinc-600">
                    {hobby.description}
                </p>

                <button className="mt-4 font-semibold text-green-600">
                    Explore hobby →
                </button>
            </div>
        </div>
    )
}



