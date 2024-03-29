using System.ComponentModel.DataAnnotations;
using backend.Models.Entities;

namespace backend.Models.Requests;

public class RegisterDateRequest
{
    [Required]
    public long UserId { get; set; }
    [Required]
    public string Date { get; set; }
    [Required]
    public string BookedTime { get; set; }
}