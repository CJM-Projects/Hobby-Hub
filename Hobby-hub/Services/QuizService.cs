using Hobby_hub.Data_Models;
using Hobby_hub.Repositories;

namespace Hobby_hub.Services
{
    public interface IQuizService
    {
        Task<QuizResults> GetResultsAsync(QuizScores scores);
    }
    public class QuizService : IQuizService
    {
        private readonly IHobbyRepository _hobbyRepository;
        public QuizService(IHobbyRepository hobbyRepository)
        {
            _hobbyRepository = hobbyRepository;
        }
        public async Task<QuizResults> GetResultsAsync(QuizScores scores)
        {
            var limit = 3;
            var similarity = new Dictionary<int, double>();

            var hobbies = await _hobbyRepository.GetAllHobbiesAsync();

            if (scores is { Price: >0 and <6 })
            {
                hobbies = hobbies.Where(h => h.Scores.Price <= scores.Price).ToList();
            }

            if (scores is { TimeCommitment: >0 and <6 })
            {
                hobbies = hobbies.Where(h => h.Scores.TimeCommitment <= scores.TimeCommitment).ToList();
            }

            foreach (var h in hobbies)
            {
                var dotProduct = scores.Active * h.Scores.Active +
                                 scores.Creative * h.Scores.Creative +
                                 scores.Relaxing * h.Scores.Relaxing +
                                 scores.Social * h.Scores.Social +
                                 scores.Outdoor * h.Scores.Outdoor +
                                 scores.Strategic * h.Scores.Strategic;

                var magnitudeA = Math.Sqrt(scores.Active * scores.Active +
                                           scores.Creative * scores.Creative +
                                           scores.Relaxing * scores.Relaxing +
                                           scores.Social * scores.Social +
                                           scores.Outdoor * scores.Outdoor +
                                           scores.Strategic * scores.Strategic);

                var magnitudeB = Math.Sqrt(h.Scores.Active * h.Scores.Active +
                                           h.Scores.Creative * h.Scores.Creative +
                                           h.Scores.Relaxing * h.Scores.Relaxing +
                                           h.Scores.Social * h.Scores.Social +
                                           h.Scores.Outdoor * h.Scores.Outdoor +
                                           h.Scores.Strategic * h.Scores.Strategic);

                var cosineSimilarity = dotProduct / (magnitudeA * magnitudeB);

                similarity.Add(h.Id, cosineSimilarity);
            }

            var result = similarity
                .OrderByDescending(s => s.Value)
                .Take(limit)
                .Select(s => new QuizResult
                { 
                    Name = hobbies.First(h => h.Id == s.Key).Name,
                    Similarity = s.Value,
                    Description = hobbies.First(h => h.Id == s.Key).Description,
                    HobbyImage = hobbies.First(h => h.Id == s.Key).HobbyImage
                })
                .ToList();

            return new QuizResults { Results = result };
        }
    }
}
