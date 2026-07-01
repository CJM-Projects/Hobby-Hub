namespace Hobby_hub.Data_Models
{
    public class QuizResults
    {
        public required List<QuizResult> Results { get; set; } = [];
    }
    public class QuizResult
    {
        public required string Name { get; set; }
        public required double Similarity { get; set; }
        public required string Description { get; set; }
        public required string HobbyImage { get; set; }
    }
}
