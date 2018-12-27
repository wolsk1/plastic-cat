namespace PlasticCat.Api.Domain
{
    public class Client
    {
        public int Id { get; set; }
        public string UserId { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string RegistrationNumber { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
    }
}