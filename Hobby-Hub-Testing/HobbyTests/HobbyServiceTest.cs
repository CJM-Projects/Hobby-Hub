using Hobby_hub.Data_Models;
using Hobby_hub.Data_Models.Enum;
using Hobby_hub.Repositories;
using Hobby_hub.Services;
using Moq;

namespace Hobby_Hub_Testing.HobbyTests;

public class HobbyServiceTest
{
    private Mock<IHobbyRepository> _mockHobbyRepo;
    private HobbyService _hobbyService;

    [SetUp]
    public void Setup()
    {
        _mockHobbyRepo = new Mock<IHobbyRepository>();
        _hobbyService = new HobbyService(_mockHobbyRepo.Object);
    }

    [Test]
    public async Task GetAllHobbiesAsync_ShouldReturnAllHobbies()
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
        _mockHobbyRepo.Setup(repo => repo.GetAllHobbiesAsync()).ReturnsAsync(hobbies);

        var result = await _hobbyService.GetAllHobbiesAsync();

        Assert.That(result, Is.EqualTo(hobbies));
    }

    [Test]
    public async Task GetAllHobbiesAsync_ShouldReturnEmptyList_WhenNoHobbyExists()
    {
        _mockHobbyRepo.Setup(repo => repo.GetAllHobbiesAsync()).ReturnsAsync([]);

        var result = await _hobbyService.GetAllHobbiesAsync();

        Assert.That(result, Is.Empty);
    }

    [Test]

    public async Task GetHobbyByNameAsync_ShouldReturnHobby()
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
        _mockHobbyRepo.Setup(repo => repo.GetHobbyByNameAsync("Running")).ReturnsAsync(hobby1);

        var result = await _hobbyService.GetHobbyByNameAsync("Running");

        Assert.That(result, Is.EqualTo(hobby1));
    }

    [Test]
    public async Task GetHobbyByNameAsync_ShouldReturnNull_WhenDoesntExist()
    {
        _mockHobbyRepo.Setup(repo => repo.GetHobbyByNameAsync("Trampolining")).ReturnsAsync((Hobby)null);

        var result = await _hobbyService.GetAllHobbiesAsync();

        Assert.That(result, Is.Null);
    }

    [Test]
    public async Task GetHobbyByNameAsync_ShouldReturnHobby_WhenLowercaseIsUsed()
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
        _mockHobbyRepo.Setup(repo => repo.GetHobbyByNameAsync("running")).ReturnsAsync(hobby1);

        var result = await _hobbyService.GetHobbyByNameAsync("running");

        Assert.That(result, Is.EqualTo(hobby1));
    }

    [Test]
    public async Task GetTrendingHobbiesAsync_ShouldReturnTrendingHobbies()
    {
        var trendingHobbies = new List<Hobby>
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
                },
               new Hobby
                {
                    Id = 3,
                    Name = "Barre",
                    Description = "Barre is a popular, low-impact workout that blends balletic movements with Pilates, yoga, and strength training",
                    YoutubeVideoId = "https://www.youtube.com/watch?v=wHIaaQ-RzXI",
                    HobbyImage = "https://images.pexels.com/photos/5153950/pexels-photo-5153950.jpeg",
                    HobbyCategory =
                    [
                        Category.Active,
                        Category.Creative
                    ],
                    Scores = new HobbyScores
                    {
                        Active = 5,
                        Creative = 2,
                        Relaxing = 2,
                        Social = 3,
                        Outdoor = 0,
                        Strategic = 1,
                        Price = 4,
                        TimeCommitment = 3
                    }
                }
        };
        _mockHobbyRepo.Setup(repo => repo.GetTrendingHobbiesAsync()).ReturnsAsync(trendingHobbies);
        var result = await _hobbyService.GetTrendingHobbiesAsync();
        Assert.That(result, Is.EqualTo(trendingHobbies));
    }

    [Test]
    public async Task GetTrendingHobbiesAsync_ShouldReturnEmptyList_WhenNoTrendingHobbiesExist()
    {
        _mockHobbyRepo.Setup(repo => repo.GetTrendingHobbiesAsync()).ReturnsAsync(new List<Hobby>());
        var result = await _hobbyService.GetTrendingHobbiesAsync();
        Assert.That(result, Is.Empty);
    }

}
