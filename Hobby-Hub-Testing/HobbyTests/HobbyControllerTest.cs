using Hobby_hub.Controllers;
using Hobby_hub.Data_Models;
using Hobby_hub.Data_Models.Enum;
using Hobby_hub.Services;
using Microsoft.AspNetCore.Mvc;
using Moq;

namespace Hobby_Hub_Testing.HobbyTests
{
    public class HobbyControllerTest
    {
        private Mock<IHobbyService> _mockHobbyService;
        private HobbyController _hobbyController;

        [SetUp]
        public void Setup()
        {
            _mockHobbyService = new Mock<IHobbyService>();
            _hobbyController = new HobbyController(_mockHobbyService.Object);
        }

        [Test]
        public async Task GetAllHobbies_ShouldReturnAllHobbiesAsAList()
        {
            var hobbies = new List<Hobby>
            {
                new Hobby
                {
                    Id = 1,
                    Name = "Running",
                    Description = "Running is a high-impact, cardiovascular exercise characterized by an aerial phase where both feet are off the ground simultaneously",
                    YoutubeVideoId = "https://www.youtube.com/watch?v=kVnyY17VS9Y",
                    HobbyImage = "https://images.pexels.com/photos/8346669/pexels-photo-8346669.jpeg",
                    HobbyCategory =
                    [

                        Category.Active,
                        Category.Outdoor

                    ],
                    Scores = new HobbyScores
                    {
                        Active = 5,
                        Creative = 0,
                        Relaxing = 2,
                        Social = 1,
                        Outdoor = 3,
                        Strategic = 1,
                        Price = 1,
                        TimeCommitment = 3
                    }
                },

                new Hobby
                {
                    Id = 2,
                    Name = "Tai Chi",
                    Description = "Tai Chi is a mind-body practice that combines slow, flowing physical movements, deep diaphragmatic breathing, and focused meditation",
                    YoutubeVideoId = "https://www.youtube.com/watch?v=7McCi0z7FU8",
                    HobbyImage = "https://images.pexels.com/photos/8461244/pexels-photo-8461244.jpeg",
                    HobbyCategory =
                    [
                        Category.Active,
                        Category.Relaxing
                    ],
                    Scores = new HobbyScores
                    {
                        Active = 3,
                        Creative = 1,
                        Relaxing = 5,
                        Social = 2,
                        Outdoor = 2,
                        Strategic = 1,
                        Price = 2,
                        TimeCommitment = 3
                    }
                }
            };
            _mockHobbyService.Setup(service => service.GetAllHobbiesAsync()).ReturnsAsync(hobbies);

            var result = await _hobbyController.GetAllHobbiesAsync() as OkObjectResult;
            var returnedHobbies = result.Value as List<Hobby>;

            Assert.That(returnedHobbies, Is.EqualTo(hobbies));
        }

        [Test]
        public async Task GetAllHobbies_ShouldReturnOK200()
        {
            var hobbies = new List<Hobby>
            {
                new Hobby
                {
                    Id = 1,
                    Name = "Running",
                    Description = "Running is a high-impact, cardiovascular exercise characterized by an aerial phase where both feet are off the ground simultaneously",
                    YoutubeVideoId = "https://www.youtube.com/watch?v=kVnyY17VS9Y",
                    HobbyImage = "https://images.pexels.com/photos/8346669/pexels-photo-8346669.jpeg",
                    HobbyCategory = new List<Category>
                    {

                        Category.Active,
                        Category.Outdoor

                    },
                    Scores = new HobbyScores
                    {
                        Active = 5,
                        Creative = 0,
                        Relaxing = 2,
                        Social = 1,
                        Outdoor = 3,
                        Strategic = 1,
                        Price = 1,
                        TimeCommitment = 3
                    }
                },

                new Hobby
                {
                    Id = 2,
                    Name = "Tai Chi",
                    Description = "Tai Chi is a mind-body practice that combines slow, flowing physical movements, deep diaphragmatic breathing, and focused meditation",
                    YoutubeVideoId = "https://www.youtube.com/watch?v=7McCi0z7FU8",
                    HobbyImage = "https://images.pexels.com/photos/8461244/pexels-photo-8461244.jpeg",
                    HobbyCategory =
                    [
                        Category.Active,
                        Category.Relaxing
                    ],
                    Scores = new HobbyScores
                    {
                        Active = 3,
                        Creative = 1,
                        Relaxing = 5,
                        Social = 2,
                        Outdoor = 2,
                        Strategic = 1,
                        Price = 2,
                        TimeCommitment = 3
                    }
                }
            };
            _mockHobbyService.Setup(service => service.GetAllHobbiesAsync()).ReturnsAsync(hobbies);

            var result = await _hobbyController.GetAllHobbiesAsync() as OkObjectResult;

            Assert.That(result.StatusCode, Is.EqualTo(200));
            _mockHobbyService.Verify(service => service.GetAllHobbiesAsync(), Times.Once);
        }

