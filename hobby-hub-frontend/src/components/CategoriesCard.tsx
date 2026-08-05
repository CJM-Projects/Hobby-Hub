
import type { Hobby } from "../models/hobby";

type CategoriesCardProps = {
    hobby: Hobby
}
export function CategoriesCard({ hobby }: CategoriesCardProps) {
    return (
        <div>
            <img src={hobby.hobbyImage}></img>
            <p>{ hobby.name }</p>
        </div>
    )
}

