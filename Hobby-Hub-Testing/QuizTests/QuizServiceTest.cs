using Hobby_hub.Controllers;
using Hobby_hub.Data_Models;
using Hobby_hub.Data_Models.Enum;
using Hobby_hub.Repositories;
using Hobby_hub.Services;
using Microsoft.AspNetCore.Mvc;
using Moq;

namespace Hobby_Hub_Testing.QuizTests
{
    public class QuizServiceTest
    {
        private Mock<IHobbyRepository> _mockHobbyRepo;
        private QuizService _quizService;

        [SetUp]
        public void Setup()
        {
            _mockHobbyRepo = new Mock<IHobbyRepository>();
            _quizService = new QuizService(_mockHobbyRepo.Object);
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

            var hobbies = new List<Hobby>
            {
                new Hobby { Id = 1, Name = "Hobby1", Scores = new HobbyScores { Active = 3, Creative = 4, Relaxing = 2, Social = 5, Outdoor = 1, Strategic = 3, Price = 2, TimeCommitment = 3 } },
                new Hobby { Id = 2, Name = "Hobby2", Scores = new HobbyScores { Active = 2, Creative = 3, Relaxing = 4, Social = 1, Outdoor = 5, Strategic = 2, Price = 1, TimeCommitment = 4 } },
                new Hobby { Id = 3, Name = "Hobby3", Scores = new HobbyScores { Active = 5, Creative = 2, Relaxing = 3, Social = 4, Outdoor = 2, Strategic = 5, Price = 3, TimeCommitment = 2 } },
                new Hobby { Id = 4, Name = "Hobby4", Scores = new HobbyScores { Active = 1, Creative = 5, Relaxing = 2, Social = 3, Outdoor = 4, Strategic = 3, Price = 1, TimeCommitment = 5 } },
                new Hobby { Id = 5, Name = "Hobby5", Scores = new HobbyScores { Active = 4, Creative = 1, Relaxing = 5, Social = 2, Outdoor = 3, Strategic = 1, Price = 4, TimeCommitment = 1 } }
            };

            _mockHobbyRepo.Setup(repo => repo.GetAllHobbiesAsync()).ReturnsAsync(hobbies);

            var result = await _quizService.GetResultsAsync(scores);

            Assert.That(result, Is.Not.Null);
        }

        [Test]
        public async Task GetResultsAsync_ShouldReturnQuizResults()
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

            var hobbies = new List<Hobby>
            {
                new Hobby { Id = 1, Name = "Hobby1", Scores = new HobbyScores { Active = 3, Creative = 4, Relaxing = 2, Social = 5, Outdoor = 1, Strategic = 3, Price = 2, TimeCommitment = 3 } },
                new Hobby { Id = 2, Name = "Hobby2", Scores = new HobbyScores { Active = 2, Creative = 3, Relaxing = 4, Social = 1, Outdoor = 5, Strategic = 2, Price = 1, TimeCommitment = 4 } },
                new Hobby { Id = 3, Name = "Hobby3", Scores = new HobbyScores { Active = 5, Creative = 2, Relaxing = 3, Social = 4, Outdoor = 2, Strategic = 5, Price = 3, TimeCommitment = 2 } },
                new Hobby { Id = 4, Name = "Hobby4", Scores = new HobbyScores { Active = 1, Creative = 5, Relaxing = 2, Social = 3, Outdoor = 4, Strategic = 3, Price = 1, TimeCommitment = 5 } },
                new Hobby { Id = 5, Name = "Hobby5", Scores = new HobbyScores { Active = 4, Creative = 1, Relaxing = 5, Social = 2, Outdoor = 3, Strategic = 1, Price = 4, TimeCommitment = 1 } }
            };

            _mockHobbyRepo.Setup(repo => repo.GetAllHobbiesAsync()).ReturnsAsync(hobbies);

            var result = await _quizService.GetResultsAsync(scores);

            Assert.That(result, Is.InstanceOf<QuizResults>());
        }