        [Test]
        public async Task GetAllHobbies_ShouldNotReturnNull()
        {
            var hobbies = new List<Hobby>
            {
                new Hobby
                {
                    Id = 1,
                    Name = "Running",
                    Description = "Running is a high-impact, cardiovascular exercise characterized by an aerial phase where both feet are off the ground simultaneously",
                    YoutubeVideoId = "https://www.youtube.com/watch?v=kVnyY17VS9Y",
                    HobbyImage = "https://images.pexels.com/photos/8346669/pexels-photo-8346669.jpeg",
                    HobbyCategory = new List<Category>
                    {

                        Category.Active,
                        Category.Outdoor

                    },
                    Scores = new HobbyScores
                    {
                        Active = 5,
                        Creative = 0,
                        Relaxing = 2,
                        Social = 1,
                        Outdoor = 3,
                        Strategic = 1,
                        Price = 1,
                        TimeCommitment = 3
                    }
                },

                new Hobby
                {
                    Id = 2,
                    Name = "Tai Chi",
                    Description = "Tai Chi is a mind-body practice that combines slow, flowing physical movements, deep diaphragmatic breathing, and focused meditation",
                    YoutubeVideoId = "https://www.youtube.com/watch?v=7McCi0z7FU8",
                    HobbyImage = "https://images.pexels.com/photos/8461244/pexels-photo-8461244.jpeg",
                    HobbyCategory =
                    [
                        Category.Active,
                        Category.Relaxing
                    ],
                    Scores = new HobbyScores
                    {
                        Active = 3,
                        Creative = 1,
                        Relaxing = 5,
                        Social = 2,
                        Outdoor = 2,
                        Strategic = 1,
                        Price = 2,
                        TimeCommitment = 3
                    }
                }
            };

            _mockHobbyService.Setup(service => service.GetAllHobbiesAsync()).ReturnsAsync(hobbies);

            var result = await _hobbyController.GetAllHobbiesAsync() as OkObjectResult;

            Assert.That(result, Is.Not.Null);
        }

        [Test]
        public async Task GetAllHobbies_ShouldReturnListOfHobbies_WhereAllHobbiesHaveExpectedFieldsPopulated()
        {
            var hobbies = new List<Hobby>
            {
                new Hobby
                {
                    Id = 1,
                    Name = "Running",
                    Description = "Running is a high-impact, cardiovascular exercise characterized by an aerial phase where both feet are off the ground simultaneously",
                    YoutubeVideoId = "https://www.youtube.com/watch?v=kVnyY17VS9Y",
                    HobbyImage = "https://images.pexels.com/photos/8346669/pexels-photo-8346669.jpeg",
                    HobbyCategory = new List<Category>
                    {

                        Category.Active,
                        Category.Outdoor

                    },
                    Scores = new HobbyScores
                    {
                        Active = 5,
                        Creative = 0,
                        Relaxing = 2,
                        Social = 1,
                        Outdoor = 3,
                        Strategic = 1,
                        Price = 1,
                        TimeCommitment = 3
                    }
                },

                new Hobby
                {
                    Id = 2,
                    Name = "Tai Chi",
                    Description = "Tai Chi is a mind-body practice that combines slow, flowing physical movements, deep diaphragmatic breathing, and focused meditation",
                    YoutubeVideoId = "https://www.youtube.com/watch?v=7McCi0z7FU8",
                    HobbyImage = "https://images.pexels.com/photos/8461244/pexels-photo-8461244.jpeg",
                    HobbyCategory =
                    [
                        Category.Active,
                        Category.Relaxing
                    ],
                    Scores = new HobbyScores
                    {
                        Active = 3,
                        Creative = 1,
                        Relaxing = 5,
                        Social = 2,
                        Outdoor = 2,
                        Strategic = 1,
                        Price = 2,
                        TimeCommitment = 3
                    }
                }
            };

            _mockHobbyService.Setup(service => service.GetAllHobbiesAsync()).ReturnsAsync(hobbies);

            var result = await _hobbyController.GetAllHobbiesAsync() as OkObjectResult;

            var resultValue = result.Value as List<Hobby>;

            Assert.That(resultValue[0].Name, Is.EqualTo("Running"));
            Assert.That(resultValue[1].Id, Is.EqualTo(2));
            Assert.That(resultValue[0].Description, Is.Not.Null);
            Assert.That(resultValue[1].HobbyCategory.Contains(Category.Active));
        }

        //add test for exceptions 

