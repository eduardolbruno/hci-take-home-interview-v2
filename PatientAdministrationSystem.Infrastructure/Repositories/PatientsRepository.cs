using System;
using System.Linq;
using System.Linq.Expressions;
using System.Xml.Linq;
using Microsoft.EntityFrameworkCore;
using PatientAdministrationSystem.Application.Dtos;
using PatientAdministrationSystem.Application.Entities;
using PatientAdministrationSystem.Application.Repositories.Interfaces;
using static System.Net.Mime.MediaTypeNames;

namespace PatientAdministrationSystem.Infrastructure.Repositories;

public class PatientsRepository : IPatientsRepository
{
    private readonly HciDataContext _context;

    public PatientsRepository(HciDataContext context)
    {
        _context = context;
    }

    // Add logic here for your querying the data context

    public async Task<IEnumerable<PatientEntity>> GetAll()
    {
        return await _context.Patients.ToListAsync();
    }

    public async Task<IEnumerable<PatientEntity>> GetAllPatientsAsync()
    {
        return await _context.Patients.Include(p => p.PatientHospitals).ToListAsync();
    }

    public async Task<IEnumerable<PatientHospitalRelation>> GetAllPatientVisitsAsync(string search)
    {
        var lowerCaseSearch = search.ToLower();

        var query = _context.PatientHospitalRelations
            .Include(ph => ph.Patient)
            .Include(ph => ph.Hospital)
            .Include(ph => ph.Visit)
              .Where(ph => ph.Patient.FirstName.ToLower().Contains(lowerCaseSearch) ||
                         ph.Patient.LastName.ToLower().Contains(lowerCaseSearch));

        var res = await query.ToListAsync();

        if (res == null || !res.Any())
        {
            Console.WriteLine($"No patient found with name: {search}");
            return Enumerable.Empty<PatientHospitalRelation>();
        }
        else
        {
            foreach (var patient in res)
            {
                Console.WriteLine($"Patient: {patient.Patient.FirstName} {patient.Patient.LastName}");
            }
            return res;
        }


    }

}