        [Test]
        public async Task GetResultsAsync_ShouldReturnClosestTop3Results_WhenValidScoresProvidedAndNoFilters()
        {
            var scores = new QuizScores
            {
                Active = 1,
                Creative = 4,
                Relaxing = 2,
                Social = 5,
                Outdoor = 1,
                Strategic = 3,
            };

            var hobbies = new List<Hobby>
            {
                new Hobby { Id = 1, Name = "Hobby1", Scores = new HobbyScores { Active = 3, Creative = 4, Relaxing = 2, Social = 5, Outdoor = 1, Strategic = 3, Price = 2, TimeCommitment = 3 } },
                new Hobby { Id = 2, Name = "Hobby2", Scores = new HobbyScores { Active = 2, Creative = 3, Relaxing = 4, Social = 1, Outdoor = 5, Strategic = 2, Price = 1, TimeCommitment = 4 } },
                new Hobby { Id = 3, Name = "Hobby3", Scores = new HobbyScores { Active = 5, Creative = 2, Relaxing = 3, Social = 4, Outdoor = 2, Strategic = 5, Price = 3, TimeCommitment = 2 } },
                new Hobby { Id = 4, Name = "Hobby4", Scores = new HobbyScores { Active = 1, Creative = 5, Relaxing = 2, Social = 3, Outdoor = 4, Strategic = 3, Price = 1, TimeCommitment = 5 } },
                new Hobby { Id = 5, Name = "Hobby5", Scores = new HobbyScores { Active = 4, Creative = 1, Relaxing = 5, Social = 2, Outdoor = 3, Strategic = 1, Price = 4, TimeCommitment = 1 } }
            };

            _mockHobbyRepo.Setup(repo => repo.GetAllHobbiesAsync()).ReturnsAsync(hobbies);

            var result = await _quizService.GetResultsAsync(scores);

            Assert.That(result.Results.Count, Is.EqualTo(3));
            Assert.That(result.Results[0].Name, Is.EqualTo("Hobby1"));
            Assert.That(result.Results[1].Name, Is.EqualTo("Hobby4"));
            Assert.That(result.Results[2].Name, Is.EqualTo("Hobby3"));
        }

        [Test]
        public async Task GetResultsAsync_ShouldReturnFilteredHobbiesByPrice_WhenPriceIsIncludedInScores()
        {
            var scores = new QuizScores
            {
                Active = 1,
                Creative = 4,
                Relaxing = 2,
                Social = 5,
                Outdoor = 1,
                Strategic = 3,
                Price = 2
            };

            var hobbies = new List<Hobby>
            {
                new Hobby { Id = 1, Name = "Hobby1", Scores = new HobbyScores { Active = 3, Creative = 4, Relaxing = 2, Social = 5, Outdoor = 1, Strategic = 3, Price = 2, TimeCommitment = 3 } },
                new Hobby { Id = 2, Name = "Hobby2", Scores = new HobbyScores { Active = 2, Creative = 3, Relaxing = 4, Social = 1, Outdoor = 5, Strategic = 2, Price = 1, TimeCommitment = 4 } },
                new Hobby { Id = 3, Name = "Hobby3", Scores = new HobbyScores { Active = 5, Creative = 2, Relaxing = 3, Social = 4, Outdoor = 2, Strategic = 5, Price = 3, TimeCommitment = 2 } },
                new Hobby { Id = 4, Name = "Hobby4", Scores = new HobbyScores { Active = 1, Creative = 5, Relaxing = 2, Social = 3, Outdoor = 4, Strategic = 3, Price = 1, TimeCommitment = 5 } },
                new Hobby { Id = 5, Name = "Hobby5", Scores = new HobbyScores { Active = 4, Creative = 1, Relaxing = 5, Social = 2, Outdoor = 3, Strategic = 1, Price = 4, TimeCommitment = 1 } }
            };

            _mockHobbyRepo.Setup(repo => repo.GetAllHobbiesAsync()).ReturnsAsync(hobbies);

            var result = await _quizService.GetResultsAsync(scores);

            Assert.That(result.Results.Count, Is.EqualTo(3));
            Assert.That(result.Results[0].Name, Is.EqualTo("Hobby1"));
            Assert.That(result.Results[1].Name, Is.EqualTo("Hobby4"));
            Assert.That(result.Results[2].Name, Is.EqualTo("Hobby2"));
        }

