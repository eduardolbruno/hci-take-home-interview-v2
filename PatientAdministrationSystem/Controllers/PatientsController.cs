using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PatientAdministrationSystem.Application.Entities;
using PatientAdministrationSystem.Application.Interfaces;
using System.Xml.Linq;

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

    // GET: api/patients/search/{name}
    [HttpGet("search/{search}")]
    public async Task<IActionResult> GetAllPatientVisits(string search)
    {
        var patients = await _patientsService.GetAllPatientVisitsAsync(search);
        if (patients == null)
        {
            return NotFound(new { Message = $"No patients found with name containing: {search}" });
        }
        return Ok(patients);
    }

}