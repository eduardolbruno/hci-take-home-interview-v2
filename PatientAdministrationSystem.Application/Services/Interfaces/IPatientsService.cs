using PatientAdministrationSystem.Application.Entities;

namespace PatientAdministrationSystem.Application.Interfaces;

public interface IPatientsService
{
    // Define your service interface here for use in your API and service

    public Task<IEnumerable<PatientEntity>> GetAll();
    public Task<IEnumerable<PatientEntity>> GetByName(string name);
}