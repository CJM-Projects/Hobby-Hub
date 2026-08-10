import { Link } from "react-router-dom";
import type { Category, Hobby } from "../models/hobby";
import { CategoriesCard } from "./CategoriesCard";

type CategoriesSectionProps = {
    category: Category
}
const sampleHobby: Hobby = {
    id: 1,
    name: "Sample Hobby",
    description: "This is a sample hobby for demonstration purposes.",
    longDescription: "This is a longer description of the sample hobby, providing more details and information.",
    hobbyCategory: ["Creative"],
    scores: {
        active: 3,
        creative: 5,
        relaxing: 2,
        social: 4,
        outdoor: 1,
        strategic: 3,
        price: 2,
        timeCommitment: 3
    },
    youtubeVideoId: "",
    hobbyImage: "https://images.unsplash.com/photo-1646649853703-7645147474ba?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
};

function CategoriesSection({ category }: CategoriesSectionProps) {
    return (
        // <section>
        //     <div>
        //         <h1>{category}</h1>
        //         <Link to={`/hobby-category/${category}`}>View more → </Link>
        //     </div>

        //     <div className="">
        //         <CategoriesCard hobby={sampleHobby} />
        //         <CategoriesCard hobby={sampleHobby} />
        //         <CategoriesCard hobby={sampleHobby} />
        //         <CategoriesCard hobby={sampleHobby} />
        //     </div>


        // </section>
        <section className="mx-auto max-w-7xl px-6 py-12">
            <div className="rounded-3xl bg-green-50 px-8 py-10">

                <div className="mb-8 flex items-end justify-between">
                    <div>
                        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-green-800">
                            Explore
                        </p>

                        <h2 className="text-3xl font-bold text-zinc-900">
                            Active hobbies
                        </h2>

                        <p className="mt-2 max-w-xl text-zinc-600">
                            Get moving, try something new and find an activity you enjoy.
                        </p>
                    </div>

                    <button className="font-semibold text-green-900 hover:text-green-600">
                        View all →
                    </button>
                </div>

                <div className="grid grid-cols-1 gap-6 grid-flow-col grid-rows-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <CategoriesCard hobby={sampleHobby} />
                    <CategoriesCard hobby={sampleHobby} />
                    <CategoriesCard hobby={sampleHobby} />
                    <CategoriesCard hobby={sampleHobby} />
                </div>

            </div>
        </section>
    )
}

export default CategoriesSection;