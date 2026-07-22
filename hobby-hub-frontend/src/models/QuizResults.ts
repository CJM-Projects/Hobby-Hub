export type QuizResults = {
    results: QuizResult[];
}

export type QuizResult = {
    name: string;
    similarity: number;
    description: string;
    hobbyImage: string;
}