
namespace Hobby_hub.Middlewares
{
    public class ExceptionHandlerMiddleware : IMiddleware
    {
        public async Task InvokeAsync(HttpContext context, RequestDelegate next)
        {
            try
            {
                await next(context);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Exception caught in middleware: {ex.Message}");
                await HandleException(context);
            }
        }
        private async Task HandleException(HttpContext context)
        {
            context.Response.StatusCode = StatusCodes.Status500InternalServerError;
            await context.Response.WriteAsJsonAsync(new { message = "Server is down. Sorry!" });
        }
    
    }
}
