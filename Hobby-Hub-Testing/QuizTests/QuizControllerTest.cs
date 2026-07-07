using Hobby_hub.Controllers;
using Hobby_hub.Data_Models;
using Hobby_hub.Services;
using Microsoft.AspNetCore.Mvc;
using Moq;

namespace Hobby_Hub_Testing.QuizTests
{
    public class QuizControllerTest
    {
        private Mock<IQuizService> _mockQuizService;
        private QuizController _quizController;

        [SetUp]
        public void Setup()
        {
            _mockQuizService = new Mock<IQuizService>();
            _quizController = new QuizController(_mockQuizService.Object);
        }

        [Test]
        public async Task GetResultsAsync_ShouldNotReturnNull()
        {
            var scores = new QuizScores
            {
                Active = 1,
                Creative = 4,
                Relaxing = 2,
                Social = 5,
                Outdoor = 1,
                Strategic = 3,
                Price = 2,
                TimeCommitment = 3
            };

            var quizResults = new QuizResults
            {
                Results = [
                    new QuizResult
                    {
                        Name = "Painting",
                        Similarity = 0.99,
                        Description = "A creative hobby that allows you to express yourself through colors and shapes.",
                        HobbyImage = "https://example.com/images/painting.jpg"
                    },
                    new QuizResult
                    {
                        Name = "Hiking",
                        Similarity = 0.95,
                        Description = "An outdoor activity that lets you explore nature and stay active.",
                        HobbyImage = "https://example.com/images/hiking.jpg"
                    },
                    new QuizResult
                    {
                        Name = "Board Games",
                        Similarity = 0.92,
                        Description = "A social hobby that involves playing games with friends and family.",
                        HobbyImage = "https://example.com/images/board_games.jpg"
                    }
                ]
            };

            _mockQuizService.Setup(service => service.GetResultsAsync(scores)).ReturnsAsync(quizResults);

            var result = await _quizController.GetResultsAsync(scores);

            Assert.That(result, Is.Not.Null);
        }

        [Test]
        public async Task GetResultsAsync_ShouldReturnQuizResult()
        {
            var scores = new QuizScores
            {
                Active = 1,
                Creative = 4,
                Relaxing = 2,
                Social = 5,
                Outdoor = 1,
                Strategic = 3,
                Price = 2,
                TimeCommitment = 3
            };

            var quizResults = new QuizResults
            {
                Results = [
                    new QuizResult
                    {
                        Name = "Painting",
                        Similarity = 0.99,
                        Description = "A creative hobby that allows you to express yourself through colors and shapes.",
                        HobbyImage = "https://example.com/images/painting.jpg"
                    },
                    new QuizResult
                    {
                        Name = "Hiking",
                        Similarity = 0.95,
                        Description = "An outdoor activity that lets you explore nature and stay active.",
                        HobbyImage = "https://example.com/images/hiking.jpg"
                    },
                    new QuizResult
                    {
                        Name = "Board Games",
                        Similarity = 0.92,
                        Description = "A social hobby that involves playing games with friends and family.",
                        HobbyImage = "https://example.com/images/board_games.jpg"
                    }
                ]
            };

            _mockQuizService.Setup(service => service.GetResultsAsync(scores)).ReturnsAsync(quizResults);

            var result = await _quizController.GetResultsAsync(scores) as OkObjectResult;

            Assert.That(result.Value, Is.InstanceOf<QuizResults>());
        }

        [Test]
        public async Task GetResultsAsync_ShouldReturnOK200()
        {
            var scores = new QuizScores
            {
                Active = 1,
                Creative = 4,
                Relaxing = 2,
                Social = 5,
                Outdoor = 1,
                Strategic = 3,
                Price = 2,
                TimeCommitment = 3
            };

            var quizResults = new QuizResults
            {
                Results = [
                    new QuizResult
                    {
                        Name = "Painting",
                        Similarity = 0.99,
                        Description = "A creative hobby that allows you to express yourself through colors and shapes.",
                        HobbyImage = "https://example.com/images/painting.jpg"
                    },
                    new QuizResult
                    {
                        Name = "Hiking",
                        Similarity = 0.95,
                        Description = "An outdoor activity that lets you explore nature and stay active.",
                        HobbyImage = "https://example.com/images/hiking.jpg"
                    },
                    new QuizResult
                    {
                        Name = "Board Games",
                        Similarity = 0.92,
                        Description = "A social hobby that involves playing games with friends and family.",
                        HobbyImage = "https://example.com/images/board_games.jpg"
                    }
                ]
            };

            _mockQuizService.Setup(service => service.GetResultsAsync(scores)).ReturnsAsync(quizResults);

            var result = await _quizController.GetResultsAsync(scores) as OkObjectResult;

            Assert.That(result.StatusCode, Is.EqualTo(200));
            _mockQuizService.Verify(service => service.GetResultsAsync(scores), Times.Once);
        }

        [Test]
        public async Task GetResultsAsync_ShouldReturnQuizResultWithExpectedFieldsPopulated()
        {
            var scores = new QuizScores
            {
                Active = 1,
                Creative = 4,
                Relaxing = 2,
                Social = 5,
                Outdoor = 1,
                Strategic = 3,
                Price = 2,
                TimeCommitment = 3
            };

            var quizResults = new QuizResults
            {
                Results = [
                    new QuizResult
                    {
                        Name = "Painting",
                        Similarity = 0.99,
                        Description = "A creative hobby that allows you to express yourself through colors and shapes.",
                        HobbyImage = "https://example.com/images/painting.jpg"
                    },
                    new QuizResult
                    {
                        Name = "Hiking",
                        Similarity = 0.95,
                        Description = "An outdoor activity that lets you explore nature and stay active.",
                        HobbyImage = "https://example.com/images/hiking.jpg"
                    },
                    new QuizResult
                    {
                        Name = "Board Games",
                        Similarity = 0.92,
                        Description = "A social hobby that involves playing games with friends and family.",
                        HobbyImage = "https://example.com/images/board_games.jpg"
                    }
                ]
            };

            _mockQuizService.Setup(service => service.GetResultsAsync(scores)).ReturnsAsync(quizResults);

            var result = await _quizController.GetResultsAsync(scores) as OkObjectResult;

            var resultValue = result.Value as QuizResults;

            Assert.That(resultValue.Results[0].Name, Is.EqualTo("Painting"));
            Assert.That(resultValue.Results[1].Similarity, Is.EqualTo(0.95));
            Assert.That(resultValue.Results[2].Description, Is.EqualTo("A social hobby that involves playing games with friends and family."));
            Assert.That(resultValue.Results[0].HobbyImage, Is.EqualTo("https://example.com/images/painting.jpg"));
        }
    }
}
