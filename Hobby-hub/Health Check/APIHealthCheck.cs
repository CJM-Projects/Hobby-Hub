using Hobby_hub.Data_Models;
using Microsoft.Extensions.Diagnostics.HealthChecks;
using System.Text.Json;

namespace Hobby_hub.Health_Check
{
    public class APIHealthCheck : IHealthCheck
    {
        public async Task<HealthCheckResult> CheckHealthAsync(HealthCheckContext context, CancellationToken cancellationToken = default)
        {
            var jsonFilePath = @"Data\hobby-data.json";

            var jsonData = await File.ReadAllTextAsync(jsonFilePath);

            var hobbyData = JsonSerializer.Deserialize<List<Hobby>>(jsonData);

            int hobbies = hobbyData.Count();

            if (hobbies > 0)
            {
                return HealthCheckResult.Healthy($"There are {hobbies} hobbies available");
            }
            else
            {
                return HealthCheckResult.Unhealthy($"There are {hobbies} hobbies available");
            }
        }
    }
}
