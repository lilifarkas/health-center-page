using backend.Models.Entities;
using backend.Models.Requests;
using backend.Services;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers;

[ApiController, Route("/dates")]
public class DateController: ControllerBase
{
    private readonly IDateService _service;
   
    public DateController(IDateService service)
    {
        _service = service;
    }
    
    [HttpGet("{userID}/allDates")]
    public async Task<IEnumerable<BookedDate>> GetUserDates(long userID)
    {
        return await _service.GetUserDates(userID);

    }
    
    [HttpGet]
    public async Task<IEnumerable<BookedDate>> GetAllDates()
    {
        return await _service.GetAll();
    }

    [HttpPost("registerDate")]
    public async Task<IActionResult> Register([FromBody] RegisterDateRequest registerDateRequest)
    {
        var registrationDate = new BookedDate()
        {
            UserId = registerDateRequest.UserId,
            Date = DateTime.Parse(registerDateRequest.Date),
            BookedTime = DateTime.Parse(registerDateRequest.BookedTime),
        };
        Console.WriteLine(registrationDate.BookedTime);
        var response = await _service.Add(registrationDate);
        return Ok(response);
    }
    
    [HttpDelete("/dates/delete/{id}")]
    public async Task DeleteBookedDate(long id)
    {
        await _service.Delete(id);
    }
}