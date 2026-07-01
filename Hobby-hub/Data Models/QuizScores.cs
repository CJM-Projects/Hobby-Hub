namespace Hobby_hub.Data_Models
{
    public class QuizScores
    {
        public required int Active { get; set; }
        public required int Creative { get; set; }
        public required int Relaxing { get; set; }
        public required int Social { get; set; }
        public required int Outdoor { get; set; }
        public required int Strategic { get; set; }
        public int? Price { get; set; } = null;
        public int? TimeCommitment { get; set; } = null;
    }
}
