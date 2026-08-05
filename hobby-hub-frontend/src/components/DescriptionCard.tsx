import type { Hobby } from "../models/hobby.ts";

type DescriptionCardProps = {
    hobby: Hobby
}
function DescriptionCard({ hobby }: DescriptionCardProps) {
    return (
        <section className="mx-auto max-w-6xl px-8 py-12">
            <h2 className="mb-6 text-4xl font-bold text-black underline underline-offset-2">
                Description
            </h2>

            <p className="text-lg leading-8 text-zinc-700">
                {hobby.longDescription}
            </p>
        </section>
  );
}

export default DescriptionCard;