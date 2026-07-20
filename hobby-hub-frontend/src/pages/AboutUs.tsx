import { VideoPlayer } from "../components/VideoPlayer";

export function AboutUs() {
  return (
    <div>
      <div className="bg-zinc-100 py-4">
        <h1 className="mb-4 font-bold text-5xl py-2 text-center">About Us</h1>
        <div className="mx-auto max-w-6xl px-20 py-2">
          <p>
            We created this website to make it easier for people to discover new
            hobbies that genuinely fit their interests, personality and
            lifestyle. Whether someone wants to be more creative, more active or
            simply try something different, we wanted to build a simple,
            friendly way to explore new possibilities.
          </p>
          <br />
          <p>
            We're a small team of developers — Chris, Jodie and Marcus — working
            together to design and build tool that feels welcoming, accessible
            and fun to use. Our goal was to take the stress out of choosing a
            new hobby by offering personalised quiz results, detailed hobby
            pages and an easy-to-use search experience.
          </p>
          <br />
          <p>
            The site includes a quick quiz that recommends hobbies based on your
            preferences, a library of hobby pages with helpful information, and
            a trending section to spark inspiration. Everything is designed with
            accessibility and clarity in mind so that anyone can find something
            new to enjoy.
          </p>
          <br />
          <p>
            We hope this project helps you discover a hobby that brings you joy.
          </p>
        </div>
      </div>
      <br />
      <div className="mx-auto max-w-6xl px-20 py-2">
        <h2 className="font-bold text-3xl">Why hobbies are important:</h2>
        <VideoPlayer
          url={"https://www.youtube.com/embed/7b9THb3cQbg"}
        ></VideoPlayer>
        <div>
          <p>
            Research shows that hobbies are vital for well-being. A landmark
            study published in
            <span>
              {" "}
              <a
                href="https://www.nature.com/articles/s41591-023-02506-1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Read the Nature Medicine study (opens in a new tab)"
                className="underline hover:no-underline text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded"
              >
                Nature Medicine
              </a>
            </span>{" "}
            found that engaging in hobbies is tied to a 29% reduction in
            all-cause mortality risk, while also significantly boosting
            happiness, life satisfaction, and lowering depressive symptoms
            across global populations.
          </p>
          <br></br>
        </div>
      </div>
    </div>
  );
}
