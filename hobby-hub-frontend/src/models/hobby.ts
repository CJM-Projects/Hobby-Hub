export type Hobby = {
    id: number;
    name: string;
    description: string;
    longDescription: string;
    scores: HobbyScores;
    youtubeVideoId: string;
    hobbyImage: string;
    hobbyImageAltText: string;
    hobbyCategory: Category[];
}

export type HobbyScores = {
    active: number;
    creative: number;
    relaxing: number;
    social: number;
    outdoor: number;
    strategic: number;
    price: number;
    timeCommitment: number;
}

export type Category = "Active" | "Creative" | "Relaxing" | "Social" | "Outdoor" | "Strategic";