using PatientAdministrationSystem.Application.Dtos;
using PatientAdministrationSystem.Application.Entities;

namespace PatientAdministrationSystem.Application.Interfaces;

public interface IPatientsService
{
    // Define your service interface here for use in your API and service

    public Task<IEnumerable<PatientEntity>> GetAll();
    public Task<IEnumerable<PatientEntity>> GetAllPatientsAsync();
    public Task<IEnumerable<PatientDto>> GetAllPatientVisitsAsync(string search);

}