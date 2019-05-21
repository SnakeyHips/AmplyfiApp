namespace AmplyfiApp.Contracts.Models
{
    public interface ICountry
    {
        string Name { get; }
        string Capital { get; }
        double[] Coordinates { get; }
    }
}