        [Test]
        public async Task GetResultsAsync_ShouldReturnFilteredHobbiesByTimeCommitment_WhenTimeCommitmentIsIncludedInScores()
        {
            var scores = new QuizScores
            {
                Active = 1,
                Creative = 4,
                Relaxing = 2,
                Social = 5,
                Outdoor = 1,
                Strategic = 3,
                TimeCommitment = 3
            };

            var hobbies = new List<Hobby>
            {
                new Hobby { Id = 1, Name = "Hobby1", Scores = new HobbyScores { Active = 3, Creative = 4, Relaxing = 2, Social = 5, Outdoor = 1, Strategic = 3, Price = 2, TimeCommitment = 3 } },
                new Hobby { Id = 2, Name = "Hobby2", Scores = new HobbyScores { Active = 2, Creative = 3, Relaxing = 4, Social = 1, Outdoor = 5, Strategic = 2, Price = 1, TimeCommitment = 4 } },
                new Hobby { Id = 3, Name = "Hobby3", Scores = new HobbyScores { Active = 5, Creative = 2, Relaxing = 3, Social = 4, Outdoor = 2, Strategic = 5, Price = 3, TimeCommitment = 2 } },
                new Hobby { Id = 4, Name = "Hobby4", Scores = new HobbyScores { Active = 1, Creative = 5, Relaxing = 2, Social = 3, Outdoor = 4, Strategic = 3, Price = 1, TimeCommitment = 5 } },
                new Hobby { Id = 5, Name = "Hobby5", Scores = new HobbyScores { Active = 4, Creative = 1, Relaxing = 5, Social = 2, Outdoor = 3, Strategic = 1, Price = 4, TimeCommitment = 1 } }
            };

            _mockHobbyRepo.Setup(repo => repo.GetAllHobbiesAsync()).ReturnsAsync(hobbies);

            var result = await _quizService.GetResultsAsync(scores);

            Assert.That(result.Results.Count, Is.EqualTo(3));
            Assert.That(result.Results[0].Name, Is.EqualTo("Hobby1"));
            Assert.That(result.Results[1].Name, Is.EqualTo("Hobby3"));
            Assert.That(result.Results[2].Name, Is.EqualTo("Hobby5"));
        }

        [Test]
        public async Task GetResultsAsync_ShouldReturnFilteredHobbiesByPriceAndTimeCommitment_WhenBothAreIncludedInScores()
        {
            var scores = new QuizScores
            {
                Active = 1,
                Creative = 4,
                Relaxing = 2,
                Social = 5,
                Outdoor = 1,
                Strategic = 3,
                Price = 3,
                TimeCommitment = 4
            };

            var hobbies = new List<Hobby>
            {
                new Hobby { Id = 1, Name = "Hobby1", Scores = new HobbyScores { Active = 3, Creative = 4, Relaxing = 2, Social = 5, Outdoor = 1, Strategic = 3, Price = 2, TimeCommitment = 3 } },
                new Hobby { Id = 2, Name = "Hobby2", Scores = new HobbyScores { Active = 2, Creative = 3, Relaxing = 4, Social = 1, Outdoor = 5, Strategic = 2, Price = 1, TimeCommitment = 4 } },
                new Hobby { Id = 3, Name = "Hobby3", Scores = new HobbyScores { Active = 5, Creative = 2, Relaxing = 3, Social = 4, Outdoor = 2, Strategic = 5, Price = 3, TimeCommitment = 2 } },
                new Hobby { Id = 4, Name = "Hobby4", Scores = new HobbyScores { Active = 1, Creative = 5, Relaxing = 2, Social = 3, Outdoor = 4, Strategic = 3, Price = 1, TimeCommitment = 5 } },
                new Hobby { Id = 5, Name = "Hobby5", Scores = new HobbyScores { Active = 4, Creative = 1, Relaxing = 5, Social = 2, Outdoor = 3, Strategic = 1, Price = 4, TimeCommitment = 1 } }
            };

            _mockHobbyRepo.Setup(repo => repo.GetAllHobbiesAsync()).ReturnsAsync(hobbies);

            var result = await _quizService.GetResultsAsync(scores);

            Assert.That(result.Results.Count, Is.EqualTo(3));
            Assert.That(result.Results[0].Name, Is.EqualTo("Hobby1"));
            Assert.That(result.Results[1].Name, Is.EqualTo("Hobby3"));
            Assert.That(result.Results[2].Name, Is.EqualTo("Hobby2"));
        }
    }
}
