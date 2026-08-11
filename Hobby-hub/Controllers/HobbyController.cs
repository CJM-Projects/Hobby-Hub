using Hobby_hub.Data_Models.Enum;
using Hobby_hub.Services;
using Microsoft.AspNetCore.Mvc;

namespace Hobby_hub.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class HobbyController : ControllerBase
    {
        private readonly IHobbyService _hobbyService;

        public HobbyController(IHobbyService hobbyService)
        {
            _hobbyService = hobbyService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllHobbiesAsync()
        {
            var hobbies = await _hobbyService.GetAllHobbiesAsync();
            return Ok(hobbies);
        }

        [HttpGet("{hobbyName}")]
        public async Task<IActionResult> GetHobbyByNameAsync(string hobbyName)
        {
            var hobby = await _hobbyService.GetHobbyByNameAsync(hobbyName);

            if (hobby == null)
            { 
                return NotFound($"Hobby with name '{hobbyName}' not found.");
            }

            return Ok(hobby);
        }

        [HttpGet("trending")]
        public async Task<IActionResult> GetTrendingHobbiesAsync()
        {
            var hobbies = await _hobbyService.GetTrendingHobbiesAsync();
            return Ok(hobbies);
        }

        [HttpGet("category/{categoryName}")]
        public async Task<IActionResult> GetHobbiesByCategoryAsync(Category categoryName)
        {
            var hobbies = await _hobbyService.GetHobbiesByCategoryAsync(categoryName);
            return Ok(hobbies);
        }
    }
}
