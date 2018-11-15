namespace PlasticCat.Api.Domain
{
    using System;

    public class Order
    {
        public Guid Id { get; set; }
        public string Subject { get; set; }
        public string Description { get; set; }
        public Guid ClientId { get; set; }
    }
}