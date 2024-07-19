using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PatientAdministrationSystem.Application.Entities;
using PatientAdministrationSystem.Application.Interfaces;

namespace Hci.Ah.Home.Api.Gateway.Controllers.Patients;

[Route("api/patients")]
[ApiExplorerSettings(GroupName = "Patients")]
[ApiController]
public class PatientsController : ControllerBase
{
    private readonly IPatientsService _patientsService;

    public PatientsController(IPatientsService patientsService)
    {
        _patientsService = patientsService;
    }

    // Define your API contracts here

    // GET: api/patients
    [HttpGet]
    public async Task<IEnumerable<PatientEntity>> GetPatients()
    {
        return await _patientsService.GetAll();
    }

    [HttpGet("search/{name}")]
    public async Task<IActionResult> GetPatient(string name)
    {
        var patients = await _patientsService.GetByName(name);
        if (patients == null || !patients.Any())
        {
            return NotFound(new { Message = $"No patients found with name containing: {name}" });
        }
        return Ok(patients);
    }

}