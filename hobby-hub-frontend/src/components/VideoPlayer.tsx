
type VideoPlayerProps = {
    url: string
}
export function VideoPlayer({ url }: VideoPlayerProps) {
    return (
        <section className="flex justify-center px-8 py-12">
            <iframe
                className="aspect-video w-full max-w-4xl rounded-2xl shadow-xl"
                src={url}
                title="YouTube video"
                allowFullScreen
            />
        </section>
    );
}

