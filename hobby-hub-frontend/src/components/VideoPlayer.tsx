
type VideoPlayerProps = {
    url: string
}
export function VideoPlayer({ url }: VideoPlayerProps) {
  return (
      <div>
          <iframe width="420" height="315" src={url}></iframe>
      </div>
  );
}

