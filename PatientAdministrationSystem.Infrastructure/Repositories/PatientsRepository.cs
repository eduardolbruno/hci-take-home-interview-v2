using System;
using System.Linq.Expressions;
using Microsoft.EntityFrameworkCore;
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

    public async Task<IEnumerable<PatientEntity>> GetByName(string name)
    {
        var lowercaseName = name.ToLower();
        var patients = await _context.Patients.Where(x => x.FirstName.ToLower().Contains(lowercaseName) || x.LastName.ToLower().Contains(lowercaseName)).ToListAsync();
        //var res = await _context.FindAsync<IEnumerable<PatientEntity>>(name);

        if (patients == null || !patients.Any())
        {
            Console.WriteLine($"No patient found with name: {name}");
            return Enumerable.Empty<PatientEntity>();
        }
        else
        {
            foreach (var patient in patients)
            {
                Console.WriteLine($"Patient: {patient.FirstName} {patient.LastName}");
            }
            return patients;
        }

    }
}