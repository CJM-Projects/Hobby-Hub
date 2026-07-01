using Hobby_hub.Data_Models;
using Hobby_hub.Services;
using Microsoft.AspNetCore.Mvc;

namespace Hobby_hub.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class QuizController : ControllerBase
    {
        private readonly IQuizService _quizService;
        public QuizController(IQuizService quizService)
        {
            _quizService = quizService;
        }

        [HttpGet("results")]
        public async Task<IActionResult> GetResultsAsync([FromQuery] QuizScores scores)
        {
            var result = await _quizService.GetResultsAsync(scores);

            return Ok(result);
        }
    }
}
