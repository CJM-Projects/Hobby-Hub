using Hobby_hub.Data_Models;
using System.Text.Json;

namespace Hobby_hub.Repositories
{
    public interface IHobbyRepository
    {
        Task<List<Hobby>> GetAllHobbiesAsync();
    }
    public class HobbyRepository : IHobbyRepository
    {
        private readonly string _filePath = @".\Data\hobby-data.json";
        public async Task<List<Hobby>> GetAllHobbiesAsync()
        {
            var file = File.ReadAllText(_filePath);
            var hobbies = JsonSerializer.Deserialize<List<Hobby>>(file, new JsonSerializerOptions{ PropertyNamingPolicy = JsonNamingPolicy.CamelCase }) ?? [];

            return hobbies;
        }
    }
}
