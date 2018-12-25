namespace PlasticCat.Api.Domain
{
    using System;

    public class Client
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string RegistrationNumber { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
    }
}