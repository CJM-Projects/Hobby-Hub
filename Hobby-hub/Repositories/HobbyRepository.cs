using Hobby_hub.Data_Models;
using System.Globalization;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace Hobby_hub.Repositories
{
    public interface IHobbyRepository
    {
        Task<List<Hobby>> GetAllHobbiesAsync();
        Task<Hobby?> GetHobbyByNameAsync(string hobbyName);
        Task<List<Hobby>> GetTrendingHobbiesAsync();
    }
    public class HobbyRepository : IHobbyRepository
    {
        private readonly string _filePath = @".\Data\hobby-data.json";
        public async Task<List<Hobby>> GetAllHobbiesAsync()
        {
            var file = File.ReadAllText(_filePath);
            var hobbies = JsonSerializer.Deserialize<List<Hobby>>(file, new JsonSerializerOptions{ PropertyNamingPolicy = JsonNamingPolicy.CamelCase, Converters = { new JsonStringEnumConverter() } }) ?? [];

            return hobbies;
        }

        public async Task<Hobby?> GetHobbyByNameAsync(string hobbyName)
        {
            var hobbies = await GetAllHobbiesAsync();

            var hobby = hobbies.FirstOrDefault(h => StringComparer.OrdinalIgnoreCase.Equals(h.Name, hobbyName));

            return hobby;
        }

        public async Task<List<Hobby>> GetTrendingHobbiesAsync()
        {
            var limit = 3;

            var hobbies = await GetAllHobbiesAsync();

            if (hobbies == null || hobbies.Count == 0)
                return new List<Hobby>();

            var weekNumber = ISOWeek.GetWeekOfYear(DateTime.UtcNow);
            var random = new Random(weekNumber);

            var trending = hobbies
                .OrderBy(h => random.Next())
                .DistinctBy(h => h.Id)
                .Take(limit)
                .ToList();

            return trending;
        }
    }
}
