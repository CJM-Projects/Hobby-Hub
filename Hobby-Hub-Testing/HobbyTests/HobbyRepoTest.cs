using Hobby_hub.Data_Models;
using Hobby_hub.Data_Models.Enum;
using Hobby_hub.Repositories;

namespace Hobby_Hub_Testing;

public class HobbyRepoTest
{
    private IHobbyRepository _hobbyRepo;


    [SetUp]
    public void Setup()
    {
        _hobbyRepo = new HobbyRepository();
    }

    [Test]
    public async Task GetAllHobbiesAsyn_ReturnsListOfHobbies()
    {
        var result = await _hobbyRepo.GetAllHobbiesAsync();
        Assert.That(result, Is.Not.Null);
        Assert.That(result, Is.InstanceOf<List<Hobby>>());
        Assert.That(result, Is.Not.Empty);
    }

    [Test]
    public async Task GetAllHobbiesAsync_ShouldReturnCorrectNumberOfHobbies()
    {
        var result = await _hobbyRepo.GetAllHobbiesAsync();
        Assert.That(result.Count, Is.EqualTo(37));
    }
    [Test]
    public async Task GetHobbyByNameAsync_ShouldReturnCorrectHobby()
    {
        var hobbyName = "Running";

        var result = await _hobbyRepo.GetHobbyByNameAsync(hobbyName);
        Console.WriteLine(result.Name);
        Console.WriteLine(result.Scores.Active);
        Console.WriteLine(result.Description);
        Console.WriteLine(result.HobbyCategory);
        
        Assert.That(result, Is.Not.Null);

        Assert.Multiple(() =>
        {
            Assert.That(result!.Name, Is.EqualTo("Running"));
            Assert.That(result.Description, Does.Contain("cardiovascular"));
            Assert.That(result.Scores.Active, Is.EqualTo(5));
            Assert.That(result.HobbyCategory, Does.Contain(Category.Active));
            Assert.That(result.HobbyCategory, Does.Contain(Category.Outdoor));
        });
    }
    [Test]
    public async Task GetHobbyByNameAsync_ShouldReturnNull_WhenHobbyDoesNotExist()
    {
        var hobbyName = "Sky Diving";

        var result = await _hobbyRepo.GetHobbyByNameAsync(hobbyName);

        Assert.That(result, Is.Null);
    }
}
