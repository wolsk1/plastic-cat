using System;

namespace PlasticCat.Api.Domain
{
    public class Employee
    {
        public Guid EmployeeId { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
    }
}