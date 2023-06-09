using System.ComponentModel.DataAnnotations;

namespace backend.Models.Requests;

public class ChangePasswordRequest
{
    [Required]
    public string Password { get; set; }
    [Required]
    public string NewPassword { get; set; }
}