        [Test]
        public async Task GetHobbyByNameAsync_ShouldReturnSpecificHobby_WhenGivenStringName()
        {
            var hobby1 = new Hobby
            {
                Id = 1,
                Name = "Running",
                Description = "Running is a high-impact, cardiovascular exercise characterized by an aerial phase where both feet are off the ground simultaneously",
                YoutubeVideoId = "https://www.youtube.com/watch?v=kVnyY17VS9Y",
                HobbyImage = "https://images.pexels.com/photos/8346669/pexels-photo-8346669.jpeg",
                HobbyCategory =
                [
                    Category.Active,
                    Category.Outdoor
                ],
                Scores = new HobbyScores
                {
                    Active = 5,
                    Creative = 0,
                    Relaxing = 2,
                    Social = 1,
                    Outdoor = 3,
                    Strategic = 1,
                    Price = 1,
                    TimeCommitment = 3
                }
            };
            var hobby2 = new Hobby
            {
                Id = 2,
                Name = "Tai Chi",
                Description = "Tai Chi is a mind-body practice that combines slow, flowing physical movements, deep diaphragmatic breathing, and focused meditation",
                YoutubeVideoId = "https://www.youtube.com/watch?v=7McCi0z7FU8",
                HobbyImage = "https://images.pexels.com/photos/8461244/pexels-photo-8461244.jpeg",
                HobbyCategory =
                [
                    Category.Active,
                    Category.Relaxing
                ],
                Scores = new HobbyScores
                {
                    Active = 3,
                    Creative = 1,
                    Relaxing = 5,
                    Social = 2,
                    Outdoor = 2,
                    Strategic = 1,
                    Price = 2,
                    TimeCommitment = 3
                }
            };

            _mockHobbyService.Setup(service => service.GetHobbyByNameAsync("Running")).ReturnsAsync(hobby1);

            var result = await _hobbyController.GetHobbyByNameAsync("Running") as OkObjectResult;
            var returnedHobby = result.Value as Hobby;

            Assert.That(returnedHobby.Name, Is.EqualTo(hobby1.Name));

        }

        [Test]
        public async Task GetHobbyByNameAsync_ShouldReturnSpecificHobby_WhenGivenStringNameWithASpace()
        {
            var hobby1 = new Hobby
            {
                Id = 1,
                Name = "Running",
                Description = "Running is a high-impact, cardiovascular exercise characterized by an aerial phase where both feet are off the ground simultaneously",
                YoutubeVideoId = "https://www.youtube.com/watch?v=kVnyY17VS9Y",
                HobbyImage = "https://images.pexels.com/photos/8346669/pexels-photo-8346669.jpeg",
                HobbyCategory =
                [
                    Category.Active,
                    Category.Outdoor
                ],
                Scores = new HobbyScores
                {
                    Active = 5,
                    Creative = 0,
                    Relaxing = 2,
                    Social = 1,
                    Outdoor = 3,
                    Strategic = 1,
                    Price = 1,
                    TimeCommitment = 3
                }
            };
            var hobby2 = new Hobby
            {
                Id = 2,
                Name = "Tai Chi",
                Description = "Tai Chi is a mind-body practice that combines slow, flowing physical movements, deep diaphragmatic breathing, and focused meditation",
                YoutubeVideoId = "https://www.youtube.com/watch?v=7McCi0z7FU8",
                HobbyImage = "https://images.pexels.com/photos/8461244/pexels-photo-8461244.jpeg",
                HobbyCategory =
                [
                    Category.Active,
                    Category.Relaxing
                ],
                Scores = new HobbyScores
                {
                    Active = 3,
                    Creative = 1,
                    Relaxing = 5,
                    Social = 2,
                    Outdoor = 2,
                    Strategic = 1,
                    Price = 2,
                    TimeCommitment = 3
                }
            };

            _mockHobbyService.Setup(service => service.GetHobbyByNameAsync("Tai Chi")).ReturnsAsync(hobby2);

            var result2 = await _hobbyController.GetHobbyByNameAsync("Tai Chi") as OkObjectResult;
            var returnedHobby2 = result2.Value as Hobby;

            
            Assert.That(returnedHobby2.Name, Is.EqualTo(hobby2.Name));

        }

        [Test]
        public async Task GetHobbyByNameAsync_ShouldReturnNotFound_WhenGivenNameNotInData()
        {
                // Arrange
                _mockHobbyService.Setup(service => service.GetHobbyByNameAsync("Trampolining")).ReturnsAsync((Hobby)null);
                // Act
                var result = await _hobbyController.GetHobbyByNameAsync("Trampolining");
                // Assert
               Assert.That(result, Is.TypeOf<NotFoundObjectResult>());
        }

        [Test]
        public async Task GetHobbyByNameAsync_ShouldReturnResultOK_WhenGivenCorrectName()
        {
            var hobby1 = new Hobby
            {
                Id = 1,
                Name = "Running",
                Description = "Running is a high-impact, cardiovascular exercise characterized by an aerial phase where both feet are off the ground simultaneously",
                YoutubeVideoId = "https://www.youtube.com/watch?v=kVnyY17VS9Y",
                HobbyImage = "https://images.pexels.com/photos/8346669/pexels-photo-8346669.jpeg",
                HobbyCategory =
                [
                    Category.Active,
                    Category.Outdoor
                ],
                Scores = new HobbyScores
                {
                    Active = 5,
                    Creative = 0,
                    Relaxing = 2,
                    Social = 1,
                    Outdoor = 3,
                    Strategic = 1,
                    Price = 1,
                    TimeCommitment = 3
                }
            };
            _mockHobbyService.Setup(service => service.GetHobbyByNameAsync("Running")).ReturnsAsync(hobby1);

            var result = await _hobbyController.GetHobbyByNameAsync("Running") as OkObjectResult;

            Assert.That(result.StatusCode, Is.EqualTo(200));
            _mockHobbyService.Verify(service => service.GetHobbyByNameAsync("Running"), Times.Once);
        }
    }
}
