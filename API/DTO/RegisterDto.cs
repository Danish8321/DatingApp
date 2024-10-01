using System.ComponentModel.DataAnnotations;

namespace API.DTO;

public class RegisterDto
{
  [Required]
  public string Username { get; init; } = string.Empty;

  [Required]
  public string Password { get; init; } = string.Empty;
}
