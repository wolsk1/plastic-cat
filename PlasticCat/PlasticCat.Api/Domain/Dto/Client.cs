namespace PlasticCat.Api.Domain
{
    using System;

    public class Client
    {
        public Guid Id { get; set; }
        public Guid LegalPropertiesId { get; set; }
        public Guid PhysicalPropertiesId { get; set; }
    }
}