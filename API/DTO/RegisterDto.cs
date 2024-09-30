using System.ComponentModel.DataAnnotations;

namespace API.DTO;

public class RegisterDto
{
  [Required]
  public required string Username { get; init; }

  [Required]
  public required string Password { get; init; }
}
