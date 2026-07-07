using Hobby_hub.Data_Models;
using Hobby_hub.Repositories;

namespace Hobby_hub.Services
{
    public interface IHobbyService
    {
        Task<List<Hobby>> GetAllHobbiesAsync();
        Task<Hobby?> GetHobbyByNameAsync(string hobbyName);
        Task<List<Hobby>> GetTrendingHobbiesAsync();
    }
    public class HobbyService : IHobbyService
    {
        private readonly IHobbyRepository _hobbyRepository;

        public HobbyService(IHobbyRepository hobbyRepository)
        {
            _hobbyRepository = hobbyRepository;
        }

        public async Task<List<Hobby>> GetAllHobbiesAsync()
        {
            return await _hobbyRepository.GetAllHobbiesAsync();
        }

        public async Task<Hobby?> GetHobbyByNameAsync(string hobbyName)
        {
            return await _hobbyRepository.GetHobbyByNameAsync(hobbyName);
        }

        public async Task<List<Hobby>> GetTrendingHobbiesAsync()
        {
            return await _hobbyRepository.GetTrendingHobbiesAsync();
        }
    }
}
