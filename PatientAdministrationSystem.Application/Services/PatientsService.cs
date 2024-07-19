using PatientAdministrationSystem.Application.Dtos;
using PatientAdministrationSystem.Application.Entities;
using PatientAdministrationSystem.Application.Interfaces;
using PatientAdministrationSystem.Application.Repositories.Interfaces;
using System.Linq.Expressions;
using System.Xml.Linq;

namespace PatientAdministrationSystem.Application.Services;

public class PatientsService : IPatientsService
{
    private readonly IPatientsRepository _repository;

    public PatientsService(IPatientsRepository repository)
    {
        _repository = repository;
    }

    // Define your patient search logic here based on the interface method definition

    public Task<IEnumerable<PatientEntity>> GetAll()
    {
        return _repository.GetAll();
    }

    public Task<IEnumerable<PatientEntity>> GetAllPatientsAsync()
    {
        return _repository.GetAllPatientsAsync();
    }

    public async Task<IEnumerable<PatientDto>> GetAllPatientVisitsAsync(string search)
    {
        var patientRelations = await _repository.GetAllPatientVisitsAsync(search);

        var patientDtos = patientRelations.Select(ph => new PatientDto
        {
            Id = ph.Patient.Id,
            FirstName = ph.Patient.FirstName,
            LastName = ph.Patient.LastName,
            Email = ph.Patient.Email,
            PatientHospitals = new List<PatientHospitalDto>
            {
                new PatientHospitalDto
                {
                    PatientId = ph.PatientId,
                    HospitalId = ph.HospitalId,
                    VisitId = ph.VisitId,
                    Hospital = new HospitalDto
                    {
                        Id = ph.Hospital.Id,
                        Name = ph.Hospital.Name
                    },
                    Visit = new VisitDto
                    {
                        Id = ph.Visit.Id,
                        Date = ph.Visit.Date
                    }
                }
            }
        });

        return patientDtos;
    }

}