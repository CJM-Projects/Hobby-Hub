using Hobby_hub.Data_Models.Enum;

namespace Hobby_hub.Data_Models
{
    public class Hobby
    {
        public int Id { get; set; }

        public string Name { get; set; } = string.Empty;

        public string Description { get; set; } = string.Empty;

        public HobbyScores Scores { get; set; } = new();

        public string YoutubeVideoId { get; set; } = string.Empty;

        public string HobbyImage {  get; set; } = string.Empty;

        public List<Category> HobbyCategory { get; set; }  
    }

}
