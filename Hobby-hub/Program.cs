using Hobby_hub.Health_Check;
using Hobby_hub.Repositories;
using Hobby_hub.Services;
using Microsoft.AspNetCore.Diagnostics.HealthChecks;
using Microsoft.Extensions.Diagnostics.HealthChecks;
using System.Text.Json;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddScoped<IHobbyRepository, HobbyRepository>();  
builder.Services.AddScoped<IQuizService, QuizService>();
builder.Services.AddScoped<IHobbyService, HobbyService>();

builder.Services.AddControllers();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();
builder.Services.AddHealthChecks()
    .AddCheck<APIHealthCheck>("API Health Check",
    failureStatus: HealthStatus.Unhealthy);


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.UseHealthChecks("/health", new HealthCheckOptions
{
    ResponseWriter = async (context, report) =>
    {
        context.Response.ContentType = "application/json";

        var result = new
        {
            status = report.Status.ToString(),
            checks = report.Entries.Select(e => new
            {
                name = e.Key,
                status = e.Value.Status.ToString(),
                description = e.Value.Description,
            })
        };

        await context.Response.WriteAsync(JsonSerializer.Serialize(result));
    }
});

app.Run();
