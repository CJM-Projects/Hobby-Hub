import { Quiz } from "../components/Quiz"
import type { QuizProp } from "../components/Quiz"

export function HobbyQuiz() {

    return (

        <div>
            <div>
                <Quiz questions={quizQuestions.questions} />
            </div>
        </div >
    )
}

const quizQuestions: QuizProp = {
    questions: [
        {
            question: "Your ideal Saturday afternoon looks like...",
            image: "../src/assets/quiz/active.jpg",
            category: "active",
            answers: [
                { text: "🛋️ Not moving unless snacks are involved", score: 1 },
                { text: "🚶 A gentle stroll, maybe", score: 2 },
                { text: "🚲 Some light movement, nothing too hard", score: 3 },
                { text: "🏓 Getting into it, a bit of a sweat", score: 4 },
                { text: "🏃 Full send, heart rate up", score: 5 },
                { text: "🏔️ I want to feel it in my legs tomorrow", score: 6 }
            ]
        },
        {
            question: "You just got a blank canvas (literal or metaphorical). What happens?",
            image: "../src/assets/quiz/creative.png",
            category: "creative",
            answers: [
                { text: "📋 I look for the instructions", score: 1 },
                { text: "🧩 I follow a template, maybe tweak a little", score: 2 },
                { text: "🎨 I mix a template with my own ideas", score: 3 },
                { text: "🖌️ I start with an idea and improvise the rest", score: 4 },
                { text: "💡 I throw out the rulebook early", score: 5 },
                { text: "🔥 The canvas fears me, I am flowing with creativity", score: 6 }
            ]
        },
        {
            question: "Your hobby's ideal pace is...",
            image: "../src/assets/quiz/relaxing.png",
            category: "relaxing",
            answers: [
                { text: "🐆 Fast, intense, go-go-go", score: 1 },
                { text: "🚴 Brisk, keeps you on your toes", score: 2 },
                { text: "🚶 A comfortable rhythm", score: 3 },
                { text: "🌥️ Slow and unhurried", score: 4 },
                { text: "🐌 Snail-paced, and that's the point", score: 5 },
                { text: "🌿 Time doesn't really exist here", score: 6 }
            ]
        },
        {
            question: "A stranger asks to join in. Your reaction?",
            image: "../src/assets/quiz/social.png",
            category: "social",
            answers: [
                { text: "🙅 Absolutely not, this is a solo mission", score: 1 },
                { text: "🚪 I'd rather not, but I'm polite about it", score: 2 },
                { text: "🤷 Sure, if they don't talk much", score: 3 },
                { text: "👋 Yeah, could be fun", score: 4 },
                { text: "🎉 The more the merrier", score: 5 },
                { text: "📣 I'm already recruiting a team", score: 6 }
            ]
        },
        {
            question: "Where does your hobby live?",
            image: "../src/assets/quiz/outdoor.png",
            category: "outdoor",
            answers: [
                { text: "🏠 Deep indoors, curtains closed", score: 1 },
                { text: "🪟 Indoors, but I like a window nearby", score: 2 },
                { text: "🚪 Mostly inside, occasionally outside", score: 3 },
                { text: "🌤️ Happy either way", score: 4 },
                { text: "🌳 Mostly outside, weather permitting", score: 5 },
                { text: "⛈️ Rain or shine, I'm out there", score: 6 }
            ]
        },
        {
            question: "Something's not working. What's your first move?",
            image: "../src/assets/quiz/strategic.png",
            category: "strategic",
            answers: [
                { text: "🎲 Wing it and see what happens", score: 1 },
                { text: "🤞 Trial and error, mostly error", score: 2 },
                { text: "🧠 A bit of both — feel it out, then think", score: 3 },
                { text: "📝 Jot down a rough plan", score: 4 },
                { text: "📊 Break it into steps and troubleshoot properly", score: 5 },
                { text: "🔬 Build a system so this never happens again", score: 6 }
            ]
        },
        {
            question: "How do you feel about spending money to start something new?",
            image: "../src/assets/quiz/price.png",
            category: "price",
            answers: [
                { text: "🆓 I'll use whatever's already lying around", score: 1 },
                { text: "💸 A few essentials, kept cheap", score: 2 },
                { text: "💳 Willing to invest in decent gear", score: 3 },
                { text: "🛍️ I like buying the 'proper' setup", score: 4 },
                { text: "🤑 Just show me where to swipe the card", score: 5 }
            ]
        },
        {
            question: "How serious is this hobby relationship going to be?",
            image: "../src/assets/quiz/time.png",
            category: "timeCommitment",
            answers: [
                { text: "💔 A weekend fling, tops", score: 1 },
                { text: "📅 A casual thing, now and then", score: 2 },
                { text: "🔁 A regular date, once or twice a week", score: 3 },
                { text: "❤️ We're pretty committed", score: 4 },
                { text: "💍 We're in this together, forever hobby", score: 5 }
            ]
        }
    ]
};