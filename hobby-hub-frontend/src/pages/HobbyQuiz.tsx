import { Quiz } from "../components/Quiz";
import type { QuizProp } from "../components/Quiz";
import activeImg from "../assets/quiz/active.jpg";
import creativeImg from "../assets/quiz/creative.png";
import outdoorImg from "../assets/quiz/outdoor.png";
import priceImg from "../assets/quiz/price.png";
import relaxingImg from "../assets/quiz/relaxing.png";
import socialImg from "../assets/quiz/social.png";
import strategicImg from "../assets/quiz/strategic.png";
import timeImg from "../assets/quiz/time.png";

export function HobbyQuiz() {

    return (

        <main>
            <div>
                <Quiz questions={quizQuestions.questions} />
            </div>
        </main >
    )
}

const quizQuestions: QuizProp = {
    questions: [
        {
            question: "Your ideal Saturday afternoon looks like...",
            image: activeImg,
            altText: "A coach and students stretching on a field of grass",
            category: "active",
            answers: [
                { emoji: "🛋", text: "Not moving unless snacks are involved", score: 1 },
                { emoji: "🚶", text: "A gentle stroll, maybe", score: 2 },
                { emoji: "🚲", text: "Some light movement, nothing too hard", score: 3 },
                { emoji: "🏓", text: "Getting into it, a bit of a sweat", score: 4 },
                { emoji: "🏃", text: "Full send, heart rate up", score: 5 },
                { emoji: "🏔️", text: "I want to feel it in my legs tomorrow", score: 6 }
            ]
        },
        {
            question: "You just got a blank canvas (literal or metaphorical). What happens?",
            image: creativeImg,
            altText: "Painting of a light bulb",
            category: "creative",
            answers: [
                { emoji: "📋", text: "I look for the instructions", score: 1 },
                { emoji: "🧩", text: "I follow a template, maybe tweak a little", score: 2 },
                { emoji: "🎨", text: "I mix a template with my own ideas", score: 3 },
                { emoji: "🖌️", text: "I start with an idea and improvise the rest", score: 4 },
                { emoji: "💡", text: "I throw out the rulebook early", score: 5 },
                { emoji: "🔥", text: "The canvas fears me, I am flowing with creativity", score: 6 }
            ]
        },
        {
            question: "Your hobby's ideal pace is...",
            image: relaxingImg,
            altText: "A person relaxing under trees",
            category: "relaxing",
            answers: [
                { emoji: "🐆", text: "Fast, intense, go-go-go", score: 1 },
                { emoji: "🚴", text: "Brisk, keeps you on your toes", score: 2 },
                { emoji: "🚶", text: "A comfortable rhythm", score: 3 },
                { emoji: "🌥️", text: "Slow and unhurried", score: 4 },
                { emoji: "🐌", text: "Snail-paced, and that's the point", score: 5 },
                { emoji: "🌿", text: "Time doesn't really exist here", score: 6 }
            ]
        },
        {
            question: "A stranger asks to join in. Your reaction?",
            image: socialImg,
            altText: "People socialising at a festival",
            category: "social",
            answers: [
                { emoji: "🙅", text: "Absolutely not, this is a solo mission", score: 1 },
                { emoji: "🚪", text: "I'd rather not, but I'm polite about it", score: 2 },
                { emoji: "🤷", text: "Sure, if they don't talk much", score: 3 },
                { emoji: "👋", text: "Yeah, could be fun", score: 4 },
                { emoji: "🎉", text: "The more the merrier", score: 5 },
                { emoji: "📣", text: "I'm already recruiting a team", score: 6 }
            ]
        },
        {
            question: "Where does your hobby live?",
            image: outdoorImg,
            altText: "Four friends on a hike",
            category: "outdoor",
            answers: [
                { emoji: "🏠", text: "Deep indoors, curtains closed", score: 1 },
                { emoji: "🪟", text: "Indoors, but I like a window nearby", score: 2 },
                { emoji: "🚪", text: "Mostly inside, occasionally outside", score: 3 },
                { emoji: "🌤️", text: "Happy either way", score: 4 },
                { emoji: "🌳", text: "Mostly outside, weather permitting", score: 5 },
                { emoji: "⛈️", text: "Rain or shine, I'm out there", score: 6 }
            ]
        },
        {
            question: "Something's not working. What's your first move?",
            image: strategicImg,
            altText: "Person completing math equations on a chalkboard",
            category: "strategic",
            answers: [
                { emoji: "🎲", text: "Wing it and see what happens", score: 1 },
                { emoji: "🤞", text: "Trial and error, mostly error", score: 2 },
                { emoji: "🧠", text: "A bit of both — feel it out, then think", score: 3 },
                { emoji: "📝", text: "Jot down a rough plan", score: 4 },
                { emoji: "📊", text: "Break it into steps and troubleshoot properly", score: 5 },
                { emoji: "🔬", text: "Build a system so this never happens again", score: 6 }
            ]
        },
        {
            question: "How do you feel about spending money to start something new?",
            image: priceImg,
            altText: "A person showing an empty wallet",
            category: "price",
            answers: [
                { emoji: "🆓", text: "I'll use whatever's already lying around", score: 1 },
                { emoji: "💸", text: "A few essentials, kept cheap", score: 2 },
                { emoji: "💳", text: "Willing to invest in decent gear", score: 3 },
                { emoji: "🛍️", text: "I like buying the 'proper' setup", score: 4 },
                { emoji: "🤑", text: "Just show me where to swipe the card", score: 5 }
            ]
        },
        {
            question: "How serious is this hobby relationship going to be?",
            image: timeImg,
            altText: "An hourglass placed on a calendar",
            category: "timeCommitment",
            answers: [
                { emoji: "💔", text: "A weekend fling, tops", score: 1 },
                { emoji: "📅", text: "A casual thing, now and then", score: 2 },
                { emoji: "🔁", text: "A regular date, once or twice a week", score: 3 },
                { emoji: "❤️", text: "We're pretty committed", score: 4 },
                { emoji: "💍", text: "We're in this together, forever hobby", score: 5 }
            ]
        }
    ]
};