using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models.Entities;

public class BookedDate
{
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public long ID { get; set; }
    public DateTime Date { get; set; }
    public long UserId { get; set; }
    public DateTime BookedTime { get; set; }
}