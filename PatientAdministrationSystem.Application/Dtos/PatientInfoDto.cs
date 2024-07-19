using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PatientAdministrationSystem.Application.Dtos
{
    public class PatientDto
    {
        public Guid Id { get; set; }
        public string FirstName { get; set; } = null!;
        public string LastName { get; set; } = null!;
        public string Email { get; set; } = null!;
        public IEnumerable<PatientHospitalDto> PatientHospitals { get; set; } = null!;
    }

    public class PatientHospitalDto
    {
        public Guid PatientId { get; set; }
        public Guid HospitalId { get; set; }
        public Guid VisitId { get; set; }
        public HospitalDto Hospital { get; set; } = null!;
        public VisitDto Visit { get; set; } = null!;
    }

    public class HospitalDto
    {
        public Guid Id { get; set; }
        public string Name { get; set; } = null!;
    }

    public class VisitDto
    {
        public Guid Id { get; set; }
        public DateTime Date { get; set; }
    }
}
