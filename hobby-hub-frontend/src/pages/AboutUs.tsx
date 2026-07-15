export function AboutUs() {
    return (
        <div>
            <div className="bg-zinc-100">
                <div className="mb-4 font-bold text-5xl py-2 text-heading text-center">
                    <h1>About Us</h1>
                </div>
                <div className="px-50 py-2 text-left">
                    <p>
                        We created this website to make it easier for people to discover new hobbies that genuinely fit their interests, personality and lifestyle. Whether someone wants to be more creative, more active or simply try something different, we wanted to build a simple, friendly way to explore new possibilities.
                    </p>
                    <br />
                    <p>
                        We’re a small team of developers — Chris, Jodie and Marcus — working together to design and build tool that feels welcoming, accessible and fun to use. Our goal was to take the stress out of choosing a new hobby by offering personalised quiz results, detailed hobby pages and an easy‑to‑use search experience.
                    </p>
                    <br />
                    <p>
                        The site includes a quick quiz that recommends hobbies based on your preferences, a library of hobby pages with helpful information, and a trending section to spark inspiration. Everything is designed with accessibility and clarity in mind so that anyone can find something new to enjoy.
                    </p>
                    <br />
                    <p>
                        We hope this project helps you discover a hobby that brings you joy.
                    </p>
                </div>
            </div>

            <div className="px-50 mb-4 font-bold text-3xl">
                <br />
                <h2>Why hobbies are important:</h2>
            </div>

            <div className="flex justify-center py-4">
                {/*TODO: Add the video frame in here for the youtube video*/}

                <iframe width="550" height="350" src="https://www.youtube.com/embed/7b9THb3cQbg" title="Hobbies: Your Best Defense Against Brain Rot" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </div>

            <div className="px-50 py-2 text-left">
                <p>
                    Research shows that hobbies are vital for well-being. A landmark study published in Nature Medicine found that engaging in hobbies is tied to a 29% reduction in all-cause mortality risk, while also significantly boosting happiness, life satisfaction, and lowering depressive symptoms across global populations.
                </p>
                <br></br>
            </div>

        </div>
    )
}