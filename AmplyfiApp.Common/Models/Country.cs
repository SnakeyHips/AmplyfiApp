namespace AmplyfiApp.Contracts.Models
{
    public class Country : ICountry
    {
        public string Name { get; set; }
        public string Capital { get; set; }
        public double[] Coordinates { get; set; }
    }
}
