using API.Data;
using API.Helpers;
using API.Interfaces;
using API.Services;
using Microsoft.EntityFrameworkCore;

namespace API.Extensions;

public static class ApplicationServiceExtension
{
  public static IServiceCollection AddApplicationServices(this IServiceCollection services, IConfiguration configuration)
  {
    services.AddControllers();
    services.AddDbContext<DataContext>(opt =>
    {
      opt.UseSqlite(configuration.GetConnectionString("DefaultConnection"));
    });
    services.AddCors();
    services.AddScoped<ITokenService, TokenService>();
    services.AddScoped<IUserRepository, UserRepository>();
    services.AddScoped<ILikesRepository, LikesRepository>();
    services.AddScoped<IMessageRepository, MessageRepository>();
    services.AddScoped<LogUserActivity>();
    services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

    return services;
  }
}
