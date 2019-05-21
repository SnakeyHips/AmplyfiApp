using System.Collections.Generic;

namespace AmplyfiApp.Contracts.Models
{
    public interface ISampleDataClass
    {
        int ID { get; }
        string Title { get; }
        int Year { get; }
        string Summary { get; }
        string Body { get; }
        string Geo1 { get; }
        string SourceType { get; }
        string SrcUrl { get; }
        List<ICountry> Countries { get; }
        List<string> People { get; }
        List<string> Companies { get; }
        List<string> BiGrams { get; }
        List<string> TriGrams { get; }
        List<string> SocialTags { get; }
        List<string> Topics { get; }
        List<string> Industry { get; }
        List<string> Technology { get; }
        List<int> BiCnt { get; }
        List<int> TriCnt { get; }
        int BodyWordCnt { get; }
    }
}
